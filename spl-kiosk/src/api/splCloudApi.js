import Vue from "vue";
import { mapActions } from "vuex";

var base_url = process.env.VUE_APP_DEMO_API_BASEURL;
console.log("splApi : " + base_url);

export default {
  methods: {
    ...mapActions([
      "setSizes",
      "setLockers",
      "setStatus",
      "setCompanies",
      "setCouriers",
      "setClients",
      "setTransactions",
      "setParcels",
    ]),
    //Lockers
    async getLockers() {
      return await Vue.axios.get(base_url + "/v1/lockers/").then((response) => {
        this.setLockers(response.data);
      });
    },
    async setLocker(locker) {
      return await Vue.axios.post(base_url + "/v1/locker/", locker);
    },
    async getLockerByParcelQrcode(code) {
      return await Vue.axios.get(base_url + "/v1/locker/", {
        params: { qrcode: code },
      });
    },
    async getLockerByParcelBarcode(code) {
      return await Vue.axios.get(base_url + "/v1/locker/", {
        params: { barcode: code },
      });
    },
    //Sizes
    async getSizes() {
      return await Vue.axios.get(base_url + "/v1/sizes/").then((response) => {
        this.setSizes(response.data);
      });
    },
    async getStatus() {
      return await Vue.axios
        .get(base_url + "/v1/statuses/")
        .then((response) => {
          this.setStatus(response.data);
        });
    },
    //Companies
    async getCompanies() {
      return await Vue.axios
        .get(base_url + "/v1/companies/")
        .then((response) => {
          this.setCompanies(response.data);
        });
    },
    //Couriers
    async getCouriers() {
      return await Vue.axios
        .get(base_url + "/v1/couriers/")
        .then((response) => {
          this.setCouriers(response.data);
        });
    },
    async getCourierByQrcode(code) {
      return await Vue.axios.get(base_url + "/v1/courier/", {
        params: { qrcode: code },
      });
    },
    async getCourierByBarcode(code) {
      return await Vue.axios.get(base_url + "/v1/courier/", {
        params: { barcode: code },
      });
    },

    //Clients
    async getClients() {
      return await Vue.axios.get(base_url + "/v1/clients/").then((response) => {
        this.setClients(response.data);
      });
    },
    async getClientByQrcode(code) {
      return await Vue.axios.get(base_url + "/v1/client/", {
        params: { qrcode: code },
      });
    },
    async getClientByBarcode(code) {
      return await Vue.axios.get(base_url + "/v1/client/", {
        params: { barcode: code },
      });
    },

    //Transactions
    async getTransactions() {
      return await Vue.axios
        .get(base_url + "/v1/transactions/")
        .then((response) => {
          this.setTransactions(response.data);
        });
    },
    async setTransaction(transaction) {
      return await Vue.axios.post(base_url + "/v1/transaction/", transaction);
    },
    //Parcels
    async getParcels() {
      return await Vue.axios.get(base_url + "/v1/parcels/").then((response) => {
        this.setParcels(response.data);
      });
    },
    async getParcelByQrcode(code) {
      return await Vue.axios.get(base_url + "/v1/parcel/", {
        params: { qrcode: code },
      });
    },
    async getParcelByBarcode(code) {
      return await Vue.axios.get(base_url + "/v1/parcel/", {
        params: { barcode: code },
      });
    },
  },
};
