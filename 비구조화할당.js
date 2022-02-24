/*배열이나 객체를 활용하는 방법인 비구조화 */
let arr = [ "one", "two", "three"];
let one = arr[0];
let two = arr[1];
let three = arr [2];
console.log(one, two, three);
//>>이런 반복을 줄이는 것
let [one, two, three] = ["one", "two", "three"]; //선언부터 분배한다해서 비구조화 할당
let [one, two, three] = arr;
console.log(one, two, three);
console.log(one, two, three, four);
//없는 요소인 four을 출력하면 undefined를 반환
let [one, two, three, four='four']= ["one", "two", "three"];
console.log(one, two, three, four);
// 기본값을 할당하여 undefined를 피할 수 있음

let a = 10;
let b = 20;
let tmp = 0;

tmp = a;
a = b;
b = tmp;
console.log(a,b); // log 20, 10 (a값과 b값 바꾸기)

//이를 비구화할당으로 쉽게
let a2 = 20;
let b2 = 40;
[a2, b2] = [b2, a2];
console.log(a2, b2); // 40, 20 출력

//-----------------객체 비구조화 할당


let object = { hana: "one", dul: "two", sam: "three"};
let hana = object.hana;
let dul = object.dul;
let three= object.sam;
console.log(hana, dul, sam);

//이를 간편화 (비구조화 할당으로)

let {hana, dul, sam} = object;
console.log(hana, dul, sam);

//키값을 기준으로 발류 저장 (인덱스가 아니라 키값을 기준!)

let { hana: one, dul: two, sam: three, abc= "four"} = object;
console.log(one, two, three);
//키값 변환시켜보기


