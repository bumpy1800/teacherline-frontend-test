"use client";

import styled from "@emotion/styled";
import TodoCreate from "./_components/todo-create";
import TodoList from "./_components/todo-list";
import { TodoProvider } from "./_context/todo-context";
import TodoFilter from "./_components/todo-filter";

export default function Home() {
  return (
    <TodoProvider>
      <S.Main>
        <S.Wrap>
          <S.Header>
            <S.Title>To Do list</S.Title>
            <S.Nav>
              <TodoCreate />
            </S.Nav>
          </S.Header>
          <S.Section>
            <TodoFilter />
            <TodoList />
          </S.Section>
        </S.Wrap>
      </S.Main>
    </TodoProvider>
  );
}

const S = {
  Main: styled.main`
    width: 390px;
    height: 100vh;
    background-color: #3f72af;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Wrap: styled.div`
    width: 350px;
    height: 748px;
    border-radius: 10px;
    background-color: #f9f7f7;
    padding: 20px 15px;
  `,
  Header: styled.header`
    border-bottom: 2px solid #dddddd;
  `,
  Title: styled.h1`
    font-size: 40px;
    line-height: 45.96px;
    color: #112d4e;
    text-align: center;
  `,
  Nav: styled.nav`
    padding: 19px 35px 15px 35px;
  `,
  Section: styled.section`
    padding: 14.8px 12px 0px 8px;
    max-height: 67vh;
    overflow-y: auto;
  `,
};
