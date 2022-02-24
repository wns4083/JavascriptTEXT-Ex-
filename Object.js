/* primitive Type(원시) */
let number = 12; // 한번에 하나의 값

/* not primitive Type(비원시) */
let array = [1,2,3,4]; //한번에 여러개값 

/* 객체 / 비원시 형태로 여러개의 값을 가질 수 있다 */

let obj1 = new obj1(); // 객체 생성자
let obj2 = {}; // 객체 리터럴, 주로 쓰임

let obj1 = {
    key: "value",   // 프로퍼티 (객체 프로퍼티), key는 문자열로 작성, key값을 중복사용 x
    key1: "value2",
    key2: true,
    key3: undefined,
    key4: [1,2],
    key5: function (){}   
};
//key값 뽑기 (key가 가지는 프로퍼티)
console.log(obj1.key1);
console.log(obj.key4);
console.log(obj["key2"]); // 괄호표기법, 키값을 문자열로 사용해야 한다 . "" <<

//ex1
console.log(getProperty("key1"));
function getProperty (key){
    return ojb1[key];
};
/*함수 선언식은 호이스팅이 가능 위에서 호출해도 호출이 가능 
ex1 getProperty는 key1을 프로퍼티를 받는다. 즉, 동적인 키값을 지니고 있을 때 사용한 예제
>>동적인 키값(유동적인 키값)
*/

/*객체 수정, 삭제, 조정 */
//ex2
let person = {
    name: "고길동",
    age: 42
};
/*추가*/
person.location = "한국";
person["gender"] = "남자";

/*수정*/
person.name = "둘리";
person["age"] = 190000;

/* 삭제 */
delete person["name"]; // 연결을 끊을 뿐 실제 삭제는 아니다. 메모리에는 name이 할당되어 있다
person.name=null; //삭제와 똑같은 효과 (메모리에서 날린다)

/* ex2에서 let을 const로 바꿔도 오류가 발생하지 않는다.
 왜냐하면 객체를 바꾸는 거지 상수 자체를 바꾸는 게 아니라서 */

 const person2 = {
     name: "또치",
     age: 2
 };
 person = {
     age: 20
 };
 console.log(person2);

 /*이 경우 에러 발생 ( 상수 객체를 직접적으로 변경하여서 오류 발생 )
 Error code 
 typeError: "person2" is read-only
 */

 /*객체에 있는 함수 사용 */
 const objFunction = {
     name: "둘리", //멤버
     say: function(){
         console.log(`hellow world, how are you ${this["name"]}`);
     } // 객체 안의 함수는 메서드라고 한다, 메서드 안에서this는 자기 자신
 };
 objFunction.say();
 objFunction["say"]();

 /*존재하지 않는 프로퍼티에 접근하면 오류를 발생할 확률이 높다. 이를 확인하는 법(프로퍼티가 있는지)*/

 console.log(`name: ${"name" in objFunction}`);
 console.log(`age : ${"age" in objFunction} `)
