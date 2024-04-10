import { reactive } from 'vue';

export const store = reactive ({
  query: '',
  queryType: '',
  repositories: [],
  users: [],
  apiGitHub: {
    defaultURL: 'https://api.github.com/',
    search: 'search/',
    repositories: 'repositories',
    apiKey: '',
  },
  isLoading: false,
});