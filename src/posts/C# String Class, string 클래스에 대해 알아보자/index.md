---
title: C# String Class, string 클래스에 대해 알아보자
date: '2017-08-23'
slug: '/posts/C# String Class, string 클래스에 대해 알아보자'
category: '개발'
tags: ['C#']
featuredImage: './images/intro.png'
---
# 스트링 클래스(String Class)는?
- 텍스트를 UTF-16 단위의 시퀀스로 나타내는 클래스.

```C#
//클래스의 원형
[System.Runtime.InteropServices.ComVisible(true)] 
public sealed class String : ICloneable, IComparable, IComparable<string>,
                             IConvertible, IEquatable<string>, 
                             System.Collections.Generic.IEnumerable<char>
```
- 상속 (Inheritance) : `Object` -> `String`
- 속성 (Attributes) : `ComvisibleAttribute`
- 구현 (Implements): `IEnumerable<Char>`, `ICloneable`, `IComparable`, `IComparable<String>`, `IConvertible`, `IEQuatable<String>`


### 상속받는 메소드(Inherited Method)
- Equals(Object, Object), GetType(), MemberwiseClone(), ReferenceEquals(Object, Object)

- 문자열은 텍스트를 나타내는데 사용되는 Character의 연속적인 collection이다.
- `String` 객체는 문자열을 나타내는 `System.Char` 객체(UTF-16에 대응)의 연속적인 collection이다.
- `String` 객체의 value는 `System.Char`의 연속적인 모음이며, immutable하다. (즉, 읽기전용이다).
- `String` 객체의 최대 메모리는 2GB or 10억자(알파벳기준)이다.


---

## String 객체의 Instance화

가장 일반적으로 사용되는 방법은 문자열을 string 변수에 할당하는 방법이 string을 생성하는 것이다.
아래 예제는 할당을 사용하여 여러 문자열을 생성하는 방법이다.
(C#에서는 \(backspace)가 escape문자이기 때문에, 문자열의 \에는 한번 더 \를 붙여주어야 하며, 문자열 전체의 \를 이스케이프 할 때에는 앞에 @를 붙여준다.)
```C#
string str1 = "This is a string created by assignment.";
string str2A = "This Path is C:\\MyFile\\cSharp.cs";
string str2B = @"This Path is C:\MyFile\cSharp.cs";
//이 3개의 string을 Console.Write해보면 다음과 같이 출력된다
////This is a string created by assignment.
////This Path is C:\MyFile\cSharp.cs
////This Path is C:\MyFile\cSharp.cs
```

---

### 인용 및 출처
[https://docs.microsoft.com/en-us/dotnet/api/system.string?view=netframework-4.7](https://docs.microsoft.com/en-us/dotnet/api/system.string?view=netframework-4.7)