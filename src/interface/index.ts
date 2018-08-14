//example-1
function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}
let myObj = {
  size: 10,
  label: 'Size 10 Object'
}
printLabel(myObj);


interface LabelledValue {
  label: string
}
function printLabel1(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}
printLabel1(myObj);

/*-------------------------------------------------------------------------------------------------------------------------*/
//example-2
interface SquareConfig {
  color?: string; //可选属性：一个对象不需要匹配接口完全形状的时候使用，在属性后面加？
  width?: number;
}
function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: 'white', area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
let mySquare = createSquare({color: "black"});

/*-------------------------------------------------------------------------------------------------------------------------*/
//example-3 只读属性
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 5, y: 20 };
// p1.x = 2; //不能给p1.x赋值

/*-------------------------------------------------------------------------------------------------------------------------*/
//example-4 如果SquareConfig带有上面定义的color和width属性，并且还会带有任意数量的其他属性
interface SquareConfig1 {
  color?: string;
  width?: number;
  [propName: string]: any;
}

/*-------------------------------------------------------------------------------------------------------------------------*/
//example-5 函数类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}

let mySearch1: SearchFunc;
mySearch1 = function(src: string, sub: string) {
  let result = src.search(sub);
  return result > -1;
}



/*-------------------------------------------------------------------------------------------------------------------------*/
//example-6 可索引的类型
interface StringArray {
  [index: number]: string;
}



/*-------------------------------------------------------------------------------------------------------------------------*/




/*-------------------------------------------------------------------------------------------------------------------------*/




/*-------------------------------------------------------------------------------------------------------------------------*/




/*-------------------------------------------------------------------------------------------------------------------------*/





