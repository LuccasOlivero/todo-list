import { useReducer, useState } from "react";

export default function App() {
  const initialState = {
    balance: 0,
    loan: 0,
    btn: true,
  };

  const AMOUNT_DEPOSIT = 150;
  const AMOUNT_WITHDRAW = 50;
  const LOAN = 5000;
  const [{ balance, loan, btn }, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "openAccount":
        return { ...state, balance: 500, btn: false };
      case "deposit":
        return { ...state, balance: state.balance + AMOUNT_DEPOSIT };
      case "withdraw":
        return {
          ...state,
          balance:
            state.balance > 0 ? state.balance - AMOUNT_WITHDRAW : state.balance,
        };
      case "requestLoan":
        return {
          ...state,
          loan: state.loan === LOAN ? state.loan : state.loan + LOAN,
        };
      case "payLoan":
        return {
          ...state,
          balance:
            state.balance >= LOAN ? state.balance - state.loan : state.balance,
          loan: state.balance >= LOAN ? state.loan - LOAN : state.loan,
        };
      case "closeAccount":
        return {
          ...state,
          btn: state.balance === state.loan ? true : false,
        };
      default:
        return { ...state };
    }
  }
  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <p>
        <button
          onClick={() => {
            dispatch({ type: "openAccount" });
          }}
          disabled={false}
        >
          Open account
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "deposit" });
          }}
          disabled={btn}
        >
          Deposit 150
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "withdraw" });
          }}
          disabled={btn}
        >
          Withdraw 50
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "requestLoan" });
          }}
          disabled={btn}
        >
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "payLoan" });
          }}
          disabled={btn}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "closeAccount" });
          }}
          disabled={btn}
        >
          Close account
        </button>
      </p>
    </div>
  );
}
