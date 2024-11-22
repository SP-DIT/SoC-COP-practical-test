const arr = [];
const seen = new Set();

let i = 0;
while (i < 52) {
    const roll = Math.floor(Math.random() * 52);
    if (seen.has(roll)) continue;

    seen.add(roll);
    arr.push(roll + 1);
    i++;
}

seen.clear();
i = 0;
const select = [];
while (i < 25) {
    const roll = Math.floor(Math.random() * 52);
    if (seen.has(roll)) continue;

    seen.add(roll);
    select.push(roll);
    i++;
}

console.log(JSON.stringify(arr));
console.log(JSON.stringify(select));
