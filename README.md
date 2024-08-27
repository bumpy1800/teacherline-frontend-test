# 김재성 티처라인 과제 제출

## 작업 구상

디자인 시안을 보고 SPA로 컴펙트하게 개발하는 것이 가장 적합하다고 판단했습니다 그래서 app router의 root페이지에서 작업을 진했했고 구조는 아래와 같습니다(\_를 사용하는 네이밍 컨벤션을 채택했습니다)

### 하위 폴더 구조

```
└─ app
 ├─ _components
 ├─ _context
 ├─ _types
 ├─ favicon.tsx
 ├─ globals.css
 ├─ layout.tsx
 ├─ page.module.css
 └─ page.tsx
```

- app폴더
  - `_component` : 페이지에서 사용하는 컴포넌트가 위치합니다
  - `_context` : todo를 전역상태로 관리하기 위한 context파일이 위치합니다
  - `_types` : 페이지 내에서 사용되는 타입들을 모아서 export합니다
  - `layout.tsx` : rootLayout설정파일(타이틀정도만 수정했습니다)
  - `page.tsx` : rootPage로써 컴포넌트를 호출해서 배치하는 파일입니다

이외는 기본 설정 그대로라 생략하겠습니다

## 작업 내용

### 리스트에 할일 추가

context에서 추가하는 함수를 만들어서 export한 후 TodoCreate 컴포넌트에서 사용합니다

```typescript
const addTodo = (title: string) => {
  setTodoList(prev => [...prev, { id: Date.now(), title, completed: false }]);
};
```

### 리스트 중 완료한 항목에 대해서 체크 할 수 있는 기능

context에서 체크하는 함수를 만들어서 export한 후 Todo 컴포넌트에서 사용합니다

```typescript
const toggleTodo = (id: number) => {
  setTodoList(
    todoList.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};
```

### 디자인 시안과 같은 폰트 적용

global.ts에서 import해서 \*에 font-family로 지정했습니다

```css
@import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");
```

### 체크박스의 CSS를 디자인 시안과 동일하게 커스텀

checkBox를 만들어서 숨기고 div에 스타일을 줘서 처리했습니다(svg사용)

```typescript
        <S.HideCheckBox
          type="checkbox"
          name="completed"
          id="completed"
          checked={completed ? true : false}
          readOnly
        />
        <S.CustomCheckBox isCheck={completed} onClick={handleCheckBoxClick}>
          <S.CheckIcon viewBox="0 0 24 24">
            <polyline points="19 7 10 17 5 12" />
          </S.CheckIcon>
        </S.CustomCheckBox>
```

```typescript
  CheckIcon: styled.svg`
    fill: none;
    stroke: #36cf00;
    stroke-width: 2px;
  `,
  CustomCheckBox: styled.div<{ isCheck: boolean }>`
    display: inline-block;
    width: 24px;
    height: 24px;
    border: 1px solid #7d7c7c;
    background-color: transparent;
    border-radius: 5px;

    svg {
      visibility: ${({ isCheck }) => (isCheck ? "visible" : "hidden")};
    }
  `,
```

### 전체, 완료, 미완료 상태를 기준으로 정렬 할 수 있는 select형태의 필더를 만들어 주세요

TodoFilter컴포넌트에서 select태그를 만든 후 onChange마다 context에서 만들어둔 정렬함수를 호출합니다

```typescript
const sortTodo = (type: SortType) => {
  const sortTodoList = [...todoList].sort((a, b) => {
    if (type === "completed") {
      return Number(b.completed) - Number(a.completed);
    } else if (type === "inComplete") {
      return Number(a.completed) - Number(b.completed);
    } else {
      return a.id - b.id;
    }
  });
  setTodoList(sortTodoList);
};
```
