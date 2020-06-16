<template>
  <v-col cols="12">
    <v-row align="center">
      <PackageItem
        v-for="(pack, index) in packagesData"
        :key="index"
        :name="pack.name"
        :description="pack.description"
      />
    </v-row>
  </v-col>
</template>

<script>
import PackageItem from "./PackageItem";

export default {
  name: "PackagesList",
  components: {
    PackageItem
  },
  props: {
    packagesData: Array
  }
};
</script>

<style lang="scss" scoped>
</style>
