import Vue from 'vue'
import {
  Bar
} from 'vue-chartjs'

Vue.component("my-bar", {
  extends: Bar,
  props: ["sales"],
  data() {
    return {
      dataCollection: null
    }
  },
  mounted() {
    this.dataCollection = {
      labels: ['Books', 'Games', 'Phones'],
      datasets: [{
        label: 'Sales',
        backgroundColor: ['#FF6384', '#36A2EB', '#9966FF'],
        data: [this.sales.books, this.sales.games, this.sales.phones]
      }]
    }

    this.renderChart(this.dataCollection, {
      legend: {
        display: false
      },
    });
  }
});
