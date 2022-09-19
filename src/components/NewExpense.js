import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
  const saveDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={saveDataHandler} />
    </div>
  );
}

export default NewExpense;
