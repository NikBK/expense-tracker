'use client'

import { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./styles.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const Tracker = ({ title }) => {
    const [data, setData] = useState({});

    useEffect(() => {
        // function checkUserDate() {
        var storeData = window.localStorage.getItem(`${title}_data`);
        console.log("store", storeData);
        if (storeData) {
            setData(JSON.parse(storeData));

        }
        else {
            var tempData = { labels: [], datasets: [{ data: [], backgroundColor: [] }] };
            window.localStorage.setItem(`${title}_data`, JSON.stringify(tempData));
            setData(tempData);
        }
        // }
        // window.addEventListener("storage", checkUserDate);
        // checkUserDate();
    }, [])

    return (
        <section className={`tracker-container ${title}_tracker p-5 h-fit mb-4`}>
            <h2 className={`${title == 'Income' ? 'text-green-600' : 'text-red-600'} text-center font-bold`}>
                {title} Tracker
            </h2>
            <div className='chart-container'>
                {data?.labels?.length > 0 && <Doughnut data={data} />}
            </div>
        </section>
    )
}

export default Tracker
