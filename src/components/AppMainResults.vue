<script>
import AppMainResultsCard from "./AppMainResultsCard.vue";
import { store } from "../store";

export default {
  name: 'AppMainResults',
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
      Results
      <ul class="row gy-4 card-list">
        <AppMainResultsCard v-for="result in store.results" :full_name="result.full_name" :login="result.login" :type="result.type" :avatar_url="result.avatar_url" :owner_avatar_url="result.owner?.avatar_url ?? ''" :owner_login="result.owner?.login ?? ''" />
      </ul>
    </div>
</template>

<style scoped>

.card-list {
  list-style: none;
}


</style>