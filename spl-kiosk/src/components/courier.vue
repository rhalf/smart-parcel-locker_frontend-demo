<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="title text-center">Select code type.</div>
      </v-col>

      <v-col class="text-center">
        <dialog-barcode @onBarcode="onCourierBarcode"></dialog-barcode>
      </v-col>
      <v-col class="text-center">
        <dialog-qrcode @onBarcode="onCourierQrcode"></dialog-qrcode>
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

        <div class="title text-right">Company :</div>
      </v-col>
      <v-col>
        <div class="title font-weight-bold" v-if="courier">
          {{ courier.name }}
        </div>
        <div class="title font-weight-bold" v-if="courier">
          {{ courier.barcode }}
        </div>
        <div class="title font-weight-bold" v-if="courier">
          {{ courier.qrcode }}
        </div>
        <div class="title font-weight-bold" v-if="courier">
          {{ courier.company.name }}
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
  name: "Courier",
  mixins: [splCloudApi],
  components: { dialogBarcode, dialogQrcode },

  data() {
    return {
      courier: null,
    };
  },
  methods: {
    onCourierBarcode(code) {
      this.getCourierByBarcode(code).then((result) => {
        if (typeof result.data == "object") {
          this.courier = result.data;
          this.$emit("input", result.data);
        }
      });
    },
    onCourierQrcode(code) {
      this.getCourierByQrcode(code).then((result) => {
        if (typeof result.data == "object") {
          this.courier = result.data;
          this.$emit("input", result.data);
        }
      });
    },
  },
 
};
</script>
