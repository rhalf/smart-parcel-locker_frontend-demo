<template>
  <v-container>
    <stepper></stepper>
  </v-container>
</template>

<script>
import stepper from "../../views/deposit/stepper";
import splLockerApi from "../../api/splLockerApi";
import splCloudApi from "../../api/splCloudApi";

export default {
  name: "Deposit",
  components: { stepper },
  mixins: [splLockerApi, splCloudApi],
  data() {
    return {
      interval: null,
    };
  },

  mounted() {
    this.getLockers();
    this.cu48bStatus();

    this.interval = setInterval(() => {
      this.cu48bStatus();
    }, 1000);
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>
