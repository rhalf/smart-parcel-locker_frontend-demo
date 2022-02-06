<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="headline text-center">Select code type.</div>
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
import splApi from "../../api/splCloudApi";
import dialogBarcode from "../../components/dialogs/barcode";
import dialogQrcode from "../../components/dialogs/qrcode";

export default {
  name: "parcel",
  components: { dialogBarcode, dialogQrcode },
  mounted() {
    //this.$nextTick(() => this.$refs.parcelCode.focus());
    this.parcel = null;
    this.parcelCode = null;
  },
  data() {
    return {
      parcel: null,
      parcelCode: null,
    };
  },
  methods: {
    onParcelBarcode(data) {
      this.parcelCode = data;
      splApi.methods
        .getParcelByBarcode(data)
        .then((data) => {
          this.parcel = data.data;
        })
        .catch(() => {
          this.parcel = null;
        });
    },
    onParcelQrcode(data) {
      this.parcelCode = data;
      splApi.methods
        .getParcelByQrcode(data)
        .then((data) => {
          this.parcel = data.data;
        })
        .catch(() => {
          this.parcel = null;
        });
    },
  },
  watch: {
    parcel(item) {
      if (item) {
        console.log(item)
        this.$emit("input", item);
      } else {
        this.$emit("input", null);
      }
    },
  },
};
</script>
