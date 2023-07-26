import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [10, 20, 30, 10, 20, 15, 28],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: [12, 22, 7, 25, 10, 27, 5],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

/**
 * 
 * @returns Line Chart
 */
export function LineChart() {
    const darkMod = useSelector(state => state.darkMode.darkModeState);
    return (
        <div style={{ height: '20rem', width: '100%' }}>
            <Line options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            color: darkMod ? 'white' : 'grey',
                        }
                    },
                    title: {
                        display: true,
                        color: darkMod ? 'white' : 'grey',
                        text: 'Line Chart',
                    },
                },
                scales: {
                    y: {
                        ticks: {
                            color: darkMod ? 'white' : 'grey',
                        },
                        grid: {
                            color: darkMod ? 'grey' : 'lightgrey',
                        }
                    },
                    x: {
                        ticks: {
                            color: darkMod ? 'white' : 'grey',
                        },
                        grid: {
                            color: darkMod ? 'grey' : 'lightgrey',
                        }
                    }
                },
            }} data={data} />
        </div>
    )
}
