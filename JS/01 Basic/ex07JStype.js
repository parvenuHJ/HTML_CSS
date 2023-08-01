// 자료형
// 1. number :  정수 + 실수 등 산술연산 가능한 자료형
let num1 = 1.23;
let num2 = 5;
console.log('num1 : ',num1);
console.log('num2 : ', num2);

// 2. string : 문자열로 이루어진 자료형
let str1 = 'JavaScript';
let str2 = '10';
console.log('str1 : ', str1);
console.log('str2 : ', str2);

// Template literals(탬플릿 리터럴)
// `(백틱) -> 1 왼쪽 물결과 함께 있는 기호
// : 표현식/문자열 삽입, 여러 줄 문자열 등 다양한 기능을 제공
console.log('재미있는 시간 :'+ str1);
console.log(`재미있는 시간 : ${str1}`);
console.log(`안녕하세요.
반
갑습니다`);

// 3. boolean : 참/거짓으로 표현되는 논리 형태의 자료형
let isFemale = true;
let isRich = true;
console.log('여성인가요?', isFemale);
console.log('국비지원 급한가요?', isRich);

// 4 .undefined  : 값이 할당된 적이 없거나 존재하지 않는 속성
let val1;
console.log(val1);

// null - 아무런 값을 나타내지 않을 때의 자료형
let val2 = null;
console.log(val2);