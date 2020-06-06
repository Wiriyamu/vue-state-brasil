<template>
  <div id="chart">
    <div>
      <h2 class="my-8 text-2xl font-bold md:text-xl text-secondary">
        Opiniões da <em>comunidade</em> em geral
      </h2>
    </div>
    <apexchart
      class="mt-8"
      type="line"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  name: 'Chart',
  data() {
    return {
      series: [
        {
          name: 'Já USEI antes, e VOLTARIA a usar novamente',
          data: [8.7, 19.6, 28.8, 40.5]
        },
        {
          name: 'Já USEI antes, e não usaria novamente',
          data: [1.3, 1.9, 2.8, 6]
        },
        {
          name: 'Já OUVI FALAR a respeito, e GOSTARIA de aprender sobre',
          data: [32.2, 51.7, 46.6, 34.2]
        },
        {
          name: 'Já OUVI FALAR a respeito, e NÃO estou interessado',
          data: [30.7, 21.7, 20.4, 19]
        },
        {
          name: 'Nunca ouvi falar a respeito',
          data: [27.1, 5.5, 1.3, 0.4]
        }
      ],
      chartOptions: {
        chart: {
          height: 450,
          type: 'line',
          offsetX: 5,
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: false
          }
        },
        colors: ['#FE6A6A', '#FC8F8F', '#41C7C7', '#65E0E0', '#CECDCC'],
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'O que você acha do Vue? - %',
          align: 'left',
          style: {
            color: '#ffffff',
            fontSize: '12px'
          }
        },
        grid: {
          row: {
            colors: ['#222429', 'transparent'],
            opacity: 0.5
          }
        },
        markers: {
          size: 1
        },
        xaxis: {
          categories: ['2016', '2017', '2018', '2019'],
          title: {
            text: 'Anos'
          }
        },
        yaxis: {
          labels: {
            show: false
          }
        },
        legend: {
          position: 'top',
          horizontalAlign: 'center',
          itemMargin: {
            vertical: 5
          },
          labels: {
            colors: '#F3F7F9'
          }
        }
      }
    }
  }
}
</script>
