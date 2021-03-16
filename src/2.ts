import axios from 'axios'
export {};


let year: number = 1998;

let numbers: number[] = [1, 2, 3];

let numbers2: Array<number> = [1, 2, 3];

let string: Array<string> = ['a', 'b', 'c'];

let nijigen: number[][] = [
  [20, 49],
  [34, 56]
]

let hairetsu: (number | boolean | string)[] = [1, true, "fffff"]

// ユニオンタイプは方の順序まで制約しない
// let profile: (string | number)[] = ['aaaa', 12]
// profile = [12, 'dffdf']

// tuple型にする
let profile: [string, number] = ['aaaa', 12]

// 暫定で型をつける　any型　型制約はない
let url: string = "https://udemy-utils.herokuapp.com/api/v1/articles?token=token123"

axios.get(url).then((res) => {
  // オブジェクトの型を作れる　interface
  interface Article {
    id: number
    title: string
    description: string
  }

  let data: Article[]
  data = res.data
})

// 何もデータを返さないとき　void型
// undefinedのデータを返す
const returnNothing: () => void = () => {
  console.log("don't return anything")
}

let absence: null = null

let data: undefined = undefined

// 関数の中で例外が起こるとき　実行もreturnもないとき　never型
const error: (message: string) => never = () => {
  throw new Error(message)
}


let profile1: object = { name: 'aaa' }
profile1 = { birthday: 111 }

let profile2: {
  name: string
} = { name: 'aaaaa' }

profile2 = { name: "dddddd" }

// 型エイリアス　型の別名をつける　最初は大文字
type Mojiretu = string

const fooString: string = 'hello'
const fooMojiretu: Mojiretu = 'hello'

// 型を外に出せる
type Profile1 = {
  name: string,
  age: number
}

const example1: Profile1 = {
  name: 'aaaa',
  age: 19
}

// example1の型を継承できる
type Profile2 = typeof example1

// interfaceでも同じことができる
interface ObjectInterface {
  name: string
  age: number
}

let object: ObjectInterface = {
  name: 'aaaaaa',
  age: 33
}

// unknown型　any型の型制約があるバージョン
const kansu = (): number => 43

let numberAny: any = kansu()
let numberUnknown: unknown = kansu()

let sumAny = numberAny + 10
// typeガード　型を確認しながらコードを書く
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10
}

type Pitcher1 = {
  thorowing: number
}

type Batter1 = {
  batting: number
}

// intersection型
type TwoWay = Pitcher1 & Batter1

const sasaki: Pitcher1 = {
  thorowing: 145
}

const ochiai: TwoWay = {
  thorowing: 145,
  batting: 0.353
}

// union型
let value: number | string = 1
value = "foo"


// literal型
let week: 'sun'|'mon'|'tue'|'wed' = 'sun'
week = 'mon'
week = 'wed'

// enum型　自動で連番を付与してくれる
enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December
}

enum COLORS {
  RED = 'red',
  WHITE = 'white',
  GREEN = 'green',
  BLUE = 'blue',
  BLACK = 'black'
}

// 追記可能
enum COLORS {
  YELLOW = 'yellow'
}

console.log(COLORS.YELLOW)
