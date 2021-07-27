  <template>
  <v-btn color="teal" dark @click="showPaymentForm"
    >{{ text }} <v-icon>mdi-plus</v-icon></v-btn
  >
  <!-- <button @click="showPaymentForm">
    {{ text }}
  </button> -->
</template>

  <script>
export default {
  props: ["expandOpen"],
  computed: {
    text() {
      if (this.expandOpen) {
        return "Close payment form";
      } else {
        return "ADD NEW COST";
      }
    },
  },
  data() {
    return {};
  },
  methods: {
    showPaymentForm() {
      this.isOpen = !this.isOpen;
      if (this.isOpen === true) {
        this.$modal.show("add-payment", {
          header: "Add payment",
        });
      } else {
        this.$modal.hide();
      }
      this.$parent.$emit("test");
    },
  },
  created() {},
};
</script>
  <style scoped>
</style>