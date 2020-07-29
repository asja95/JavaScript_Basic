function call_ajax() {
    // if (event.keyCode == 13) {
        // alert('여기잖아!!')
        $.ajax({
            async : true,
            url : 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
            data : {
                key : '134383f1893b0d2ad44e2e85b8fc4c6f',
                targetDt : $('input[type=text]').val()
            },
            type : 'GET',
            timeout : 10000,
            dataType : 'json',
            success : function (result) {
                var deep = result['boxOfficeResult']['dailyBoxOfficeList']
                // alert(deep[0].movieNm)


                $('tbody').empty()

                for (i=0; i < deep.length; i++) {
                    var tr = $('<tr></tr>').attr('id', deep[i].movieCd)
                    var rankTd = $('<td></td>').text(deep[i].rank + '등')
                    var titleTd = $('<td></td>').text(deep[i].movieNm)
                    var priceTd = $('<td></td>').text(deep[i].salesAcc)
                    var audiTd = $('<td></td>').text(deep[i].audiAcc)
                    var detailTd = $('<td></td>')
                    var detailBtn = $('<input />').attr({'type':'button','value':'상세정보'})
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

                                if (again['actors'].length > 0) {
                                    var names = ''
                                    for (i = 0; i < again['actors'].length; i++) {
                                        if (i == again['actors'].length - 1) {
                                            names += again['actors'][i].peopleNm
                                        } else {
                                            names += again['actors'][i].peopleNm + ','
                                        }
                                    }
                                    alert('영화제목:' + again.movieNm + '\n' + '제작연도:' + again.prdtYear + '\n' + '장르:' + again['genres'][0].genreNm +
                                        '\n' + '감독:' + again['directors'][0].peopleNm + '\n' + '출연진:' + names)
                                } else {
                                    alert('영화제목:' + again.movieNm + '\n' + '제작연도:' + again.prdtYear + '\n' + '장르:' + again['genres'][0].genreNm +
                                        '\n' + '감독:' + again['directors'][0].peopleNm)
                                }

                            },
                            error : function (error) {
                                alert('서버가 오래 걸립니다..ㅠ')
                            }
                        })

                    })
                    detailTd.append(detailBtn)



                    tr.append(rankTd)
                    tr.append(titleTd)
                    tr.append(priceTd)
                    tr.append(audiTd)
                    tr.append(detailTd)

                    $('tbody').append(tr)
                }

            },
            error : function (error) {
                alert('서버가 오래 걸립니다..ㅠ')
            }

        })
    }
// }

