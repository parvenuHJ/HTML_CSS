// 함수 : 특정 기능을 수행하는 소스 코드를 하나로 묶어서
//        필요할 때마다 사용하기 위한 구조

// 함수 선언
function intro() {
    console.log('안녕하세요. 김훈종입니다! ❗');
}

// 함수 호출
intro();

// 매개변수
function intro2(user_team,user_name = '금쪽') { // (최신 문법) 매개변수를 지정할때부터 조건을 줄 수 있음
    // user_name을 지정안해줄때 조건 (예전 문법)
    // if(user_name === undefined){
    //     user_name = '금쪽';
    // }
    console.log(`${user_team}에서 잡일 담당을 맡은 ${user_name}입니다. 😭😭😭😭😭`);
}
// intro2('하영팀'); -> user_name의 값을 안적으면 '금쪽' 이 출력됨
intro2('하영팀','김훈종');

// 매개변수 + return문
function intro3(user_name) {
    return `하영팀에서 설거지를 맡은 ${user_name}입니다. 😨😨😨😨😨`
}

console.log(intro3('김훈종')); // intro3 는 return 만 하는 기능, 출력하는 함수를 따로 써줘야함!