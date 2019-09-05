// components/opr-card/opr-card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    oprInfo: Object
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    //   点击team-card自动触发event事件（可以bind），同时返回teamKey
    onClick: function() {
      var teamKey = this.properties.oprInfo.key;
      this.triggerEvent('event', teamKey);
    }
  }
});
