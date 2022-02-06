<template>
  <v-dialog transition="dialog-top-transition" max-width="450" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" large >
        <v-icon large>mdi-barcode</v-icon>
         <div>Barcode</div>
      </v-btn>
    </template>

    <v-card>
      <v-toolbar color="primary" dark>Scan Barcode</v-toolbar>
      <v-card-text>
        <div class="text-h2 pa-5">
          <v-img
            class="mx-auto"
            :src="require('../../assets/code/barcode.png')"
            aspect-ratio="1"
            max-width="350"
            max-height="150"
          ></v-img>
        </div>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn text @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DialogBarcode",
  created() {
    window.addEventListener("keydown", this.keyDownHandler);
  },
  // mounted() {
  //   this.$nextTick(() => this.$refs.courierCode.focus());
  // },
  props: {
    barcode: String,
  },
  data() {
    return {
      dialog: false,
      code: null,
    };
  },
  methods: {
    keyDownHandler(e) {
      if (e.key == "Enter") {
        e.preventDefault();
        this.dialog = false;
        this.$emit("onBarcode", this.code);
        this.code = "";
      } else if (e.key == "Shift" || e.key == "Ctrl" || e.key == "Alt") {
        return;
      } else {
        if (this.code == null) this.code = e.key;
        else this.code = this.code + e.key;
      }
    },
  },
  watch: {
    dialog(visible) {
      if (visible) {
        window.addEventListener("keydown", this.keyDownHandler);
      } else {
        window.removeEventListener("keydown", this.keyDownHandler);
      }
    },
  },
};
</script>
