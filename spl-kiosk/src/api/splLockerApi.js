import Vue from 'vue'
import { mapActions } from 'vuex'

var base_url = process.env.VUE_APP_LOCKER_API_BASEURL;
console.log("cu48b : " + base_url)

export default {
    methods: {

        ...mapActions([
            'setCu48b',
        ]),

        async cu48bUnlock(locker) {
            return await Vue.axios.post(base_url + "/cu48b/" + locker).then((response) => {
                console.log(response.data)
            })
        },
        async cu48bUnlockAll() {
            return await Vue.axios.delete(base_url + "/cu48b/").then((response) => {
                console.log(response.data)
            })
        },
        cu48bStatus() {
            Vue.axios.get(base_url + "/cu48b/").then((response) => {
                this.setCu48b(response.data);
            })
        },
    }
}