import { defineStore } from '@pinia/nuxt';
import { createPinia } from 'pinia';

export const pinia = createPinia();

export const useStore = defineStore('store', {
  pinia,

  state: () => ({
    lists: [
      { name: 'awesome-artificial-intelligence', owner: 'owainlewis' },
      { name: 'awesome-icons', owner: 'notlmn' },
      { name: 'awesome-free-resources', owner: 'michaelsynan' },
    ],
    selectedList: null,
    readmeContent: '',
  }),

  actions: {
    async fetchLists() {
      // no need to fetch anything since the lists are defined statically in the store
    },
  },

  mutations: {
    setSelectedList(list) {
      this.selectedList = list;
    },

    setReadmeContent(content) {
      this.readmeContent = content;
    },
  },
});
