import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/login';
// import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route } from "react-router-dom";
function App() {
  return (
    // <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Login/> }></Route>
        <Route path='/Home' element={ <Home/> }></Route>
        <Route path='/About' element={ <About/> }></Route>
        <Route path='/Contact' element={ <Contact/> }></Route>

      </Routes>
    // </BrowserRouter>
  );
}

export default App;


// import React from "react";
// import ReactDOM from "react-dom/client";

// function Hello(props) {
//   return(
//     <div id="root"></div>
//   );
// }

// const myelement = 
// // React.createElement('h1',{}, 'I am Jitsubha');
// (
//   <input type="text" />
// );
// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(myelement);

// export default Hello;
