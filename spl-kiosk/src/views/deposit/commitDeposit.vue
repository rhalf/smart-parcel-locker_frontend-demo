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
          Place the parcel inside the locker and close the door!
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
        <v-btn class="primary" @click="process()">Done</v-btn>
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
  name: "CommitDeposit",
  mixins: [splCloudApi],
  components: {},
  props: {
    locker: Object,
    courier: Object,
    start: Boolean,
    parcel: {
      type: [Object, String],
    },
  },

  data() {
    return {
      transaction: {},
      count: 10,
    };
  },
  methods: {
    async process() {
      this.transaction.locker = this.locker;
      this.transaction.locker.parcel = this.parcel;

      this.transaction.parcel = this.parcel;
      this.transaction.type = "deposit";
      this.transaction.datetime = new Date()
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");

      console.log(this.transaction);

      await this.setLocker(this.transaction.locker)
        .then((result) => {
          console.log(result);
        })
        .catch((result) => {
          console.log(result);
        });

      await this.setTransaction(this.transaction)
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
      if (!this.count) if (!this.count) this.$router.push({ name: "Home" });
    }, 1000);
  },

  destroyed() {
    clearInterval(this.interval);
  },
};
</script>
