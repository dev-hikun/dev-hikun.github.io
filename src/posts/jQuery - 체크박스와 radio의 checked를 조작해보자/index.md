---
title: jQuery - 체크박스와 radio의 checked를 조작해보자
date: '2016-10-04'
slug: '/posts/jQuery - 체크박스와 radio의 checked를 조작해보자'
category: '개발'
tags: ['jQuery', 'Frontend']
---
## 라디오버튼과 체크박스의 checked 여부 확인

```javascript
$("input:checkbox[id='ID']").attr('checked'); // true false
$("input:checkbox[name='name']").attr('checked') // true false
```

- 위의 checkbox를 radio로 바꿔주면 라디오버튼도 가능.
- 체크가 되어있다면 true, 되어있지 않다면 false를 리턴한다.

## 체크처리(checked)와 체크해제(unchecked)처리.

```javascript
$("input:checkbox[id='ID']").prop("checked", true); //checkbox의 id가 ID일 경우
$("input:checkbox[name='NAME']").prop("checked", false); //checkbox의 name이 NAME일 경우
 ```

- true일 경우 체크 false 일 경우 언체크.

## 특정한 라디오 버튼을 선택/비선택 처리.

```javascript
//name이 Name radio type input 중 value가 VALUE인 것을 체크처리
$("input:radio[name='NAME']:radio[value='VALUE']").attr("checked", true); 
//라디오 버튼 체크해제
$("input:radio[name='NAME']").removeAttr("checked");
```
