// moduleA/pages/guanw/guanw.js
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
    contents:"zengpintang.net"
  },
  /**
   * 组件的方法列表
   */
  
  methods: {
    copyText (e) {
      // console.log(e)
      wx.setClipboardData({
        data: e.currentTarget.dataset.text,
        success: function (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制成功'
              })
            }
          })
        }
      })
    },
  }
})
