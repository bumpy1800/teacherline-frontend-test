import styled from "@emotion/styled";
import Todo from "./todo";
import { useTodoContext } from "../_context/todo-context";
import { TTodo } from "../_types/todo.type";

const TodoList = () => {
  const { todoList } = useTodoContext();
  return (
    <S.Ul>
      {todoList.map((todo: TTodo) => {
        return (
          <li key={todo.id}>
            <Todo {...todo} />
          </li>
        );
      })}
    </S.Ul>
  );
};

export default TodoList;

const S = {
  Ul: styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    & li {
      width: 100%;
    }
  `,
  TodoBox: styled.div`
    width: 100%;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #dbe2ef;
    border-radius: 5px;
  `,
  TodoTitle: styled.span`
    font-size: 12px;
    line-height: 13.79px;
    color: #000000;
  `,
};
