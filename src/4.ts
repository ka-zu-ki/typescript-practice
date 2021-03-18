export {};

class Person {
  name: string;
  // アクセス修飾子
  // private　インスタンスからのアクセスを制限する　Personクラスの内部ではアクセスできる　小クラスではアクセス不可
  private age: number;
  // protected　インスタンスからのアクセスを制限する　小クラスはアクセス可能
  protected nationality: string;

  // constructorはアノテーションしない　何も返さないから　voidもエラーになる
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
    return `name: ${this.name}, nationality: ${this.nationality}`;
  }
}

let taro = new Person('Taro', 10, 'Japan');
let hana = new Android('Hana', 10, 'Japan');

// 初期化の省略可能
class Person2 {
  constructor(public name: string, protected age: number) {}
}

const me = new Person2('ham', 33);

class MyNumberCard {
  // 参照、変更できない
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  // 参照できるようにする　変更はできない
  get owner() {
    return this._owner;
  }

  // 変更できる　参照できない
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('ham', 123324);

card.secretNumber = 111111111;

// readOnly修飾子
class VisaCard {
  constructor(public readonly owner: string) {}
}

let myCard = new VisaCard('aaa');

// 静的メンバ　初期化なし
class Me {
  static isProgrammer: boolean = true;
  static first: string = 'aaa';
  static last: string = 'iiii';

  static work() {
    return `Hey! ${this.first}`;
  }
}

// newでインスタンスを作る必要がない
// console.log(Me.work())

// 名前空間　exportする
namespace Japanese {
  export class Person1 {
    constructor(public name: string) {}
  }
}

namespace English {
  export class Person1 {
    constructor(
      public first: string,
      public middle: string,
      public last: string
    ) {}
  }
}

const me1 = new Japanese.Person1('aaaaaa');
const me1e = new English.Person1('aaaaaa', 'bb', 'ccccc');

// 継承
class Animal {
  constructor(public name: string) {}

  run(): string {
    return 'I can run'
  }
}

class Lion extends Animal {
  public speed: number

  constructor(name: string, speed: number) {
    // superで親クラスがnameを初期化している
    super(name)

    // speedの初期化は小クラスでやる
    this.speed = speed
  }

  run(): string {
    // 親クラスのrunメソッドを継承
    return `${super.run()} ${this.speed}km`
  }
}

let animal = new Animal('animal')
let lion = new Lion('lion', 80)

// 抽象クラス　抽象メソッド
abstract class Animal1 {
  abstract cry(): string
}

class Lion1 {
  cry() {
    return 'roar'
  }
}

class Tiger extends Animal1 {
  cry() {
    return 'grrrr'
  }
}

// 複数のクラスを継承することはできない
// 複数のInterfaceを継承することはできる
interface Kenja {
  ionazun(): void
}

interface Sehshi {
  kougeki(): void
}

class Jiro implements Kenja, Sehshi {
  ionazun(): void {
    console.log('ionazun')
  }

  kougeki(): void {
    console.log('kougeki')
  }
}

const jiro = new Jiro()
// jiro.ionazun()
// jiro.kougeki()
