// pages/bookType/bookType.js

var baseData = require('../../data/data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    contentActive: '', // 内容栏选中id
    navActive: '', // 导航栏选中id
    types: [],
    bookTypes: []
  },

  //点击左侧导航，右侧内容滑动
  chooseType(e) {
    let id = e.currentTarget.dataset.id; //数据ID eg:no1
    this.setData({
      navActive: id,
      contentActive: "no" + id // 滚动标识scroll-into-view的值不能为纯数字
    })
  },

  //右侧内容滑动,左侧导航自动改变类别
  scroll: function(e) {
    //准备
    var scrollTop = e.detail.scrollTop; //此时滚动到的Y轴坐标值
    var scrollHeight = e.detail.scrollHeight; //页面需要滚动的总高度
    var typeLength = this.data.types.length; //所有种类
    var contentLength = this.data.bookTypes.length; //所有种类的所有书籍
    var everyContentHight = scrollHeight / (contentLength / 2); //每个类别的高度 (一行两本)

    //自动跳转的类别ID
    var seletedId = 0; //默认和循环序号相同，从0开始

    //分类，循环每类
    for (var j = 0; j < typeLength; j++) {
      //获取每类别共有几本书籍
      var count = 0;
      baseData.book_types.forEach(function(item, i) { //在所有书籍循环挑选某类别书籍
        if (item.id == 0) {
          count++;
        }
      });

      //一行两本，算当前类的总高度
      var actualHight = everyContentHight * Math.ceil(count / 2);

      //获取右侧内容下拉到的位置，判断此位置高度 是否在当前类别范围内！！
      if (scrollTop >= actualHight * j && scrollTop < actualHight * (j + 1)) {
        seletedId = j;
        count = 0; //当前类别书籍数用完清零
      }
    }

    //赋值给左侧导航栏，实现自动改变类别
    this.setData({
      navActive: seletedId
    });

  },

  otherType1: function() {
    wx.navigateTo({
      url: "/pages/bookType2/bookType2",
    })
  },
  otherType2: function () {
    wx.navigateTo({
      url: "/pages/bookType3/bookType3",
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      types: baseData.types,
      bookTypes: baseData.book_types,
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    wx.startPullDownRefresh(); //启动下拉刷新
    wx.stopPullDownRefresh(); //结束下拉刷新，暂不取返回值
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})