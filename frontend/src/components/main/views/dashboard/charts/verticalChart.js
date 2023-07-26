import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
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
            data: [10, 20, 30, 40, 30, 35, 25],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: [15, 18, 35, 22, 10, 40, 20],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

/**
 * 
 * @returns Vertical Chart
 */
export function VerticalChart() {
    const darkMod = useSelector(state => state.darkMode.darkModeState);
    return (
        <div style={{height: '20rem', width: '100%' }}>
            <Bar options={{
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
                        text: 'Bar Chart',
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
