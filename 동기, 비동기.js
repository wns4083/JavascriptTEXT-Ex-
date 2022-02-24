/* 동기와 비동기 */
/*
자바스크립트는 코드가 작성된 순서대로 작업을 처리한다
이전 작업이 진행중일 떄는 다음 작업을 수행하지 않는다
먼저 작성된 코드를 먼저 다 실행하고 나서 뒤에 작성된 코드를 실행한다.

---이를 동기 방식의 처리라고 한다 -------(블로킹방식이라고 하기도 한다)

이러한 방식이 초래할 수 있는 문제는
하나의 작업이 너무 오래 걸리게 될 시 전반적인 흐름이 느려진다

쓰레드를 멀티로 쓰면 되지만 자바스크립트는 쓰레드를 하나만 쓴다

비동기를 하게 하려면
여러 개의 작업을 동시에 실행시켜야 한다
a작업이 끝나든 말든 b와 c를 실행



*/
function taskA(){
    console.log("A 끝");
}
taskA();
console.log("코드 끝");

//이를 비동기로 변환
function taskA(){
    setTimeout(()=>{
        console.log("A Task End");
    }, 2000);
}
taskA();
console.log("코드 끝");

//코드끝이 먼저 수행되고 taskA가 실행 즉 비동기 실행이 되었음을 알 수 있다

function taskB(a,b, callback){
    setTimeout(()=>{
        const res = a+b;
        callback(res); // 콜백함수를 활용해서 지역상수 res를 밖에서도 사용할 수 있게함
    }, 3000);
}
taskB(3,4, (res)=>{
    console.log("B task Result : ", res);
});
console.log("코드 끝");

function taskC(a, callback){
    setTimeout(()=>{
        const res = a*2;
        callback(res);
    }, 5000);
}

taskC(6, (res)=>{
    console.log("C Taskt Result :", res);
});

//JS 엔진에서 비동기 동기를 어떻게 구분해서 사용하나 (구동방식)
//Heap(메모리할당)과 callStack(코드실행)

function one(){
    return 1;
};
function two(){
    return one()+1;
};
function three(){
    return two()+1;
}
console.log(three); // log 3 three> two > one> two > three

//비동기 동작

function asyncAdd(a,b, cb){
    setTimeout(()=>{
        const res = a +b;
        cb(res);
    }, 3000);
}
asyncAdd(1, 3, (res)=>{
    console.log("결과 : ", res);
});
//setTimeout은 webAPIs로 넘겨져서 다음 코드가 실행될 수 있다
//callback queue로 옮겨진 cb()
//그다음 call stack으로 옮겨짐(event loop);
//....좀 더 알아볼 것.. 


taskA(4,6, (a_res)=>{
    console.log("A Result : ", a_res);
    taskB(a_res, (b_res) =>{
        console.log("B Result : ", b_res);
        taskC(b_res, (c_res)=>{
            console.log("C Result :", c_res);
        });
    });
});

//....이를 콜백지옥이라고 하며 이를 쉽게 하려면 promise를 써야함