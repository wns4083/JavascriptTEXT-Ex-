/* 반복문 
for, do while, 
*/
/*
for(초기값, 조건, 연산){

} */
for(let i = 1; i<100; i++){
    console.log(`반복 ${i}`);
}

//배열 순회
const arr = ["a", "b", "c"]; 
for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
} /*
 arr의 인덱스 길이까지 i++반복, console.log(arr[i])에서 i의 인덱스 위치 특정 0부터 시작해서 길이까지
 */

 //객체 순회

 let study = {
     name: "javascript",
     index: "for",
     detail: "object"
 };
 const studyKey = Object.keys(person); 
 //key값을 배열로 반환해서 줌 << Ojbect.keys(person)
 for (let i =0; i<studyKey.length; i++){
    console.log(studyKey[i]); // key값이 나옴

    //value까지 순회 방법
    const curKey= studyKey[i]; //현재 key값을 curKey에 할당
    const curValue = study[curKey];
     //key값을 받은 것을 curValue에서 study[curKey]로 순회, 현재 key값에 매칭되는 value잡는 것임
    console.log(`${curKey}: ${curValue}`);
 };


 /* value만 뽑고 싶을 때 */

 const studyValues = Object.values(study);
 //value값을 배열로 반환해서 줌

 for (let i=0; i<studyValues.length; i++){
     console.log(studyValues);
 }


 //--------------------do...while------------------------
 //조건문은 항상 무한 루프가 되는 것을 피해야 한다. 계속해서 반복
 //될 수 있기 때문에 항상 유의할것

 //do..while 특정 조건이 거짓으로 판별될 때까지 반복

 do{
     i+=1;
     console.log(i);
 }while(i<5);

 //while 어떤 조건문이 참이기만 하면 계속해서 수행

 n = 0;
 x = 0;
 while (n<3){
     n++;
     x += n;
 };


 //레이블문
 /* 레이블은 프로그램에서 다른 곳으로 참조할 수 있도록 식별자로 문을 제공한다 예를 들어 루프를 식별하기 위해서 레이블을 사용하고, 프로그램이 루프를 방해하거나 실행을 계속할지 여부를 나타내기 위해 break나 continue문을 사용할 수 있다.

 레이블 문의 구분은
 label:
  statement
레이블 값은 예약어가 아닌 임의의 식별자 일 수 있다.

break와 continue문과 같이 쓰이게 된다.
break 레이블명;
continue 레이블명;
--레이블을 이용한 방법은 위치에 관계없이 레이블이 위치한 반복문을 빠져 나간다--
*/
//ex1
const lableEx = [1, [2, 3], 4 ,[5,6]];
markLoop:
while( teMark ==true){
    doSomething();
}
//ex2
let x = 0;
let z = 0
labelCancleLoops: while (true){
    console.log("out Loops: " +x);
    x +=1;
    z = 1;
    while(ture){
        console.log("Inner Loops: " +z);
        z+=1;
        if(z===10 && x ===10){
            break labelCancleLoops;
        }else if (z===10){
            break;
        }
    }
}
//ex3
outsideFor:

for(var i = 0; lableEx.length; i++ ){
    insideFor:
    for(var j = 0; a[i][j].length; j++){
        document.wirte(a[i][j]+"<br>");
    }if(a[i][j]==22){
        break outsideFor;
    }
}

/* ---------------for in --------------------*/
//{객체}의 열거 속성을 통해 지정된 변수를 반복
/* 
배열 요소를 반복하는 방법으로 이를 사용하도록 유도할 수 있지만 for in 문은 숫자 인덱스에 추가하여 사용자 정의 속성의 이름을 반환한다. 따라서 사용자 정의 속성 또는 메서드를 추가하는 등 Array 객체를 수정한다면 배열 요소 이외에도 사용자 정의 속성을 통해 for in 문을 반복하기 때문에 배열을 통해 반복할 때 숫자 인덱스와 전통적인 for 루프를 사용하는 것이 좋다.
*/
function dump_props(obj, obj_name){
    let result = "";
    for(let i in obj){
        result +=obj_name + "." +i+ " = " + obj[i] + "<br>";
    }
    result += "<hr>";
    return result;
}
/*위 함수는 객체와 객체의 이름을 함수의 인수로 취급, 그런 다음 모든 객체의 속성을 반복하고 속성 이름과 값을 나열하는 문자열을 반환 */


/*-------------------for ... of --------------------*/

/*
for...of 문은 각각의 고유한 특성값을 실행할 명령과 함께 사용자 지정 반복후크를 호출하여 반복 가능한 객체를 통해 반복하는 루프를 만든다. 
*/

/*for of와 for in 루프의 차이 */

let forOfEx = [3, 5, 6];
forOfEx.foo = "hello world";
for (let i in forOfEx){
    console.log(i); //logs "0", "1", "2", "foo" <<key(인덱스값)을 리턴

}
for (let i of forOfEx){
    console.log(i); //logs "3", "5", "7"      << value를 리턴
}

/*
1. for in 
객체의 열거 가능한 속성들을 순회 
객체의 key값에 접근 가능 , value값에는 직접 접근 불가
key를 리턴(배열의 경우에는 index)
모든 객체에서 사용가능
for in문에서는 순서가 보장되지 않는다
length 연산자 사용불가
value값은 string이라 연산이 불가능


value 값이 궁금하면
arr[i], obj[prop]과 같이 key를 이용하는 방식을 사용해 간접적 접근 가능
*/

/*
2. for of
반복 가능한 객체를 순회할 수 있도록 해줌
Array, map , set, argument 등이 해당됨 (Object는 해당x)
ES6에서 추가된 새로운 컬렉션 전용 반복 구문
for of 구문을 사용하기 위해선
 컬렉션 객체가 [Symbole.iterator]속성을 가지고 있어야만 한다.(직접 명시 가능)
 Iterable object이지만, prototype chain에 의한 iterable은 대상에서 제외
 >>Array, Map, Set, String, typedArray, arguments 등
 value를 리턴

 
 Array 
 for (const val of ['a', 'b', 'c']) {
      console.log(val); // 'a','b','c' } 
      

 String 
 for (const val of 'abc') {
      console.log(val); // 'a','b','c' } 

 Object
  for ( let val of {1 :'a', 2 :'b', 3 :'c'} )
   { console.log(val); // TypeError: object is not iterable }

출처: https://joooing.tistory.com/entry/Iteration2-for-in문-for-of문 [joooing]
*/