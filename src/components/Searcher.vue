<template>
  <v-col cols="12">
    <v-row align="center" justify="center">
      <v-col sm="10">
        <v-text-field clearable full-width label="Search package"></v-text-field>
      </v-col>
      <v-col align="end" sm="2">
        <v-btn color="primary">Search</v-btn>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: "Searcher"
};
</script>

<style lang="scss" scoped>
</style>
