<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="headline text-center">Select code type.</div>
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
import splApi from "../../api/splCloudApi";
import dialogBarcode from "../../components/dialogs/barcode";
import dialogQrcode from "../../components/dialogs/qrcode";

export default {
  name: "Courier",
  components: { dialogBarcode, dialogQrcode },
  mounted() {
    //this.$nextTick(() => this.$refs.courierCode.focus());
    this.courier = null;
    this.courierCode = null;
  },
  data() {
    return {
      courier: null,
      courierCode: null,
    };
  },
  methods: {
    onCourierBarcode(data) {
      this.courierCode = data;
      splApi.methods
        .getCourierByBarcode(data)
        .then((data) => {
          this.courier = data.data;
        })
        .catch(() => {
          this.courier = null;
        });
    },
    onCourierQrcode(data) {
      this.courierCode = data;
      splApi.methods
        .getCourierByQrcode(data)
        .then((data) => {
          this.courier = data.data;
        })
        .catch(() => {
          this.courier = null;
        });
    },
  },
  watch: {
    courier(item) {
      if (item) {
        this.$emit("input", item);
      } else {
        this.$emit("input", null);
      }
    },
  },
};
</script>
