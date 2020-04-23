(function() {

 $.getJSON('COVID-19_china_regionConfirm.json',function (data) {
     var dataList = data;
  // 1. 实例化对象
  var myMap = echarts.init(document.querySelector(".map .chart"));
  // 2. 指定配置和数据
  // 2. 指定配置和数据
  var option = {
    tooltip: {
        trigger: "item",
        formatter: function(e, t, n) {
            return  e.seriesName + "<br />" + e.name + "：" + e.value
        }
    },
    visualMap: {
        min: 0,
        max: 100000,
        left: '3%',
        bottom:'9%',
        showLabel: true,
        textStyle:{
          color:"white",
        },
        pieces: [
            {
                gte: 10000,
                label: "大于10000人",
                color: "#7f1100"
            },
            {
                gte: 1000,
                lt: 10000,
                label: "1000 - 9999 人",
                color: "#A1250A"
            },
            {
                gte: 500,
                lt: 1000,
                label: "500 - 999 人",
                color: "#C91014"

            },
            {
                gte: 100,
                lt: 500,
                label: "100 - 499 人",
                color: " #ff5428"

            },
            {
                gte: 10,
                lt: 100,
                label: "10 - 99 人",
                color: "#FE8664"

            },
            {
                gte: 1,
                lt: 10,
                label: "1 - 9 人",
                color: "#FFEFD7"
            },
            {
                value: 0,
                label: "0人",
                color: "#ffffff"}
        ],
        show: true
    },
    geo: {
        map: "china",
        roam: false,
        scaleLimit: {
            min: 1,
            max: 2
        },
        zoom: 1.25,
        top: 50,
        label: {
            normal: {
                show: true,
                fontSize: "12",
                fontWeight: 700,
                fontStyle: 'oblique',
                color: "rgba(0,0,0,0.7)"
            }
        },
        itemStyle: {
            normal: {
                //shadowBlur: 50,
                //shadowColor: 'rgba(0, 0, 0, 0.2)',
                borderColor: "rgba(0, 0, 0, 0.2)"
            },
            emphasis: {
                areaColor: "#f2d5ad",
                shadowOffsetX: 2,
                shadowOffsetY: 2,
                borderWidth: 1
            }
        }
    },
    series: [{
        name: "确诊病例",
        type: "map",
        geoIndex: 0,
        data: dataList['nowConfirm'],
    }]
};
  myMap.setOption(option);
  window.addEventListener("resize", function() {
      myMap.resize();
  });

    $(".map h2").on("click","button",function() {

        var obj = $(this).index();
        if(obj == 0)
        {
            var div = document.getElementById('nowConfirm');
            div.style.backgroundColor = "red";
            var div = document.getElementById('confirm');
            div.style.backgroundColor = "#e7e7e7";
            myMap.showLoading();
            var option = {
                series:[{
                    data:dataList['nowConfirm'],
                }]
            };
            myMap.hideLoading();
            myMap.setOption(option);

        }
        else if(obj == 1)
        {
            var div = document.getElementById('nowConfirm');
            div.style.backgroundColor = "#e7e7e7";
            var div = document.getElementById('confirm');
            div.style.backgroundColor = "red";
            myMap.showLoading();
            var option = {
                series:[{
                    data:dataList['confirm'],
                }]
            };
            myMap.hideLoading();
            option.dataList = dataList['confirm'];
            myMap.setOption(option);
        }

  });

 });
})();
