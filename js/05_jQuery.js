//jQuery CDN을 이용했기 때문에 jQuery code를 사용할 수 있다.

//버튼을 클릭하면 아래의 함수가 호출된다.
function my_func() {
    // alert('함수가 호출되었습니다~')

    //0. jQuery를 공부할 때 가장 먼저 배워야 하는 건 'selector'. 그리고 무조건 $가 앞에 붙는다.
    
    //1. 전체 선택자(universal selector)
    // $('selector') 의 형태로 쓰인다. -> 전체 선택자: $('*').css('color', 'red') -> jQuery로 모든 element를 다 선택해서 style바꾸겠구나.
    // $('*').css('color', 'red')   //버튼을 누르면 모든 게 빨갛게 변한다.
    
    //2. 태그 선택자(tag selector)
    // $('li').remove()   //버튼 누르면 <li> 내용이 사라진다.
    
    //3. 아이디 선택자(id selector): #을 붙여준다.
    // $('#haha').text('제주')
    //text()의 의미는, 인자가 없으면 값을 알아오라는 의미.
    //                인자가 있으면 값을 변경하라는 의미.   여기서는 '인천'을 '제주'로 바꿔준다.
    //그런데 id는 유니크하다보니까 무조건 선택할 수 있다.

    //4. 클래스 선택자(class selector): .을 붙여준다.
    // $('.region').css('background-color', 'yellow')

    //5. 구조 선택자(자식선택자 혹은 후손선택자): > 로 자식을 표현한다.
    // $('ol > *')   //ol태그의 자식으로 있는 것 모두다.
    // $('ol > li').css('color', 'steelblue')  //ol태그의 자식으로 있는 것 중 li.

    $('div li').css('color', 'pink')
    //div의 후손으로 있는 li를 가르킨다.  공백 후에 구조선택자 같은 기호가 안 나오면 자식을 의미한다.
    //그래서 여기서는 6개의 li가 선택된다.

    //6. 구조 선택자(형제 선택자)
    $('#haha + li').remove()   // +기호가 바로 다음에 나오는 형제를 의미한다.
    //그래서 여기서는 haha라는 id를 가지는 태그 바로 다음의 element를 선택하게 된다.
    $('#hong ~ li').css('color', 'red')
    //이렇게 하면 내 다음의 모든 형제들을 찾을 수 있다.

    //7. 속성 선택자
    $('[id]').css('color', 'olive')   //id라는 속성을 가지고 있는 거 전부.
    //여기서는 인천이랑 홍길동의 색깔이 바뀐다.
    // $('[id=haha]').css('color', 'olive')  이렇게 하면 그냥 아이디 선택자랑 동일해진다.

}