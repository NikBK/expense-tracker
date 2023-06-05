"use client"

import randomColor from 'randomcolor';
import { useState } from 'react'

const type = ["Salary", "Bills", "Car", "Clothes", "Food", "grocery", "Travel", "Shopping", "House", "Entertainment", "Phone", "Pets", "Others"]

const Form = () => {
    const [inputs, setInputs] = useState({ type: "Income", category: type[0], amount: 0, date: "0000-00-00" });

    const handleSubmit = (e) => {
        e.preventDefault();
        var storeData = JSON.parse(localStorage.getItem(`${inputs.type}_data`));
        if (storeData?.labels) {
            const localData = storeData;
            localData?.labels?.push(inputs.category);
            localData?.datasets[0]?.data?.push(inputs.amount);
            localData?.datasets[0]?.backgroundColor?.push(randomColor());
            localStorage.setItem(`${inputs.type}_data`, JSON.stringify(localData));
        }
        else {
            var data = { labels: [inputs.category], datasets: [{ data: [inputs.amount], backgroundColor: [randomColor()] }] };
            localStorage.setItem(`${inputs.type}_data`, JSON.stringify(data));
        }
        window.location.reload();
    }

    return (
        <section className='expense-container p-3 mb-4'>
            <h2 className="text-center font-bold">
                Add Income/Expense
            </h2>
            <form className="grid gap-4 grid-cols-2 items-center p-5" onSubmit={handleSubmit}>
                <label className='relative'>
                    <span className='block text-sm font-medium text-slate-700'>Type</span>
                    <select required onChange={(e) => setInputs(prev => ({ ...prev, type: e.target.value }))} className='focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border rounded-md w-full px-3 py-1'>
                        <option value="Income" key="Income">Income</option>
                        <option value="Expense" key="Expense">Expense</option>
                    </select>
                </label>

                <label className='relative'>
                    <span className='block text-sm font-medium text-slate-700'>Category</span>
                    <select required onChange={(e) => setInputs(prev => ({ ...prev, category: e.target.value }))} className='focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border rounded-md w-full px-3 py-1'>
                        {type.map(t => (
                            <option value={t} key={t}>{t}</option>
                        ))}
                    </select>
                </label>
                <label className='relative'>
                    <span className='block text-sm font-medium text-slate-700'>Amount</span>
                    <input required type='number' onChange={(e) => setInputs(prev => ({ ...prev, amount: e.target.value }))} className='focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md text-sm shadow-sm mt-1 block w-full px-3 py-2 bg-white border ' />
                </label>
                <label className='relative'>
                    <span className='block text-sm font-medium text-slate-700'>Date</span>
                    <input required type='date' onChange={(e) => setInputs(prev => ({ ...prev, date: e.target.value }))} className='focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md text-sm shadow-sm mt-1 block w-full px-3 py-2 bg-white border ' />
                </label>
                <button type='submit' className='col-span-full bg-sky-400 hover:bg-sky-500 py-1'>Create</button>
            </form>
        </section>
    )
}

export default Form
