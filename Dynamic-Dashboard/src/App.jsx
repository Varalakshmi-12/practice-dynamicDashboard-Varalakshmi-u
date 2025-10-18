import React from 'react'
import './App.css'
import DynamicDashboard from './DynamicDashboard'

const App = () => {
  return (
    <div>
      <h1>{new Date().toLocaleDateString()}
</h1>
      <DynamicDashboard/>

    </div>
  )
}
export default App;