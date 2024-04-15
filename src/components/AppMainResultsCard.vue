<script>
import { store } from "../store";

export default {
  name: "AppMainResultsCard",
  props: ["full_name", "login", "type", "avatar_url", "owner_avatar_url", "owner_login"],
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <li class="col">
    <div class="card" style="width: 18rem">
      <div
        :class="{
          'repo-bg': full_name,
          'user-bg': type === 'User',
          'org-bg': type === 'Organization',
        }"
        class="result-img-box py-4 d-flex justify-content-center"
      >
        <div class="result-img">
          <img v-if="full_name" :src="owner_avatar_url" alt="repo" />
          <img v-if="login" :src="avatar_url" alt="user/org" />
        </div>
      </div>
      <div class="card-body">
        <h5 v-if="full_name" class="card-title">{{ full_name }}</h5>
        <h5 v-if="login" class="card-title">{{ login }}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </li>
</template>

<style scoped>
.result-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #fff;
}

.result-img img {
  width: 100%;
}

.result-img-box.repo-bg {
  background: rgb(32, 38, 57);
  background: linear-gradient(
    60deg,
    rgba(32, 38, 57, 1) 0%,
    rgba(63, 76, 119, 1) 100%
  );
}

.result-img-box.user-bg {
  background: rgb(40, 136, 91);
  background: linear-gradient(
    60deg,
    rgba(40, 136, 91, 1) 0%,
    rgba(37, 209, 148, 1) 100%
  );
}

.result-img-box.org-bg {
  background: rgb(215, 145, 186);
  background: linear-gradient(
    60deg,
    rgba(215, 145, 186, 1) 0%,
    rgba(236, 163, 30, 1) 100%
  );
}

.card {
  background-color: #efefef;
  overflow: hidden;
}
</style>
