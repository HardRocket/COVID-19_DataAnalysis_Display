//全国现有确诊
(function() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  $.getJSON('COVID-19_china_rateData.json', function (data) {
    // 指定配置和数据
    var option = {
    color: ["red"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: "0%",
      top: "5%",
      right: "0%",
      bottom: "0%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: data['date'],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          rotate: 50,
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
            // width: 1,
            // type: "solid"
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "直接访问",
        type: "line",
        lineWidth: "50%",
        data: data['nowConfirm_Rate'],
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  };
    myChart.setOption(option);
  }),

  window.addEventListener("resize", function() {
    myChart.resize();
  });

  // 数据变化
  var dataAll = [
    { year: "2019", data: [200, 300, 300, 900, 1500, 1200, 600] },
    { year: "2020", data: [300, 400, 350, 800, 1800, 1400, 700] }
  ];

  $(".bar h2 ").on("click", "a", function() {
    option.series[0].data = dataAll[$(this).index()].data;
    myChart.setOption(option);
  });
})();

// 治愈率与病死率
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line .chart"));
$.getJSON('COVID-19_china_rateData.json', function (data) {
   // (1)准备数据
  // 2. 指定配置和数据
  var option = {
    color: ["#52E75B", "#71776B"],
    tooltip: {
      // 通过坐标轴来触发
      trigger: "axis",
      formatter: '日期：{b0}<br/>{a0}: {c0}%<br />{a1}: {c1}%',
    },
    legend: {
      // 距离容器10%
      right: "10%",
      top:"-2%",
      // 修饰图例文字的颜色
      textStyle: {
        color: "#4c9bfd"
      }
      // 如果series 里面设置了name，此时图例组件的data可以省略
      // data: ["邮件营销", "联盟广告"]
    },
    grid: {
      top: "5%",
      left: "0%",
      right: "2%",
      bottom: "0%",
      show: true,
      borderColor: "#012f4a",
      containLabel: true
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: data['date'],
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        rotate: 50,
        color: "rgba(255,255,255,.7)"
      },
      // 去除x坐标轴的颜色
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: "value",
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        formatter: '{value}%',
        color: "rgba(255,255,255,.7)"
      },
      // 修改y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [
      {
        name: "治愈率",
        type: "line",
        // 是否让线条圆滑显示
        smooth: true,
        data: data.data[0]
      },
      {
        name: "病死率",
        type: "line",
        smooth: true,
        data: data.data[1],
      }
    ]
  };
  // 3. 把配置和数据给实例对象
  myChart.setOption(option);

  // 重新把配置好的新数据给实例对象
  myChart.setOption(option);
})

  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

//城市疫情
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".pie .chart"));

  option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
      position: function(p) {
        //其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10];
      }
    },
    legend: {
      top: "90%",
      itemWidth: 10,
      itemHeight: 10,
      data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "城市疫情",
        type: "pie",
        center: ["50%", "42%"],
        radius: ["40%", "60%"],
        color: [
          "#f11111",
          "#066eab",
        ],
        label: { show: true },
        labelLine: { show: true },
        data: [
          { value: 20, name: "有病例城市" },
          { value: 318, name: "零病例城市" },
        ]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
// 学习进度柱状图模块

//境外输入data展示
(function() {
  // 基于准备好的dom，初始化echarts实例
  $.getJSON('COVID-19_china_regionImported.json',function (data) {
      var myChart = echarts.init(document.querySelector(".bar1 .chart"));
      var option = {
        color: ["#2f89cf"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "0%",
          top: "5%",
          right: "0%",
          bottom: "0%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: data['importedCase_regionSort']['regionName'],
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              rotate: 30,
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
              }
            },
            axisLine: {
              show: true
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
              }
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
                // width: 1,
                // type: "solid"
              }
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            }
          }
        ],
        series: [
          {
            name: "境外输入",
            type: "bar",
            barWidth: "50%",
            data: data['importedCase_regionSort']['regionValue'],
            itemStyle: {
              barBorderRadius: 5
            }
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
       $(".bar1 h2").on("click","a",function() {

        var obj = $(this).index();
        if(obj == 0)
        {
          myChart.showLoading();
          console.log(data)
          var option = {
                xAxis: [{
                  data: data['importedCase_regionSort']['regionName'],
                }],
                series:[{
                    type: 'bar',
                    data: data['importedCase_regionSort']['regionValue'],
                    barWidth: "50%",
                    itemStyle: {
                      barBorderRadius: 5
                    }
                }]
            };
          myChart.hideLoading();
          myChart.setOption(option);
        }
        else if(obj == 1)
        {
            myChart.showLoading();
            console.log(data)
            var option = {
                xAxis: [{
                  data: data['date'],
                }],
                series:[{
                    type: 'line',
                    data: data['importedCase_addNumber'],
                    lineWidth: "50%",
                }]
            };
            myChart.hideLoading();
            myChart.setOption(option);
        }
        else if(obj == 2)
        {
            myChart.showLoading();
            console.log(data)
            var option = {
                xAxis: [{
                  data: data['date'],
                }],
                series:[{
                    type: 'line',
                    data: data['importedCase_number'],
                    lineWidth: "50%",
                }]
            };
            myChart.hideLoading();
            myChart.setOption(option);
        }

  });
  })

})();

// 词云
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line1 .chart"));

  $.getJSON('COVID-19_wordCloud.json',function(data){

    var option = {
      tooltip: {},
      series: [ {
          type: 'wordCloud',
          gridSize: 2,
          sizeRange: [12, 18],
          rotationRange: [-30,0,-50, 50],
          rotationStep: 45,
          shape: 'pentagon',
          top: 'center',
          width: '100%',
          height: '90%',
          right: null,
          bottom: null,
          drawOutOfBound: true,
          autoSize: {
            enable: true,
            minSize: 14
          },
          textStyle: {
              normal: {
                  fontFamily: 'sans-serif',
                  fontWeight: 'bold',
                  fontSize:15,
                  color: function () {
                      return 'rgb(' + [
                          Math.round(Math.random() * 255),
                          Math.round(Math.random() * 255),
                          Math.round(Math.random() * 255)
                      ].join(',') + ')';
                  }
              },
              emphasis: {
                  shadowBlur: 10,
                  shadowColor: '#333'
              }
          },
          
          data:data
      } ]
  };
      
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
})
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 全国现有确诊构成
(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie1  .chart"));
  // 2. 指定配置项和数据
  $.getJSON('COVID-19_bar_data.json',function (data) {

  var option = {
    legend: {
      top: "90%",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12",
      }
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // 注意颜色写的位置
    color: [
      "#FFC300",
      "#60cda0",
      "#FF5733",
    ],
    series: [
      {
        name: "全国现有确诊构成",
        type: "pie",
        // 如果radius是百分比则必须加引号
        radius: ["20%", "60%"],
        center: ["50%", "42%"],
        roseType: "radius",
        data: data,
        // 修饰饼形图文字相关的样式 label对象
        label: {
          fontSize: 15
        },
        // 修饰引导线样式
        labelLine: {
          // 连接到图形的线长度
          length: 10,
          // 连接到文字的线长度
          length2: 10
        }
      }
    ]
  };

  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
      });
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();
