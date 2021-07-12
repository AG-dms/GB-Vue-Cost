<template>
  <div class="select-form">
    <div>
      <select
        placeholder="category"
        v-model="category"
        @change="$emit('select', this.category)"
      >
        <option
          :value="category"
          v-for="(category, idx) in categorys"
          :key="idx"
        >
          {{ category }}
        </option>
      </select>
      <button @click="openComp = !openComp" class="btn primary">
        Add new category
      </button>
    </div>
    <add-category @close="closeWindow" v-if="openComp === true"></add-category>
  </div>
</template>

<script>
import addCategory from "./addCategory.vue";
export default {
  components: {
    "add-category": addCategory,
  },
  computed: {
    categorys() {
      return this.$store.getters.getCategory;
    },
  },
  data() {
    return {
      openComp: false,
      category: "Food",
    };
  },
  methods: {
    closeWindow(data) {
      this.openComp = false;
      this.category = data;
      this.$emit("changeCategoty", this.category);
    },
  },
};
</script>

<style scoped>
select {
  width: 300px;
  margin-right: 10px;
}
.select-form {
  align-items: flex-start;
  flex-direction: column;
  width: 450px;
  display: flex;
  justify-content: space-between;
}
.btn {
  margin: 0;
  width: 140px;
  align-self: baseline;
}
</style>