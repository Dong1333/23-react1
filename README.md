# 23-React1 서동근 

## 05.25(13주차)
### 🚀 여러 개의 컨텍스트 사용하기
* 여러 개의 컨텍스트를 동시에 사용하면 Context.Provider를 중첩해서 사용한다.
* 하지만 두 개 또는 그 이상의 컨텍스트 값이 함께 자주 사용될 경우 모든 값을 한 번에 제공해 주는 별도의 render props 컴포넌트를 직접 만드는 것에 유의해야 한다.

### 🕵🏻‍♀️ useContext
* 함수형 컴포넌트에서 컨텍스트를 사용하기 위해 컴포넌트를 매번 Consumer 컴포넌트로 감싸주는 것 보다 더 좋은 방법이 있다. 그것은 Hook이다.
* useContext() 훅은 React.createContext() 함수 호출로 생성된 컨텍스트 객체를 인자로 받아서 현재 컨텍스트의 값을 리턴한다.
* [중요!!] useContext() 훅을 사용할 때 파라미터로 컨텍스트 객체를 넣어줘야 한다

## 05.18(12주차)
## 🤝 합성에 대해 알아보기
* 합성(Composition)은 '여러 개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만드는 것'이다.
* 조합 방법에 따라 합성의 사용 기법은 다음과 같이 나눌 수 있다.

### 🧺 [1] Containment(담다, 포함하다, 격리하다)
* 특정 컴포넌트가 하위 컴포넌트를 포함하는 형태의 합성 방법이다.
* 컴포넌트에 따라서는 어떤 자식 엘리먼트가 들어올 지 미리 예상할 수 없는 경우가 있다.
* 범용적인 '박스' 역할을 하는 Sidebar 혹은 Dialog과 같은 컴포넌트에서 특히 자주 볼 수 있다.
* 이런 컴포넌트에서는 children prop을 사용하여 자식 엘리먼트를 출력에 그대로 전달하는 것이 좋다.
* 이때 children prop은 컴포넌트의 props에 기본적으로 들어있는 children속성을 사용한다.

* 아래와 같이 props.children을 사용하면 해당 컴포넌트의 하위 컴포넌트가 모두 children으로 들어오게 됩니다.
```JS
function FancyBorder(props){
  return (
    <div className = {'FancyBorder FancyBorder-' + props.color}>
        {props.children}
    </div>
  );
}
```


* children은 다음 구조에서 세 번째 들어가는 파라미터 이다.
* 파라미터가 배열로 되어있는 이유는 여러 개의 하위 컴포넌트를 가질 수 있기 떄문이다.
* children이 배열로 되어있는 것은 여러 개의 하위 컴포넌트를 위한 것이다.
```JS
React.createElement(
  type,
  [props],
  [...children]
)
```

* 교재 150page에서 설명한 것과 같이 jsx를 사용하지 않는 경우의 props전달 방법이다.
* 정확히 말하면 JSX를 사용하지 않고 리액트로 엘리먼트를 생성하는 방법이다.


```JS
/// JSX를 이용한 간단한 방법
const jsxElement = <h1 className="jsx"> JSX Element </h1>

/// 리액트 이용한 간단한 방법
const reactElement = React.createElement(
  'h1', // tag
  {className : 'obj'}, // props
  'OBJ Element' // [...children]
)
``` 
<br>

--- 
<br>

## 💻 FacncyBorder컴포넌트 사용 예제
* WelconDialog 컴포넌트는 FancyBorder 컴포넌트를 사용하고, FancyBorder 컴포넌트는 <'h1'>과 <'p'>두개의 태그를 children이 props로 전달된다.
```JS

function WelcomeDialog(props){
  return (
    <FancyBorder color="blue">
      <h1 className = "Dialog-title">
          어서오세요
      </h1>
      <p className="Dialog-message">
          우리 사이트에 방문하신 것을 환영합니다!
      </p>
    </FancyBorder>
  );
}
```
* 리액트에서는 props.children을 통해 하위 컴포넌트를 하나로 모아서 제공해 준다.
* 만일 여러개의 children 집합이 필요할 경우에 별도로 props를 정의해서 각각 원하는 컴포넌트를 넣어준다
* 예와 같이 SplitPane은 화면을 왼쪽과 오른쪽으로 분할해 주고, App에서는 SplitPane을 사용해서 left, right 두 개의 porps를 정의하고 있다.
* 즉, App에서 left, right를 props를 받아서 화면을 분할하게 된다 이처럼 여러개의 children 집합이 필요한 경우 별도의 props를 정의해서 사용한다.

