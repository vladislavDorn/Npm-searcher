<template>
  <v-footer dark padless absolute>
    <v-card flat tile class="footer__wrapper indigo lighten-1 white--text text-center">
      <v-card-text>
        <a class="footer__item_link" href="https://github.com/vladislavDorn" target="_blanck">GitHub</a>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong>Vladislav Dorn</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.footer {
  &__wrapper {
    width: 100%;
  }
  &__item_link {
    display: block;
    width: 100%;
    color: #fff;
  }
}
</style>