/*
- var = 변수 재선언 가능 / 변수 재할당 가능


(하지만 let, const는 재선언이 불가능합니다.)
재선언이 불가능한let, const의 쓰임:
코드를 길게 작성할 일이 생겼을 때, 변수 만든 것을 또 만들고
그런 실수가 발생할 수 있습니다. 그것을 방지해줍니다.)


- let = 변수 재선언 불가능 / 변수 재할당 가능


재할당이 불가능한 const의 쓰임:
값을 수정하면 안되는 변수를 만들때 유용합니다.

- const = 변수 재선언 불가능 / 변수 재할당 불가능
*/

//  변수 선언 시 주의사항
// 1. 변수명 첫 글자로는 $ _ 영문자   만 가능
// 2. 예약어 사용불가 (ex) document, window..)
// 3. 의미를 부여하는것이 좋다




// 변수 : 데이터를 담을 공간
let num = 3;
/*
let -> 변수 선언 키워드
num -> 변수 이름
3 -> 변수에 할당된 값
*/



// 변수 선언
let num2;
// 변수에 값 할당
num2 = 5;




/*
재선언 : 같은 변수 이름으로 다시 변수를 선언하는 것
재할당 : 선언된 변수에 다시 값을 할당하는 것
*/

    // var : 재선언O , 재할당O
var var1 = 1;
// log-자동완성-> ㅁlog -> console.log();
console.log('var 최초 선언', var1);
var var1 = 2;
console.log('var 재선언', var1);
// F12 -> Console탭에서 보면 정상적으로 재선언 된 것 확인가능

var1 =3;
console.log('var1 값 재할당', var1);
// F12 -> Console탭에서 보면 정상적으로 재할당 된 것 확인가능




    // let : 재선언X, 재할당O
let let1 =1;
console.log('let 최초 선언', let1);
// let let1 =2;  ← 오류남  ==> '재선언X'

let1 = 2;
console.log('let 값 재할당', let1);
// F12 -> Console탭에서 보면 정상적으로 재할당 된 것 확인가능





    //const : 재선언X, 재할당X
const const1 = 1;
console.log('const 최초 선언', const1);
//const const1 =2; ← 오류남  ==> '재선언X'

// const1 = 2; 
// 콘솔창에서는 오류가 안나지만, F12 -> Console탭에서 보면 오류남 ==> '재할당X'



