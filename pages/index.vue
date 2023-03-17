<template>
  <div>
    <h1>Awesome Lists</h1>
    <ul>
      <li v-for="list in lists" :key="list.name">
        <a @click="selectList(list)">{{ list.name }}</a>
      </li>
    </ul>
    <div v-if="selectedList">
      <h2>{{ selectedList.name }}</h2>
      <div v-html="readmeContent"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { getRepoContent } from "@/utils/github";
import { useStore } from '~/store/index.js'

export default defineComponent({
  setup() {
    const selectList = async (list) => {
      store.setSelectedList(list);
      store.setReadmeContent(await getRepoContent(list.owner, list.name, "README.md"));
    };

    return {
      lists: store.state.lists,
      selectedList: store.state.selectedList,
      readmeContent: store.state.readmeContent,
      selectList,
    };
  },
});

</script>
