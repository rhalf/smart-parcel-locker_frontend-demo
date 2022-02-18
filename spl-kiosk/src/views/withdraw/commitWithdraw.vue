<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="headline text-center" v-if="locker">
          Locker {{ locker.id }} is now open!
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="title text-center">
          Get the parcel inside the locker and close the door!
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="title text-center">Transaction done. Thank you</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="display-1 text-center">
          {{ count }}
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <v-btn
          class="primary"
          @click="$router.push({ name: 'Home' }).catch(() => {})"
          >Done</v-btn
        >
      </v-col>
    </v-row>
    <v-row> </v-row>
    <v-row>
      <v-col>
        <v-divider> </v-divider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import splCloudApi from "../../api/splCloudApi";

export default {
  name: "CommitWithdraw",
  mixins: [splCloudApi],
  components: {},
  props: {
    locker: Object,
    client: Object,
    start: Boolean,
  },

  data() {
    return {
      transaction: {},
      newLocker: {},
      count: 10,
    };
  },
  methods: {
    async process() {
      this.transaction.locker = this.locker;
      this.transaction.parcel = this.locker.parcel;
      this.transaction.type = "withdraw";
      this.transaction.datetime = new Date()
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");

      await this.setTransaction(this.transaction)
        .then((result) => {
          console.log(result);
        })
        .catch((result) => {
          console.log(result);
        });

      this.newLocker = {
        ...this.locker
      };
      this.newLocker.parcel = null;

      await this.setLocker(this.newLocker)
        .then((result) => {
          console.log(result);
        })
        .catch((result) => {
          console.log(result);
        });
    },
  },
  watch: {
    start(value) {
      if (value) this.process();
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      if (!this.start) return;
      if (this.count) this.count--;
      if (!this.count) this.$router.push({ name: "Home" });
    }, 1000);
  },

  destroyed() {
    clearInterval(this.interval);
  },
};
</script>
