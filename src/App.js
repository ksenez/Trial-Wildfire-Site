import logo from './logo.svg';
import './App.css';
import beforeFire from './graphics/BeforeFire.png';
import duringFire from './graphics/DuringFire.png';
import afterFire from './graphics/AfterFire.png';
import communityImage from './graphics/CommunityWLocations.jpg';
import residentImage1 from './graphics/ResidentTasks1.jpg';
import residentImage2 from './graphics/ResidentTasks2.jpg';
import residentIcons from './graphics/ResidentIcons.jpg';
import{ useState } from "react";
import { taskData } from "./taskData";
import { roleList} from "./taskData";
import { residentTaskData } from './taskData';


function App() {
  
  const [roleSelected, setRole] = useState ('Residents');
  const [timelineSelected, setTimeline] = useState ("beforeFireTasks");
  const [roleIndex, setRoleIndex] = useState (0);  
  const [timelineShown, setTimelineShown] = useState (false);
  const [taskShown, setTaskShown] = useState (false);
  const [mapShown, setMapShown] = useState (true);
  const [textShown, setTextShown] = useState (true);
  const [text, setText] = useState ("");
  const [taskNum, setTaskNum] = useState("c");
  const [iconSelected, setIconSelected] = useState (0);

  const handleRoleClicked = (roleName, roleIndex) => {
    setRole (roleName);
    setRoleIndex (roleIndex);
    setTimelineShown(true);
    setMapShown(false);
    
  }

  const handleIconClicked = (iconNumber) => {
    setIconSelected (iconNumber);
  }

  const handleTimelineClicked = (timeline) => {
    setTimeline (timeline);
    setTaskShown(true);
    setTextShown(false);
  }

  const handleButtonClicked = () => {
    setMapShown (true);
    setTaskShown(false);
    setTimelineShown(false);
  }
  
  const handleImageClicked = (inTask) => {
    setTextShown(true);
    let prevText = text;
    (inTask == "task1" && setText(taskData[roleIndex].tasks.task1));
    (inTask == "task2" && setText(taskData[roleIndex].tasks.task2));
    
    //(prevText == text && setTextShown(!textShown))
    
  }

  return (
    <div className="App">
      
      <h1><u>Wildfire Preparedness</u></h1>
    {mapShown && (<div>
        <img src={communityImage} alt = "communitymap" usemap = "#mainmap"/>
        <map name = "mainmap">
             <area shape="circ" coords="150,270,30" onClick = {() => handleRoleClicked('Residents', 0)}/>
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
        <h1>{roleSelected}</h1>
        <img src= {beforeFire} class = "timelineGraphic" onClick = {() => handleTimelineClicked('Before the Fire')} />
        <img src={duringFire} class = "timelineGraphic" onClick = {() => handleTimelineClicked('During the Fire')}/>
        <img src={afterFire} class = "timelineGraphic" onClick = {() => handleTimelineClicked('After the Fire')}/>
    
      </div>)}

      {taskShown && (<div class = "taskSection">
      <h2>Tasks: {timelineSelected}</h2>
      
      {/* data: {JSON.stringify(taskData)}; taskData[roleIndex]*/}
      {/* {taskData.map((role, key)=>{return key = {residents} <h1>{role.afterFireTasks}</h1>})} */}
      
      { (timelineSelected =='During the Fire' && roleSelected == 'Residents') &&
      (<div> 
        <img src={residentIcons} alt = "iconmap" usemap = "#residentmap"/>
        <map name = "residentmap">
             <area shape="circ" coords="47,66,50" onClick = {() => handleIconClicked(1)}/>
             <area shape="circ" coords="163,60,50" onClick = {() => handleIconClicked(2)}/>            
             <area shape="circ" coords="332,62,50" onClick = {() => handleIconClicked(3)}/>
             <area shape="circ" coords="456,65,50" onClick = {() => handleIconClicked(4)} />
             <area shape="circ" coords="575,65,50" onClick = {() => handleIconClicked(5)} />
             <area shape="circ" coords="722,60,50" onClick = {() => handleIconClicked(6)} />
             <area shape="circ" coords="843,60,50" onClick = {() => handleIconClicked(7)} />
        </map>
        <br></br>
        <button class = "showAll" onClick = {() => handleIconClicked(8)}>SHOW ALL</button>
        
        <h2 class = "tasks">{residentTaskData[iconSelected].duringTask}</h2>
        
      </div>)}
    
      {(timelineSelected =='Before the Fire') && (<h2 class = "tasks">{taskData[roleIndex].tasks.beforeFireTasks}</h2>)}
      
      {(timelineSelected =='During the Fire' && roleSelected != 'Residents') && (<h2 class = "tasks">{taskData[roleIndex].tasks.duringFireTasks}</h2>)}
      {timelineSelected =='After the Fire' && (<h2 class = "tasks">{taskData[roleIndex].tasks.afterFireTasks}</h2>)}
      
      {textShown && <div><h2>{text}</h2></div>}
      </div>)}
      

      {/* {taskData[roleIndex].tasks.afterFireTasks}  */}
      
      {/* {taskData.map((item, i) => (
        <tr key = {i}>
          <td>{item.name}</td>
          <td>{item.tasks.beforeFireTasks.c}</td>
        </tr>
      ))} */}




    </div>
    


    </div>

  );
}

// function displayTimelineIcons (props){
//   const roleClicked = props.
// }

export default App;
