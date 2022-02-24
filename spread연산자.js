//spread연산자 , 객체에 동일한 프로퍼티가 있을 때 중복을 피하기 위해서 사용

const game = {
    publishing: "nexon",
    madeIn: "korea"
};
const gameName = {
    base: "FPS",
    ...game,
},
const gameName2 = {
    base: "sports",
    ...game,
}



// spread연산자로 배열 통합
const arr1 = ["고길동", "홍길동", "사또"];
const arr2 = ["둘리", "마이콜", "심청이", "두꺼비"];

const allArr = [...arr1, "애니메이션", ...arr2];
console.log(allArr);