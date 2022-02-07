<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="title text-center">Select code type.</div>
      </v-col>

      <v-col class="text-center">
        <dialog-barcode @onBarcode="onParcelBarcode"></dialog-barcode>
      </v-col>
      <v-col class="text-center">
        <dialog-qrcode @onQrcode="onParcelQrcode"></dialog-qrcode>
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

        <div class="title text-right">Client :</div>
      </v-col>
      <v-col>
        <div class="title font-weight-bold" v-if="parcel">
          {{ parcel.name }}
        </div>
        <div class="title font-weight-bold" v-if="parcel">
          {{ parcel.barcode }}
        </div>
        <div class="title font-weight-bold" v-if="parcel">
          {{ parcel.qrcode }}
        </div>
        <div class="title font-weight-bold" v-if="parcel">
          {{ parcel.client.name }}
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
  name: "parcel",
  mixins: [splCloudApi],
  components: { dialogBarcode, dialogQrcode },

  data() {
    return {
      parcel: null,
    };
  },
  methods: {
    onParcelBarcode(code) {
      this.getParcelByBarcode(code).then((result) => {
        if (typeof result.data == "object") {
          this.parcel = result.data;
          this.$emit("input", result.data);
        }
      });
    },
    onParcelQrcode(code) {
      this.getParcelByQrcode(code).then((result) => {
        if (typeof result.data == "object") {
          this.parcel = result.data;
          this.$emit("input", result.data);
        } 
      });
    },
  },
};
</script>
