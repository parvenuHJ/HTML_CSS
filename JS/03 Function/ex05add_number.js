// 1. 두 개의 숫자를 입력 받는다.
let input_num1 = Number(prompt('첫번째 정수 입력'));
let input_num2 = Number(prompt('두번째 정수 입력'));

// 2. 입력 받은 숫자를 파라미터로 받는 함수를 생성하여 합을 구하는 함수를 생성한다.
// 2-1. 함수 선언문 - add_number1
function add_number1(num1,num2){
    return num1+num2;
}
// 2-2. 함수 표현식 - add_number2
const add_number2 = function(num1,num2) {
    return num1+num2;
}
// 2-3. 화살표 함수 - add_number3
const add_number3 = (num1,num2) => num1+num2;

// 3. 콘솔창으로 결과를 확인한다.

console.log('함수 선언문 : ' + add_number1(input_num1,input_num2));
console.log('함수 표현식 : ' + add_number2(input_num1,input_num2));
console.log('화살표 함수 : ' + add_number3(input_num1,input_num2));