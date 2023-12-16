# 과제 이름(V 1.0.0)

- [과제 설명]

## 본 프로그램은 함수형으로 구현되었음

# `App.js`

프로그램의 전반적인 실행을 관리하는 `run` 함수가 있음

## `async run()`

프로그램의 전반적인 흐름을 관리함

## private function

### `async parseInput(variableName, option)`

- `option`에 키 값이 `inputMessage`인 프로퍼티가 있다면 값을 입력받을 때 해당 문자열을 출력, 그렇지 않다면 입력 시 `STRINGS`의 `INPUT_MESSAGE[variableName]`를 출력

- `CheckValidationOf[variableName]`를 통해 입력 값을 확인하고, 예외가 던져지면 에러 메시지를 출력 후 다시 입력 받음

- `variableName`에 해당하는 변수를 사용자로부터 입력 받아 `Convert[variableName]`에 해당하는 이름으로 바꾼 값을 반환

**매개변수**

`variableName`

사용자로부터 입력받을 변수의 이름

`option`

입력 받을 때 적용할 수 있는 여러가지 옵션들

**반환값**

`pipe`가 반환하는 값


### `pipe(variableName, value, option)`

- `CheckValidationOf[variableName]`를 통해 `value`를 확인하고, 예외적인 값이 들어오면 예외를 던짐

- `variableName`에 해당하는 변수를 사용자로부터 입력 받아 `Convert[variableName]`에 해당하는 이름으로 바꾼 값을 반환

**매개변수**

`variableName`

`CheckValidationOf`과 `Convert`의 프로퍼티 키 값에 들어갈 이름

`value`

`variableName` 형태에 종속된 확인할 값

`option`

`CheckValidationOf`과 `Convert`에서 사용할 수 있는 여러가지 옵션들

# domain

domain 로직을 갖고 있는 함수들을 담고 있는 객체들

## `Get`

특정한 값을 인자로 넣으면 인자를 바탕으로 원하는 값을 반환해주는 함수 중, `Convert`에 들어가지 못하는 함수들을 담은 객체

## `Is`

- 특정한 값을 인자로 넣으면 그 값이 유효한지 여부에 따라 `boolean` 형태의 값(`true`,`false`)으로 반환해주는 함수들을 담은 객체

### `digitString(string)`

- 인자로 들어오는 `string`이 십진수로 변환할 수 있는 숫자인지 확인 후 변환할 수 있다면 `true`, 아니면 `false`를 반환

### `numberInRange(number, lower, upper)`

`number`가 `lower`이상 `upper`이하인지 확인한 후 범위 안에 들어간다면 `true`, 범위 바깥이라면 `false`를 반환

## `Convert`

`App.js`의 `pipe()`에 사용되는 `convert`를 구현해놓은 객체

## `CheckValidationOf`

`App.js`의 `pipe()`에 사용되는 `checkValidationOf`를 구현해놓은 객체

### private method

### `checkDigitIntegerString(string)`

- 인자로 들어온 `string`이 십진수 정수 형태의 문자열인지 판단 후, 십진수 정수의 문자열이 아니라면 예외를 던짐

### `checkDigitString(string)`

- 인자로 들어온 `string`이 십진수 형태의 문자열인지 판단 후, 십진수 형태의 문자열이 아니라면 예외를 던짐

### `checkInteger(number)`

- 인자로 들어온 `number`가 정수인지 판단 후, 정수가 아니라면 예외를 던짐

### `checkNumberInRange(number, lower, upper)`

- `number`가 `lower`이상 `upper`이하인지 확인한 후 범위 안에 들어가지 않는다면 예외를 던짐

### `checkSameNumber (number, standard)`

- `number`가 `standard`와 같은지 확인 후, 같지 않다면 예외를 던짐

### `checkSameElementInArray(array)`

- 배열인 `array`에 같은 인자가 있는지 확인 후, 있다면 예외를 던짐


# view

view 로직을 갖고있는 함수들을 담고있는 객체들

## `InputView`

사용자로부터 값을 읽어들이는 함수들을 프로퍼티로 갖는 객체들

### `async input(inputMessage)`

- 사용자에게 `inputMessage`를 출력 후 값을 문자열 형태로 받아옴

## `OutputView`

콘솔창을 통해 특정한 값을 출력하는 함수들을 프로퍼티로 갖는 객체들

### `Print`

`@woowacourse/mission-utils`의 `Console.print`를 통해 출력하는 메소드들이 있는 객체

### `errorMessage(error)`

`Error`객체의 `message`를 출력

### `lineBreak()`

한 줄을 띄움

### `string(argument)`

`argument`를 출력

# 기능 구현

- [x] 월과 시작 요일 확인
  - [x] 월 확인
    - [x] 1~12
  - [x] 시작 요일 확인
    - [x] 월~일
  
- [ ] 평일 순번, 주말 순번을 입력
  - [x] 평일 순번 입력
    - [x] 닉네임 5자
    - [x] 최소 5명~35명
    - [x] 같은 이름이 반복 금지
  - [ ] 주말 순번 입력
    - [x] 닉네임 5자
    - [x] 최소 5명~35명
    - [x] 같은 이름이 반복 금지
    - [x] 평일 사람과 구성이 같은지
    - [x] 예외 처리시 출력 말고 그냥 예외 던지기
  - [ ] 예외가 생기면 처음부터 다시 

- [ ] 근무 명단 작성
  - [ ] 평일 큐 활용
  - [ ] 주말 큐 활용
  - [ ] 마지막 근무 선 사람 확인
  - [ ] 주중 휴일 여부 확인(Set 사용)

- [ ] 근무 출력

# 실행예시
```
비상 근무를 배정할 월과 시작 요일을 입력하세요> 5,월
평일 비상 근무 순번대로 사원 닉네임을 입력하세요> 준팍,도밥,고니,수아,루루,글로,솔로스타,우코,슬링키,참새,도리
휴일 비상 근무 순번대로 사원 닉네임을 입력하세요> 수아,루루,글로,솔로스타,우코,슬링키,참새,도리,준팍,도밥,고니

5월 1일 월 준팍
5월 2일 화 도밥
5월 3일 수 고니
5월 4일 목 수아
...
```
[과제 설명]: https://github.com/ss0526100/javascript-oncall-6-ss0526100