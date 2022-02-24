/* 콜백함수 (함수에 매개변수(파라미터)를 함수로 전달) */

function check(a, sameCallbak, notCallback){
    if(a===1){
        sameCallbak();
    }else{
        notCallback();
    }

}
function same(){
    console.log('checked: one');
}
function not(){
    console.log('checked: not');
}
function tooHigh(){
    console.log('checked: tooHigh');
}

check(1, same, not);
/* 함수에서 함수 실행하는 것 */