// 1. 사용자로부터 숫자를 입력받는다.
// 2. 입력 받은 수를 가지고 연산을 통해 결과값을 얻는다.
// 3. 결과값을 형태에 맞춰 출력한다.

let userInput = prompt('숫자를 입력해주세요 :');

console.log(`백의 자리 이하 버린 결과 >> ${userInput-userInput%100}`);
console.log('백의 자리 이하 버린 결과 >>', userInput-userInput%100);


// Number로 형변환을 안해줘도 연산이 되지만, 형변환을 해주는게 좋을듯..?
let num = Number(userInput);
let result = num-num%100;
console.log('버린 결과 >> ', result);

// 다른 방법
// 100으로 나눈 연산 결과를 정수형으로 바꿔주고 다시 그 값에 100을 곱한 값
result = parseInt(num/100)*100
console.log('버린 결과 2 >> ', result);