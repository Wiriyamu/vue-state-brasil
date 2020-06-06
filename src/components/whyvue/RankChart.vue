<template>
  <div id="rank" class="mt-8 text-2xl font-bold md:text-xl text-secondary">
    <div class="my-8">
      <h1 class="text-2xl md:text-xl">Ranking</h1>
      <p class="mt-4 text-sm">Média de Satisfação, Interesse e Percepção.</p>
    </div>
    <apexchart
      type="radialBar"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  name: 'Rank Chart',
  data() {
    return {
      series: [89, 64.75, 91.75],
      chartOptions: {
        chart: {
          height: 350,
          type: 'radialBar'
        },
        colors: ['#FE6A6A', '#41C7C7', '#FC8F8F'],
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: '22px'
              },
              value: {
                fontSize: '16px'
              },
              total: {
                show: true,
                label: 'Vue.js',
                formatter: () => {
                  return 'ranking'
                }
              }
            }
          }
        },
        labels: ['Satisfação', 'Interesse', 'Percepção']
      }
    }
  }
}
</script>

<style></style>
