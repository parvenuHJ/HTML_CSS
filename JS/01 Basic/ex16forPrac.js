let st = Number(prompt('시작할 숫자를 입력하시오.'));
let end = Number(prompt('마지막 숫자를 입력하시오.'));

let result = 0;

for (i = st ; i  <= end ; i++){
    result += i;
}

console.log(`${st}부터 ${end}까지의 합은? >> ${result}`);
