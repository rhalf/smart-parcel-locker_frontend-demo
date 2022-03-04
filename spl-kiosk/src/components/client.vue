<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="title text-center">Select code type.</div>
      </v-col>

      <v-col class="text-center">
        <dialog-barcode @onBarcode="onClientBarcode"></dialog-barcode>
      </v-col>
      <v-col class="text-center">
        <dialog-qrcode @onQrcode="onClientQrcode"></dialog-qrcode>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-divider> </v-divider>
      </v-col>
    </v-row>
    <v-row class="space-around">
      <v-col class="auto">
        <div class="title text-right">Name :</div>
        <div class="title text-right">Barcode :</div>

        <div class="title text-right">Qrcode :</div>

        <div class="title text-right">Email :</div>
      </v-col>
      <v-col>
        <div class="title font-weight-bold" v-if="client">
          {{ client.name }}
        </div>
        <div class="title font-weight-bold" v-if="client">
          {{ client.barcode }}
        </div>
        <div class="title font-weight-bold" v-if="client">
          {{ client.qrcode }}
        </div>
        <div class="title font-weight-bold" v-if="client">
          {{ client.email }}
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-divider> </v-divider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import splCloudApi from "../api/splCloudApi";
import dialogBarcode from "./dialogs/barcode";
import dialogQrcode from "./dialogs/qrcode";

export default {
  name: "Client",
  mixins: [splCloudApi],
  components: { dialogBarcode, dialogQrcode },
 props:{
      locker: Object
    },
  data() {
   
    return {
      client: null,
    };
  },
  methods: {
    onClientBarcode(code) { 
        if (this.locker != null && code == this.locker.parcel.client.barcode) {
          this.client = this.locker.parcel.client;
          this.$emit("input", this.client);
          this.$emit("onValidClient", true);
        } else {
           this.$emit("onValidClient", false);
        }
    },
    onClientQrcode(code) {
       if (this.locker != null && code == this.locker.parcel.client.qrcode) {
          this.client = this.locker.parcel.client;
          this.$emit("input", this.client);
          this.$emit("onValidClient", true);
        } else {
           this.$emit("onValidClient", false);
        }
    },
  },
};
</script>
