<template>
  <v-container>
    <v-row>
      <v-col>
        <v-stepper v-model="stepState" alt-labels flat>
          <v-stepper-header>
            <v-stepper-step :complete="stepState > 1" step="1">
              Parcel
            </v-stepper-step>
            <v-divider></v-divider>

            <v-stepper-step :complete="stepState > 2" step="2">
              Client
            </v-stepper-step>
            <v-divider></v-divider>

            <v-stepper-step :complete="stepState > 3" step="3">
              Done
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
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
                    @click="stepState = 2; "
                    :disabled="locker == null"
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
                  <client v-model="client"></client>
                </v-col>
              </v-row>
              <v-row>
                <v-spacer></v-spacer>
                <v-col cols="auto">
                  <v-btn
                    color="primary "
                    @click="stepState = 3; "
                    :disabled="client == null"
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
                  <commitWithdraw
                    :locker="locker"
                    :client="client"
                  ></commitWithdraw>
                </v-col>
              </v-row>
              <v-row>
                <v-spacer></v-spacer>

                <v-col cols="auto">
                  <v-btn large @click="stepState = 2">Back</v-btn>
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
import client from "../../components/client";
import locker from "../../components/locker";
import commitWithdraw from "./commitWithdraw";

export default {
  name: "Stepper",
  mixins: [splLockerApi],
  components: { client, locker, commitWithdraw },
  mounted() {
    //this.$nextTick(() => this.$refs.clientCode.focus());
    this.stepState = 1;
    this.client = null;
    this.locker = null;
  },
  data() {
    return {
      client: null,
      locker: null,
      stepState: 1,
    };
  },
  methods: {
   
  },
  watch: {},
};
</script>
