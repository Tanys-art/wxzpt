// moduleA/pages/xuanc/xuanc.js
Page({
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
    current_scroll: 'tab1'
  },
  handleChange ({ detail }) {
    this.setData({
        current: detail.key
    });
},
})

