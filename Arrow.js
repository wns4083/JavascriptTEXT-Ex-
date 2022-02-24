/* functions (함수 표현식과 화살표 함수) */
let hello = function (){
    return alert("하이");
};
const helloStart = hello();
console.log(hello);
/*위에는 함수 표현식, 표현식은 호이스팅이 일어나지 않는다. 따라서 선언전에는 호출시킬 수 없다. */


console.log(helloB);
function helloB() {
    return alert("하이B");
};
/* 함수 선언식 (함수 호이스팅이 일어나서 위에서도 호출이 가능하다) */

let helloC = () =>{
    return alert("하이C");
};
let helloD = () => alert( "하이D");
console.log(helloC, helloD);
/*화살표 함수 선언식, 호이스팅 대상이 아니니 주의할 것 */
