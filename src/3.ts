export {};

function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

let bmi1: (height: number, weight: number) => number = function (
  height: number,
  weight: number
): number {
  return weight / (height * height);
};

let bmi2: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height);

// オプショナルな引数　?をつける
let bmi3: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);

  if (printable) {
    console.log({ bmi });
  }
  return bmi;
};

// default引数
const nextSalary = (current: number, rate: number = 1.1) => {
  return current * rate;
};

// スプレット構文
const reducer = (accu: number, curr: number): number => {
  return accu + curr
}

const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer);
};

// オーバーロード　シグネチャー　予め関数の型を定義しておく　実態の関数では方の制約をする必要はない
function double(value: number): number
function double(value: string): string

function double(value: any): any {
  if (typeof value === 'number') {
    return value * 2
  } else {
    return value + value
  }
}