<br>

--- 
<br>

### 🐠 [2] Specialization (특수화, 전문화)
* 범용적인 개념을 구별이 되게 구체화 하는 것을 특수화락 ㅗ한다
* 객체지향 언어에서는 '상속'을 사용하여 특수화를 구현합니다.
* 리액트에서는 합성을 사용하여 특수화를 구현합니다.
* 특수화는 범용적으로 쓸 수 있는 컴포넌트를 만들어 놓고 이를 특수한 목적을 사용하는 합성 방식이다.


<br>

--- 
<br>

### 🦮 [3] Contaionment와 Specialization을 같이 사용하기.
* Containment를 위해서 props.children을 사용하고, Specialization을 위해 직접 정의한 props를 사용하면 된다.
* Dialog를 사용하는 SignUpDialog는 Specialization을 위해 props인 title, message에 값을 넣어주고 있고, 입력을 받기위해 <'input'>과 <'button'>을 사용합니다.
* 이 두개의 태그는 모두 props,children으로 전달되어 다이어로그에 표시됩니다.
* 이러한 형태로 Containment와 Specialization을 동시에 사용할 수 있습니다.


<br>

--- 
<br>

## 👩‍👦 상속에 대해 알아보기
### 👀 상속이란
* 합성과 대비되는 개념이다.
* 자식 클래스는 부모 클래스가 가진 변수나 함수 등의 속성을 모두 갖게 되는 개념이다.
* 하지만 리액트에서는 상속보다는 합성을 통해 새로운 컴포넌트를 생성한다.
* 💡 복잡한 컴포넌트를 나누어 여러 개의 컴포넌트로 만들고, 만든 컴포넌트들을 조합하여 새로운 커포넌트를 만들어 보자



<br>

--- 
<br>

### 👩‍👦 컨텍스트란?
* 기존의 리액트에서 데이터가 컴포넌트의 props를 통해 부모에서 자식으로 단반향으로 전달되었다.
* 컨텍스트는 리액트 컴포넌트들 사이에서 데이터를 기존의 props를 통해 전달하는 방식 대신 '컴포넌트 트리를 통해 곧 바로 컴포넌트에 전달하는 새로운 방식'을 제공한다.
* 이것을 통해 어떤 컴포넌트라도 쉽게 데이터에 접근할 수 있다.
* 컨텍스트를 사용하면 일일이 props로 전달할 필요 없이 그림처럼 데이터를 필요로 하는 컴포넌트에 곧바로 데이터를 전달할 수 있다.
<br>
<br>

### 언제 컨텍스트를 사용해야 할까?
* 여러 컴포넌트에서 자주 필요로 하는 데이터는 로그인 여부, 로그인 정보, UI 테마, 현재 선택된 언어 등이 있다.
* 이런 데이터들을 기존의 방식대로 컴포넌트의 props를 통해 넘겨주면 실제 데이터를 필요로 하느 컴포넌트의 깊이가 깊어지기 때문에 복잡해 진다.
* 또한 반복적인 코드를 계속해서 작성해 주어야 하기 때문에 비효율적이고 가독성이 떨어진다.
* 컨텍스트를 사용하면 이러한 방식을 깔금하게 개선할 수 있다.


<br>

### Context.Provider
* Context.Provider 컴포넌트로 하위 컴포넌트들을 감싸주면 모든 하위 컴포넌트들이 해당 컨텍스트의 데이터에 접근할 수 있게 된다.
* Provider 컴포넌트에는 value라는 prop이 있고, 이것은 Provider 컴포넌트 하위에 있는 컴포넌트에게 전달된다.
* 하위 컴포넌트를 consumer 컴포넌트라고 부릅니다.


<br>

--- 
<br>


## 05.11(11주차)
### 섭씨 화씨 실습(코드 확인)

---

## 05.04(10주차)
### 🔑 리스트와 키
* 리스트는 자바스크리브의 변수 혹은 객체를 하나의 변수로 묶어 놓은 배열과 같다.
* '키'는 각 객체나 아이템을 구분하는 고유한 값을 의미한다.
* 리액트에서는 배열과 키를 사용하는 반복되는 다수의 엘리먼트를 쉽게 렌더링할 수 있다.

