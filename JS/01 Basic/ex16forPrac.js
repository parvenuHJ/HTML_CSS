// 1. 사용자로부터 시작 숫자와 마지막 숫자를 입력받는다.

// 숫자를 pronmpt로 받아오면 String으로 숫자를 받아온다.
// 이때 여기에 연산을 하면 결과가 잘 나오긴하지만, 오류가 날 수도 있으니
// prompt으로 받아온 String 값을 숫자로 형변환 해주는 습관을 들이는게 좋다!
let st = Number(prompt('시작할 숫자를 입력하시오.'));
let end = Number(prompt('마지막 숫자를 입력하시오.'));

// 2. 시작 ~ 마지막 숫자까지의 합을 구한다.
let result = 0;
for (i = st ; i  <= end ; i++){
    result += i;
}

// 3. 형태에 맞춰 콘솔창으로 출력해준다.
console.log(`${st}부터 ${end}까지의 합은? >> ${result}`);
