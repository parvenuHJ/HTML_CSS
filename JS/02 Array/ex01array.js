// 배열 : 여러 데이터를 하나의 묶음으로 다루는 구조


// 1. 배열 선언
let num_list = [];
let num_list2 = new Array(5); // Array 의 A는 대문자!, 길이가 5칸이다 (길이는 가변적)
console.log(num_list2);
let num_list3 = new Array(1,2,3); // 배열안에 값들을 넣어줌
console.log(num_list3);

// 2. 배열 생성
num_list = [4,5,6];
console.log(num_list);
// 5개로 선언했어도 초과 가능 -> 공간이 동적, 가변적
num_list2 = [7,8,9,10,11,12];
console.log(num_list2);

// 3. 인덱스 활용
let array_list = [];
/*
인덱스로 데이터 저장하기
배열이름[인덱스변호] = 데이터;
0 번 인덱스 -> 1(숫자형), 1번 인덱스(문자열) -> 가나다라, 2번 인덱스 -> true(Boolean)
*/
array_list[0] = 1;
array_list[1] = '가나다라';
array_list[2] = true
console.log(array_list);
// 1번 인덱스 값 확인
console.log(array_list[1]);

// 4. 배열 길이
console.log(array_list.length);