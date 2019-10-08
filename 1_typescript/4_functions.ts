function add(a: number, b: number): number {
    return a + b
}

function toUpper(str: string): string {
    return str.trim().toUpperCase()
}

interface Position {
    x: number | undefined,
    y: number | undefined
}

interface MyPositionWithDefault extends Position {
    default: string
}

function position(): Position
function position(a: number): MyPositionWithDefault
function position(a: number, b: number): Position


function position(a?: number, b?: number) {
    if (!a && !b) {
        return {x: undefined, y: undefined}
    }

    if (a && !b) {
        return {x: a, y: undefined, default: a.toString()}
    }

    return {x: a, y: b}

}

console.log('Empty', position()); // Empty { x: undefined, y: undefined }
console.log('One param', position(25)); // One param { x: 25, y: undefined, default: '25' }
console.log('Two params', position(10, 15)); // Two params { x: 10, y: 15 }