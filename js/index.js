//通过id获取元素backTop
var backTop = document.getElementById("backTop");
//需求：一开始返回顶部不显示 滚动一点之后再显示 点击返回顶部 回到顶部

window.onscroll = function () {
	//窗体滚动的时候 判断scrollTop如果大于0就显示返回顶部 否则就隐藏
	backTop.style.display = scroll().top > 0 ? "block" : "none";
};
//点击按钮要回去
backTop.onclick = function () {
	//渐渐的滚回去
	var timer = setInterval(function () {
		var target = 0;
		//获取页面当前滚动的距离
		var leader = scroll().top;
		var step = (target - leader) / 10;
		step = step > 0 ? Math.ceil(step) : Math.floor(step);
		leader = leader + step;
		//滚动到leader位置
		window.scrollTo(0, leader);
		if (leader == target) {
			//清除计时器
			clearInterval(timer);
		}
	}, 15);
};
//封装计算页面当前滚动的距离的函数
function scroll() {
	return {
		top:
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop ||
			0,
		left:
			window.pageXOffset ||
			document.documentElement.scrollLeft ||
			document.body.scrollLeft ||
			0,
	};
}
