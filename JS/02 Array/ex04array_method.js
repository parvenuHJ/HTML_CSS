// 배열에 데이터를 추가하거나 삭제하는 관련 함수

let HaYoung_and_Children_Team = ['하영','지수','채린','훈종'];
console.log('최초 배열', HaYoung_and_Children_Team);

// 1. 마지막 인덱스 데이터 추가 : push(value);
HaYoung_and_Children_Team.push('금쪽');
console.log('마지막 추가',HaYoung_and_Children_Team);

// 2. 마지막 인덱스 데이터 삭제 : pop();
HaYoung_and_Children_Team.pop();
console.log('마지막 삭제', HaYoung_and_Children_Team);


// 3. 첫번째 인덱스 데이터 추가 : unshift(value);
HaYoung_and_Children_Team.unshift('은우');
console.log('첫번째 추가', HaYoung_and_Children_Team);

// 4. 첫번째 인덱스 데이터 삭제 : shift(); - 남아있는 요소들을 앞으로 밀어줌
HaYoung_and_Children_Team.shift();
console.log('첫번째 삭제', HaYoung_and_Children_Team);

// 5. 원하는 위치에 데이터 추가 또는 삭제
//      : splice(start, deleteCount, item1, item2...)
//        start : 변경을 시작할 인덱스, 음수일 경우 끝 인덱스부터
//        deleteCount : 제거할 요소의 수
//        item1, item2.. : 추가할 요소

// 5-1. 추가 ->  추가만 해줄 때 : delteCount = 0 
HaYoung_and_Children_Team.splice(1, 0, '세경');
console.log('splice 추가', HaYoung_and_Children_Team);
// 5-2. 삭제 -> 삭제만 해줄 때 : items 를 생략 , deleteCount = 삭제할 데이터 개수
HaYoung_and_Children_Team.splice(1,1);
console.log('splice 삭제', HaYoung_and_Children_Team);

// 5-3. 추가+삭제
/*
훈종 데이터 삭제, 리나 와 윈터 추가
*/
HaYoung_and_Children_Team.splice(3,1, '리나','윈터');
console.log('splice 추가+삭제',HaYoung_and_Children_Team);
