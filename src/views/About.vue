<template>
  <div>
    <div>About</div>
    <button @click="showCalcForm">Open calculator</button>
  </div>
</template>

<script>
export default {
  methods: {
    showCalcForm() {
      this.$modal.show("calc", {
        header: "Addaa",
        test: "test",
      });
    },
  },
};
</script>

<style scoped>
div {
  width: 450px;
}
</style>