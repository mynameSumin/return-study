import React from "react";
import { Link } from "react-router-dom";
import Detail from "../../pages/Detail";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Posts({ info }) {
  const navigate = useNavigate();
  return info !== undefined ? (
    info.map((list, i) => {
      return (
        <tr key={i}>
          <td>
            <Link to="/detail">{list.id}</Link>
          </td>
          <td>{list.title}</td>
          <td>{list.user.name}</td>
          <td>{list.createdDate}</td>
        </tr>
      );
    })
  ) : (
    <div>loading...</div>
  );
}

export default Posts;
