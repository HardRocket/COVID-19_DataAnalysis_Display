$.ajax({
    url: "COVID-19_china_numberInfo.json",//json文件位置
    type: "GET",//请求方式为get
    dataType: "json", //返回数据格式为json
    success: function(data) {//请求成功完成后要执行的方法
        //each循环 使用$.each方法遍历返回的数据date
        console.log(data);
        //人数

        //现有确诊人数
        document.getElementById("chinaTotal_nowConfirm").innerHTML = data['chinaTotal']['nowConfirm'];
        //无症状感染者人数
        document.getElementById("chinaTotal_noInfect").innerHTML = data['chinaTotal']['noInfect'];
        // document.getElementById("chinaTotal_nowSevere").innerHTML = data['chinaTotal']['nowSevere'];

        //境外输入人数
        document.getElementById("chinaTotal_importedCase").innerHTML = data['chinaTotal']['importedCase'];
        //累计确诊人数
        document.getElementById("chinaTotal_confirm").innerHTML = data['chinaTotal']['confirm'];
        //累计治愈人数
        document.getElementById("chinaTotal_heal").innerHTML = data['chinaTotal']['heal'];
        //累计死亡人数
        document.getElementById("chinaTotal_dead").innerHTML = data['chinaTotal']['dead'];



        //现有确诊变化人数
        if(data['chinaAdd']['nowConfirm'] >= 0)
        {
            document.getElementById("chinaAdd_nowConfirm").innerHTML = "+"+data['chinaAdd']['nowConfirm'];
        }
        else
        {
            document.getElementById("chinaAdd_nowConfirm").innerHTML = data['chinaAdd']['nowConfirm'];
        }

        //无症状感染者变化人数
        if(data['chinaAdd']['noInfect'] >= 0)
        {
            document.getElementById("chinaAdd_noInfect").innerHTML = "+"+data['chinaAdd']['noInfect'];
        }
        else
        {
            document.getElementById("chinaAdd_noInfectt").innerHTML = "-"+data['chinaAdd']['noInfect'];
        }

        //境外输入人数变化
        if(data['chinaAdd']['importedCase'] >= 0)
        {
            document.getElementById("chinaAdd_importedCase").innerHTML = "+"+data['chinaAdd']['importedCase'];
        }
        else
        {
            document.getElementById("chinaAdd_importedCase").innerHTML = "-"+data['chinaAdd']['importedCase'];
        }
        
        //累计确诊人数变化
        document.getElementById("chinaAdd_confirm").innerHTML = "+"+data['chinaAdd']['confirm'];
        //累计治愈人数变化
        document.getElementById("chinaAdd_heal").innerHTML = "+"+data['chinaAdd']['heal'];
        //累计死亡人数变化
        document.getElementById("chinaAdd_dead").innerHTML = "+"+data['chinaAdd']['dead'];
    }
 })