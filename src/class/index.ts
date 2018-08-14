//example-1
class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return "Hello:" + this.greeting;
  }
}

let greeter = new Greeter('world');


/*--------------------------------------------------------------------------------*/
//example-2
class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m`);
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof! Woof! ');
  }
}

const dog = new Dog();
dog.bark();


/*--------------------------------------------------------------------------------*/
//example-3
class Animal1 {
  name: string;

  constructor(theName: string) {
    this.name = theName;
  }

  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m`);
  }
}

class Snake1 extends Animal1 {
  constructor(name: string) {
    super(name); //Animal1.name || this.name
  }

  move(distanceInMeters = 5) {
    console.log('Slithering...');
    super.move(distanceInMeters);
  }
}

class Horse1 extends Animal1 {
  
  constructor(name: string) {
    super(name);
  }

  move(distanceInMeters = 45) {
    console.log('Galloping...');
    super.move(distanceInMeters);
  }
}

let sam = new Snake1('Sammy the Python'); 
let tom: Animal1 = new Horse1('Tommy the Palomino'); 

sam.move(); //Slithering... Sammy the Python moved 5m
tom.move(34); //Galloping... Tommy the Palomino moved 34m


/*--------------------------------------------------------------------------------*/
//example-4 公共，私有和受保护的修饰符 当成员被标记为private时，它就不能在声明它的类的外部访问
class Animal2 {
  private name: string;
  public constructor(theName: string) {
    this.name = theName;
  }
  public move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m`);
  }
}

/*--------------------------------------------------------------------------------*/
//example-5 把类当作借口使用
class Point {
  x: number;
  y: number;
}

interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = {
  x:3,
  y:2,
  z:1
};

































