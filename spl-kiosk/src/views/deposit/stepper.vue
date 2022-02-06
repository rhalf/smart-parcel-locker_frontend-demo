<template>
  <v-container>
    <v-row>
      <v-col>
        <v-stepper v-model="stepState" alt-labels flat>
          <v-stepper-header>
            <v-stepper-step :complete="stepState > 1" step="1">
              Courier
            </v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="stepState > 2" step="2">
              Parcel
            </v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="stepState > 3" step="3">
              Locker
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-row>
                <v-col>
                  <courier v-model="courier"></courier>
                </v-col>
              </v-row>
              <v-row>
                <v-spacer></v-spacer>
                <v-col cols="auto" right>
                  <v-btn
                    color="primary "
                    @click="stepState = 2"
                    :disabled="courier == null"
                    large
                  >
                    Continue
                  </v-btn>
                </v-col>
              </v-row>
            </v-stepper-content>
            <v-stepper-content step="2">
              <v-row>
                <v-col>
                  <parcel v-model="parcel"></parcel>
                </v-col>
              </v-row>
              <v-row>
                <v-spacer></v-spacer>
                <v-col cols="auto">
                  <v-btn
                    color="primary "
                    @click="stepState = 3"
                    :disabled="parcel == null"
                    large
                  >
                    Continue
                  </v-btn>
                </v-col>
                <v-col cols="auto">
                  <v-btn large @click="stepState = 1">Back</v-btn>
                </v-col>
              </v-row>
            </v-stepper-content>
            <v-stepper-content step="3">
              <v-row>
                <v-col>
                  <locker v-model="locker"></locker>
                </v-col>
              </v-row>
              <v-row>
                <v-spacer></v-spacer>
                <v-col cols="auto">
                  <v-btn
                    color="primary "
                    @click="
                      stepState = 4;
                      cu48bUnlock(locker.value);
                    "
                    :disabled="locker == null"
                    x-large
                  >
                    Continue
                  </v-btn>
                </v-col>
                <v-col cols="auto">
                  <v-btn large @click="stepState = 2">Back</v-btn>
                </v-col>
              </v-row>
            </v-stepper-content>
            <v-stepper-content step="4">
              <v-row>
                <v-col>
                  <commitDeposit :locker="locker" :parcel="parcel" :courier="courier"></commitDeposit>
                </v-col>
              </v-row>
              <v-row>
                <v-spacer></v-spacer>
                
                <v-col cols="auto">
                  <v-btn large @click="stepState = 3">Back</v-btn>
                </v-col>
              </v-row>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import splLockerApi from "../../api/splLockerApi";
import courier from "./courier";
import parcel from "./parcel";
import locker from "./locker";
import commitDeposit from "./commitDeposit";

export default {
  name: "Stepper",
  mixins: [splLockerApi],
  components: { courier, parcel, locker, commitDeposit },
  mounted() {
    //this.$nextTick(() => this.$refs.courierCode.focus());
    this.stepState = 1;
    this.courier = null;
    this.parcel = null;
    this.locker = null;
  },
  data() {
    return {
      courier: null,
      parcel: null,
      locker: null,
      stepState: 1,
    };
  },
  methods: {},
  watch: {},
};
</script>
