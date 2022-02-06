<template>
  <v-container>
    <v-row>
      <v-col v-for="(locker, index) in lockers0123" :key="index" cols="2">
        <v-card
          text
          outlined
          v-if="getCu48b()"
          :class="
            locker.parcel
              ? 'green lighten-1'
              : 'grey lighten-2'
          "
          @click="cu48bUnlock(index)"
          rounded
          
        >
        <v-container>
          <v-row no-gutters>
            <v-col class="text-right">
              <v-icon>{{
                getCu48b().lockers[index] == 1 ? "mdi-lock" : "mdi-lock-open"
              }}</v-icon>
            </v-col>
            <v-col>
              <div class="subtitle-1 font-weight-bold">
                {{ pad(index + 1, 2) }}
              </div>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col>
              <div :v-if="locker" class="subtitle-1 text-center">
                {{ locker.size.name }}
              </div>
            </v-col>
          </v-row>
        </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import splLockerApi from "../api/splLockerApi";

export default {
  name: "Locker0123",
  mixins: [splLockerApi],
  data() {
    return {};
  },
  updated() {
    // console.log(this.cu48b)
  },
  methods: {
    ...mapGetters(["getCu48b", "getLockers"]),
    pad(num, size) {
      var s = "000000000" + num;
      return s.substr(s.length - size);
    },
  },
  computed: {
    lockers0123() {
      return this.getLockers().slice(0, 24);
    },
  },
};
</script>
