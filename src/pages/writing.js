import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Writing() {
  const navigate = useNavigate();
  const [board, setBoard] = useState({
    id: 1,
    title: "",
    content: "",
    likeCount: 0,
    commentCount: 0,
    user: {
      userId: 2020103722,
      profileImgURL: "",
      name: "민수민",
    },
    createdDate: "2023/05/19",
    isMyPost: true,
  });

  const { title, createdBy, contents } = board; //비구조화 할당

  const onChange = (event) => {
    const { value, name } = event.target; //event.target에서 name과 value만 가져오기
    setBoard({
      ...board,
      [name]: value,
    });
  };

  const saveWriting = async () => {
    await axios.post("http://localhost:3001");
  };

  const backToList = () => {
    navigate("/");
  };

  return (
    <>
      <div>writing</div>
      <div>
        <span>제목</span>
        <input type="text" name="title" value={title} onChange={onChange} />
      </div>
      <div>
        <span>내용</span>
        <textarea
          name="contents"
          cols="30"
          rows="10"
          value={contents}
          onChange={onChange}
        ></textarea>
      </div>
      <button
        onClick={() => {
          backToList();
        }}
      >
        등록
      </button>
      <button
        onClick={() => {
          backToList();
        }}
      >
        취소
      </button>
    </>
  );
}

export default Writing;
