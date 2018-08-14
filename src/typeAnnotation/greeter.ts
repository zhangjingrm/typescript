function greeter(name: string) {
  return "Hello:" + name;
}
let user = 'zhangjing'
document.body.innerHTML = greeter(user);


//布尔值
let isDone: boolean = false;

//数字
let decLiteral: number = 6;

//字符串
let sentence: string = 'bob';

//数组
let list1: number[] = [1,2,3];
let list2: Array<number> = [4,5,6];
let list3: any[] = [1, false, 'free'];

//元组 Tuple--允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
let x: [string, number] = ['aaa', 12];

//枚举 enum类型是对js标准数据类型的一个补充
enum Color { Red, Green, Blue};
let c: Color = Color.Green;

//Any
let notSure: any = 4;
notSure = 'maybe a string instead';

//void void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void
 //声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
function warnUser(): void {
  console.log("this is a warning message");
}

let unusable: void = undefined;

//undefined
let u: undefined = undefined;

//null
let n: null = null;

//never never类型表示的是那些永不存在的值的类型
 //never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。
function error(message: string): never {
  throw new Error(message);
}

//类型断言
let someValue: any = 'this is a string';
let strLength: number = (<string>someValue).length;

let someValue1: any = 'this is a string';
let strLength1: number = (someValue1 as string).length;

















