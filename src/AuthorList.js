import React from "react";
import AuthorCard from "./AuthorCard";

function AuthorList(props) {
  const authorList = props.authors.map(author => (
    <AuthorCard author={author} />
  ));
  return (
    <div className="authors">
      <div className="row">{authorList}</div>
    </div>
  );
}

export default AuthorList;
