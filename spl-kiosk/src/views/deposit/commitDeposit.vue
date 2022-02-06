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
        <div class="title text-center">
          Hit the Done button after closing the door.
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
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
    parcel: Object,
  },

  data() {
    return {
      transaction: {},
    };
  },
  methods: {
    async process() {
      var doneT = false;
      var doneL = false;

      this.transaction.locker = this.locker;
      this.transaction.locker.parcel = this.parcel;

      this.transaction.courier = this.courier;
      this.transaction.parcel = this.parcel;
      this.transaction.created = new Date()
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");
      this.transaction.withdraw = null;
      this.transaction.deposit = new Date()
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");

      await this.setLocker(this.transaction.locker)
        .then((result) => {
          console.log(result);
          doneL = true;
        })
        .catch((result) => {
          console.log(result);
        });

      await this.setTransaction(this.transaction)
        .then((result) => {
          console.log(result);
          doneT = true;
        })
        .catch((result) => {
          console.log(result);
        });

      if (doneT && doneL) this.$router.push({ name: "Home" });
    },
  },

  // mounted() {
  //   this.interval = setInterval(() => {
  //     if (!this.locker) return;
  //     let cu48b = this.$store.getters.getCu48b;
  //     if (cu48b.lockers[this.locker.value])
  //       if (this.save == false) {
  //         console.log("record");
  //         this.save = true;
  //       }
  //   }, 1000);
  // },

  // destroyed() {
  //   clearInterval(this.interval);
  // },
};
</script>
