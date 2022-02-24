/* 배열의 내장함수 */
//배열 순회
const arr = [1,2,3,4];
const newArr = [];
for (let i = 0; i< arr.length; i++){
    console.log(arr[i]);
};
//배열 내장함수 활용
arr.forEach((elm)=> console.log(elm)); // 배열순회, 위 함수와 동일하다
arr.forEach((elm)=> newArr.push(elm*2)); // 배열 수정 저장

//Map을 활용
const newArrMap = arr.map((elm)=>{
    return elm*2;
});
console.log(newArr);

//배열을 확인(조건)
let arrNumber =3;
arr.forEach((elm)=>{
    if(elm ===number){
        console.log(true);
    }
});
//배열에 3이 있으면 true출력 위와 같은 내용
console.log(arr.includes(number));
//위 함수와 똑같은 내용 includes(elm) elm가 포함되어있는지 확인하는 명령어(true, false로 나옴)

console.log(arr.indexOf(number));
//주어진 값이 있는지 확인한다. 없으면 -1이 나오고 있다면 index위치를 반환한다

const colorArr = [
    {num: 1233,color: "red"},
    {num: 312321,color: "black"},
    {num: 5454545,color: "green"},
    {num: 000000,color: "pink"},
    {num: 4, color: "red"}
]


console.log(colorArr.findIndex((elm)=> { elm.color === "pink"}));
//컬러를 찾아서 index위치를 출력, 그리고 동일한 값이 있다면 가장 먼저 만나는 값을(위에서 아래)우선시


const element = colorArr.find((elm)=>{
    return elm.color === "blue";
});
console.log(element);

console.log(colorArr.filter((elm)=> elm.color === "red"));
//특정조건을 만족한 배열을 배열로 반환받을 때 filter를 쓴다


/*배열 삭제 */
console.log(colorArr.slice(0,3));
//slice(시작점, 마지막 위치-1) 즉,  "green" 까지 나옴 

/*배열 합치기 */
const colorArr2 =[
    {num: 8, color: "tomato"},
    {num: 9, color: "gray"}
];
console.log(colorArr.concat(colorArr2));

//concat의 인자로 들어간 게 뒤로 들어감(colorArr의 마지막 인덱스 뒤로 (push처럼 생각))


/*배열 정렬*/

let charset = ["한글", "영어", "일본어", "프랑스어"];
let randomNumber =[5,3,1435, 22, 1, 6, ,99]
charset.sort();
console.log(charset);
//원본배열의 순서를 정렬, 문자열 기준

/*숫자 비교를 위해서는 함수를 활용해야 한다 */
const compare = (a, b) =>{
    //크다
    //작다
    //같다
    if(a>b){
        return 1;
    }
    if(a<b){
        return -1;
    }
    return 0;
}

randomNumber.sort(compare);
//위 함수는 오름차순으로 정렬이 된다. 내림차순으로 하려면 return -1; return 1; return 0; 
function compareNum(a, b){
    return a - b;
}
//위 함수는 오름차순으로 정렬

//sort메소드는 함수식(및 클로저)와 함께 활용할 수 있다.
var exNum = [4, 3, 2, 1, 9];
exNum.sort(function(a, b){
    return a-b;
});
console.log(exNum); // result >> [1, 2, 3, 4, 9]가 나온다


/*map을 사용한 정렬 */
// 소트 할 배열
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// 임시 배열은 위치 및 정렬 값이있는 객체를 보유합니다.
var mapped = list.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };
})

// 축소 치를 포함한 매핑 된 배열의 소트
mapped.sort(function(a, b) {
  return +(a.value > b.value) || +(a.value === b.value) - 1;
});

// 결과 순서를 위한 컨테이너
var result = mapped.map(function(el){
  return list[el.index];
});
// ------------map을 이용한 정렬은 좀 더 볼 것!... */
//----------------------------------------------------------------------//
var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];
  
  // value 기준으로 정렬
  items.sort(function (a, b) {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  
  // name 기준으로 정렬
  items.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // 이름이 같을 경우
    return 0;
  });


  /* 배열에 요소를 문자열로 합치는 내장함수 */

  const stringArr = ["손오공", "프리저", "베지터", "치치"];
  console.log(stringArr.join());
  //손오공,프리저,베지터,치치
  console.log(stringArr.join(" "));
  //손오공 프리저 베지터 치치
  console.log(stringArr.join("="));
  //손오공=프리저=베지터=치치