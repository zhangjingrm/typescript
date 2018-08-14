function greeter(name) {
    return "Hello:" + name;
}
var user = 'zhangjing';
document.body.innerHTML = greeter(user);
//布尔值
var isDone = false;
//数字
var decLiteral = 6;
//字符串
var sentence = 'bob';
//数组
var list1 = [1, 2, 3];
var list2 = [4, 5, 6];
var list3 = [1, false, 'free'];
//元组 Tuple--允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
var x = ['aaa', 12];
//枚举 enum类型是对js标准数据类型的一个补充
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
//Any
var notSure = 4;
notSure = 'maybe a string instead';
//void void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void
//声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
function warnUser() {
    console.log("this is a warning message");
}
var unusable = undefined;
//undefined
var u = undefined;
//null
var n = null;
//never never类型表示的是那些永不存在的值的类型
//never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。
function error(message) {
    throw new Error(message);
}
//类型断言
var someValue = 'this is a string';
var strLength = someValue.length;
var someValue1 = 'this is a string';
var strLength1 = someValue1.length;
