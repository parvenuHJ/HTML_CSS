// 1. 주어진 데이터를 담은 배열을 생성한다.
let arr = [23,54,78,13,44];

// 2. 반복문 안에서 최댓값을 구한다.

// 2-1. for문
let max = arr[0];
for (let i = 0 ; i < arr.length ; i++){
    // max와 arr의 값 비교
    if(max < arr[i]){
        max = arr[i];
    }
}
console.log('for', max);
// 2-2. for - of문
// arr[i] 를 i(또는 다른 변수로 지정가능) 로 표현
for (let i of arr){
    if(max < i){
        max = i;
    }
}
console.log('for-of', max);
// 2-3. for each문
arr.forEach((element)=>{
    if(element > max){
        element = max;
    }
})
console.log('forEach', max);

// 2-3. for each문 2 -> forEach는 요소를 꼭 사용해줘야 오류가 안남
// 배열에 있는 요소 하나하나에 접근을 하는 느낌 (element은 필수지만, 그 다음 index...등 은 필수는 아님)
// arr.forEach((element,index)=>{
//     if(arr[index]) > max){
//         arr[index] = max;
//     }
// })
console.log('forEach2', max);

//  3. 형태에 맞춰서 알림창 팝업창으로 출력한다.
alert('최댓값 >> ' + max);

