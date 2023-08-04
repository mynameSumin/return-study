import { useEffect, useState } from "react";
import axios from "axios";
import Posts from "../component/board/posts";
import Pagination from "../component/board/pagination";
import { Link, useNavigate } from "react-router-dom";

function BoardList() {
  const navigate = useNavigate();
  let [list, setList] = useState([]);
  const [page, setPage] = useState(1); //현재 페이지
  const limit = 10; // posts가 보일 최대한의 갯수
  const offset = (page - 1) * limit; // 시작점과 끝점을 구하는 offset

  const moveToWriting = () => {
    navigate("/writing");
  };

  const postsData = (posts) => {
    if (posts) {
      let postResult = posts.slice(offset, offset + limit);
      return postResult;
    }
  };

  function getBoardList() {
    axios
      .get("http://localhost:3001/list")
      .then((res) => {
        const result = [...res.data];
        console.log(result);
        setList(result.reverse());
      })
      .catch(() => {
        console.log("get list error");
      });
  }

  useEffect(() => {
    getBoardList();
  }, []);

  return (
    <div>
      <h1>Return Study</h1>
      <button
        onClick={() => {
          moveToWriting();
        }}
      >
        작성하기
      </button>
      <table>
        <thead>
          <tr>
            <th>글번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>등록일</th>
          </tr>
        </thead>
        <tbody>
          <Posts info={postsData(list)} />
          <Pagination
            postsPerPage={limit}
            page={page}
            setPage={setPage}
            totalPosts={list.length}
          />
        </tbody>
      </table>
    </div>
  );
}

export default BoardList;
