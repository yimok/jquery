/**
 * Created by Yimo on 2016-11-16.
 */
function myFunction()
{


    //체크된 체크박스들만 선택하겠다.
    //형제관계이므로 선택된 체크박스 찿아서 그다음 span을 선택하고 값을 가져오자
   alert( $("[type=checkbox]:checked + span").text())


    //parent() : 내가 선택한 놈의 부모를 찿아
    $("[type=checkbox]:checked ").parent().remove()
}