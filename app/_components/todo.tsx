import styled from "@emotion/styled";

const Todo = () => {
  return (
    <S.TodoBox>
      <S.CheckBoxWrap>
        <S.HideCheckBox type="checkbox" name="completed" id="completed" />
        <S.CustomCheckBox>
          <S.CheckIcon viewBox="0 0 24 24">
            <polyline points="19 7 10 17 5 12" />
          </S.CheckIcon>
        </S.CustomCheckBox>
      </S.CheckBoxWrap>
      <S.TodoTitle>asd</S.TodoTitle>
    </S.TodoBox>
  );
};

export default Todo;

const S = {
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
  CheckBoxWrap: styled.div`
    display: inline-block;
    vertical-align: middle;
  `,
  CheckIcon: styled.svg`
    fill: none;
    stroke: #36cf00;
    stroke-width: 2px;
  `,
  CustomCheckBox: styled.div`
    display: inline-block;
    width: 24px;
    height: 24px;
    border: 1px solid #7d7c7c;
    background-color: transparent;
    border-radius: 5px;

    svg {
      visibility: visible;
    }
  `,
  HideCheckBox: styled.input`
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  `,
};
