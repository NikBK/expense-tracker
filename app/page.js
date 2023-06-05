'use client'

import Form from '@components/Form';
import Tracker from '@components/Tracker';
import { useEffect, useState } from 'react';

export default function Home() {
  const [incomeData, setIncomeData] = useState(JSON.parse(localStorage.getItem(`Income_data`)) || {});
  const [expenseData, setExpenseData] = useState(JSON.parse(localStorage.getItem(`Expense_data`)) || {});

  useEffect(() => {
    var tempData = { labels: [], datasets: [{ data: [], backgroundColor: [] }] };
    if (!localStorage.getItem(`Income_data`)) {
      localStorage.setItem(`Income_data`, JSON.stringify(tempData));
      setIncomeData(tempData);
    }
    if (!localStorage.getItem(`Expense_data`)) {
      localStorage.setItem(`Expense_data`, JSON.stringify(tempData));
      setExpenseData(tempData);
    }
  }, [])


  return (
    <main className="w-full h-screen items-center flex justify-around flex-wrap">
      <Tracker
        title="Income"
        data={incomeData}
      />

      <Form setIncomeData={setIncomeData} setExpenseData={setExpenseData} />

      <Tracker
        title="Expense"
        data={expenseData}
      />
    </main>
  )
}
