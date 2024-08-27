import styled from "@emotion/styled";

const Input = () => {
  return (
    <S.InputBox>
      <S.AddInput type="text" placeholder="some words" />
      <S.AddButton>+</S.AddButton>
    </S.InputBox>
  );
};

export default Input;

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
    align-items: end;
    justify-content: center;
    border-radius: 0 5px 5px 0;
    background-color: #aaaaaa;
  `,
};
