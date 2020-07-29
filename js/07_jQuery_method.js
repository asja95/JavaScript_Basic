$(document).ready(function () {
//화면이 다 준비가 되면 이 람다함수가 수행된다.
//브라우저에 내용이 완전히 출력되면 그 시점에 수행된다.
    //li를 찾아서 각각에 대해 event처리를 지정해 주자.
    $('ul > li').on('mouseover', function () {
        $(this).addClass('myStyle')
    })
    //마우스가 올라갔을 때 class를 더해준다.

    $('ul > li').on('mouseleave', function () {
        $(this).removeClass('myStyle')
    })
    //마우스가 벗어나면 다시 원래대로 돌아가도록 class만 지워주면 된다.

})

//이 자바의 활동을 지정해주는 시점도 중요하다.
//내 마우스가 위에 올라가는 event는 이미 브라우저가 다 완성되고 난 이후다.
//그래서 브라우저가 화면을 완성하기 전에 이미 다 지정해줬던 지금까지와는 다르게,
//화면이 다 준비가 되면 이런 행동을 하라는 걸 정해준다.





//
// function set_active() {
// // alert('마우스가 위에 올라갔구나!!')     마우스가 이순신에 올라가면 경고창이 뜬다.
//
//     //현재 이벤트가 발생된 이벤트 소스에 CSS를 적용한다.
//     //이벤트 소스: 이벤트가 발생된 element -> "this"
//     $(this).addClass('myStyle')
//     //해당하는 element에 class를 갖다 붙여라.
//     //그리고 CSS가 class에 해당하는 작업을 가지고 있으면 CSS가 수행될 것.
// }




function insert_text() {
    // $('#myDiv').text('<h1>또 아우성인가 혹쉬~?</h1>')
    //myDiv라는 아이디를 가지는 div영역으로 가서 이 텍스트를 넣을 것이다. 비어있었으니까.
    //그런데 여기서는 태그를 넣을 수는 없다. 여기서는 그냥 글자 그대로 텍스트로 받는다. 그래서 <h1>로 그대로 출력.
    $('#myDiv').html('<h1>또 아우성인가 혹쉬~?</h1>')
    //그런데 여기서는 .text()와 동일하게 작동하지만, 태그가 적용이 된다.
}




function delete_div() {
    // $('#deleteDiv').remove()
    //자신을 포함해서 이거의 후손들까지 날라간다.
    $('#deleteDiv').empty()
    //자신을 제외한 후손들만 삭제한다.
    //그래서 배경은 남아있다. 배경을 설정한 건 div태그에 class로 지정했으니까 div에 속하는 거니까.

}


function add_list() {
    //없는 태그를 만드려면 어떻게 해야 하나요?
    //$('li')는 li를 찾는거고, 아래처럼 하면 태그를 만든다.
    // $('<li></li>').text('박길동').attr('class', 'myStyle')
    //<li>박길동</li> 으로 만들어진다.
    var my_li = $('<li></li>').text('박길동').addClass('myStyle')
    //클래스가 myStyle인 것까지 설정해줬다.

    //태그를 생성한다음 원하는 위치에 가져다 붙인다.
    //1.append() : 자식으로 붙이고, 맨 마지막 자식으로 붙인다.
    // $('ul').append(my_li)
    //2.prepend() : 자식으로 붙이고, 첫 번째 자식으로 붙인다.
    // $('ul').prepend(my_li)
    //이번에는 사이사이에 넣어보자. 특정 태그를 찾고 위, 아래로 생각하면 되겠다.
    //3. after() : 형제의 바로 다음에 붙인다.
    // $('ul > li:nth-child(3)').after(my_li)
    //4. before() : 형제의 바로 앞쪽에 붙인다.
    $('ul > li:nth-child(4)').before(my_li)   //위의 경우랑 이 경우 모두 강감찬과 이순신 사이에 들어간다.
}
















