function search_image() {
    if (event.keyCode == 13) {
        // alert('검색시작!!')

        //AJAX를 이용해서 다음쪽 API를 호출
        //역시나, key와 value값으로 지정해준다.
        $.ajax({
            async : true,    //동기 비동기
            url : 'https://dapi.kakao.com/v2/search/image',    // 호출할 서버쪽 프로그램 주소
            data : {
                query : $('#movie_name').val() + ' 포스터',   //검색어
                sort : 'accuracy'
            },
            beforeSend : function(xhr) {
                xhr.setRequestHeader('Authorization', 'KakaoAK b07fe00fd8c34dae6abb45718cb91642')
            },
            //보내기 전에 헤더를 지정해주겠다는 것.
            type : 'GET',
            timeout : 5000,
            dataType : 'json',
            success : function (result) {
                // alert('이미지 로드에 성공했습니다!!')
                var img_list = result.documents
                // alert(img_list[0].thumbnail_url)
                var div = $('<div></div>')
                var img = $('<img />').attr('src', img_list[0].thumbnail_url).addClass('myImage')
                //첫 번째의 이미지만 불러온다.
                div.append(img)
                $('ul').append(div)

            },
            error : function (error) {
                alert('이미지 로드에 실패했습니다...')

            }
        })
    }
}