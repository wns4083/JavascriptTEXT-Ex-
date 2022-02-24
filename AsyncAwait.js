//async
function hello() {
    return "Hello";
};
async function hello2(){
    return "hello2";
};//자동적으로 promise를 반환
console.log(hello());
console.log(hello2()); 
//>>
hello2().then((res)=>{
    console.log(res);
});
//return "hello2"가 resolve가 된 것처럼 나옴
 

//await
function delay(ms){
    return new Promise((resovle)=>{
        setTimeout(()=>{
            resovle();
        }, ms);
    });
}
//same function delay
function sameDelay(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve,me);
    });
}
//위 함수 축약
async function helloAsync(){
    return sameDelay(3000).then(()=>{
        return "hello Async";
    });
}
helloAsync().then((res)=>{
    console.log(res);
});

//await을 이용해 변환
async function helloAwait(){
    await sameDelay(3000);   // await은 동기적으로 수행 뒤에 코드 실행 x시킴
    return "hello async";
}

async function main (){
    const res = await helloAsync();
    console.log(res);
}
main();