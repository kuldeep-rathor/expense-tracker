import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate Date={props.date} />

        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="location">{props.location}</div>
        <div className="expense-item__price">${props.amount}</div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
