<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <Searcher
          :value="getState.searchValue"
          :handler="handleSearchValue"
          :searchFunc="getPackages"
        />
        <Spinner v-if="!getState.isLoad" />
        <PackagesList v-else :packagesData="getState.packagesData" :setModalData="setModalData" />
        <Modal :modal="getModal" :closeModal="closeModal" />
        <Paginator
          v-if="getState.packagesData && getState.isLoad"
          :total="getState.total"
          :offset="getState.offset"
          :getPackages="getPackages"
          :searchValue="getState.paginationValue"
        />
        <Footer />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Searcher from "./components/Searcher";
import Spinner from "./components/Spinner";
import PackagesList from "./components/PackagesList";
import Modal from "./components/Modal";
import Paginator from "./components/Paginator";
import Footer from "./components/Footer";

export default {
  name: "App",
  computed: mapGetters(["getState", "getModal"]),
  methods: mapActions([
    "handleSearchValue",
    "getPackages",
    "setModalData",
    "closeModal"
  ]),
  components: {
    Searcher,
    Spinner,
    PackagesList,
    Modal,
    Paginator,
    Footer
  }
};
</script>

<style lang="scss">
.container {
  max-width: 1170px;
}
</style>