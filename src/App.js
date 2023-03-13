import logo from './logo.svg';
import './App.css';
import beforeFire from './graphics/BeforeFire.png';
import duringFire from './graphics/DuringFire.png';
import afterFire from './graphics/AfterFire.png';
import communityImage from './graphics/CommunityWLocations.jpg';
import{ useState } from "react";
import { taskData } from "./taskData";


function App() {
  
  const [roleSelected, setRole] = useState ('Residents');
  const [timelineSelected, setTimeline] = useState ("beforeFireTasks");
  const [roleIndex, setRoleIndex] = useState (0);  
  const timeList = ["beforeFireTasks", "duringFireTasks"];
  const [timelineShown, setTimelineShown] = useState (false);
  const [taskShown, setTaskShown] = useState (false);
  const [mapShown, setMapShown] = useState (true);
  const [currParameter, setCurrParameter] = useState ();
  
  const handleRoleClicked = (roleName, roleIndex) => {
    setRole (roleName);
    setRoleIndex (roleIndex);
    setTimelineShown(true);
    setMapShown(false);
  }

  const handleTimelineClicked = (timeline) => {
    setTimeline (timeline);
    setTaskShown(true);
  }

  const handleButtonClicked = () => {
    setMapShown (true);
    setTaskShown(false);
    setTimelineShown(false);
  }

  return (
    <div className="App">
      <h1><u>Wildfire Preparedness</u></h1>
    {mapShown && (<div>
        <img src={communityImage} alt = "communitymap" usemap = "#mainmap"/>
        <map name = "mainmap">
             <area shape="circ" coords="150,270,30" onClick = {() => handleRoleClicked('Residents', 0)} />
             <area shape="circ" coords="163,422,30" onClick = {() => handleRoleClicked('Transportation Authority', 11)}/>            
             <area shape="circ" coords="390,130,30" onClick = {() => handleRoleClicked('Local Leader', 20)}/>
             <area shape="circ" coords="375,450,30" onClick = {() => handleRoleClicked('Local Fire Department', 1)} />
             <area shape="circ" coords="510,375,30" onClick = {() => handleRoleClicked('Health Advisor', 15)} />
             <area shape="circ" coords="570,275,30" onClick = {() => handleRoleClicked('Social Services', 13)} />
             <area shape="circ" coords="735,330,30" onClick = {() => handleRoleClicked('Environment Advisor', 14)} />
        </map>
    </div> )}


    {!mapShown &&(<div class = "backButtonDiv">
      <button class = "backButton" type = "button" onClick = {() => handleButtonClicked('Residents', 0) }> Back </button>
    </div>)}

    <div>
      {timelineShown && (<div>
        <h1>{roleSelected} Timeline</h1>
        <img src= {beforeFire} class = "timelineGraphic" onClick = {() => handleTimelineClicked('Before the Fire')} />
        <img src={duringFire} class = "timelineGraphic" onClick = {() => handleTimelineClicked('During the Fire')}/>
        <img src={afterFire} class = "timelineGraphic" onClick = {() => handleTimelineClicked('After the Fire')}/>
    
        
      </div>)}

      {taskShown && (<div class = "taskSection">
      <h2>Tasks: {timelineSelected}</h2>
      {/* data: {JSON.stringify(taskData)}; taskData[roleIndex]*/}
      {/* {taskData.map((role, key)=>{return key = {residents} <h1>{role.afterFireTasks}</h1>})} */}
      
      {timelineSelected =='Before the Fire' && (<h2 class = "tasks">{taskData[roleIndex].tasks.beforeFireTasks}</h2>)}
      {timelineSelected =='During the Fire' && (<h2 class = "tasks">{taskData[roleIndex].tasks.duringFireTasks}</h2>)}
      {timelineSelected =='After the Fire' && (<h2 class = "tasks">{taskData[roleIndex].tasks.afterFireTasks}</h2>)}
      </div>)}

    </div>
    


    </div>

  );
}

// function displayTimelineIcons (props){
//   const roleClicked = props.
// }

export default App;
