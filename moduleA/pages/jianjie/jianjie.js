// moduleA/pages/jianjie/jianjie.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    viewImage(){
      wx.previewImage({
        // current: '/images/jianjie.jpg', // 当前显示图片的http链接
        urls: ["/images/jianjie.jpg"] // 需要预览的图片http链接列表
      })
    }
  }
})
