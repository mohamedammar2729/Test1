let arr = [1, "mona", 3, 4, "zaki"];
// for (let index in arr) {
//     console.log(arr[index]);
// }
arr[Symbol.iterator] = newImplenteaiton;
function* newImplenteaiton(){
for (let index in this) {
    yield `${index} : ${this[index]}`;
}
}
let iter = arr[Symbol.iterator]();
for (let val of iter) {
    console.log(val);
}

