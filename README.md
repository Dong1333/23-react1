# 23-React1 서동근 
## 03.23(4주차)
#### 🔨 React 프로젝트 재생성
(프로젝트 명이 겹치는 상황이 발생하여 react 프로젝트를 다시 만들어봤다.) <br> <br>
1. 프로젝트 삭제 (이때 .git 파일은 꼭 삭제해 준다)
2. visual stuido code -> open folder
3. react 프로젝트 생성
```bash
npx create-react-app 23-react1(프로젝트 명)
```
4. 이후 visual studio code -> source Control -> git repository 만들기(public 추천)

    (여기까지 프로젝트 생성 완료 이후 commit 도 진행해본다)<br>

5. README.MD 수정 -> commit -> push
---
### 👯‍♂️ GIT CLONE
1. 깃 허브 -> 복사 당할 레파지토리 -> [code] -> 주소 확인 후 복사(https)
2. visual studio code -> 복사 받을 폴더 생성 후 열기 -> 터미널 접속
3. git clone [1번에서 복사한 레파지토리 주소]

---
### 🧐 JSX란?
아래의 희한한 태그 문법은 문자열도, HTML도 아니다.<br>
이를 <i>JSX라 하며 JavaScript를 확장한 문법입니다</i>
```JS
const element = <h1>Hello, world!</h1>;
```

#### JSX의 장점
* 코드가 간결해지므로 가독성이 향상된다.

* Injection Attack이라 불리는 해킹 방법을 방어하므로 보에 강하다.
* 모든 자바스크립트 문법을 지원한다.
* 자바 스크립트 문법에 XML과 HTML을 섞어서 사용한다. (XML은 HTML을 확장한 것.) 쉽게 말 해 내가 <태그> 를 정의해서 사용할 수 있다.

### 📦JSX에 표현식 포함하기
아래 예시에서는 name이라는 변수를 선언한 후 중괄호로 감싸 JSX 안에 사용한다.
```JS
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```

### 🐧 JSX는 객체를 표현합니다.
Babel은 JSX를 React.createElement() 호출로 컴파일한다.
<br> 아래는 Babel은(바벨)의 역할의 예제이다.
다음 두 예시는 동일하다.
```JS
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```
--

### 👨🏻‍💻 JSX 실습
JS로 파일로 생성하기 보다는 JSX 명칭 그대로 지정해준다.
```jsx
import React from "react"


// 컴포넌트를 작성하는 곳(파일 명과 일치하게 입력).
function Book(props){
    return (
        <div>
            <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
            <h2>{`이 책은 총 ${props.name}페이지로 이루어져 있습니다.`}</h2>
        </div>
    )
}


// 외부에서 사용할 수 있게 설정하는 코드
export default Book
```
---
## 03.16(3주차)
### 🧐 리엑트란?
 사용자 인터페이스를 만들기 위한 자바스크립트의 라이브러리이다
### ☝🏻 리액트의 장점 - 1.빠른 업데이트와 랜더링 속도
1. 빠른 업데이트와 랜더링 속도
2. 동기식 = 모든 페이지를 랜더링, 비동기식 = 변할 부분만 랜더링 됨 ex) 댓글, 페이스 북 게시글
3. DOM은 동기식 Virtual DOM은 비동기식 방법으로 렌더링을 한다
4. 더 설명하자면 DOM은 html 모든 부분을 불러오고 Virtual DOM은 가상의 dom을 만들어 그 안에(<body안에서>) 수정 사항만 불러와 변경한다

### ☝🏻 리액트의 장점 - 2. 컴포넌트 기반 구조
1. 하나의 컴포넌트는 다른 여러개의 컴포턴트 조합으로 구성할 수 있다.
2. 블록을 조립하듯 컴포넌트 조합을 통해 웹사이트 개발이 가능하다 따라서 재사용성이 뛰어나다. ex) AriBnB 사이트

### ☝🏻 리액트의 장점 - 3. 재사용성
1. 반복적인 작업을 줄여주어 <b>생산성</b>을 높여준다.
2. 유지보수의 용이하다
3. 재사용이 가능하려면 해당 모듈의 의존성이 없어야 한다.(독립적으로 사용이 가능한 모듈이어야 한다.)


### ☝🏻 리액트의 장점 - 4. 든든한 지원과 지식공유
1. 메타(페이스북)에서 오픈소스 프로젝트로 관리하여 계속 발전하고 있다
2. 다양한 커뮤니티에서 활발하게 지식이 공유되고 있다 따라서 한글 지식정보도 많다


### ☝🏻 리액트의 장점 - 5. 모바일 앱 개발 가능
1. 리액트 네이티브라는 모바일 환경 UI 프레임웤르르 사용하면 크로스 플랫폼(cross-platform) 모바일 앱을 개발할 수 있다.
---

### ✌🏻 리액트의 단점 - 1.방대한 학습량과 높은 상태 관리 복잡도
1. 자바스크립트를 공부한 경우는 빠르게 학습할 수 있지만 그렇지 않은경우 학습량이 많다.

2. state, component life cycle 등의 개념이 있지만 그렇게 어렵지 않게 상태를 관리할 수 있다.



node.js를 설치하면 nom,npx가 설지가 된다.

---

## 03.09(2주차) 
---
1. git은 프로젝트 버전 관리를 위한 것이다.<br>
2. 코드 수정시 .git이라는 숨김 파일에 저장된다<br>
3. branch라는 곳에 commit과 push로 나의 수정내용을 저장할 수 있다.<br>
4. 나의 로컬 branch -> stage -> 원격(remote) branch 순으로 수정사항이 옮겨가서 저장된다<br>
