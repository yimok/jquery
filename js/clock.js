/**
 * Created by Yimo on 2016-11-15.
 */

function startclock()
{
   // alert("1111");

    //현재시간을 구해서 html div 영역에 출력하는게 목적
    //html div 영역을 자바스크립트 객체로 변환
    //html 에서 id를 이용해 그 id가 설정되어있는놈을 선택할 수 있다.

    //document는 바디영역을 지칭함 -> 바디영역의 객체를 가져오겠다.
    //엘레먼트란 태그,속성,값 한묶음  , ID로 가져옴
    var div = document.getElementById("clockdiv")  //html쪽의 div랑 연결됨

    //HTML 엘리먼트를 자바스크립트 객체로 변환 시키는것 -> document 오브젝트


    //1초마다 반복적으로 현재시간을 구해 각각의 시간을 div에 찍으면 된다.
    //자바는 1급함수를 지원하므로 함수를 값으로 표현 가능하다.-> 익명함수사용
    window.setInterval(function () {

        //현재 시간을 구하기
        var time = new Date().toLocaleString();
        div.innerHTML = time ;
    }, 1000)
}