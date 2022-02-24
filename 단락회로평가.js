//논리연산자 특성을 활용

console.log(true && true);  // 모두 만족
console.log(true || false); // 하나만 만족
console.log(!true);         //not이면 true

const getOthers = (element) => {
    if(!element){
        return "객체가 아닙니다";
    }
    return element.number;
};

let element;
const number = getOthers(element);
console.log(number);

//단락 회로 평가로 변환
const getOthers = (element) =>{
    return element && element.number;
};
const getOthers = (element) =>{
    const number = element && element.number;
    return number || "객체가 아닙니다";
};
let element = {number: "9"};
const number = getOthers(element);
console.log(number);