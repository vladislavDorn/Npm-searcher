<template>
  <div class="pakackagesList__wrapper">
    <v-col cols="12">
      <v-row align="center">
        <PackageItem
          v-for="(pack, index) in packagesData"
          :key="index"
          :index="index"
          :name="pack.package.name"
          :description="pack.package.description"
          :setModalData="setModalData"
        />
      </v-row>
    </v-col>
  </div>
</template>

<script>
import PackageItem from "./PackageItem";

export default {
  name: "PackagesList",
  components: {
    PackageItem
  },
  props: {
    packagesData: Array,
    setModalData: Function
  }
};
</script>

<style lang="scss" scoped>
</style>
