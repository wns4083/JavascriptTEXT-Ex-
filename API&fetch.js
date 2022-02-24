/* API & fetch */
//API 응용 프로그램 프로그래밍 인터페이스
//응용 프로그래밍에서 사용할 수 있도록, 운영체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게
//만든 인터페이스
//주로 파일 제어, 창 제어, 화상 처리, 문자 제어 등을 위한 인터페이스를 제공한다
//API호출은 데이터 요청하여 요청 데이터 전달받는

async function getData(){
    let rawResponse = await fetch("https://jsonplaceholder.typicode.com/users");
    let jsonResponse = await rawResponse.json();
    console.log(jsonResponse);
}
