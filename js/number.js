$.ajax({
    url: "COVID-19_china_numberInfo.json",//json文件位置
    type: "GET",//请求方式为get
    dataType: "json", //返回数据格式为json
    success: function(data) {//请求成功完成后要执行的方法
        //each循环 使用$.each方法遍历返回的数据date
        console.log(data)
        console.log(data['chinaTotal']['confirm'])
        document.getElementById("chinaTotal_nowConfirm").innerHTML = data['chinaTotal']['nowConfirm'];
        document.getElementById("chinaTotal_nowSevere").innerHTML = data['chinaTotal']['nowSevere'];
        document.getElementById("chinaTotal_importedCase").innerHTML = data['chinaTotal']['importedCase'];
        document.getElementById("chinaTotal_confirm").innerHTML = data['chinaTotal']['confirm'];
        document.getElementById("chinaTotal_heal").innerHTML = data['chinaTotal']['heal'];
        document.getElementById("chinaTotal_dead").innerHTML = data['chinaTotal']['dead'];

        document.getElementById("chinaAdd_nowConfirm").innerHTML = data['chinaAdd']['nowConfirm'];
        document.getElementById("chinaAdd_nowSevere").innerHTML = data['chinaAdd']['nowSevere'];
        document.getElementById("chinaAdd_importedCase").innerHTML = "+"+data['chinaAdd']['importedCase'];
        document.getElementById("chinaAdd_confirm").innerHTML = "+"+data['chinaAdd']['confirm'];
        document.getElementById("chinaAdd_heal").innerHTML = "+"+data['chinaAdd']['heal'];
        document.getElementById("chinaAdd_dead").innerHTML = "+"+data['chinaAdd']['dead'];
    }
 })