// 화살표 함수 : 함수 표현식 형태, function 키워드 대신에 " => " 를 사용

const intro = ()=>{
    console.log('안녕하세요 . 김훈종입니다!');
}
intro();

// 매개변수
const intro2 = (user_team, user_name='금쪽')=>{
    console.log(`${user_team}에서 잡일 담당을 맡은 ${user_name}입니다. 😭😭😭😭😭`);
}
intro2('하영팀','김훈종');








// 1) 
// const intro3 = (user_name)=>{
//     return `하영팀에서 설거지를 맡은 ${user_name}입니다. 😨😨😨😨😨`;
// }
// console.log(intro3('김훈종'));


// 2)
// 매개변수가 1개 일때 -> "()" 생략 가능
// const intro3 = user_name=>{
//     return `하영팀에서 설거지를 맡은 ${user_name}입니다. 😨😨😨😨😨`;
// }
// console.log(intro3('김훈종'));


// 3)
// 실행문이 1개 일때 -> "{} , return" 생략가능
const intro3 = user_name=> `하영팀에서 설거지를 맡은 ${user_name}입니다. 😨😨😨😨😨`;

console.log(intro3('김훈종'));
