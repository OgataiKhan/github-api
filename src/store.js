import { reactive } from 'vue';

export const store = reactive ({
  query: '',
  queryType: 'repositories',
  results: [],
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
  timeout: null,
  displayNoResults: false,
});