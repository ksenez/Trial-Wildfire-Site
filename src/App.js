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
      <h1>Wildfire Preparedness</h1>
    {mapShown && (<div>
        <img src={communityImage} alt = "communitymap" usemap = "#mainmap"/>
        <map name = "mainmap">
             <area shape="circ" coords="150,270,30" onClick = {() => handleRoleClicked('Residents', 0)} />
             <area shape="circ" coords="163,422,30" onClick = {() => handleRoleClicked('Transportation', 1)}/>            

        </map>
    </div> )}


    {!mapShown &&(<div class = "backButton">
      <button type = "button" onClick = {() => handleButtonClicked('Residents', 0) }> Back </button>
    </div>)}

    <div class = "taskSection">
      {timelineShown && (<div>
        <h2>{roleSelected} Timeline</h2>
        <img src= {beforeFire} class = "timelineGraphic" onClick = {() => handleTimelineClicked('beforeFireTasks')} />
        <img src={duringFire} class = "timelineGraphic" onClick = {() => handleTimelineClicked('duringFireTasks')}/>
        <img src={afterFire} class = "timelineGraphic" onClick = {() => handleTimelineClicked('afterFireTasks')}/>
    
        
      </div>)}

      {taskShown && (<div class = "taskSection">
      <h2>Tasks: {timelineSelected}</h2>
      {/* data: {JSON.stringify(taskData)}; taskData[roleIndex]*/}
      {/* {taskData.map((role, key)=>{return key = {residents} <h1>{role.afterFireTasks}</h1>})} */}
      
      <h3 class = "taskSection">{taskData[roleIndex].tasks.afterFireTasks}</h3>
      </div>)}

    </div>
    


    </div>

  );
}

// function displayTimelineIcons (props){
//   const roleClicked = props.
// }

export default App;
