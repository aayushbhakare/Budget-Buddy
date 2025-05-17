import React, { useEffect, useState } from 'react';
import { LuPlus } from "react-icons/lu";
import { prepareIncomeBarChartData } from '../../utils/helper';
import CustomBarChart from '../Charts/CustomBarChart';
import CustomLineChart from '../Charts/CustomLineChart';


const IncomeOverview = ({ transactions, onAddIncome }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareIncomeBarChartData(transactions);
    setChartData(result);

    return () => {};
  }, [transactions]);

  console.log(chartData);

  return <div className="card">
  <div className="flex items-center justify-between">
    <div className="">
      <h5 className="text-lg">Income Overview</h5>
      <p className="text-xs text-gray-400 mt-0.5">
        Track your earnings over time and analyze your income t
      </p>
    </div>

    <button className="add-btn" onClick={onAddIncome}>
      <LuPlus className="text-lg" />
      Add Income
    </button>
  </div>
       {/* <CustomBarChart data={chartData} /> */}
       <CustomLineChart data={chartData} />
  <div className="mt-10">
      
  </div>
</div>;
};

export default IncomeOverview;