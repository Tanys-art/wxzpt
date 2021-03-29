// pages/guidedTour.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: [''],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: true,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    current: 'tab1',
    current_scroll: 'tab1',
    forList:[1],
    wineCultureList:[{
      "title": "曾品堂成为《陈年白酒收藏评价指标体系》起草单位",
      "date": "2019/11/04",
      "content": "日前，中国《陈年白酒收藏评价指标体系》标准高峰论坛在北京召开，江西陈香老酒实业有限公司（曾品堂）成为《陈年白酒收藏...",
      "detail": [
          "日前，中国《陈年白酒收藏评价指标体系》标准高峰论坛在北京召开，江西陈香老酒实业有限公司（曾品堂）成为《陈年白酒收藏评价指标体系》标准主要起草单位，同时，曾品堂创始人曾宇老师成为该标准主要起草人。",
          "http://8470865.s21i.faiusr.com/2/ABUIABACGAAghbf_7QUoxJqM5AcwoAs4uAg!600x600.jpg",
          "《陈年白酒收藏评价指标体系》标准高峰论坛对“标准”标注的执行使用说明，就如何借助标准提高陈年白酒经营企业品牌和影响力进行解读，并颁发《陈年白酒收藏评价指标体系》标准起草单位和起草人荣誉证书。",
          "http://8470865.s21i.faiusr.com/2/ABUIABACGAAgsbf_7QUowNy-NTCgCzi4CA!600x600.jpg",
          "近几年，陈年白酒收藏价值越来越受到普通大众的关注，陈年白酒收藏领域涌现许多民间资本、闲置资金，参与陈年白酒收藏投资以及成为一种发展趋势。然而陈年白酒收藏领域却鱼龙混杂、泥沙俱下，制定《陈年白酒收藏评价指标体系》标准已经迫在眉睫。",
          "http://8470865.s21i.faiusr.com/2/ABUIABACGAAg87j_7QUo5srR3gIwwAw4qgg!600x600.jpg",
          "此次论坛旨在推动《陈年白酒收藏评价指标体系》标准的执行，提高酒类收藏爱好者对陈年白酒评估鉴定能力，提升陈年白酒经营企业品脚影响力及经营管理规范，规范陈年白酒收藏市场交易行为，营造风清气正的行业风气。",
          "http://8470865.s21i.faiusr.com/2/ABUIABACGAAgsbj_7QUokPrJ0QEwuAg4oAs!800x800.jpg",
          "《陈年白酒收藏评价指标体系》标准首次以文字形式对“中国陈年白酒”进行了定义：中华人民共和国合法酒类企业生产，灌装出品并经过一段时间的贮存，未经任何人为的外观改变，具有较高收藏价值和经济价值的白酒。",
          "http://8470865.s21i.faiusr.com/2/ABUIABACGAAgmLn_7QUo3LXvrwUwuAg4oAs!800x800.jpg",
          "此次标准由中国收藏家协会联合中国标准化研究院、江南大学生物工程学院，邀请曾宇老师及其他中国陈年白酒收藏界的资深藏家、相关文化学者，经过酝酿研讨、意见征集、专家论证、反复修改之后完成。此外，曾品堂作为具有实践经验的酒类运营实体，也在主要起草单位之列。这一标准制定，填补了陈年白酒收藏界的空白，标志着陈年白酒收藏从此进入标准化时代。",
          "正是一如既往的严格要求和高标准，使得曾品堂从众多优秀企业中脱颖而出，成为《陈年白酒收藏评价指标体系》标准起草单位，曾宇老师与各专家学者同列标准起草人，更是对曾品堂19年陈年白酒收藏领域耕耘的肯定。此次的荣誉授予，必将成为曾品堂发展有力的监督与助推器，曾品堂将继续发力，将中国传统酒文化的复兴使命贯彻到底！"
      ]
  }],
    entrepriseNewsList:[1,2,3,4,5],
    fourSences:[1,2,3],
    showRoom:[1,2],
  },
  handleChange:function({ detail }){
    this.setData({
        current: detail.key
    })
  },
  showdetail:function(e){
    console.log(e)
    // 导航到细节信息页面
    wx.navigateTo({
      url: "/moduleC/pages/pageDetail/pageDetail",
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', e.currentTarget.dataset.jdata.detail)
      }
    })
    // console.log("细节的信息")
  },
  wineC:function(e){
    // wx.request({
    //   url: 'http://stuhlq.ltd/wineCultrue',
    //   success:function(data){
    //     console.log(data)
    //   },
    //   fail:function(err){
    //     console.log(err)
    //   }
    // })
    this.setData({"forList":this.data.wineCultureList})
  },
  entrepriseN:function(e){
    this.setData({"forList":this.data.entrepriseNewsList})
  },
  fourS:function(e){
    this.setData({"forList":this.data.fourSences})
  },
  showR:function(e){
    this.setData({"forList":this.data.showRoom})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({"forList":this.data.wineCultureList})
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