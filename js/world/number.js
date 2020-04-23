$.ajax({
    url: "COVID-19_global_numberInfo.json",//json文件位置
    type: "GET",//请求方式为get
    dataType: "json", //返回数据格式为json
    success: function(data) {//请求成功完成后要执行的方法
        //each循环 使用$.each方法遍历返回的数据date
        //console.log(data);
        //人数

        //现有确诊人数
        document.getElementById("globalTotal_nowConfirm").innerHTML = data['globalTotal']['nowConfirm'];

        //累计确诊人数
        document.getElementById("globalTotal_confirm").innerHTML = data['globalTotal']['confirm'];
        //累计治愈人数
        document.getElementById("globalTotal_heal").innerHTML = data['globalTotal']['heal'];
        //累计死亡人数
        document.getElementById("globalTotal_dead").innerHTML = data['globalTotal']['dead'];



        //现有确诊变化人数
        if(data['globalTotal']['nowConfirmAdd'] >= 0)
        {
            document.getElementById("globalAdd_nowConfirm").innerHTML = "+"+data['globalTotal']['nowConfirmAdd'];
        }
        else
        {
            document.getElementById("globalAdd_nowConfirm").innerHTML = data['globalTotal']['nowConfirmAdd'];
        }

        
        //累计确诊人数变化
        document.getElementById("globalAdd_confirm").innerHTML = "+"+data['globalTotal']['confirmAdd'];
        //累计治愈人数变化
        document.getElementById("globalAdd_heal").innerHTML = "+"+data['globalTotal']['healAdd'];
        //累计死亡人数变化
        document.getElementById("globalAdd_dead").innerHTML = "+"+data['globalTotal']['deadAdd'];
    }
 })