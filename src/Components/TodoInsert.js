import React from "react";
import { useState } from "react";

const TodoInsert = ({ addValue }) => {
  const [value, setValue] = useState("");

  // input이 변경될 때마다 실행
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addValue(value);
    setValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleOnChange}
          placeholder="todolist add.."
        ></input>
        <button type="submit">추가</button>
      </form>
    </div>
  );
};

export default TodoInsert;

/* TODO:
1. form 형태 추가 *
2. input 추가 *
3. 제출 버튼 추가 *
4. 입력 이벤트 함수 추가 *
5. styled-components 적용
*/
