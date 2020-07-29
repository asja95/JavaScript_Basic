function call_ajax() {
    //입력 텍스트 상자에서 키보드로 입력이 들어왔을 때 호출되는 함수!!
    //우리는 모든 키에 대해서 처리하는 게 아니라, 엔터키일 경우에만 처리하도록 해야 한다.
    if (event.keyCode == 13) {
        //만약 지금 발생한 event(키보드로 입력)의 keyCode가 13(엔터키)일 때
        //서버쪽 프로그램을 호출해서 결과를 받아온다.
        //즉, jQuery를 이용해서 AJAX처리 한다.
        // $.ajax('서버프로그램을 어떻게 호출할건지 작성한다.') : jQuery를 이용할거고, 뭘가져오는게 아니니까 ()대신 바로 .를 통해
        // 메소드를 호출한다. ajax를 활용한다는 메소드.
        //ajax의 인자로 javascript 객체를 넣어준다. -> {key:value, key:value, ...}
        //data = 서버프로그램에게 넘겨줄 데이터들.
        $.ajax({
            async : true, //비동기 방식의 호출(true -> default)
            url : 'http://192.168.0.200:8080/bookSearch/search', //호출할 서버쪽 프로그램
            data : {
                keyword : $('input[type=text]').val()   //사용자가 입력한 값을 가져올 거니까.
            },
            type : 'GET', //?를 이용해서 key와 value로 넘겨주니까 GET방식이라고 지정해준다.
            timeout : 3000,   //3초 안에 서버로부터 결과가 안 오면 잘못된 호출로 인식하겠다. 마냥 결과가 올 때까지 기다릴 수 없으니까.
            dataType : 'json',   //json형태의 결과를 javascript객체로 변환해준다. 누가? jQuery가.
            success :  function (result) {
                $('tbody').empty()  //검색할 때마다 기존의 테이블 지우고 새로 띄우기 위해서.

                for (i = 0; i < result.length; i++) {

                    //result: 서버가 보내준 결과. json문자열을 객체로 바꾼.
                    //화면에서 확인해보면 파이썬에서 리스트 안에 딕셔너리 형태로 들어있다. 비슷하게 생각해라.
                    // alert('서버 호출 성공했어!!')
                    // alert(result[0].title)   //1번째의 책 제목.
                    //이제는 결과를 테이블을 만들어서 갖다넣어야한다.
                    // <tr>
                    //     <td><img src=></td>
                    //     <td>제목</td>
                    //     <td>저자</td>
                    //     <td>가격</td>
                    //     <td>삭제버튼</td>
                    // </tr>
                    var tr = $('<tr></tr>')  //태그 생성
                    var imgTd = $('<td></td>')  //<td></td>
                    var img = $('<img />').attr('src', result[i].img)  //<img src=...>
                    imgTd.append(img)   //만들었으면 이어야지. <td>태그의 자식으로 <img>가 있는거니까 append.
                    var titleTd = $('<td></td>').text(result[i].title)
                    var authorTd = $('<td></td>').text(result[i].author)
                    var priceTd = $('<td></td>').text(result[i].price)
                    var delTd = $('<td></td>')
                    var delBtn = $('<input />').attr('type', 'button').attr('value', '삭제')
                    delBtn.on('click', function() {
                        // alert('오~ 눌렀네')
                        //이제는 현재 클릭되 버튼에 해당하는 책 정보를 삭제하고 싶다.
                        //그런데 어떤 버튼을 누르든 모든 버튼에서 같은 동작이 수행된다.
                        //나는 내가 지금 누른 버튼에 대해서만 수행하고 싶다.
                        //this: 현재 이벤트가 발생된 객체를 의미. 여기서는 delBtn이 된다.
                        $(this).parent().parent().remove()
                        //delBtn ->  delTd -> tr 순으로 해서 tr을 지우면 된다.
                    })
                    delTd.append(delBtn)


                    tr.append(imgTd)
                    tr.append(titleTd)
                    tr.append(authorTd)
                    tr.append(priceTd)
                    tr.append(delTd)
                    $('tbody').append(tr)
                }
               // 이 호출이 성공하다면 수행할 것. 함수가 올 것.
            },
            error : function (error) {
                alert('서버 호출 실패했어...')
            }   // 이 호출이 실패했다면 수행할 것. 함수가 올 것.
        })
    }
}