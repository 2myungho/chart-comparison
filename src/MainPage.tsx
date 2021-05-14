import React from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <Link to="/design">디자인 비교</Link> <br />
      <Link to="/performance">퍼포먼스 비교</Link>
    </>
  );
}
