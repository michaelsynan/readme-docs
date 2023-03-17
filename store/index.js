import { defineStore } from 'pinia';

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
});
