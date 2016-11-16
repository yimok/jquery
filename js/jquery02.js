/**
 * Created by Yimo on 2016-11-16.
 */


function myFunction()
{
    //현재 html안에있는 모든 elements를 다 선택해서 글자색을 Red로 변경한다.
    //엘레먼트란 태그,속성,내용 3가지를 싹다 엘레먼트라고함

    //* 는 모든것 , 싹다 -> body안에있는 모든 태그를 다 선택해라

    //$(" * ").css("color","red");

    //$("h1,input").css("color","red")    //h1, input 2개 태그만선택

    //$("#inchon").remove();                 //태그의 id로 선택하는 방법

    //$(".myclass").css("background-color","yellow");

    //$("[type=button]").css("color","red");


    //div ul는 부모 자식관계 ,  div li는 후손관계 ,
    //div를 찾아서 ul를 찾아서 -> li의 id를 찾는다.
    // $("div>ul>li[id]").css("color","red");

    //공백은 후손으로 접근
    //div를 찿아서 후손으로있는 li를 찾아서 id중 inchon을 찾아라. , 셀렉터는 자세하게 명시하는게 좋다.
    //$("div li[id=inchon]").css("color","red");

    //자기 형제 바로 다음에 오는 놈을 찾아라.
    alert($("#inchon + li").text());

}