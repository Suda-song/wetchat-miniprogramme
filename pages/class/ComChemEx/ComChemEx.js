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
    test:"成绩评定以平时成绩为主，平时成绩按以上的课程要求对预习、操作、报告和综合能力等进行评定，占总成绩的70-75％，期末进行实验理论考试，考试成绩占总成绩的25-30%",
    introduction:" 普通化学实验（乙）是通过在实验室完成一些富知识性、应用性和趣味性的基础化学实验，旨在让学生更好地了解和理解化学基本理论和知识的平台。其教学目的是使学生获得常见化学元素及其化合物性质方面的知识,了解化学已广泛渗透到生命科学、材料科学、环境科学、能源科学等众多学科领域。同时，注重培养学生实事求是的科学态度、开拓钻研的创新能力，使学生得到全面的化学素质教育。",
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
    url: 'https://7777-wwwzf-zju866-1304474639.tcb.qcloud.la/Class/%E5%8C%96%E5%AD%A6%E7%B1%BB/%E6%99%AE%E9%80%9A%E5%8C%96%E5%AD%A6%E5%AE%9E%E9%AA%8C/%E4%B9%99%E9%85%B8%E8%A7%A3%E7%A6%BB%E5%BA%A6%E5%92%8C%E8%A7%A3%E7%A6%BB%E5%B8%B8%E6%95%B0%E7%9A%84%E6%B5%8B%E5%AE%9A%E8%AE%B2%E4%B9%89.pdf?sign=fbeda4ec5fc3b93a7120e8f386b056fc&t=1609602327',
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
},
OpenDoc_2:function(){
  wx.showLoading({
    title: '加载中',
  })
  wx.downloadFile({
    url: 'https://7777-wwwzf-zju866-1304474639.tcb.qcloud.la/Class/%E5%8C%96%E5%AD%A6%E7%B1%BB/%E6%99%AE%E9%80%9A%E5%8C%96%E5%AD%A6%E5%AE%9E%E9%AA%8C/%E5%A4%A9%E7%84%B6%E6%B0%B4%E7%A1%AC%E5%BA%A6%E7%9A%84%E6%B5%8B%E5%AE%9A%E8%AE%B2%E4%B9%89.pdf?sign=dd5f3e251a5ce9a0d63b7a8fdbdfcc81&t=1609602419',
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
},
OpenDoc_3:function(){
  wx.showLoading({
    title: '加载中',
  })
  wx.downloadFile({
    url: 'https://7777-wwwzf-zju866-1304474639.tcb.qcloud.la/Class/%E5%8C%96%E5%AD%A6%E7%B1%BB/%E6%99%AE%E9%80%9A%E5%8C%96%E5%AD%A6%E5%AE%9E%E9%AA%8C/%E5%A4%A9%E7%84%B6%E6%B0%B4%E7%A1%AC%E5%BA%A6%E7%9A%84%E6%B5%8B%E5%AE%9A%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.pdf?sign=d52635931601c2ef6f584162da02a77f&t=1609602514',
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
},
OpenDoc_4:function(){
  wx.showLoading({
    title: '加载中',
  })
  wx.downloadFile({
    url: 'https://7777-wwwzf-zju866-1304474639.tcb.qcloud.la/Class/%E5%8C%96%E5%AD%A6%E7%B1%BB/%E6%99%AE%E9%80%9A%E5%8C%96%E5%AD%A6%E5%AE%9E%E9%AA%8C/%E9%85%B8%E7%A2%B1%E4%BA%92%E6%BB%B4%E7%BB%83%E4%B9%A0%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.pdf?sign=993bb29d0ae8ac8d57970a5ee9cf92fe&t=1609602559',
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
},
OpenDoc_5:function(){
  wx.showLoading({
    title: '加载中',
  })
  wx.downloadFile({
    url: 'https://7777-wwwzf-zju866-1304474639.tcb.qcloud.la/Class/%E5%8C%96%E5%AD%A6%E7%B1%BB/%E6%99%AE%E9%80%9A%E5%8C%96%E5%AD%A6%E5%AE%9E%E9%AA%8C/%E9%98%BF%E5%8F%B8%E5%8C%B9%E6%9E%97%E7%BA%AF%E5%BA%A6%E5%88%86%E6%9E%90%EF%BC%88%E7%86%94%E7%82%B9%E5%92%8C%E5%90%AB%E9%87%8F%E6%B5%8B%E5%AE%9A%EF%BC%89%E8%AE%B2%E4%B9%89.pdf?sign=bd3560cea82393928f37271b6a71f79e&t=1609602650',
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
},
OpenDoc_6:function(){
  wx.showLoading({
    title: '加载中',
  })
  wx.downloadFile({
    url: 'https://7777-wwwzf-zju866-1304474639.tcb.qcloud.la/Class/%E5%8C%96%E5%AD%A6%E7%B1%BB/%E6%99%AE%E9%80%9A%E5%8C%96%E5%AD%A6%E5%AE%9E%E9%AA%8C/%E9%98%BF%E5%8F%B8%E5%8C%B9%E6%9E%97%E7%BA%AF%E5%BA%A6%E5%88%86%E6%9E%90%EF%BC%88%E7%86%94%E7%82%B9%E5%92%8C%E5%90%AB%E9%87%8F%E6%B5%8B%E5%AE%9A%EF%BC%89%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.pdf?sign=639eda47fe827078e61468cee91105d5&t=1609602683',
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
},
OpenDoc_7:function(){
  wx.showLoading({
    title: '加载中',
  })
  wx.downloadFile({
    url: 'https://7777-wwwzf-zju866-1304474639.tcb.qcloud.la/Class/%E5%8C%96%E5%AD%A6%E7%B1%BB/%E6%99%AE%E9%80%9A%E5%8C%96%E5%AD%A6%E5%AE%9E%E9%AA%8C/%E9%98%BF%E5%8F%B8%E5%8C%B9%E6%9E%97%E7%9A%84%E5%90%88%E6%88%90%E8%AE%B2%E4%B9%89.pdf?sign=74d2e809cb83a86c88cef6ddf5a06180&t=1609602862',
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
},
OpenDoc_8:function(){
  wx.showLoading({
    title: '加载中',
  })
  wx.downloadFile({
    url: 'https://7777-wwwzf-zju866-1304474639.tcb.qcloud.la/Class/%E5%8C%96%E5%AD%A6%E7%B1%BB/%E6%99%AE%E9%80%9A%E5%8C%96%E5%AD%A6%E5%AE%9E%E9%AA%8C/%E7%A2%98%E6%97%B6%E9%92%9F%E5%8F%8D%E5%BA%94%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.pdf?sign=1d3e4d612dc631a9060594581057c124&t=1609602918',
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