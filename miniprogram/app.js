//app.js
App({
  // 小程序启动之后 触发
  onLaunch: function() {
    //云服务
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    //全局参数
    this.globalData = {
      userInfo: null
    }

  },


})