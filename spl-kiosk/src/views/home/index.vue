<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card
          v-ripple
          @click="$router.push({ name: 'Deposit' }).catch(() => {})"
        >
          <v-img
            aspect-ratio="4/3"
            :src="require('../../assets/cards/deposit.jpg')"
            height="300"
          ></v-img>
          <v-card-text style="position: absolute">
            <v-fab-transition>
              <v-btn color="brown" dark absolute top right fab large>
                <v-icon large>mdi-package-variant-closed</v-icon>
              </v-btn>
            </v-fab-transition>
          </v-card-text>

          <v-card-title>
            <v-icon left extra-large>mdi-package-down</v-icon>
            Deposit</v-card-title
          >
          <v-card-text>Courier area for depositing parcels.</v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          v-ripple
          @click="$router.push({ name: 'Withdraw' }).catch(() => {})"
        >
          <v-img
            aspect-ratio="4/3"
            :src="require('../../assets/cards/withdraw.jpg')"
            height="300"
          ></v-img>

          <v-card-text style="position: absolute">
            <v-fab-transition>
              <v-btn color="blue" dark absolute top right fab large>
                <v-icon large>mdi-package-variant</v-icon>
              </v-btn>
            </v-fab-transition>
          </v-card-text>

          <v-card-title>
            <v-icon left extra-large>mdi-package-up</v-icon>
            Withdraw
          </v-card-title>
          <v-card-text>Client area for withdrawing parcels.</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import locker from "../../api/splLockerApi";

export default {
  name: "Home",
  mixins: [locker],
  data() {
    return {};
  },
};
</script>
