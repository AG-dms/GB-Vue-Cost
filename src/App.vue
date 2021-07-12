<template>
  <div id="app">
    <header><h1>My personal cost</h1></header>
    <main>
      <add-payment
        :payment="paymentsList"
        @addNewPayment="addPay"
      ></add-payment>
      <payment-display
        :pageNumber="pageNumber"
        :payment="paymentsList"
      ></payment-display>
      <h3>Total: {{ getFPV }}</h3>
      <pagination
        @prevPage="previous"
        @nextPage="next"
        @chosePage="changePage"
        :size="size"
        :payment="paymentsList"
        :pageNumber="pageNumber"
      ></pagination>
    </main>
  </div>
</template>

<script>
import paymentDisplay from "./components/PaymentsDisplay";
import "./theme.css";
import addPayment from "./components/addPayment.vue";
import pagination from "./components/pagination.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  components: {
    "payment-display": paymentDisplay,
    "add-payment": addPayment,
    pagination: pagination,
  },
  data() {
    return {
      pageNumber: 0,
      size: 5,
    };
  },
  computed: {
    ...mapGetters({
      paymentsList: "getPaymentList",
      getFPV: "getFullPrise",
      categorys: "getCategory",
    }),
    // getFPV() {
    //   return this.$store.getters.getFullPrise;
    // },
    // paymentsList() {
    //   return this.$store.getters.getPaymentList;
    // },
  },
  methods: {
    ...mapMutations(["setPaymentListData", "addDataToPaymentList"]),
    addData(data) {
      this.paymentsList = [...this.paymentsList, data];
    },
    ...mapActions(["fetchData", "fetchCategory"]),
    previous() {
      this.pageNumber--;
    },
    next() {
      this.pageNumber++;
    },
    changePage(data) {
      this.pageNumber = data - 1;
    },
    addPay(data) {
      this.addDataToPaymentList(data);
      // this.paymentsList.unshift(data);
    },
    // fetchData() {
    //   return [
    //     {
    //       id: 7,
    //       date: "28/03/2020",
    //       category: "Food",
    //       value: 169,
    //     },
    //     {
    //       id: 6,
    //       date: "12/03/2020",
    //       category: "Food",
    //       value: 1500,
    //     },
    //     {
    //       id: 5,
    //       date: "10/05/2020",
    //       category: "Shopping",
    //       value: 500,
    //     },
    //     {
    //       id: 4,
    //       date: "05/03/2020",
    //       category: "Food",
    //       value: 1777,
    //     },
    //     {
    //       id: 3,
    //       date: "25/02/2020",
    //       category: "Oil",
    //       value: 200,
    //     },
    //     {
    //       id: 2,
    //       date: "24/03/2020",
    //       category: "Transport",
    //       value: 360,
    //     },
    //     {
    //       id: 1,
    //       date: "24/03/2020",
    //       category: "Food",
    //       value: 532,
    //     },
    //   ];
    // },
  },
  created() {
    // обращение к хранилищу через $store,
    // .commit - обращение к мутациям (1 параметр - название мутации, 2 - метод который в котором делаем изменения)
    // this.setPaymentListData(this.fetchData());
    this.fetchData();
    if (!this.categorys.length) {
      this.fetchCategory();
    }
    // this.paymentsList = this.fetchData();
  },
};
</script>

<style>
#app {
  width: 1300px;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
main {
  display: flex;
  padding: 30px;
  width: 1300px;
  margin: 0 auto;
  flex-direction: column;
}

header {
  display: flex;
  padding-left: 130px;
}
</style>
