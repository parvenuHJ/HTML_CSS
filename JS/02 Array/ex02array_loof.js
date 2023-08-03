// 배열에 저장된 데이터를 반복문으로 출력하기

// 1. for 문
let name_list = ['하영','지수','채린','훈종'];
for (let i = 0 ; i < name_list.length ; i++){
    console.log(name_list[i]);
}

// 2. for - of 문
let food_list = ['한우','영덕대게','가리비'];
for(let i of food_list){
    console.log(i);
}

// 3. for each 문
let coffee_list = ['아메리카노', '카페라떼','소주(순이)'];
coffee_list.forEach((element, index)=>{
    console.log(index,element);
}) // forEach(데이터가져오는 변수이름(이름지정가능) , 인덱스 번호(이름지정가능) ) -> 순서가 중요
   // console.log(index,element) 는 그냥 출력 순서