### 👨‍👩‍👦‍👦 여러개의 컴포넌트 렌더링
* 예시로 '에어비엔비'의 화면처럼 같은 컴포넌트를 화면에 반복적으로 나타내야 할 경우 배열에 들어있는 엘리먼트를 map()함수를 이용하여 랜더링한다.<br><br>
에어비엔비 주소 : https://www.airbnb.co.kr/
<br>

* 다음은 numbers 배열에 있는 각각의 요소를 map()를 이용하여 하나씩 추출하여, 2를 곱한 후 doubled라는 배열에 다시 넣는 코드이다.

```JS
const doubled = numbers.map()((number) => * 2);
```

* 리액트에서 활용한 예제이다 numbers의 요소에 2를 곱하는 대신 <li> 태그를 결합하여 리턴한다.
* 리턴된 listItems는 <'ul'>태그와 결합하여 렌더링 된다.

```JS
// 리액트에서 map() 함수 사용 예제 (.jsx)

// map()함수 사용시 통상적으로 's'를 붙여준다.
const numbers = [1, 2, 3, 4, 5]; 
const listItems = numbers.map((number) => 
    <li>{number}</li>
    );

// 리액트에서 map() 함수 사용 예제 (index.js)
ReactDOM.render(
  <ul>
      <li>{1}</li>
      <li>{2}</li>
      <li>{3}</li>
      <li>{4}</li>
      <li>{5}</li>
  </ul>,
  document.getElementById('root')
);


//결과
● 1
● 2
● 3
● 4
● 5
```

<br>

* 위 작성 코드를 별도의 컴포넌트로 분리하면 아래와 같다<br>
* 이 컴포넌트는 props로 받은 숫자를 numbers로 받아 리스트로 렌더링해 준다.
<br>

<br>

```JS
  function NumberList(props){
    const { numbers } = props;

    const numbers = [1, 2, 3, 4, 5]; 
    const listItems = numbers.map((number) => 
        <li>{number}</li>
    );

    return(
      <ul>{listItems}</ul>
    );
  }

  const numbers = [1, 2, 3, 4, 5];
  ReactDOM.render(
    <NumberList numbers={numbers} />,
    documents.getElementById('root')
  );
```

* 이 코드 실행 후 화면에는 [•1, •2, •3, •4,•5]가 나오고
* 콘솔에는 "리스트 아이템에 키가 필수로 필요하다"라는 경고 문구를 확인할 수 있다.
* 이유는 아이템에 ket props가 없기 떄문이다.

<br>

### 🔐 리스트의 키에 대해 알아보자
* 키는 앞서 설명했듯이 "아이템을 구별하기 위한 고유한 문자열"이다
* 리스트에서 어떤 아이템이 변경, 추가 또는 제거되었는지 구분하기 위해 사용한다.
* 키는 같은 리스트에 있는 엘리먼트 사이에서만 고유한 값이면 된다.
* 예시로 A 대학교, B 대학교에 등록된 학번은 같아도 상관없다.(같은 리스트가 아님)

### 💬 폼이란?
* 일반적으로 사용자로부터 입력을 받기위한 양식을 일컫는다
```JS
// 폼 예제 코드
<form>
    이름: <input type = "text" name="name"/>


    <button type="submit">제출</button>
</form>
```

### 👩🏻‍💻 코드 결과
<pre>
  이름: <input type = "text" name="name"/>
          
            <button type="submit">제출</button>

</pre>

### 🎛️ 제어 컴포넌트
* 제어 컴포넌트는 사용자가 입력한 값에 접근하고 제어할 수 있도록 해주는 컴포넌트이다.

### ␀ Input Null Value
* 제어 컴포넌트에 value prop을 정해진 값으로 넣으면 코드를 수정하지 않는 한 입력값을 바꿀 수 없다.
* 만역 value prop은 넣되 자유롭게 입력할 수 있게 만들고 싶다면 같이 undefind 또는 null을 넣어주면 된다.


### 📶 Shared state
* 하위 컴포넌트가 공통된 부모 컴포넌트의 state를 공유하여 사용하는 것을 shard state라고 한다.

#### 👨🏻‍🏫 예시
* 컴포넌트 A(state = degree 25), 컴포넌트 A를 상속받은 C, F 컴포넌트가 있다면 각각 degree 값을 가지고 있을 필요 없이 state에 있는 state에 접근하여 사용할 수 있다.




<br>

***
<br>

## 04.27(9주차)
### 🏎️ 이벤트 핸들링 (처리)
Dom 클릭 이벤트 처리, React 클릭 이벤트 처리 차이점

