import React from "react";
import styled from "styled-components";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Editor() {
  return (
    <main>
      <Header />
      <div>
        <img src="eunseon.png" alt="editor photo" />
      </div>
      <Footer />
    </main>
  );
}

/*
  Editor.js 구현 목표 체크리스트
  1. 헤더 컴포넌트 불러오기 * 
  2. 푸터 컴포넌트 불러오기 * 
  3. 깃허브, 인스타그램, 블로그 링크 삽입 
*/
