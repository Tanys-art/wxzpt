// pages/museum.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Pimage:[
      "http://8470865.s21i.faiusr.com/2/ABUIABACGAAg04nu_QUotrSV4Acw8wI4qwQ.jpg",
      "http://8470865.s21i.faiusr.com/2/ABUIABACGAAg1Inu_QUoq5qu3wMw8wI4qwQ.jpg",
      "http://8470865.s21i.faiusr.com/2/ABUIABACGAAgj5-33QUowO6JngYw8wI4qwQ.jpg",
      "http://8470865.s21i.faiusr.com/2/ABUIABACGAAg0azJ7QUo_8OUtwMw8wI4qwQ.jpg",
      "http://8470865.s21i.faiusr.com/2/ABUIABACGAAgocGM1gUo6O7p3AQw8wI4qwQ.jpg",
      "http://8470865.s21i.faiusr.com/2/ABUIABACGAAgvIbu_QUoiNHA5AMw8wI4qwQ.jpg",
      "http://8470865.s21i.faiusr.com/2/ABUIABACGAAgypXT-QUo292BTTDzAjirBA.jpg",
      "http://8470865.s21i.faiusr.com/2/ABUIABACGAAg0azJ7QUo2OHl3QQw8wI4qwQ.jpg",
      "http://8470865.s21i.faiusr.com/2/ABUIABACGAAg0azJ7QUon8yxmgQw8wI4qwQ.jpg",
      "http://8470865.s21i.faiusr.com/2/ABUIABACGAAgmsGM1gUowJWj5QQw8wI4qwQ.jpg",
      "http://8470865.s21i.faiusr.com/2/ABUIABACGAAgm8GM1gUo7NLY9gcw8wI4qwQ.jpg",
      "http://8470865.s21i.faiusr.com/2/ABUIABACGAAgn8GM1gUo5JqaqQQw8wI4qwQ.jpg",
      "http://8470865.s21i.faiusr.com/2/ABUIABACGAAgo5-33QUonriiiQcw8wI4qwQ.jpg",
      "http://8470865.s21i.faiusr.com/2/ABUIABACGAAg04nu_QUowJuf6wMw8wI4qwQ.jpg",
      "http://8470865.s21i.faiusr.com/2/ABUIABACGAAg1Inu_QUokOulxQMw8wI4qwQ.jpg",
      "http://8470865.s21i.faiusr.com/2/ABUIABACGAAg5onu_QUo-fzp7wcw8wI4qwQ.jpg",
      "http://8470865.s21i.faiusr.com/2/ABUIABACGAAg04nu_QUotrSV4Acw8wI4qwQ.jpg",
      "http://8470865.s21i.faiusr.com/2/ABUIABACGAAg1Inu_QUoq5qu3wMw8wI4qwQ.jpg",
      "http://8470865.s21i.faiusr.com/2/ABUIABACGAAgj5-33QUowO6JngYw8wI4qwQ.jpg",
      "http://8470865.s21i.faiusr.com/2/ABUIABACGAAg0azJ7QUo_8OUtwMw8wI4qwQ.jpg",
      "http://8470865.s21i.faiusr.com/2/ABUIABACGAAgocGM1gUo6O7p3AQw8wI4qwQ.jpg"
    ],
    grids1:[
      {
        image:"add",
        text:"企业文化"
      },
      {
        image:"add",
        text:"地理位置"
      },
      {
        image:"add",
        text:"博物馆官网"
      },
      {
        image:"add",
        text:"酒文化"
      },
      {
        image:"add",
        text:"企业动态"
      },
      {
        image:"add",
        text:"产品鉴赏"
      },
    ]
  },
  positionShow:function(){
    console.log("hello");
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        wx.openLocation({
          latitude,
          longitude,
          scale: 18
        })
      }
     })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
// {
//   "usingComponents": {
//     "i-cell-group": "/components/dist/cell-group/index",
//     "i-cell": "/components/dist/cell/index"
//   }
// }