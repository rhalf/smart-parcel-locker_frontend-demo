<template>
  <v-container>
    <v-row>
      <v-col>
        <v-tabs v-model="tab" align-with-title>
          <v-tabs-slider color="primary"></v-tabs-slider>

          <v-tab v-for="tabItem in tabItems" :key="tabItem">
            {{ tabItem }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item>
            <lockers-0123></lockers-0123>
          </v-tab-item>
          <v-tab-item>
            <lockers-2435></lockers-2435>
          </v-tab-item>
          <v-tab-item>
            <transaction></transaction>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import splLockerApi from "../../api/splLockerApi";
import splCloudApi from "../../api/splCloudApi";
import lockers0123 from "./lockers0123";
import lockers2435 from "./lockers2435";
import transaction from "./transaction";

export default {
  name: "Settings",
  mixins: [splLockerApi, splCloudApi],
  components: { lockers0123, lockers2435, transaction },
  data() {
    return {
      interval: null,
      tab: null,
      tabItems: ["1-24", "25-48", "Transactions"],
    };
  },
  created() {
    this.getLockers();
    this.cu48bStatus();
    this.getTransactions();
  },
  mounted() {
    this.interval = setInterval(() => {
      this.cu48bStatus();
    }, 1000);
  },

  methods: {},
  computed: {},
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>
