import React from "react";
import { ClassData } from '../data.js'
import { Bar } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
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
    ChartDataLabels
);
const setClass = 'Lớp Học'




export const options = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
        datalabels: {
            labels: {
                title: {

                    font: {
                        size: 15,
                        weight: 'bold'
                    },

                }
            },
            align: 'left',
            color: 'white',
            anchor: 'end',


            borderRadius: 20,
            formatter: (value, context) => {
                // return context.dataIndex
                return value + '%'
            },
        },

    },

    scales: {
        y: {

            title: {
                display: true,
                text: setClass,
                color: "black",
                font: {
                    size: 24
                }
            },

            grid: {
                display: false
            },
         
        },
        x: {
            grid: {
                display: false
            },
            grace:4

        }
    }
};


const labels = ['', '', '', '', '', '', ''];
export const data = {
    labels: labels,
    datasets: [
        {
            label: '12B1',
            data: ClassData.map((data) => data.number),
            backgroundColor: '#64ca99',
            borderRadius: 5,
        
        },
    ],


};

const customrToplabel = {
    id: '12B1',
    afterDatasetsDraw(chart, args, pluginOptions) {
        const { ctx,
            scales: { x, y } } = chart;


            chart.data.datasets[0].data.map((data,index)=>{
                const datasetArray=[];
                chart.data.datasets.map((dataset)=>{
                    datasetArray.push(dataset.data[index])
                })

                ctx.save();
                ctx.font = '30px ';
                ctx.fillStyle = 'black'
                ctx.paddingLeft =10
                // x.getPixelForValue(10)
                ctx.fillText('12B1',chart.getDatasetMeta(0).data[index].x ,chart.getDatasetMeta(0).data[index].y )
                console.log(index)
            })
    
    }
}


function BarChart() {
    return (
        <>  
            <div >
            <Bar  style={{ height: '100vh',width:'90vm ' }} options={options} data={data} plugins={[customrToplabel]} />
            </div>
          


        </>
    )
}
export default BarChart;