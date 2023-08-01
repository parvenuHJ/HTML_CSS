// 1. 사용자로부터 키와 몸무게를 입력 받는다.
// 2. 입력 받아온 키와 몸무게를 바탕으로 적정 몸무게 및 사용자 몸무게와의 차이를 구한다.
// 3. 조건에 따라 초과/미달/정상 값을 구한다.
// 4. 형태에 맞춰 HTML문서내에 출력해준다.
// 신장 : XXXcm
// 체중 : 00kg
// 적정 체중 : (XXX-100) x 0.9 = xxkg
// 결과 : 적정 체중은 xxkg 이며, 현재 적정 체중에서 xkg 초과/미달/정상 인 것을 알 수 있습니다.


/*
let height = prompt('키 입력 ');
let h = Number(height);
를 한번에 써줄 수 있음*/
let h = Number(prompt('키 입력 '));

let weight = prompt('몸무게 입력');
let w = Number(weight);

let goodW = (h-100) * 0.9;


console.log(`신장 : ${h}cm
체중 : ${w}kg
적정 체중 : (${h}-100)x0.9 = ${(h-100)*0.9}kg`);

let cond ;
let cond2;

if (goodW > w) {
    cond = goodW-w, cond2 = 'kg 미달'
}else if (goodW < w){
    cond = w-goodW, cond2 ='kg 초과'
}else {
    cond =  '정상', cond2 = ''
}

console.log(`결과 : 적정 체중은 ${goodW}kg 이며, 현재 적정 체중에서 ${cond} ${cond2}인 것을 알 수 있음`);