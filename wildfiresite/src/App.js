import logo from './logo.svg';
import './App.css';
import beforeFire from './graphics/BeforeFire.png';
import duringFire from './graphics/DuringFire.png';
import afterFire from './graphics/AfterFire.png';
import communityImage from './graphics/CommunityWLocations.jpg';
import{ useState } from "react";
import { taskData } from "./taskData";


function App() {
  // const taskList = ["task 1", "task 2"];
  const [roleSelected, setRole] = useState ('Residents');
  const [timelineSelected, setTimeline] = useState ('beforeFire');
  const [roleIndex, setRoleIndex] = useState (0);  
  
  const handleRoleClicked = (roleName, roleIndex) => {
    setRole (roleName);
    setRoleIndex (roleIndex);
  }

  const handleTimelineClicked = (timeline) => {
    setTimeline (timeline);
  }

  return (
    <div className="App">
      <h1>Wildfire Preparedness</h1>
    <div>
        <img src={communityImage} alt = "communitymap" usemap = "#mainmap"/>
        <map name = "mainmap">
             <area shape="circ" coords="150,270,30" onClick = {() => handleRoleClicked('Residents', 0)} />
             <area shape="circ" coords="163,422,30" onClick = {() => handleRoleClicked('Transportation', 1)}/>            

        </map>
    </div>
    <div name = "timelineSection" />
      {/* <h3>Role Selected: {roleSelected}</h3> */}
      <h2>{roleSelected} Timeline</h2>
      <img src= {beforeFire} class = "timelineGraphic" onClick = {() => handleTimelineClicked('beforeFire')} />
      <img src={duringFire} class = "timelineGraphic" onClick = {() => handleTimelineClicked('duringFire')}/>
      <img src={afterFire} class = "timelineGraphic" onClick = {() => handleTimelineClicked('afterFire')}/>
    
    
    <h2>Tasks: {timelineSelected}</h2>
    <div class = "taskList">
      tejiahsfioashf <br />
      jfafjsa <br />
      {/* {taskList[roleIndex]} */}
      
    </div>
      {/* data: {JSON.stringify(taskData)}; */}
      {/* {taskData.map((role, index)=>{return <h1>{role.afterFireTasks}</h1>})} */}
      {taskData[roleIndex].(timelineSelected)};
    </div>

  );
}

// function displayTimelineIcons (props){
//   const roleClicked = props.
// }

export default App;
