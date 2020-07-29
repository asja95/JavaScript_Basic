function start_clock() {
    // alert('버튼을 클릭클릭')   처음에 이것만 넣어놓고 보면 제대로 되고 있다는 걸 확인할 수 있다.

    //이제 우리는 시계를 출력해야 한다.
    //단순히 지금 시간을 출력하는 것이 아니라 1초씩 째깍째깍 흘러가는 걸 표현해야 한다.
    //현재 날짜의 시분초를 구할 수 있다.
    //이 시간을 HTML특정 영역에 출력한다. 어디? div 위치에!!
    //위의 작업을 1초마다 반복하면 된다.
    //즉, 실제로 시간이 가고 있는 동영상 같은 게 아니라, 같은 작업을 반복 수행해서 보여주는 것.

//    var today = new Date()   //날짜 객체 생성.  method도 속성도 가지고 있을 것. 객체니까.

//    console.log(today.toLocaleString())   //우리나라 locale에 맞게 문자열로 바꿔서 보여주겠다.
                                          //그리고 console에 찍어봐라. F12 눌러서 console에 확인해보면 알 수 있다.
    //이제 HTML의 영역에 표현한다. 그래서 HTML의 특정 영역을 지정해주자. -> div를 찾자.

//    var my_div = document.getElementById('myDiv')
    //document: 자바스크립트의 default 객체. 바로 사용할 수 있다.  HTML의 <body>영역을 가르킨다.
    //.getElementById: element를 가져올건데, Id로 가져오겠다는 것.
    //                 그러면 div에 부여했던 id를 가져오면 된다.
    //그러면 이제 my_div라는 변수가 div의 영역을 가르키게 되는 것.

//    my_div.innerText = today.toLocaleString()
    //그리고 이 변수에다가 시간을 지정해주면 이제 div영역에서 시간을 출력할 수 있게 되는 것.
    //그런데 지금까지는 다 수동이니까 이제 이결 자동화해준다.
    //javascript는 특정시간마다 특정함수를 반복해주는 함수를 제공한다. 참고로, jQuery는 아니라는 것.
    setInterval(function() {
        var today = new Date()
        console.log(today.toLocaleString())
        var my_div = document.getElementById('myDiv')
        my_div.innerText = today.toLocaleString()
    }, 1000)     //1000이 1초.  람다함수가 들어갔다.
    //위의 모든 작업을 자동화함수 안에 람다함수 안에 넣어주면 이제 자동으로 수행한다.

}


//그래서 이런 작업은 화면의 동작을 제어하는 것이라고 볼 수 있다.