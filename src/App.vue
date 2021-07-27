<template>
  <v-app>
    <v-app-bar app>
      <v-btn plain to="/dashboard"> dashboard </v-btn>
      <v-btn plain to="/calc"> Calculator </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <v-expand-transition>
              <v-card v-show="expand" height="300" width="500">
                <modal-window
                  @test="testik"
                  @changeBtn="btnChange"
                  v-if="modalSettings.name"
                  :settings="modalSettings"
                  :popSettings="popUpSettings"
                  :btn="changeBtn"
                ></modal-window>
              </v-card>
            </v-expand-transition>

            <pop-up
              @changeBtn="btnChange"
              @test="testik"
              :settings="popUpSettings"
              class="popUp"
              v-if="popUpSettings.name"
              :style="{
                top: `${this.popUpSettings.y - 45}px`,
                left: `${this.popUpSettings.x - 130}px`,
              }"
            ></pop-up>
            <router-view :expandOpen="expand" @test="testik"></router-view>
          </v-col>
          <v-col>
            <chart :categorys="categorys"> </chart>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import chart from "./components/chart";

export default {
  name: "App",
  components: {
    chart,
    ModalWindow: () => import("./components/modalWindow.vue"),
    popUp: () => import("./components/ContextMenu.vue"),
  },
  computed: {
    categorys() {
      return this.$store.getters.getCategory;
    },
    paymentList() {
      return this.$store.getters.getPaymentList;
    },
  },

  data() {
    return {
      changeBtn: true,
      expand: false,
      modalSettings: {},
      popUpSettings: {},
      chartdata: {
        labels: this.categorys,
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
    };
  },

  methods: {
    btnChange() {
      this.changeBtn = !this.changeBtn;
    },
    testik() {
      this.expand = !this.expand;
    },
    ...mapActions(["fetchData", "fetchCategory"]),
    popUpShow(settings) {
      this.popUpSettings = settings;
    },
    popUpHide() {
      this.popUpSettings = {};
    },
    onShow(settings) {
      this.modalSettings = settings;
    },
    onHide() {
      this.modalSettings = {};
    },
  },
  mounted() {
    this.$popUp.showPopUp();
    this.$popUp.hidePopUp();
    this.$modal.show();
    this.$modal.hide();
  },
  created() {
    this.$popUp.EventBus.$on("popUp", this.popUpShow);
    this.$popUp.EventBus.$on("hideUp", this.popUpHide);
    this.$modal.EventBus.$on("show", this.onShow);
    this.$modal.EventBus.$on("hide", this.onHide);
    this.fetchData();
    if (!this.categorys.length) {
      this.fetchCategory();
    }
  },
};
</script>
