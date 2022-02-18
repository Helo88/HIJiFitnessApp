import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style/App.css";
import Homepage from './components/Homepage';
import RegisterForm from './components/RegisterForm'
import ShowPlans from './components/ShowPlans'
import Exercises from './components/exercises'
import ExDetails from "./components/ExDetails"
import ShowYogaPlans from './components/showYogaPlans'
import YogaExercises from './components/YogaExercises'
import YogaDetails from "./components/YogaDetails";
import HealthyTips from "./components/healthyTips";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [state, setState] = useState('start')
  return (
    <div className="" style={{}}>
      {/* HELLO WORLD */}
      <Router>
        { <Navbar/>}
         <Switch>
            <Route path={"/"} exact component={Homepage}/>
            <Route path={"/workoutplans"} exact component={ShowPlans}/>
            <Route path={"/exercises"}  exact component={Exercises}/>
            <Route path={"/exercises/details"}  exact component={ExDetails}/>
            <Route path={"/yogaplans"} exact component={ShowYogaPlans}/>
            <Route path={"/yogaExercises"}  exact component={YogaExercises}/>
            <Route path={"/yoga/details"}  exact component={YogaDetails}/>
            <Route path={"/healthytips"} exact component={HealthyTips}  />
            {/* <Route  exact component={}/>
            <Route path={"*"} exact component={} /> */}
           
          </Switch> 
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;