import styled from "@emotion/styled";
import { useTodoContext } from "../_context/todo-context";
import { ChangeEvent } from "react";
import { SortType } from "../_types/todo.type";

const TodoFilter = () => {
  const { sortTodo } = useTodoContext();

  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    sortTodo(e.target.value as SortType);
  };

  return (
    <S.FilterWrap>
      <select name="filter" id="filter" onChange={handleFilterChange}>
        <option value="all">전체</option>
        <option value="completed">완료</option>
        <option value="inComplete">미완료</option>
      </select>
    </S.FilterWrap>
  );
};

export default TodoFilter;

const S = {
  FilterWrap: styled.div`
    margin-bottom: 12px;
  `,
};
