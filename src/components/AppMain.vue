<script>
import axios from "axios";
import AppMainSearch from "./AppMainSearch.vue";
import AppMainResults from "./AppMainResults.vue";
import { config } from "../config";
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
      config,
    };
  },
  methods: {
    repoSearch() {
      if (store.query.length >= 3) {
        store.isLoading = true;
        let apiUrl = store.apiGitHub.defaultURL + store.apiGitHub.search;
        if (store.queryType === "repositories") {
          apiUrl += store.apiGitHub.repositories;
        } else if (store.queryType === "users") {
          apiUrl += store.apiGitHub.users;
        }
        axios
          .get(apiUrl, {
            params: {
              q: store.query,
            },
            headers: {
              Authorization: `Bearer ${config.token}`,
              "X-GitHub-Api-Version": "2022-11-28",
            },
          })
          .then((response) => {
            store.results = response.data.items;
          })
          .finally(() => {
            store.isLoading = false;
          });
      }
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
