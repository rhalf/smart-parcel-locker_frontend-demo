<template>
  <div>
    <v-row>
      <v-col>
        <lockers @onLocker="onLocker"></lockers>
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

  },
  data() {
    return {
     
    };
  },
  methods: {
    onLocker(locker) {
      this.$emit('input', locker)
    }
  },
  
};
</script>
