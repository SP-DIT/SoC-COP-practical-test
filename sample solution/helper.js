const arr = [];
const x = 18;
for (let i = 0; i < x; i++) {
    arr[i] = i + 1;
}
const result = new Array(x).fill(null);
let i = 0;
while (i < arr.length) {
    const roll = Math.floor(Math.random() * x);
    if (result[roll]) continue;
    result[roll] = i++ + 1;
}
console.log(JSON.stringify(result));
