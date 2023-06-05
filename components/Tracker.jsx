'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./styles.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const Tracker = ({ title, data }) => {

    return (
        <section className={`tracker-container ${title}_tracker p-5 h-fit mb-4`}>
            <h2 className={`${title == 'Income' ? 'text-green-600' : 'text-red-600'} text-center font-bold`}>
                {title} Tracker
            </h2>
            <div className='chart-container'>
                {data?.labels?.length > 0 && <Doughnut data={data} />}
            </div>
            <article className='text-center'>
                Total {title} : {data.datasets && data?.datasets[0]?.data.reduce((accu, cur) => accu += Number(cur), 0) || 0}
            </article>
        </section>
    )
}

export default Tracker
