import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'


import './App.css';

 const HeaderTitle = () => <h2>Header</h2>;
 const DashBoard = () => <h2>DashBoard</h2>;
 const SurveyNew = () => <h2>SurevyNew</h2>;
 const Landing = () => <h2>Landing</h2>;




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
    <Header />
      <Route path="/" component={Landing} />
      <Route path="./surveys" component={DashBoard} />
      <Route path="./Header" component={HeaderTitle} />
      <Route path="./SurveyNew" component={SurveyNew} />
      </div>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
