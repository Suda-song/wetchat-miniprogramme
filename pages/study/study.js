// pages/study/study.js
var subjectList = require("../data/subject.js")
/* var subjectListb = require("../data/subjectb.js")
var subjectListc = require("../data/subjectc.js")
var subjectListd = require("../data/subjectd.js") */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    subject:[],
    img:[{url:"../../icon/浙大.jpg"},{url:"../../icon/浙大2.jpg"},{url:"../../icon/浙大3.jpg"}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({subject:subjectList.subject0})
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

  },
  switchNav:function(e){
    var id = e.currentTarget.id;
    this.setData({currentTab:id});
    if (id == 0) {
      this.setData({subject:subjectList.subject0});
      
    }
    else if (id == 1) {
      this.setData({subject:subjectList.subject1});
    }
    else if (id == 2) {
      this.setData({subject:subjectList.subject2});
    }
    else if (id == 3) {
      this.setData({subject:subjectList.subject3});
    }
  }
})