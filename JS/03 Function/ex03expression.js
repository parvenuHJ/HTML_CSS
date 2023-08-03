// 함수 표현식 : 익명 함수 형태로 함수 선언 후 -> 변수 참조
//                     function(){}         -> const intro =

// 익명 함수 = function(){}     <-- 이렇게 이름이 없는 함수를 뜻함


const intro = function() {
    console.log('안녕하세요 . 김훈종입니다!');
}
intro();

// 매개변수
const intro2 = function(user_team, user_name){
    console.log(`${user_team}에서 잡일 담당을 맡은 ${user_name}입니다. 😭😭😭😭😭`);
}
intro2('하영팀','김훈종');

// 매개변수 + return 문
const intro3 = function(user_name){
    return `하영팀에서 설거지를 맡은 ${user_name}입니다. 😨😨😨😨😨`;
}
console.log(intro3('김훈종'));