```JS
// Dom 클릭 이벤트(HTML)
<button onclick="activateLasers()">
  Activate Lasers
</button>

// React 클릭 이벤트
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

* 이벤트의 이름이 onclick에서 onClick으로 변경
* 젼댤하려는 함수는 문자열에서 함수 그대로 전달 
<br>

### 이벤트 헨들러 추가 방법
* 버튼 클릭 시 이벤트 헨들러 함수인 handleClick()호출
* bind 미사용시 this.handleClick은 클로벌 스코프에서 호출되어, undefined로  사용불가 하기 떄문
* bind 미사용 시 화살표 함수를 사용하여도 된다.(거의 사용하지는 않음)

```JS
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 한다.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
```

<br>

* 클래스형을 함수형으로 바꾸려면<br>

    방법 1.  함수 안에 함수로 정의<br>
    방법 2. arrow function을 사용하여 정의
* 함수형에서는 this를 사용하지 않고, onClick에서 바로 HandleClick을 넘기면 된다.

### Arguments 전달하기
* 함수를 정의할 때는 파라미터(매개변수) 혹은 아귀먼트(인자) 라고 부른다.
* 이벤트 헨들러에 매개변수를 전달해야 하는 경우도 많다.
``` JS
<button onClick={(event) => this.deleteItem(id, event)}>삭제하기</button>

