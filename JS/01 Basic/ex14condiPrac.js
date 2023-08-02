// 1. 색상을 입력받을 입력창 만들기
// 2. 빨강 -> red, 초록 -> green, 파랑 -> blue
// 그외 -> '잘못 입력하셨습니다.' (알림 팝업창)

// 배경색 바꾸는 코드는 ex02 참고!

let InputColor = prompt('색상을 입력하세요(빨강,초록,파랑)')

// if문으로 풀이
// if (InputColor == '빨강'){
//     document.querySelector('body').style.backgroundColor = 'red';
// }else if(InputColor == '초록'){
//     document.querySelector('body').style.backgroundColor = 'green';
// }else if(InputColor == '파랑'){
//     document.querySelector('body').style.backgroundColor = 'blue';
// }else {
//     alert('잘못 입력하셨습니다.')
// }

// switch문으로 풀이
let result_color ;
switch(InputColor) {
    case '빨강' : result_color ='red';
    break;
    case '파랑' : result_color = 'blue';
    break;
    case '초록' : result_color = 'green';
    break;
    default : alert('잘못 입력하셨습니다.');
}
document.querySelector('body').style.backgroundColor = result_color;