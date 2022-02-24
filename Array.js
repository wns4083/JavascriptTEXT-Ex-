/* Array는 비원시 자료형이므로 여러개 값을 가질 수 있다 */

let arr = new Array(); //배열 생성자
let arr = []; //배열 리터럴


let ex = [1, "2", true, null, undefined, {}, [], function() {}];
//객체처럼 모두 다 들어감

let ex1 = [1, 2, 3, 4, 5];

//배열은 인덱스를 통해 접근한다 ( 객체는 key값으로 접근)

console.log(ex1[0]);
console.log(ex1[1]);
console.log(ex1[2]);
//.... 배열의 인덱스는 0부터 시작!

/* 배열 추가방법 */

ex1.push(90);
//인덱스 가장 마지막에 추가

/*배열의 길이 확인 */
console.log(ex1.length);
//인덱스 길이 확인

