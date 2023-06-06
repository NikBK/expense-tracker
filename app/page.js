'use client'

import Form from '@components/Form';
import Tracker from '@components/Tracker';
import { useEffect, useState } from 'react';

export default function Home() {
  const [incomeData, setIncomeData] = useState({});
  const [expenseData, setExpenseData] = useState({});

  useEffect(() => {
    var tempData = { labels: [], datasets: [{ data: [], backgroundColor: [] }] };
    if (!localStorage.getItem(`Income_data`)) {
      localStorage.setItem(`Income_data`, JSON.stringify(tempData));
      setIncomeData(tempData);
    }
    else {
      setIncomeData(JSON.parse(localStorage.getItem(`Income_data`)));
    }
    if (!localStorage.getItem(`Expense_data`)) {
      localStorage.setItem(`Expense_data`, JSON.stringify(tempData));
      setExpenseData(tempData);
    }
    else {
      setExpenseData(JSON.parse(localStorage.getItem(`Expense_data`)));
    }
  }, [])


  return (
    <main className="w-full h-screen items-center flex justify-around flex-wrap">
      <Form setIncomeData={setIncomeData} setExpenseData={setExpenseData} />

      <Tracker
        title="Income"
        data={incomeData}
      />

      <Tracker
        title="Expense"
        data={expenseData}
      />
    </main>
  )
}
