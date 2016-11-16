/**
 * Created by Yimo on 2016-11-15.
 */



//선언적 함수
function whyfunction (temp1, temp2) {
    return temp1 + temp2;
}
var result = whyfunction(10 , 20 )

console.log(result);



//익명함수( 람다 함수) , 자바스크립트에서만 되는 기능
var test = function (temp1, temp2){
    return temp1 + temp2;
}


console.log(test(20,30));



//자바스크립트 객체
var objempty = {}    // empty 객체

//자바스크립트 객체에는 변수에 해당하는 프로퍼티, 함수에해당하는 메서드 존재
//C++ 에서는 멤버변수, 멤버함수
var obj = {
    myname : "홍길동"  ,
    myage : 30 ,
    "my hobby": "lol",
    myinfo : function(){}
};

console.log(obj.myname);
console.log(obj.myage);
console.log(obj["myage"]); //배열형태로 객체를 사용할 수 있음 , 다른언어와 차별점!!
console.log(obj["my hobby"]);
obj.myinfo();

