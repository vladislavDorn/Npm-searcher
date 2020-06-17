<template>
  <v-col class="package__item" sm="12" @click="setModalData(index)">
    <h2 class="package__item_name">{{ name }}</h2>
    <p class="package__item_description">{{ description }}</p>
  </v-col>
</template>

<script>
export default {
  name: "PackageItem",
  props: {
    name: String,
    description: String,
    index: Number,
    setModalData: Function
  }
};
</script>

<style lang="scss" scoped>
.package__item {
  cursor: pointer;
  &:not(:last-child) {
    border-bottom: 1px solid #e5e5e5;
  }
  &_name {
    font-size: 15px;
  }
  &_description {
    font-size: 14px;
    margin-bottom: 0;
  }
}
</style>