<template>
  <div class="form-control">
    <div class="form" v-if="show">
      <div class="form-input">
        <input type="text" placeholder="date" v-model="date" />
        <category @changeCategoty="test" @select="chooseCategory"></category>
        <input type="text" placeholder="value" v-model.number="value" />
      </div>
      <button class="btn primary" @click="addPayment">ADD +</button>
    </div>
    <button class="btn primary" @click="show = !show">ADD NEW COST +</button>
  </div>
</template>

<script>
import category from "./category";

export default {
  components: { category: category },
  props: {
    payment: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    tooday() {
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    },
    paymentIdx() {
      return this.payment.length;
    },
  },
  data() {
    return {
      show: false,
      date: "",
      category: "",
      value: "",
      id: "",
    };
  },
  methods: {
    test(data) {
      this.category = data;
    },
    chooseCategory(data) {
      this.category = data;
    },
    addPayment() {
      const { category, value } = this;
      const data = {
        date: this.tooday,
        category,
        value,
        id: this.paymentIdx + 1,
      };
      this.show = false;
      this.$emit("addNewPayment", data);
    },
  },
};
</script>

<style>
button,
input {
  outline: none;
}

button:active,
input:active,
input:focus,
select:focus {
  outline: none;
}
.form-control {
  width: 450px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}
.form {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}
.form button {
  align-self: center;
  margin-top: 5px;
}
.form-input {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.form-input input,
select {
  padding: 5px;
  border: 1px solid grey;
  border-radius: 5px;
  margin-bottom: 10px;
  width: inherit;
  height: 35px;
}

.btn {
  width: 150px;
  height: 40px;
  border: 1px solid rgb(45, 182, 129);
  border-radius: 5px;
  color: black;
  background: none;
  font-weight: 600;
}
.btn:active {
  box-shadow: 1px 1px 3px rgb(18, 104, 71);
}
.primary {
  background: rgb(45, 182, 129);
  color: white;
  border: none;
}
</style>