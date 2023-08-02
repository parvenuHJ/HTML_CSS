// 1. 랜덤 숫자를 하나 뽑는다. (1~100)
// let ran_num = Math.random();
// Math.random() : 0~1 사이의 난수 생성
// 0.XXXX~ 0.XXXX -> *100 -> 정수형으로 변환 => 0~99 -> +1 => 1~100
let ran_num = parseInt(Math.random()*100)+1;
console.log(ran_num);

// 2. 사용자에게 숫자를 입력 받는다.
//      조건에 따라 다른 팝업창 출력
//      입력숫자 > 랜덤숫자 -> '입력한 숫자보다 작은 수 입니다.'
//      입력숫자 < 랜덤숫자 -> '입력한 숫자보다 큰 수 입니다.'
//      입력숫자 = 랜덤숫자 -> '정답입니다.!'


while (true){
    
    let user_num = Number(prompt('숫자 하나 입력'));

    if (user_num > ran_num) {
        alert('입력한 숫자보다 작은 수 입니다.');
    } else if (user_num < ran_num) {
        alert('입력한 숫자보다 큰 수 입니다.');
    } else {
        alert('당첨입니다!');
        break;
    }

}