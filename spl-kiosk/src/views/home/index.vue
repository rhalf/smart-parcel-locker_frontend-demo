<template>
  <v-container>
    <v-row>
      <v-col>
        <!-- <v-btn @click="unlock(0)">Unlock</v-btn>
        <v-btn @click="unlockAll()">UnlockAll</v-btn>
        <v-btn @click="getStatus()">Status</v-btn> -->
        <!-- <v-card :ripple="{ class: 'red--text' }"> -->
        <v-card v-ripple @click="$router.push({ name: 'Deposit' }).catch(() => {})">
          <v-card-title>
            <v-icon left extra-large>mdi-package-down</v-icon>
            Deposit</v-card-title
          >
          <v-card-text>Courier area for depositing parcels.</v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <!-- <v-card :ripple="{ class: 'red--text' }"> -->
        <v-card v-ripple >
          <v-card-title >
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
    return {
      items: [
        {
          text: "Dashboard",
          disabled: false,
          href: "/",
        },
        {
          text: "Settings",
          disabled: false,
          href: "breadcrumbs_link_1",
        },
        {
          text: "Link 2",
          disabled: true,
          href: "breadcrumbs_link_2",
        },
      ],
    };
  },
};
</script>
