// 내장객체 : 자바스크립트에서 제공하는 객체
// Math, Date, Array...

let today = new Date();
console.log('오늘 :', today);

// 월의 정보가  (0~11 : 1월~12월) 로 담겨있어서
// 월에 8월을 출력하고 싶으면 7을 입력해야함
let yesterday =new Date(2023, 7, 3, 0, 0, 0);
console.log('어제 :', yesterday);

// 콘솔창에 출력해보기
// YY년 M월 D일 D요일
// H시 M분 S초 입니다!

let today_year = today.getFullYear();
let today_month = today.getMonth()+1; // 월의 정보가  (0~11 : 1월~12월) 로 담겨있음
let today_date = today.getDate();
let today_day = today.getDay(); //요일의 정보가 (0~6 : 일요일~토요일) 로 담겨있음
let today_hour = today.getHours();
let today_minute = today.getMinutes();
let today_seconds = today.getSeconds();

// today_day 의 0~6 -> 일~토
// 방법 1) // today_day : 0~6 -> list[0~6]으로 list 호출 
list = ['일','월','화','수','목','불금','토'];
console.log(`${today_year}년 ${today_month}월 ${today_date}일 ${list[today_day]}요일`); 

console.log(`${today_hour}시 ${today_minute}분 ${today_seconds}초 입니다!`);

// 방법2 ) switch문
/*
switch(today_day){
    case 0 : today_day = '일'; break;
    case 1 : today_day = '월'; break;
    case 2 : today_day = '화'; break;
    case 3 : today_day = '수'; break;
    case 4 : today_day = '목'; break;
    case 5 : today_day = '금'; break;
    case 6 : today_day = '토'; break;
}
console.log(`${today_day}요일`)
*/

