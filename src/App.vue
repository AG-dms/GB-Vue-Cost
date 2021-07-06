<template>
  <div id="app">
    <header><h1>My personal cost</h1></header>
    <main>
      <add-payment @addNewPayment="addPay"></add-payment>
      <payment-display
        :pageNumber="pageNumber"
        :payment="paymentsList"
      ></payment-display>
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
export default {
  name: "App",
  components: {
    "payment-display": paymentDisplay,
    "add-payment": addPayment,
    pagination: pagination,
  },
  data() {
    return {
      paymentsList: [],
      pageNumber: 0,
      size: 4,
    };
  },
  methods: {
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
      this.paymentsList.unshift(data);
    },
    fetchData() {
      return [
        {
          date: "28/03/2020",
          category: "Food",
          value: 169,
        },
        {
          date: "12/03/2020",
          category: "Food",
          value: 1500,
        },
        {
          date: "10/05/2020",
          category: "Shopping",
          value: 500,
        },
        {
          date: "05/03/2020",
          category: "Food",
          value: 1777,
        },
        {
          date: "25/02/2020",
          category: "Oil",
          value: 200,
        },
        {
          date: "24/03/2020",
          category: "Transport",
          value: 360,
        },
        {
          date: "24/03/2020",
          category: "Food",
          value: 532,
        },
      ];
    },
  },
  created() {
    this.paymentsList = this.fetchData();
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
