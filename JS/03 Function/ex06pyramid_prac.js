// 1. 출력될 이모티콘과 행의 개수를 입력 받는다.
let imo = prompt('이모티콘 입력');
let col_num = Number(prompt('행의 개수 입력'));
// 2. 이모티콘을 행의 개수 만큼 행의 길이가 늘어남에 따라 증가하는 형태로 출력하는 함수를 생성

// 2-1. 함수 선언문 - pyramid1
function pyramid1(n1, n2){
    for ( let i  = 1 ; i <= n2 ; i++){
        for(let j = 1 ; j <= i ; j++){
            document.write(n1) ;
        }
        document.write("<br>")
    }
}
pyramid1(imo,col_num);
document.write("<br>")

// 2-2. 함수 표현식 - pyramid2
const pyramid2 = function(n1, n2){
    for ( let i  = 1 ; i <= n2 ; i++){
        for(let j = 1 ; j <= i ; j++){
            document.write(n1) ;
        }
        document.write("<br>")
    }
}
pyramid2(imo,col_num);
document.write("<br>")

// 2-3. 화살표 함수 - pyramid3
const pyramid3 = (n1,n2) => {
    for ( let i  = 1 ; i <= n2 ; i++){
        for(let j = 1 ; j <= i ; j++){
            document.write(n1) ;
        }
        document.write("<br>")
    }
}
pyramid3(imo,col_num);