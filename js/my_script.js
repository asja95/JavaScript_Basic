//이제 여기에 JavaScript 코드를 작성하자.
// 파이썬과 비교해서 알아보자.


//JavaScript: web client에서 실행되는 언어
//            요즘에는 서버용 개발언어로 사용되기도 한다.(Node.js)

//변수를 만들어보자.
//파이썬은 그냥 변수를 선언한다. x = 100 이런 식으로.
// JavaScript는 var 이라는 키워드를 사용한다.
var my_var = 100
var tmp = 3.14
//정수와 실수를 파이썬처럼 따로 구분하지 않는다.
//number variable (파이썬에서는 numeric)
var tmp1 = 'Hello'
//파이썬처럼 모두 문자열로 취급한다.
//string variable
var tmp2 = true
//boolean
var tmp3 = [1, 2, 3, 4.555]
//array


//객체는 어떻게 표현하나?
var tmp4 = { name : '홍길동', age : 25}
console.log(tmp4.name)


//함수에 대해서 알아보자.
//함수에는 2가지가 있다.
//1. 선언적 함수(python의 일반적인 함수 정의하는 방법)
function my_add(x, y) {
     return x + y
}
//-->>선언적 함수는 함수 이름이 존재한다.

//2. 익명함수(함수의 이름이 없다. 그래서 변수에 지정해준다. 즉, 일급 함수 적용.) -> '람다함수'
//함수를 다른 함수의 인자로, 함수의 리턴값으로 함수를 이용한다.
var my_add = function(x, y) {
    return x + y
}
//파이썬의 람다는 함수로 인정하지 않는다. 그냥 대체식일 뿐. 이건 함수다. 좀 다르다.