import { useEffect, useRef } from "react";
import * as echarts from "echarts";

const Echart = () => {
  const echartRef = useRef(null)
  const renderEchart = () => {
    console.log("执行次数");
    let myChart = echarts.init(document.getElementById("chart1"));
    let myChart1 = echarts.init(echartRef.current);
    myChart.setOption({
      title: {
        text: "K线图",
      },
      tooltip: {},
      xAxis: {
        data: [
          "2017-10-24",
          "2017-10-25",
          "2017-10-26",
          "2017-10-27",
          "2017-10-28",
          "2017-10-29",
          "2017-10-30",
        ],
      },
      yAxis: {},
      series: [
        {
          type: "candlestick",
          data: [
            [20, 34, 10, 38],
            [40, 35, 30, 50],
            [31, 38, 33, 44],
            [38, 15, 5, 42],
            [28, 9, 15, 33],
            [20, 10, 20, 40],
            [10, 19, 26, 60],
          ],
        },
      ],
    });
    myChart1.setOption( {
      title: {
        text: '图2'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {},
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          dataView: { readOnly: false },
          magicType: { type: ['line', 'bar'] },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} °C'
        }
      },
      series: [
        {
          name: 'Highest',
          type: 'line',
          data: [10, 11, 13, 11, 12, 12, 9],
          markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' }
            ]
          },
          markLine: {
            data: [{ type: 'average', name: 'Avg' }]
          }
        },
        {
          name: 'Lowest',
          type: 'line',
          data: [1, -2, 2, 5, 3, 2, 0],
          markPoint: {
            data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }]
          },
          markLine: {
            data: [
              { type: 'average', name: 'Avg' },
              [
                {
                  symbol: 'none',
                  x: '90%',
                  yAxis: 'max'
                },
                {
                  symbol: 'circle',
                  label: {
                    position: 'start',
                    formatter: 'Max'
                  },
                  type: 'max',
                  name: '最高点'
                }
              ]
            ]
          }
        }
      ]
    });
  };

  useEffect(() => {
    renderEchart();
  }, []);

 

  return (
    <div>
      <div style={{ width: "800px", height: "350px" }} id="chart1"></div>
      <div style={{ width: "1000px", height: "350px" }} ref={ echartRef }></div>
    </div>
  );
};
export default Echart;
