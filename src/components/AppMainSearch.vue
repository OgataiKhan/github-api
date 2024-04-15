<script>
import { store } from "../store";

export default {
  name: "AppMainSearch",
  emits: ["searchClick", "searchInput"],
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="d-flex justify-content-center">
    <form class="row g-3">
      <div class="col-auto">
        <label for="search-input" class="visually-hidden">Search input</label>
        <input
          v-model="store.query" @input="$emit('searchInput')"
          type="text"
          minlength="3"
          class="form-control searchbar"
          id="search-input"
          placeholder="What are you looking for?"
        />
      </div>
      <div class="col-auto">
        <select
          v-model="store.queryType"
          class="form-select"
          aria-label="Query type"
        >
          <option value="repositories" selected>Repositories</option>
          <option value="users">Users/Organizations</option>
        </select>
      </div>
      <div class="col-auto">
        <button
          @click.prevent="$emit('searchClick')"
          type="submit"
          class="btn btn-primary mb-3"
        >
          Search
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.searchbar {
  min-width: 300px;
}
</style>
