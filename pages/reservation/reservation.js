// pages/reservation.js
Page({
  data: {
    show:false,
    flag:false,
    reservationTime:"" // 预约时间
  },
  /*点击预约之后触发的事件 */
  bindTimeChange:function(e){ 
    this.setData({"reservationTime":e.detail.value}); // 存取用户的数据
    wx.showModal({
      cancelColor: 'cancelColor',
      content:'预约成功'+this.data.reservationTime
    })
    // 发送Ajax请求存取预约的信息
    // this.request()
  },
  request:function(e){
    // 发送请求的函数
  },
  findHistoryMsg:function(){
    console.log("查看成功");
  }
})
