// 1. 입력창을 통한 입력
// 리턴타입 : String
// prompt('출력', '입력'-> 생략가능)
// 변수 선언 키워드 - let
let good = prompt('오늘 몇시에 가실건가요?', '오늘 4시50분에 갑니다');
// good에 값이 잘 담겼는지 콘솔창으로 확인해보기!
console.log(good);


// 2. 확인 및 취소를 통한 입력
// 리턴타입 : Boolean
// 확인 - True / 취소 - False
// confirm('출력')
    // 1.confirm으로 입력받아온 데이터를 g에 넣기
let g = confirm('연장하실건가요?');
    // 2.g에 값이 잘 담겼는지 콘솔창으로 확인해보기
console.log(g);
