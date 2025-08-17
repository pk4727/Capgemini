type on = string
type to = string | number
type th = 'hello'

// convert to more or less specific
let a: on = 'hello'
let b = a as to // less specific
let c = a as th // more specific

let d = <on>'hello'
let e = <string | number>'world'

const addConcat = (a: number, b: number, c: 'add' | 'concat'):
    number | string => {
    if (c === 'add') return a + b
    return '' + a + b
}

const add: number = addConcat(2, 3, 'add') as number
const concat: string = addConcat(2, 3, 'concat') as string // this is an error but ts not understand it

// unknown | double casting
(10 as unknown) as string