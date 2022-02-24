//조건문의 값의 트루와 팔스

let a = "";
if(a){
    console.log("true");
}else{
    console.log("false");
}
// >>> false로 나옴 (if의 인자가 그냥 문자열)

let b = "string";
if(b){
    console.log("true");
}else{
    console.log('false');
}
//>>> true로 나옴

let c = [];
if(c){
    console.log("true");
}else{
    console.log('false');
}
// false

let d = undefined;
if(d){
    console.log("true");
}else{
    console.log('false');
}
//false

let e = null;
if(e){
    console.log('true');
}else{
    console.log('false');
}
/*---------------------false값 

null, undefined, 0 , -0, NaN, ""

*/


//이를 활용

const getName=(person) => {
    if(!person){
        //false가 not이면 true로 
        return "객체가 아닙니다";
    }
    return person.name;
};
let person = null;
const name= getName(person);
console.log(name);

