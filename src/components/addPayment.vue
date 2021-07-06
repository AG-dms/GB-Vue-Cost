<template>
  <div class="form-control">
    <div class="form" v-if="show">
      <div class="form-input">
        <input type="text" placeholder="date" v-model="date" />
        <input type="text" placeholder="category" v-model="category" />
        <input type="text" placeholder="value" v-model="value" />
      </div>
      <button class="btn primary" @click="addPayment">ADD +</button>
    </div>
    <button class="btn primary" @click="show = !show">ADD NEW COST +</button>
  </div>
</template>

<script>
import moment from "moment";
export default {
  computed: {
    tooday() {
      return moment().subtract(10, "days").calendar();
    },
  },
  data() {
    return {
      show: false,
      date: "",
      category: "",
      value: "",
    };
  },
  methods: {
    addPayment() {
      const { category, value } = this;
      const data = {
        date: this.tooday,
        category,
        value,
      };
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
input:focus {
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
}
.form button {
  align-self: center;
  margin-top: 5px;
}
.form-input {
  margin: 0 auto;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.form-input input {
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
.form {
  margin-bottom: 15px;
}
</style>