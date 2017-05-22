//类示例

//用function来模拟类
function Obj1() {
	var v1 = "aaa";
	function getV1() {
		return v1;
	}
	function setV1(v1) {
		this.v1 = v1;
	}
	return {
		//只有return的才对外公布，其余都是private
		getV1: getV1,
		setV1: setV1
	}
}

//证明v1不可访问，getV1可访问
var obj1 = new Obj1();
console.log(obj1.v1); //undefined
console.log(obj1.getV1()); //aaa

//证明每个对象都有一个v1，即v1不是static变量
obj1.setV1("bbb");
var obj2 = new Obj1();
obj2.setV1("ccc");
console.log(obj1.v1);//bbb
console.log(obj2.v1);//ccc
