import logo from './logo.svg';
import './App.css';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
import BarChart from './componet/barchart';
Chart.register(CategoryScale);

function App() {
  return (
    <div className="App">
      
      <BarChart></BarChart>
    </div>
  );
}

export default App;
