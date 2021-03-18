// 型の互換性
let fooCompatible: any
let barCompatible: string = 'Typescript'

fooCompatible = barCompatible

// interfaceとclassは関係名が型に互換性があればいい
interface Animal {
  age: number
  name: string
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal
me = new Person(22, 'aaaa')

// ジェネリクス型　汎用的な型
const echo = <T>(arg: T): T => {
  return arg
}

// <>の中に型を指定する
// console.log(echo<number>(100))
// console.log(echo<string>('aaaaaa'))

class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value
  }
}

// console.log(new Mirror<number>(123).echo())
// console.log(new Mirror<string>("aaaaaa").echo())

// 型アサーション
let name1: any = 'ham'

// 二通りの書き方があるがJSXの記法と被るためasを使う
let length1 = (name1 as string).length 
// let length1 = (<string>name1).length 


// constアサーション
let nickname = 'dddddd' as const
// nickname = 'aaaaaaa'

let obj = {
  name: 'ssssss',
  height: 123
} as const

// obj.name = 'vvvvv'

// Nullable types
// 初期値でnullを許容する必要があるとき
let prof: { name: string, age: number | null } = {
  name: 'aaaaaaa',
  age: null
}


// indexシグネチャー
interface Profile {
  underTwenty: boolean
  [index: string]: string | number | boolean
}

let profile: Profile = { underTwenty: false }

profile.name = 'aaaaaa'
profile.age = 3434

