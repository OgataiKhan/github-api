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
      <ul>
        <AppMainResultsCard v-for="result in store.results" :name="result.name" :login="result.login" />
      </ul>
    </div>
</template>

<style scoped></style>