<template>
  <div class="paginator__wrapper">
    <button
      class="paginator__btn paginator__btn_prev"
      type="button"
      :disabled="offset < 10"
      @click="prevFunc"
    ></button>
    <button
      class="paginator__btn paginator__btn_next"
      type="button"
      :disabled="total < 10 || offset === Math.floor(total / 10) * 10"
      @click="nextFunc"
    ></button>
  </div>
</template>

<script>
export default {
  name: "Paginator",
  props: {
    offset: Number,
    total: Number,
    searchValue: String,
    getPackages: Function
  },
  methods: {
    prevFunc() {
      if (this.offset >= 10) {
        this.getPackages({
          packageName: this.searchValue,
          offset: this.offset - 10
        });
      }
    },
    nextFunc() {
      if (this.total > 10) {
        this.getPackages({
          packageName: this.searchValue,
          offset: this.offset + 10
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.paginator {
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0 150px 0;
  }
  &__btn {
    margin: 0 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: url(../assets/arrow.png) center top / cover no-repeat;
    outline: none;
  }
  &__btn:disabled {
    opacity: 0.5;
  }
  &__btn_prev {
    transform: rotate(-90deg);
  }
  &__btn_next {
    transform: rotate(90deg);
  }
}
</style>