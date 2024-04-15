<script>
import AppMainResultsCard from "./AppMainResultsCard.vue";
import { store } from "../store";

export default {
  name: "AppMainResults",
  components: {
    AppMainResultsCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="text-center">
    <h3 class="pb-3">Results</h3>
    <div v-if="store.isLoading" class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <p v-if="store.results.length === 0 && store.displayNoResults">
      No results found. Try adjusting your query.
    </p>
    <ul class="row gy-4 card-list card-deck">
      <AppMainResultsCard
        v-for="result in store.results"
        :full_name="result.full_name"
        :login="result.login"
        :type="result.type"
        :avatar_url="result.avatar_url"
        :owner_avatar_url="result.owner?.avatar_url ?? ''"
        :owner_login="result.owner?.login ?? ''"
        :description="result.description"
        :url="result.html_url"
      />
    </ul>
  </div>
</template>

<style scoped>
.card-list {
  list-style: none;
}
</style>
