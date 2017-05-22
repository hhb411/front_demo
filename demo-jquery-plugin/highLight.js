//jquery插件：高亮显示元素
//用法示例：$("#p1").highLight({foreground:"blue", background:"#ccc"})
(function(){
	$.fn.extend({
		highLight: hightLight
	});
	//公开插件方法
	function hightLight(option) {
		//校验输入
		if (!isValid(option)) {
			return;
		}
		//覆盖插件默认参数
		var opts = $.extend({}, defaults, option);
		//遍历
		var that = this.each(function() {//这里的this 就是 jQuery对象
			//获取当前dom 的 jQuery对象，这里的this是当前循环的dom
			var $this = $(this);
			//设置高亮效果
			$this.css({
				backgroundColor: opts.background,
				color: opts.foreground
			});
			//格式化文本
			var markup = $this.html();
			$this.html($.fn.highLight.format(markup));
		});
		return that;//for链式调用
	}
	
	//插件默认参数（不公开）
	var defaults = {
		background: 'yellow',
		foreground: 'red'
	}
  
  //格式化。（公开）用户可以通过覆盖该方法达到不同的格式化效果
  $.fn.highLight.format = function (str) {
      return "<strong>" + str + "</strong>";
  }
  
  //校验输入（不公开）
  function isValid(option) {
		return !option || (option && typeof option === "object") ? true : false;
  }
})();