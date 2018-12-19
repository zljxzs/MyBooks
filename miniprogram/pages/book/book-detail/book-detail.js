// pages/bookType/bookType.js

var bookData = require('../../../data/data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取文章详情内容
    var postid = options.id;
    var bookDetail = bookData.bookList[postid];
    this.setData(bookDetail);
    // 设置文章id为页面共享
    this.data.currentPostId = postid;
    //获取临时用户
    this.setData({
      userInfo: bookData.userInfo,
    });
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
    wx.startPullDownRefresh(); //启动下拉刷新
    wx.stopPullDownRefresh(); //结束下拉刷新，暂不取返回值
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