const obj = {
    name: 'Dima',
    age: 30,
    job: 'React developer'
};

const entries = [
    ['name', 'Dima'],
    ['age', 30],
    ['job', 'React developer']
];

// console.log(Object.entries(obj));
// console.log(Object.fromEntries(entries));

const map = new Map(entries);
// console.log(map); // Map { 'name' => 'Dima', 'age' => 30, 'job' => 'React developer' }

map
    .set('newField', 10)
    .set(obj, 'newValue')
    .set(NaN, 'Nan &&&')
// console.log(map.get(NaN)); // Nan &&&

map.delete('job');
// console.log(map.has('job')); // false
// console.log(map.size); // 5

// map.clear();
// console.log(map.size); // 0


// ============
for (let [key, value] of map) {
    // console.log(key, value);
}
// [ 'name', 'Dima' ]
// [ 'age', 30 ]
// [ 'newField', 10 ]
// [ { name: 'Dima', age: 30, job: 'React developer' }, 'newValue' ]
// [ NaN, 'Nan &&&' ]

for (let value of map.values()) {
    // console.log(value);
}
// Dima
// 30
// 10
// newValue
// Nan &&&

for (let key of map.keys()) {
    // console.log(key);
}
// name
// age
// newField
// { name: 'Dima', age: 30, job: 'React developer' }
// NaN

map.forEach((val, key, map) => {
    // console.log(val, key);
});
// Dima name
// 30 age
// 10 newField
// newValue { name: 'Dima', age: 30, job: 'React developer' }
// Nan &&& NaN

// ============
const mapToArray = [...map];
// const mapToArray1 = Array.from(map);

// console.log(mapToArray);
// [
//     [ 'name', 'Dima' ],
//     [ 'age', 30 ],
//     [ 'newField', 10 ],
//     [ { name: 'Dima', age: 30, job: 'React developer' }, 'newValue' ],
//     [ NaN, 'Nan &&&' ]
// ]

const mapToObj = Object.fromEntries(map.entries());

// console.log(mapToObj);
// {
//     name: 'Dima',
//         age: 30,
//     newField: 10,
//     '[object Object]': 'newValue',
//     NaN: 'Nan &&&'
// }

// ============
const users = [
    {name: 'Elena'},
    {name: 'Katya'},
    {name: 'Sofa'},
    {name: 'Katya'}
];

const visits = new Map();

visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 2000 * 60))
    .set(users[3], new Date(new Date().getTime() + 3000 * 60));


