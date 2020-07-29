function print_text() {
       //버튼을 눌렀을 때 실행할 코드를 기술한다.
    //alert('경고합니다!')  문제없음.
    console.log($('#apple').text())
    //jQuery에서의 text()는 그 element의 태그 사이의 글자를 가져오는 것.
    //여기서는 사과라는 글자를 가져오고 그걸 콘솔에 찍는다.
    console.log($('#pineapple').text())

    //이번에는 참외를 가져오려고 하는데, 클래스로 찾자니 중복된다. 그런데 부모는 다르네?
    // $('ul > li.myList')
    //ul 태그를 먼저 찾고, 자식으로 있는 li 태그를 찾고, 그 li중에서도 클래스가 myList인 걸 찾아라.
    // $('ul > li[class]')
    //이번에는 대괄호니까 '속성'을 찾을건데, class 속성을 가지고 있는 걸 찾아라.
    console.log($('ul > li[class]').text())

    //이번에는 입력칸의 텍스트를 가져와보자.
    console.log($('input[type=text]').val())
    //tag가 input인 애들이 2개니까 그 중에서도 type이 text인 걸 찾아라.
    //여기 있는 텍스트는 태그 사이에 있는 게 아니니까 위에서의 text()는 쓸 수 없다.
    //그래서 val()를 사용한다.

    console.log($('ol > li.myList:first').text())   //고양이
    // :first 라고 하면, 선택된 것 중에 첫 번째를 의미한다.
    console.log($('ol > li.myList:last').text())   //강아지
    console.log($('ol > li.myList:first + li').text())   //호랑이
    //ol태그의 자식 중 li를 찾고, 그 li의 클래스가 myList이면서, 그 중 몇 번째인지 찾는다.
    console.log($('ol > li.myList:nth-child(1)').text())   //1번째인 고양이를 가져온다.
    console.log($('ol > li.myList:nth-child(2)').text())   //호랑이
    $('input[type=text]').attr('size', 10)
    //텍스트 입력창이 줄어든다.
    //.attr()함수가 속성을 제어한다는 것.
}



function my_func() {
//alert('바뀐 거 아니??')    제대로 작동하고 있다.
    //select box에서 과일이 바뀌면 실행될 것.

    //1. 선택한 과일이 어떤 과일인지 알아내자.
    var fruit = $('select > option:selected').text()
    //변화가 생겼을 때의 선택된 값을 가져온다.
    var my_list = $('ul > li')     //3가지가 들어온다.
    my_list.each(function (idx, item) {
        //console.log($(item).text())
        //여기서 item은 html의 태그를 가져온다. 그래서 거기에 있는 값으 가져오려면 .text()가 필요한 것.
        //그리고 참고로, $() 의 정확한 의미는, html을 jQuery 객체로 만들겠다는 것.
        //그래서 item에다가 $()를 실행해줘야 한다.
        if ($(item).text() == fruit) {
            $(item).css('color', 'red')
        }
        //이제 이렇게 하면 빨간색으로 바뀐다. 근데 이제 다시 다른 거 선택하면 원래 검은색으로 돌리자.
        else {
            $(item).css('color', 'black')
        }
    })
    //이거는 파이썬의 apply같은 기능이다. 각각 원소마다 돌면서 람다함수를 수행한다.
}