Page({

  /**
   * 页面的初始数据
   */
  data: {
    Index: 0,
    navbarTitle: [
      "课程简介",
      "电子书",
      "习题解析",
      "历年真题"
    ],
    test:"【考核标准】讨论10%， 平时10%， 期中 20%， 期末60%。",
    introduction:" 系统介绍有机化学初步。各官能团结构、性质、制备及其相互转换和有机化学基本原理组成。涉及的官能团有：烷、烯、炔、卤代烃、醇、酚、醚、醛、酮、醌、羧酸、羧酸衍生物、胺、硝基化合物、杂环、氨基酸、碳水化合物等；涉及的基本原理有：立体化学、结构解析、自由基取代、亲电加成、亲电取代、亲核加成和亲核取代等机理初步。",
  },
  
  onNavBarTap: function (event) {
    // 获取点击的navbar的index
    let navbarTapIndex = event.currentTarget.dataset.navbarIndex
    // 设置data属性中的navbarActiveIndex为当前点击的navbar
    this.setData({
      Index: navbarTapIndex
    })
 
  },

  onBindAnimationFinish: function ({detail}) {
    this.setData({
      Index: detail.current
    }) 
  },

OpenDoc_1:function(){
  wx.showLoading({
    title: '加载中',
  })
  wx.downloadFile({
    url: 'https://7777-wwwzf-zju866-1304474639.tcb.qcloud.la/Class/%E7%89%A9%E7%90%86%E7%B1%BB/%E5%A4%A7%E5%AD%A6%E7%89%A9%E7%90%86%E2%85%A0/%E5%A4%A7%E7%89%A9%E4%B9%99%E8%AF%BE%E5%90%8E%E7%AD%94%E6%A1%88.pdf?sign=631245655c0b55d782b6168c3ed73452&t=1607514583',
    success: function (res) {
      var filePath = res.tempFilePath
      wx.hideLoading({
        complete: (res) => {},
      })
      wx.openDocument({
        filePath: filePath,
        success: function (res) {
          console.log('打开文档成功')
        }
      })
    
    }
  })
}
})