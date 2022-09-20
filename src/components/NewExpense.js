import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
  const [isEdited, setIsEdited] = useState(false);

  const saveDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEdited(false);
  };

  const startEditingHandler = () => {
    setIsEdited(true);
  };

  const stopEditingHandler = () => {
    setIsEdited(false);
  };

  return (
    <div className="new-expense">
      {isEdited && (
        <ExpenseForm
          onSaveData={saveDataHandler}
          onCancel={stopEditingHandler}
        />
      )}

      {!isEdited && (
        <button onClick={startEditingHandler}>Add new expense</button>
      )}
    </div>
  );
}

export default NewExpense;
