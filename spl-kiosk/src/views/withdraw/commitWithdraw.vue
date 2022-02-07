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
        <div class="title text-center">
          Hit the Done button after closing the door.
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
  name: "CommitWithdraw",
  mixins: [splCloudApi],
  components: {},
  props: {
    locker: Object,
    client: Object,
  },

  data() {
    return {
      transaction: {},
      newLocker: {},
    };
  },
  methods: {
    async process() {
      var doneT = false;
      var doneL = false;

      this.transaction.locker = this.locker;
      this.transaction.parcel = this.locker.parcel;
      this.transaction.type = 'withdraw';
      this.transaction.datetime = new Date()
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");

      await this.setTransaction(this.transaction)
        .then((result) => {
          console.log(result);
          doneT = true;
        })
        .catch((result) => {
          console.log(result);
        });

      this.newLocker.id = this.locker.id;
      this.newLocker.value = this.locker.value;
      this.newLocker.size = this.locker.size;
      this.newLocker.parcel = null;

      await this.setLocker(this.newLocker)
        .then((result) => {
          console.log(result);
          doneL = true;
        })
        .catch((result) => {
          console.log(result);
        });

      if (doneT && doneL) this.$router.push({ name: "Home" });
    },
  },
};
</script>
