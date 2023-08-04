// BOM(Browser Object Model) : 브라우저를 다루기 위한 객체
// 브라우저에 관한 정보를 제공하거나 브라우저의 모양을 제어

// window : 브라우저 객체 최상위, 브라우저 창 관련 기능 제공
// window.open('https://soonart.tistory.com/', '순이의 일상','width=500; height=500')

// window 는 브라우저 객체 최상위 이기때문에 생략가능
// open('https://soonart.tistory.com/', '순이의 일상','width=500; height=500')

// location : 브라우저의 주소 관련 정보
console.log(location);
// f12 에서 보면 key : value 형식으로 값들이 담겨있음 -> Location ~~~ href : "http: ~~"
console.log('현재 주소 : ', location.href);

// 페이지 이동
// location.href = 'https://smhrd.or.kr/'

// screen : 화면 해상도 정보(너비, 높이) -> f12에서 확인가능
console.log(screen);

// navigator : 현재 브라우저 정보(버전, 이름, 위치 등)
console.log(navigator);

// history : 브라우저 이동 관련 기능(뒤로 , 앞으로 등)
// 직접 브라우저에 접속에서 F12 -> console 창에 입력하면됨
// history.go(이동할 페이지 숫자)
// -2 : 뒤로 두번, 3: 앞으로 세번