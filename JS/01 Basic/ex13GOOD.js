// 1. 사용자로부터 키와 몸무게를 입력 받는다.
let userHeight = Number(prompt('키 입력'));
let userWeight = Number(prompt('몸무게를 입력하세요'));

// 2. 입력 받아온 키와 몸무게를 바탕으로 적정 몸무게 및 사용자 몸무게와의 차이를 구한다.
let normalWeight = (userHeight - 100)*0.9

// Math.abs(값) : 절댓값 구하기
// 값.toFixed(소수점몇째자리까지) : 소수점 자리수 제한
let gapWeight = Math.abs(userWeight-normalWeight).toFixed(1);


// 3. 조건에 따라 초과/미달/정상 값을 구한다.
let result ;
if (userWeight > normalWeight) {
    result = '초과';
}else if (userWeight < normalWeight) {
    result = '미달';
}else {
    result = '정상';
}



// 4. 형태에 맞춰 HTML문서내에 출력해준다.
console.log(userHeight,userWeight,normalWeight,gapWeight,result);
/* 
 신장 : XXXcm
 체중 : 00kg
 적정 체중 : (XXX-100) x 0.9 = xxkg
 결과 : 적정 체중은 xxkg 이며, 현재 적정 체중에서 xkg 초과/미달/정상 인 것을 알 수 있습니다.
*/
document.write(`
신장 : ${userHeight}cm<br>
체중 : ${userWeight}kg<br>
적정 체중 : (${userHeight}-100) x 0.9 = ${normalWeight}kg <br>
결과 : 적정 체중은 ${normalWeight}kg 이며, 현재 적정 체중에서 ${gapWeight}kg ${result}인 것을 알 수 있습니다.
`)