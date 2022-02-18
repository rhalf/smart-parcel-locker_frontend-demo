<template>
  <v-app>
    <v-container>
      <v-row  class="pa-5">
        <v-col cols="auto">
          <div class="title">{{ $route.name }}</div>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="auto">
          <v-btn
            text
            fab
            small
            @click="$router.push({ name: 'Home' }).catch(() => {})"
          >
            <v-icon>mdi-home</v-icon>
          </v-btn>

          <v-btn
            text
            fab
            small
            @click="$router.push({ name: 'Settings' }).catch(() => {})"
          >
            <v-icon>mdi-cog</v-icon>
          </v-btn>

          <v-btn text fab small @click="$router.go().catch(() => {})">
            <v-icon>mdi-refresh</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <v-slide-x-reverse-transition mode="out-in">
        <router-view></router-view>
      </v-slide-x-reverse-transition>
    </v-container>
  </v-app>
</template>


<script>
import { defineComponent } from "@vue/composition-api";
// import { mapGetters } from 'vuex'
import splCloudApi from "./api/splCloudApi";
import splLockerApi from "./api/splLockerApi";

export default defineComponent({
  setup() {},
  mixins: [splCloudApi, splLockerApi],
  async created() {
  
    // await this.getSizes();
    // await this.getStatus();
    // await this.getCompanies();
    // await this.getClients();
    // await this.getTransactions();
    // await this.getStatus();

    // await this.getLockers();
    // await this.cu48bStatus();
  },
  data() {
    return {};
  },

  methods: {},
});
</script>



<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
