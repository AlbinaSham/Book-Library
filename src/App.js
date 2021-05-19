import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 


import Header from "./components/Header";
import Home from "./components/Home";
import WishList from "./components/WishList";
import Finished from "./components/Finished";
import Search from "./components/Search";

function App() {
  return (
     <Router>
       <Header />
         <Switch>
         
           <Route exact path = "/">
         
             <Home />
             
           </Route>

           <Route exact path = "/wishlist">
             <WishList />
           </Route>

           <Route exact path = "/finished">
             <Finished />
           </Route>

         </Switch>
     </Router>
  );
}

export default App;
