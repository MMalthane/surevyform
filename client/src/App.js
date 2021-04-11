import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'


import './App.css';

 const Header = () => <h2>Header</h2>;
 const DashBoard = () => <h2>DashBoard</h2>;
 const SurveyNew = () => <h2>SurevyNew</h2>;
 const Landing = () => <h2>Landing</h2>;




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
      <h1> Surevey Form</h1>
      <Route path="/" component={Landing} />
      <Route path="./surveys" component={DashBoard} />
      <Route path="./Header" component={Header} />
      <Route path="./SurveyNew" component={SurveyNew} />
      </div>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
