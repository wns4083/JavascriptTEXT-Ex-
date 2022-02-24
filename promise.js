//callback을 해결하기 위한 기능 , 즉, 비동기를 도와주는

//peding (대기상태) > fulfilled(성공) , Rejected(실패)
//비동기 작업이 가지는 3가지 상태

function isPositive(number, resolve, reject){
    setTimeout(()=>{
        if(typeof number === 'number'){
            //성공 ->resolve
            resolve(number >=0? "양수":"음수");
        }else{
            //실패 > reject
            reject("주어진 값이 숫자형 값이 아닙니다.")
        }
    }, 2000);
}

isPositive(10, (res)=>{
    console.log("성공적으로 수행됨", "res");
},
    (err)=>{
        console.log("실패하였다. : ", err);
    }
);

function isPositiveB(number){
    const executor = (resolve, reject) =>{
        setTimeout(()=>{
            if(typeof number === "number"){
                resolve(number >= 0 ? "양수" : "음수");
            }else{
                reject("주어진 값이 숫자형이 아니다.");
            }
        }, 2000);
    }
    const asyncTask = new Promise(executor);
    return asyncTask;
}
const resB = isPositiveB(101);
resB.then((res)=>{console.log("작업 성공:", resB);
}).catch((err)=>{console.log("작업 실패:", err )});
//then resolve, catch는 reject 

function taskA(a,b,cb){
    setTimeout(()=>{
        const res = a+b;
        cb(res);
    }, 2000);
}
function taskB(a,cb){
    setTimeout(()=>{
        const res = a*4;
        cb(res);
    }, 1000);
}
function taskA(a,cb){
    setTimeout(()=>{
        const res = a*(-1);
        cb(res);
    }, 2000);
}
taskA(3, 4, (a_res)=>{
    console.log("Task A: ", a_res);
    taskB(a_res, (b_res)=>{
        console.log("Task B: ", b_res);
        taskC(b_rex, (c_res)=>{
            console.log("Task C: ", c_res);
        });
    });
});
//위 콜백 지옥을 해결하기 위한 방법

function promiseTaskA(a,b){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const res = a+b;
            resolve(res);
        }, 3000);
    });
}
function promiseTaskB(a){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const res = a*4;
            resolve(res);
        }, 1000);
    });
}
function promiseTaskC(a){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const res= a*-1;
            resolve(res);
        }, 2000);
    });
}

// promiseTaskA(5,1).then((a_res)=>{
//     console.log("A Result: ", a_res);
//     promiseTaskB(a_res).then((b_res)=>{
//         console.log("B Result: ", b_res);
//         promiseTaskC(b_res).then((c_res)=>{
//             console.log("C Result: ", c_res);
//         });
//     });
// });
promiseTaskA(5,1).then((a_res)=>{
    console.log("A Result :", a_res);
    return promiseTaskB(a_res);
}).then((b_res)=>{
    console.log("B Result :", b_res);
}).then((c_res)=>{
    console.log("C Result :", c_res);
});