<button onClick={this.deleteRow.bind(this, id)}> 삭제하기</button>
```
* 위에 코드 모두 동일한 역할이지만 하나는 화살표 함수, 하나는 bind를 사용했다
* event라는 매개변수는 리액트의 이벤트 객체를 의미한다
* 두 방법 모두 첫 번쨰 매개변수는 id이고 두 번째 매개변수로는 event가 전달된다.
* 첫 번재는 명시적으로 매개변수를 넣어줬고, 두 번째 코드는 id 이후 두번째 변수로 event가 자동 전달된다.(클래스형에서 사용하는 방법.)

### 🛼 인라인 조건 if
* if문을 직접 사용하지 않고, 동일한 효과를 내기 위해 && 논리 연산자를 사용한다.
* &&는 and연자로 모든 조건이 참 일 떄만 참이 된다.
* 따라서 첫 번째 조건이 거짓이면 두 번째 조건은 판단할 필요가 없다.(단축 평가)

###  🫨 인라인 if-else
* 삼항 연산자를 사용한다.
* 문자열이나 엘리먼트를 넣어서 사용할 수도 있다.

<br>

***
<br>


## 04.13(7주차)
### 👀 훅이란
* 클래스형 컴포넌트에서는 생성자에서 STATE를 정의하고 setState()함수를 통해 state를 없데이트 한다
* 예전에 사용하던 함수형 컴포넌트는 별도로 state를 정의하거나, 컴포넌트의 생명주기에 맞춰서 어떤 코드가 실행되도록 할 수어 없었다

* 함수형 컴포터넌트에서도 state나 생명주기 함수의 기능을 사용하게 해주기 위해 추가된 기능이 바로 hook이다

* 함수형 컴포넌트도 혹은 사용하여 클래스형 컴포넌트의 기능을 모두 동일하게 구현할 수 있게 되었다

### 🫨 userState
* useState는 함수형 컴포넌트에서 state를 사용하기 위한 Hook이다

### 💡 userEffect
* userState와 함꼐 가장 많이 사용하는 Hook이다
* 이 함수는 사이드 이펙트를 수행하기 위한것이다
* 영어로 side effect는 부장용을 의미한다. '개발자가 의도하지 않는 코드가 실행되면서 버그가 발생하는 것'을 말한다

* 하지만 리액트에서는 효과 혹은 영향을 뜻하는 effect의 의미에 가깝다

* 예를 들면 서버에서 데이터를 받아오거나 수동으로 DOM을 변경하는 등의 작업을 의미한다

* 이작업을 이펙트라고 부르는 이유는 이 작업들이 다른 컴포넌트에 영향을 미칠 수 있으며, 렌더링 중에는 작업이 완료될 수 없이 때문이다.렌더링 이후 실행되어야하는 작업들이다.

* 클래스 컴포넌트의 생명주기 함수와 같은 기능을 하나로 통합하는 기능을 제공한다.

* 저자는 useEffect가 side effect가 아니라 effect에 가깝다고 설명하고 있지만, 이것은 부작용의 의미를 잘못해서 생긴 오해이다.

### 🗒️ useMemo
* userMemo() 혹은 Memoizde value를 리턴하는 훅이다
* 이전 계산값을 가지고 있기 때문에 연산량이 놓은 작업의 반복을 피할 수 있다.
히 훅은 렌더링이 일어나는 동안 실행됩니다
* 따라서 렌더링이 일어나는 동안 실행되서는 안될 작업을 넣으면 안된다.

* * 예시로 useEffect 사이트 이팩트 같은 것이다.

만약 배열을 넣게 되면 컴포넌트 마운트 시에만 함수가 실행된다.

### 📞 userCallback
* userCallback() 혹은 userMemo()와 유사한 역할을 한다
* 차이점은 값이 아닌 함수를 반환한다는 점이다
* 의존성 배열을 파라미터로 받는 것은 useMemo와 동일하다
* 파라미터로 받은 함수를 콜백이라고 부른다
* useMemo와 마찬가지로 의존성 배열 중 하나라도 변경되면 콜백 함수를 반환한다.

### ♻️ userRef
* userRef()혹은 레퍼런스를 사용하기 위한 훅이다
* 레퍼런스란 특정 컴포넌트에 접근할 수 있는 객체를 의미한다
* userRef() 훅은 바로 이 레퍼런스 객체를 반환한다
* 레퍼런스 객체에는 current라는 속성이 있는데, 이것은 현재 참조하고 있는 엘리먼트를 의미한다
* 컴포넌트가 마운트 해제 전까지는 계속 유ㅣ된다는 의미

### 👍🏻 훅의 규칙
* 무조건 최상위 컴포넌트 레벨에서만 호출해야만 한다는 것.

* 따라서 반복문, 조건문, 중첩 함수들 안에서 훅을 호출하면 안된다
* 이 규칙에 따라 훅은 컴포넌트가 렌더링 될 떄마다 같은 순서로 호출되어야 한다

* 일반 자바스크립트 함수에서훅을 호출하면 안된다
* 훅은 리엑트 함수 컴포넌트 혹은 직접 만든 커스텀 훅에서만 호출할 수 있다.

### 🥣 켜스텀 훅 추출하기
* 두개의 자바스크립트 함수에서 하나의 로직을 공유하도록 하고 싶을 때 새로운 함수를 하나 만드는 방법을 사용한다.
* 리엑트 컴포너넌트와 훅은 모두 함수이기 때문에 동일한 방법을 사용할 수 있다.
* 이름은 use로 시작하고, 내부에서 다른 훅을 호출하는 자바스크립트를 만들면 된다

<br>

***
<br>


## 04.06(6주차)
### 🎣 컴포넌트 추출
* 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나눌 수도 있다
* 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것이다.
* (실무에서는 처음부터 1개의 컴포넌트에 하나의 기능만 사용하도록 설계하는 것이 좋다)

### 👨🏻‍💻 컴포넌트 코드 활용
아래와 같은 코드가 추가될 때 가독성이 떨어진다 따라서 배열 변수로 따로 뺴놓고 활용해보자
```js
function CommentList(props) {
    return(
        <div>
            <Comment name={"신동욱"} comment={"안녕하세요. 신동욱입니다."} />
            <Comment name={"신동욱1"} comment={"안녕하세요. 신동욱1입니다."} />
            <Comment name={"신동욱2"} comment={"안녕하세요. 신동욱2입니다."} />
        </div>
    )
}
```

```js
const comments = [
    { name: "신동욱", comment: "안녕하세요, 신동욱입니다.",},
    { name: "신동욱1", comment: "안녕하세요, 신동욱1입니다",},
    { name: "신동욱2", comment: "안녕하세요, 신동욱2입니다",},
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
              return (
                <Comment name={comment.name} comment={comment.comment} />
              );
            })}
        </div>
    );
}
```


## 🛜 state와 생명주기
* state, 생명주기 모두 클래스 컴포넌트형태에서 사용하는 용어들이다.

### 👀 state란?
* state란? 리액트 컴포넌트의 상태를 의미한다.
* 상태 의미는 정상, 비정상이 아닌 컴포넌트의 데이터를 의미.
* 컴포넌트의 변경가능한 데이터를 의미한다.
* State가 변하면 다시 렌더링이 되어 렌더링과 관련된 값만 state에 포함시켜야 한다.

### 📶 state의 특징
* 리엑트 만의 특별한 형태가 아닌 단지 자바스크립트 객체일 뿐이다.

<img src="../23-react1/image/state1.png" width="450px" height="300px" title="30%" alt="스테이트 설명"></img><br/>

<img src="../23-react1/image/bread-example.png" width="450px" height="300px" title="30%" alt="(엘리먼트, 컴포넌트, 인스턴스)그림 설명"></img><br/>

<br>

***
<br>


## 03.30(5주차)
### 🧐 엘리먼트
* 리액트 엘리먼트는 자바스크립트 객체의 형태로 존재한다. <br>
* 컴포넌트(Button 등), 속성(color 등) 및 내부의 모든 children을 포함하는 일반 JS객체이다.<br>
* 이 객체는 마음대로 변경할 수 없는 불변성을 갖고 있다

### 👀 엘리먼트의 특징
* 가장 큰 특징은 불변성이다
* 즉 한 번 생성된 엘리먼트나 그 안에 있는 속성을 바꿀 수 없다.

#### 😗 만일 내용이 바뀌었다면??
* 컴포넌트를 통해 새로운 엘리먼트를 생성해준다.
* 그 후 이전 엘리먼트와 교체를 하는 방벙으로 내용을 바꿔야 한다
* 이렇게 교체하는 작업을하기위해 Virtual DOM의 개념도 이다.
  
### 👀 엘리먼트 렌더링하기
  아래 코드는 id값이 root 태그로 단순한 코드이지만 리액트의 매우 중요한 필수 코드이다
  이 div태그안 리액트 엘리먼트가 렌더링 되며, 이것을 Root DOM node라고 합니다.


  ```js
    <dib id="root"> </div>
  ```

### 👀 컴포넌트 구조란?
* 컴포넌트 구조는 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고, 다시 이런 컴포넌트들이 모여서 전체 페이지를 구성한다는 것을 의미.
* 컴포넌트 재사용이 가능하여 전체 코드양을 줄이고 개발시간, 유지보수 비용 또한 절약된다
* 컴포넌트는 자바스크립트 함수와 입력과 출력이 있다는 면에서 유사하다
* 다만 입출력은 입력은 Props, 출력은 이랙트 엘리먼트의 형태로 출력된다
* 엘리먼트를 필요한 만큼 만들어 사용한다는 면에서는 객체 지향의 개념과 비슷하다.

### 🫨 Props의 개념
* props는 property(속성, 특성)의 준말이다
* 이 props가 바로 컴포넌트의 속성이다
* 컴포넌트의 어떠한 속성, props를 넣느냐의 따라서 속성이 다른 엘리먼트가 출력된다.
* props는 컴포넌트에 전달 할 다양한 정보를 담고 있는 자바스크립트 객체이다

#### 👀 props의 특징
* 읽기 전용이므로 변경이 불가하다
* 속성이 다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달하면 된다.

#### 👍🏻 Pure 함수 vs, Impure 함수
* 인수로 받은 정보가 함수 내부에서 변하지 않다면 Pure, 변한다면 Impure 이다.
  
### 🚨 중요!
* 컴포넌트를 다 분리해야 파일과 컴포넌트 이름을 일치시킬 수 있다
* 다시 말 해 1개의 클래스파일(컴포넌트 생성)에 두개의 컴포넌트가 정의되어 있으면 혼란을 야기한다.


### 🔨 컴포넌트 합성
* 컴포넌트 여러개를 합쳐 하나의 컴포넌트로 만들 수 있다
* 복잡한 화면을 여러 개의 컴포넌트로 나누어 구현할 수 있다
* 개념을 보여줄 목적인 예시를 들어본다 컴포넌트 A를 B에서 3개 사용하여 최종적으로 B만 렌더링하는 예시 -> (a), b(a(1), a(2), a(3))   reder.b


### ♻️ 생명주기란?
* 컴포넌트의 생성, 사용, 종료 시점들을 나타내는 것.
* constructor가 실행 되면서 컴포넌트가 생성된다
* 생성 직후 componentDidMount() 함수가 호출된다.
* 컴포넌트가 소명하기 전까지 여러 번 랜더링한다
* 랜더링은 props, setState() forceUpdate()에 의해 상태가 변경되면 이루어진다.
* 그리고 렌더링이 끝나면 conponentDinUpdate() 함수가 호출된다.
* 마지막으로 컴포넌트가 언마운트 되면 compomomentWillUnmount() 함수가 호출된다.


<br>

***
<br>

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

<br>

***
<br>

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
