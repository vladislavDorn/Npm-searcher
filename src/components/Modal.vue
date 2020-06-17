<template>
  <div class="text-center">
    <v-dialog v-model="modal.view" width="500">
      <v-card v-if="modal.data">
        <v-card-title class="headline grey lighten-2" primary-title>{{ modal.data.name }}</v-card-title>
        <v-card-text></v-card-text>
        <v-card-text>
          <span class="modal__strong" v-if="modal.data.description">Description:</span>
          {{ modal.data.description }}
        </v-card-text>
        <v-card-text>
          <span class="modal__strong">Version:</span>
          {{ modal.data.version }}
        </v-card-text>
        <v-card-text v-if="modal.data.author">
          <v-card-text v-if="modal.data.author.name">
            <span class="modal__strong">Author:</span>
            {{ modal.data.author.name }}
          </v-card-text>
          <v-card-text v-if="modal.data.author.email">
            <span class="modal__strong">Author email:</span>
            {{ modal.data.author.email }}
          </v-card-text>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="closeModal">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    modal: Object,
    closeModal: Function
  }
};
</script>

<style lang="scss" scoped>
.modal__strong {
  display: block;
  font-weight: bold;
}
</style>