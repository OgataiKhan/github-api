<script>
import axios from 'axios';
import AppMainSearch from "./AppMainSearch.vue";
import AppMainResults from "./AppMainResults.vue";
import { store } from "../store";

export default {
  name: "AppMain",
  components: {
    AppMainSearch,
    AppMainResults,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    repoSearch() {
      store.isLoading = true;
      axios
        .get(
          store.apiGitHub.defaultURL +
            store.apiGitHub.search +
            store.apiGitHub.repositories,
          {
            params: {
              q: store.query,
            },
          }
        )
        .then((response) => {
          store.repositories = response.data.items;
        })
        .finally(() => {
          store.isLoading = false;
        });
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <AppMainSearch @searchClick="repoSearch" />
      <AppMainResults />
    </div>
  </main>
</template>

<style scoped></style>
