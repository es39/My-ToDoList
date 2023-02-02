import React from "react"
import styled from "styled-components";

import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function Yesterdaylist() {
    return (
        <div>
            <Header />
            <div>i'm yesterdaylist</div>
            <Footer />
        </div>
    )
}

/*
  YesterdayList.js 구현 목표 체크리스트
  1. 헤더 컴포넌트 불러오기 * 
  2. 푸터 컴포넌트 불러오기 * 
  3. 체크된 투두리스트 목록 보여주기 
  4. styled-components 적용 
*/