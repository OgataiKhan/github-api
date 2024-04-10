<script>
import { store } from "../store";

export default {
  name: 'AppMainResultsCard',
  props: ['name', 'login'],
  data() {
    return {
      store,
    };
  },
};

</script>

<template>
    <li>
      <!-- <p v-if="store.queryType === 'repositories'">{{ name }}</p> -->
      <p v-if="name">{{ name }}</p>
      <p v-if="login">{{ login }}</p>
      <!-- <p v-if="store.queryType === 'users'">{{ login }}</p> -->
    </li>
</template>

<style scoped></style>