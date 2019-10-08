const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 25;
const float: number = 2.5;
const num: number = 2e10;

const str: string = 'Hello Type';

const numArr: number[] = [1, 1, 2, 3, 5, 8, 13];
const numArr2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const words: Array<string> = ['1', '1', '2'];


// Tuple
const contact: [string, number] = ['Cat', 12];

// Any
let variable: any = 25;
variable = 'cat';
variable = [];

//==========
function sayMyName(name: string): void {
    console.log(name);
}
sayMyName('HI');

// Never
function throwError(message: string): never {
    throw new Error(message)
}

// Type
type Login = string;

const login: Login = 'admin';
// const login2: Login = 2;

type ID = string | number;

const id1: ID = 1;
const id2: ID = 'Cat';
//const id3: ID = false;


type SomeType = string | null | undefined;
