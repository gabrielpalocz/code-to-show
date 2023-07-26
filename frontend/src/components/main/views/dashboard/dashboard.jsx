import React from 'react'
import { PieChart } from './charts/pieChart';
import { VerticalChart } from './charts/verticalChart';
import { LineChart } from './charts/lineChart';

/**
 * 
 * @returns Dashboard view
 */
function Dashboard() {
  return (
    <div className="container-fluid" style={{ height: '100%' }} >
      Dashboard
      <div className="row align-items-center" style={{ height: '100%' }}>
        <div className="col-12 col-lg-6" >
          <VerticalChart />
          <LineChart />
        </div>
        <div className="col-12 col-lg-6" >
          <PieChart />
        </div>
      </div>
    </div>

  )
}

export default Dashboard;
