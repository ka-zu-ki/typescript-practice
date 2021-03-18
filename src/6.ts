export {}

type Profile = {
  name: string
  age: number
}

//Partial　optionalな型で拡張できる
type PartialType = Partial<Profile>
type PropertyTypes = keyof Profile

// Required　必須な型として拡張できる
type RequiredType = Required<Profile>

// in keyof
// Partialを自作　nullも許容するようにする
type Optional<T> = { [P in keyof T]?: T[P] | null }
type OptionalProfile = Optional<Profile>


// readOnly
const me: Profile = {
  name: 'aa',
  age:11
}

me.age++

console.log(me)

type PersonalData = Readonly<Profile>

const friend: PersonalData = {
  name: 'aaaaa',
  age: 33
}

// friend.age++

type YomitoriSenyo<T> =  { readonly [P in keyof T]: T[P] }
type YomitoriProgile = YomitoriSenyo<Profile>

// Record型
type Prefectures = 'Tokyo' | 'Chiba' | 'Kanagawa'

type Covid19InfectionInfo = {
  kanji: string
  cases: number
}

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji: '東京', cases: 123 },
  Chiba: { kanji: '千葉', cases: 123 },
  Kanagawa: { kanji: '神奈川', cases: 123 },
}

// Exclude
type Debug = () => void
type SomeTypes = string | number | Debug
type a = Exclude<SomeTypes, Debug>
type b = Exclude<SomeTypes, Function>

// Extract
type c = Extract<SomeTypes, Debug>
type d = Extract<SomeTypes, Function>

// NonNullable
type NullableTypes = string | number | null | undefined
type NonNullableTypes = NonNullable<NullableTypes>

// Pick
type DetailedProfile = {
  name: string
  height: number
  weight: number
}

type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>

// Omit
type SmallProfile = Omit<DetailedProfile, 'height' >

// Return Type

