// 객체 : 여러 데이터를 하나의 변수에 저장할 수 있는 데이터타입

/*
객체 구조
let object = {
    key1 : value1,
    key2 : value2, 
        key2_1 : value3, 
    .
    .
    .
}

key : 객체의 속성(property)
value : 속성의 값

주의 ) , 로 나누어주는 것 
*/

// 객체 생성
// 객체는 {} 로 담아준다
let person = {
    // key 값은 "" 로 감싸도 되고 안감싸도 됨
    'name' : '김훈종', 
    age : 25, 
    height : 190,
    favorite : {
        food : "🦀",
        drink : "🧃"
    },
    smhrd : ['양세영', '이주희','정봉균']
}
// person = '장원영'
console.log(person);
// 위에서 person을 const 로 선언하게되면
// person = '장원영' 으로 하게 되면 오류 ( 재할당이 안되니까 )




// 객체 접근
// object.key1
// object.key2.key2_1
console.log(person);
console.log("이름 : ", person.name);
console.log("나이 : ", person.age);
console.log("키 : ", person.height);
console.log("좋아하는 음식 : ", person.favorite.food);

// 배열 객체에 접근
console.log("담임 선생님 : ",person.smhrd[1]);

// 속성값 변경 및 추가
person.name = '차은우';
console.log('이름 변경 : ', person.name);

// 속성에 해당하는 값을 참조 -> '뷔'로 이름이 바뀌지는 않는다.!
/*
let person_name = person.name;
person_name = '뷔';
console.log(person.name);
*/

// object 에 key, value 추가
// object.key = value;
// weight에 70을 추가
person.weight = 70;
console.log('몸무게 추가 : ', person.weight);

console.log(person);
