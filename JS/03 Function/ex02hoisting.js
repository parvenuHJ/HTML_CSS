// 호이스팅 : 선언문이 코드의 선두로 끌어올려진 것처럼 동작하는 현상

// 소스코드 처리 과정 : 평가 -> 실행
// 소스코드 평가 : 모든 선언문(변수. 함수 등 ) 등록
// 소스코드 실행

// 변수 호이스팅
console.log(lunchMenu);
// undefined -> 선언O but 할당X
var lunchMenu = '오마카세';
console.log(lunchMenu);
// console.log(dinner_menu); -> dinner_menu is not defined -> 선언X

// 함수 호이스팅
dec_func('위');
function dec_func(value){
    console.log(value, '함수 선언문');
}
dec_func('아래');

// 함수 표현식 형태로 exp_func 함수 생성
// exp_func('위');
const exp_func = function (value)  {
    console.log(value, '함수 표현식');
}
exp_func('아래');