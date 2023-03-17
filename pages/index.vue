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

<script setup>
import { getRepoContent } from "@/utils/github";
import { useStore } from '@/store/index'

const store = useStore()

const selectList = async (list) => {
  store.setSelectedList(list);
  store.setReadmeContent(await getRepoContent(list.owner, list.name, "README.md"));
};

const lists = store.state.lists
const selectedList = store.state.selectedList
const readmeContent = store.state.readmeContent

</script>
