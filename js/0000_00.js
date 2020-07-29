function call_ajax() {
    var names_list   // 이거 여기서 만들어지는데,
    $.ajax({
        async : true,
        url : 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
        data : {
            key : '134383f1893b0d2ad44e2e85b8fc4c6f',
            targetDt : $('input[type=text]').val()
        },
        type : 'GET',
        timeout : 10000,    //이 사이트가 좀 오래 걸린다.
        dataType : 'json',
        success : function (result) {
            var deep = result['boxOfficeResult']['dailyBoxOfficeList']

            $('tbody').empty()
            var names = []

            for (i=0; i < deep.length; i++) {
                var tr = $('<tr></tr>').attr('id', deep[i].movieCd)
                var rankTd = $('<td></td>').text(deep[i].rank + '등')
                var imageTd = $('<td></td>')
                var imageDiv = $('<div></div>')
                var imageImg = $('<img />').attr('id', deep[i].movieNm)
                names.push(deep[i].movieNm)
                var name = deep[i].movieNm
                var titleTd = $('<td></td>').text(deep[i].movieNm)
                var priceTd = $('<td></td>').text(deep[i].salesAcc)
                var audiTd = $('<td></td>').text(deep[i].audiAcc)
                var detailTd = $('<td></td>')
                var detailBtn = $('<input />').attr({'type':'button','value':'상세정보'})
                //한 줄 만들어지는 <tr>마다 id로 상세정보링크에 필요한 코드값을 부여해주고, 버튼을 눌렀을 때 가지고 오도록 한다.
                detailBtn.on('click', function() {
                    $.ajax({
                        async : true,
                        url : 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json',
                        data : {
                            key : '134383f1893b0d2ad44e2e85b8fc4c6f',
                            movieCd : $(this).parent().parent().attr('id')
                        },
                        type : 'GET',
                        dataType : 'json',
                        success : function (result) {
                            var again = result['movieInfoResult']['movieInfo']
                            var title = '영화제목:'
                            var year = '제작연도:'
                            var genre = '장르:'
                            var director = '감독:'
                            var people = '출연진:'

                            title += again.movieNm
                            year += again.prdtYear
                            $.each(again['genres'], function(idx, item) {
                                genre += item.genreNm + ' '
                            })
                            $.each(again['directors'], function(idx, item) {
                                director += item.peopleNm + ' '
                            })
                            $.each(again['actors'], function(idx, item) {
                                people += item.peopleNm + '. '
                            })
                            alert(title + '\n' + year + '\n' + genre + '\n' + director + '\n' + people)

                            //이렇게 했던 이유는, 영화마다 어떤 값을 있고, 어떤 값은 없고, 어떤 값을 여러 개이고 하기 때문.
                            //each함수를 쓰면(단, jQuery임을 알려주도록 $를 사용해야 한다.) 없는 값이라면
                            //그냥 지나갈 것. 얘를 들어, 어떤 영화의 감독 같은 경우, []안에 아무것도 없는데,
                            //이 때는 inx가 0에서 길이를 뽑아낼 수 없으므로 그냥 아무런 값을 붙이지 않고 지나갈 것.

                        },
                        error : function (error) {
                            alert('서버가 오래 걸립니다..ㅠ')
                        }
                    })

                })

                detailTd.append(detailBtn)



                tr.append(rankTd)
                imageDiv.append(imageImg)
                imageTd.append(imageDiv)
                tr.append(imageTd)
                tr.append(titleTd)
                tr.append(priceTd)
                tr.append(audiTd)
                tr.append(detailTd)



                $('tbody').append(tr)
            }
            // console.log(names)

            for(i=0;i<names.length;i++) {
                var name = names[i]
                console.log(name)

                $.ajax({
                    async: true,   //동기 방식으로.
                    url: 'https://dapi.kakao.com/v2/search/image',
                    data: {
                        query: name + ' 공식 포스터',
                        sort: 'accuracy'
                    },
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('Authorization', 'KakaoAK b07fe00fd8c34dae6abb45718cb91642')
                    },
                    type: 'GET',
                    timeout: 5000,
                    dataType: 'json',
                    success: function (result) {
                        // console.log('오긴 왔네')
                        $([id=name]).attr('src', result.documents[0].thumbnail_url)
                    },
                    error: function (error) {
                        // alert('이미지 로드에 실패했습니다...')
                        console.log('안 되네....')
                    }
                })
            }

        },
        error : function (error) {
            alert('서버가 오래 걸립니다..ㅠ')
        }

    })
    //여기 바깥에서 names_list를 쓸 수 없는 이유는, 비동기 방식이기 때문에,
    //어딘가에서 ajax가 따로 실행되고 있기 때문에 시차가 다른 셈이다.
    //ajax에서 array에 추가하려고 해도 이미 그냥 비어있는 변수일 뿐이다.
}




















//가장 어려웠던 점은, JSON으로 데이터를 불러왔을 때, 인덱싱 하는 것.
//아마도, 가장 안쪽에 있는 {}에서는 object.key 형식으로 '.'를 쓸 수 있는데,
//그 외에는 []를 사용해야 하는 것 같다.
//그리고, 리스트처럼 여러 개의 {}를 []가 가지고 있는데, 이런 객체는 숫자 인덱싱으로
//단 한 개가 있더라도 [0], [1] ...  이런 식으로 불러와야한다.

//문제가 되었던 것은, 버튼을 눌렀을 때 수행된느 ajax였는데, 이미 바깥의 ajax가 돌아가면서 테이블은 다 만들어지기 때문에,
//안쪽에 있는 ajax에서는 i변수가 먹히지 않은 것.
//그렇다면, 버튼을 눌렀을 때 각각의 영화코드값을 가지고 오도록 해야 하는데,
//그래서 바깥의 ajax가 돌면서 테이블을 만들 때, 각 영화들의 영화코드값을 <tr>의 id로 저장해서 (id는 유니크하니까.)
//this를 사용해서 해당 row에 해당하는 영화코드값을 교유하게 가져올 수 있도록 했다.
//처음에는 바깥 코드가 돌 때마다 name이라는 변수에 영화코드값을 저장해서 가져와 쓰도록 했다.
//-->>다른 사람들은 for문을 사용하지 않고 모두 each를 사용했다. 그런데 나처럼 id를 만들어버리면 굳이 그렇게 안 해도 된다.

//*******************람다함수 VS 이름있는 함수***********************
//.on()등에서 람다함수를 쓰지 않고 이름있는 함수를 쓰면, 어떻게 작동하냐면,
//해당 함수의 결과값을 가져오기 때문에, 바깥에서 돌면서 해당 버튼을 만들 때 이미 결과값을 가져와버린다.
//그래서 고정된 하나의 값만 출력하게 되는 것.
//대신 람다함수는 누를 때마다 그 때 그 때 수행되는 함수가 된다.