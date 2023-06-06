"use client"

import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Savings',
        },
    },
    scales: {
        y:
        {
            ticks: {
                interval: 100,
            },
        },
        x:
        {

        },
    },
};

const Savings = ({ incomeArray, expenseArray }) => {
    var incomeAmount = incomeArray.reduce((acc, cur) => acc += Number(cur), 0);
    var expenseAmount = expenseArray.reduce((acc, cur) => acc += Number(cur), 0);
    var total = incomeAmount - expenseAmount;

    const data = {
        labels: ["Total"],
        datasets: [
            {
                label: 'Income',
                data: [incomeAmount],
                backgroundColor: 'rgba(255, 99, 132, 0.9)',
            },
            {
                label: 'Expense',
                data: [expenseAmount],
                backgroundColor: 'rgba(53, 162, 235, 0.9)',
            },
        ],
    };

    return (
        <section className='text-center savings-tracker p-5 mb-4'>
            <div className={`${total > 0 ? "text-green-700" : "text-red-700"}`}>
                {total > 0 && <FontAwesomeIcon icon={faArrowUp} />}
                {total <= 0 && <FontAwesomeIcon icon={faArrowDown} />}
                {total}
            </div>
            <Bar options={options} data={data} />
        </section>
    )
}

export default Savings
