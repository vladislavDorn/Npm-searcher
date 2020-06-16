<template>
  <v-app class="container">
    <v-content>
      <Searcher />
      <Spinner v-if="!getState.isLoad" />
      <PackagesList v-else :packagesData="getState.packagesData" />
      <Modal />
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

import Searcher from "./components/Searcher";
import Spinner from "./components/Spinner";
import PackagesList from "./components/PackagesList";
import Modal from "./components/Modal";

export default {
  name: "App",

  components: {
    Searcher,
    Spinner,
    PackagesList,
    Modal
  },
  computed: mapGetters(["getState"]),
  mounted() {
    console.log(this.getState.packagesData);
  }
};
</script>

<style lang="scss">
.container {
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
}

@media (max-width: 1170px) {
  .container {
    padding: 0 10px;
  }
}
</style>
