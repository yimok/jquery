/**
 * Created by Yimo on 2016-11-16.
 */
function myFunction()
{

    //text() 인자가있으면 값을바꾸고, 없으면 받아오고
    console.log( $("#apple").text())
    console.log( $("#pineapple").text())

    console.log($("ul > li.myList").text())
   
    
    //입력 상자에 있는걸 가져올떈 val(), text() 는 태그 내용
    //text() 와 마찬가지로 인자가 있으면 입력상자 값을 인자로 바꿈
    console.log($("#uId").val())

    //form 에있는 input 자식을 선택
    //.attr()  속성을 제어하는 함수
    //첫번째 인자만 쓸경우 id를 선택
    //두번째 인자도 쓰면 선택된 id에 값을 지정
    console.log($("form > input").attr("id"))

    //ol에 자식으로있는 li중 첫번째 선택
    console.log($("ol > li:first").text())
    console.log($("ol > li:nth-child(2)").text())
    console.log($("ol > li:last").text())
}