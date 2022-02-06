import Vue from 'vue'
import { mapActions } from 'vuex'

var base_url  = process.env.VUE_APP_DEMO_API_BASEURL;
console.log("splApi : " + base_url)

export default {
    methods: {
        ...mapActions([
            'setSizes',
            'setLockers',
            'setStatus',
            'setCompanies',
            'setCouriers',
            'setClients',
            'setTransactions',
            'setParcels',

        ]),

        async getLockers() {
            return await Vue.axios.get(base_url + "/v1/lockers/").then((response) => {
                this.setLockers(response.data);
            })   
        },
        async getSizes() {
            return await Vue.axios.get(base_url + "/v1/sizes/").then((response) => {
                this.setSizes(response.data);
            })   
        },
        async getStatus() {
            return await Vue.axios.get(base_url + "/v1/statuses/").then((response) => {
                this.setStatus(response.data);
            })   
        },
        async getCompanies() {
            return await Vue.axios.get(base_url + "/v1/companies/").then((response) => {
                this.setCompanies(response.data);
            })   
        },
        async getCouriers() {
            return await Vue.axios.get(base_url + "/v1/couriers/").then((response) => {
                this.setCouriers(response.data);
            })   
        },

        async getClients() {
            return await Vue.axios.get(base_url + "/v1/clients/").then((response) => {
                this.setClients(response.data);
            })   
        },
        async getTransactions() {
            return await Vue.axios.get(base_url + "/v1/transactions/").then((response) => {
                this.setTransactions(response.data);
            })   
        },
        async getParcels() {
            return await Vue.axios.get(base_url + "/v1/parcels/").then((response) => {
                this.setParcels(response.data);
            })   
        },

        async getCourierByQrcode(code) {
            return await Vue.axios.get(base_url + "/v1/courier/", { params : { 'qrcode' : code }});
        },
        async getCourierByBarcode(code) {
            return await Vue.axios.get(base_url + "/v1/courier/", { params : { 'barcode' : code }});
        },
        async getParcelByQrcode(code) {
            return await Vue.axios.get(base_url + "/v1/parcel/", { params : { 'qrcode' : code }});
        },
        async getParcelByBarcode(code) {
            return await Vue.axios.get(base_url + "/v1/parcel/", { params : { 'barcode' : code }});
        },

        async setTransaction(transaction) {
            return await Vue.axios.post(base_url + "/v1/transaction/", transaction);
        },

        async setLocker(locker) {
            return await Vue.axios.post(base_url + "/v1/locker/", locker);
        },
    }
}