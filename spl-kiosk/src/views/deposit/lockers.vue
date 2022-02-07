<template>
  <v-container>
    <v-row>
      <v-col v-for="(locker, index) in lockers0123" :key="index" cols="2">
        <v-card
          :elevation="0"
          v-if="getCu48b()"
          :class="locker.selected ? 'primary' : ''"
          :dark="locker.selected"
          
          :color="locker.parcel ? 'green lighten-1' : 'grey lighten-2'"
          @click="
            selected(locker);
          "
          rounded
          :disabled="locker.parcel != null"
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
                  {{ index + 1 | pad(2) }}
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
import splLockerApi from "../../api/splLockerApi";

export default {
  name: "Locker0123",
  mixins: [splLockerApi],

  data() {
    return {
      locker: null,
    };
  },
  methods: {
    ...mapGetters(["getCu48b", "getLockers"]),

    selected(locker) {
      this.getLockers().forEach((lock) => {
        lock.selected = false;
      });
      locker.selected = true;

      this.$emit('onLocker', locker);
      this.$forceUpdate();
    },
  },
  computed: {
    lockers0123() {
      return this.getLockers().slice(0, 24);
    },
  },
};
</script>
