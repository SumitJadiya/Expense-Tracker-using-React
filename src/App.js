import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { MainProvider } from './context/MainContext'
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "reactstrap"
import "./App.css"
function App() {
  return (
    <MainProvider>
      <Header />
      <Container>
        <Balance />
        <IncomeExpense />
        <AddTransaction />
        <TransactionList />
      </Container>
    </MainProvider>
  );
}

export default App;
