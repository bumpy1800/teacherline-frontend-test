import { ChangeEvent, FormEvent, useState } from "react";
import { useTodoContext } from "../_context/todo-context";
import styled from "@emotion/styled";

const TodoCreate = () => {
  const { addTodo } = useTodoContext();
  const [titleValue, setTitleValue] = useState<string>("");
  const [validateText, setValidateText] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
    if (e.target.value.trim() !== "") {
      setValidateText("");
    }
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (titleValue.trim() === "") {
      setValidateText("값을 입력해주세요");
      return;
    }
    addTodo(titleValue);
    setTitleValue("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <S.InputBox>
        <S.AddInput
          type="text"
          name="title"
          id="title"
          placeholder="some words"
          value={titleValue}
          onChange={handleInputChange}
        />
        <S.AddButton type="submit">
          <div>+</div>
        </S.AddButton>
      </S.InputBox>
      <S.ValidateText isText={validateText}>{validateText}</S.ValidateText>
    </form>
  );
};

export default TodoCreate;

const S = {
  InputBox: styled.div`
    position: relative;
  `,
  AddInput: styled.input`
    width: 100%;
    background-color: #dbe2ef;
    border: 1px solid #b1b1b166;
    border-radius: 5px;
    font-size: 12px;
    line-height: 12.79px;
    color: #000000;
    padding: 9.5px 45px 9.5px 10.5px;
    &::placeholder {
      color: #7b7b7b;
    }
  `,
  AddButton: styled.button`
    position: absolute;
    top: 0;
    right: 0;
    color: #ffffff;
    width: 45px;
    height: 33px;
    font-size: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 5px 5px 0;
    background-color: #aaaaaa;
  `,
  ValidateText: styled.span<{ isText: string }>`
    font-size: 12px;
    color: red;
    padding-left: 10px;
    display: ${({ isText }) => (isText ? "inline" : "none")};
  `,
};
