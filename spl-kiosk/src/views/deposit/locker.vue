<template>
  <div>
    <v-row>
      <v-col>
        <lockers v-model="locker"></lockers>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-divider> </v-divider>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import lockers from "./lockers.vue";

export default {
  name: "locker",
  components: { lockers },
  mounted() {
    //this.$nextTick(() => this.$refs.lockerCode.focus());
    this.locker = null;
  },
  data() {
    return {
      locker: null,
    };
  },
  methods: {

  },
  watch: {
    locker(item) {
      if (item) {
        console.log(item);
        this.$emit("input", item);
      } else {
        this.$emit("input", null);
      }
    },
  },
};
</script>
