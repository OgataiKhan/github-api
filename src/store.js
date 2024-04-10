import { reactive } from 'vue';

export const store = reactive ({
  query: '',
  queryType: 'repositories',
  results: [],
  repositories: [],
  users: [],
  displayRepositories: false,
  displayUsers: false,
  apiGitHub: {
    defaultURL: 'https://api.github.com/',
    search: 'search/',
    repositories: 'repositories',
    users: 'users',
    apiKey: '',
  },
  isLoading: false,
});