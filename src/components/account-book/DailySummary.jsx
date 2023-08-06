import PropTypes from "prop-types";
import { useState } from "react";

import { styled } from "styled-components";

import { Heading, HeadingBold } from "../Heading.jsx";
import Button from "./Button.jsx";
import ExpenseItem from "./ExpenseItem.jsx";

const ExpenseTotal = styled(ExpenseItem)`
  color: rgba(21, 21, 21, 1);
  font-weight: 700;
`;

const ExpenseStyledItem = styled(ExpenseItem)`
  color: rgba(21, 21, 21, 1);
`;

const Container = styled.div`
  width: 100%;
`;

const categoryName = ["악세서리", "간식", "사료", "생활용품", "영양제"];

const DailySummary = ({ data, date }) => {
  let filteredList = [];
  let totalPrice = 0;

  if (date && data) {
    filteredList = data.list.filter((item) => item.date === date);
    totalPrice = filteredList.reduce((result, item) => result + item.value, 0);
  }

  return (
    <Container>
      <Heading>
        <HeadingBold>이 날의 소비 내역</HeadingBold>
      </Heading>
      <ExpenseTotal color={null} name="Total" price={totalPrice} />
      {filteredList.map((item) => (
        <ExpenseStyledItem
          key={item.id}
          color={null}
          name={categoryName[item.category]}
          price={item.value}
        />
      ))}
      <Button onClick={() => alert("TODO")}>소비내역 추가하기</Button>
    </Container>
  );
};

DailySummary.propTypes = {
  data: PropTypes.object,
  date: PropTypes.number,
};

export default DailySummary;
