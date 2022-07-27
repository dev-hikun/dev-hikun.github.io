---
title: php5 문자열 자르기 시 인코딩 문제 해결되는 함수 만들기 
date: '2016-10-05'
slug: '/posts/php5 문자열 자르기 시 인코딩 문제 해결되는 함수 만들기'
category: '개발'
tags: ['php5']
featuredImage: './images/php-logo.jpeg'
---
※주의 : php5버전 미만은 작동하지 않습니다.

php5버전을 쓰기 전에는 문자열 자를땐 `substr()`... 하지만 substr은 1byte 기준으로 문자열을 자르기때문에

한글과 같은 유니코드 인코딩 문자들은 짤렸당..


그래서 `mb_substr()`을 사용하여 `utf-8`이나 `euc-kr` 등 인코딩 형식을 지정해 자를 수 있었으나 '가나다라'는 8byte임에도 불구하고 0자리부터 4자리까지 자르면 가나다라가 나오게 되고 abcd는 4byte인데 똑같이 자르면 abcd로 잘리게 되었다.

(한글이나 영어나 갯수가 똑같이 잘림. 바이트도 다르고, 게시판 리스트 처리할때 개짜증...)


그런데 php5버전에 문자열 자르기 신님이 강림하심...

`mb_strimwidth()`는 써보니 영문 한글 길이가 같이 잘려서 매우매우 보기에 좋다 +_+

그래서 이런식으로 함수 만들어서 씀 ㅎ.ㅎ.. 내 빌더 클래스에 추가요..!ㅎㅎㅎㅎ

```php
//문자열끊기
function getStrCut($long_str,$cutting_len,$cutting_str,$encoding="UTF-8")
{
    $rtn=mb_strimwidth($long_str,0,$cutting_len,$cutting_str,$encoding);
    return $rtn;
}
```