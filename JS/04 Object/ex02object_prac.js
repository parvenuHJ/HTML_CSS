// 1. 포맷에 맞춰 팀원들의 정보를 채워넣기
//    객체명은 person1, person2, person3...

let format = {
    name : '',
    bday : 0,
    subject : '',
    hobby : '',
    favorite : '',
}

let person1 = {
    name : '김채원',
    bday : '8월 1일',
    subject : '자바스크립트',
    hobby : '스마트인재교육원 유튜브 시청',
    favorite_person : '김훈종',
}

let person2 = {
    name : '미야와키 사쿠라',
    bday : '3월 19일',
    subject : 'HTML/CSS',
    hobby : '나만의 홈페이지 만들기',
    favorite_person : '이주희',
}

let person3 = {
    name : '허윤진',
    bday : '10월 8일',
    subject : '파이썬',
    hobby : '어르신들을 위한 키오스크 프로그램 만들기',
    favorite_person : '양세영',
}

let person4 = {
    name : '카즈하',
    bday : '8월 9일',
    subject : '딥러닝',
    hobby : '인공지능 만들기',
    favorite_person : '김민수',
}

let person5 = {
    name : '홍은채',
    bday : '11월 10일',
    subject : '빅데이터',
    hobby : '다음 당선될 대통령 맞추기',
    favorite_person : '정봉균',
}

let personList = [person1, person2, person3, person4, person5]
console.log(personList);

// 2. HTML 내 출력해주기
//    XXX의 생일은 XXXX, 좋아하는 과목은 XX입니다.
//    취미는 XX이고, 좋아하는 건 XX입니다.

    // for문
for (let i = 0 ; i <=4 ; i++){
    document.write(`${personList[i].name}의 생일은 ${personList[i].bday}, 좋아하는 과목은 ${personList[i].subject}입니다.
    <br> 취미는 ${personList[i].hobby}이고, 좋아하는 사람은 ${personList[i].favorite_person}입니다.<br><br>`)
   

}

    // for - of 문
for (let person of personList){
    document.write(`${person.name}의 생일은 ${person.bday}, 좋아하는 과목은 ${person.subject}입니다.
    <br> 취미는 ${person.hobby}이고, 좋아하는 사람은 ${person.favorite_person}입니다.<br><br>`)
   

}


