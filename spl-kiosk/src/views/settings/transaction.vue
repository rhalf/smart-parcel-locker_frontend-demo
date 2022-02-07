<template>
  <v-container>
    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="getTransactions"
          :items-per-page="10"
          class="elevation-1"
        ></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import splLockerApi from "../../api/splLockerApi";

export default {
  name: "Transaction",
  mixins: [splLockerApi],
  data() {
    return {
      headers: [
        {
          text: "ID",
          align: "start",
          sortable: true,
          value: "id",
        },
        {
          text: "Parcel",
          align: "start",
          sortable: true,
          value: "parcel.name",
        },
        {
          text: "Size",
          align: "start",
          sortable: true,
          value: "parcel.size.name",
        },
        {
          text: "Courier",
          align: "start",
          sortable: true,
          value: "parcel.courier.name",
        },
        {
          text: "Client",
          align: "start",
          sortable: true,
          value: "parcel.client.name",
        },
        {
          text: "Locker",
          align: "start",
          sortable: true,
          value: "locker.id",
        },
        {
          text: "TransactionType",
          align: "start",
          sortable: true,
          value: "type",
        },
        {
          text: "DateTime",
          align: "start",
          sortable: true,
          value: "datetime",
        },
      ],
    };
  },
  methods: {},
  computed: {
    ...mapGetters(["getTransactions"]),
  },
};
</script>
