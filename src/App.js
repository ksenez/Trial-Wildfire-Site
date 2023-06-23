//Import Dependencies 
import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { taskData } from "./taskData";
import BeforeFire from './graphics/BeforeFire.png';
import DuringFire from './graphics/DuringFire.png';
import AfterFire from './graphics/AfterFire.png';
import CommunityImage from './graphics/CommunityWLocations.png';
import mobilebackground from './graphics/mobilebackground.jpg';
import tsista from './graphics/tsista.webp';



//Function to import folders of images
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

//Importing Role-Based Images
const beforeFireIcon = importAll(require.context('./graphics/BeforeFire', false, /\.(png|jpe?g|svg)$/));
const duringFireIcon = importAll(require.context('./graphics/DuringFire', false, /\.(png|jpe?g|svg)$/));
const afterFireIcon = importAll(require.context('./graphics/AfterFire', false, /\.(png|jpe?g|svg)$/));
const RoleIcon = importAll(require.context('./graphics/roleicons', false, /\.(png|jpe?g|svg)$/));
const Desktopsize = 1000;


function App() {
  const [roleSelected, setRole] = useState('Residents');
  const [timelineSelected, setTimeline] = useState(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [timelineShown, setTimelineShown] = useState(false);
  const [taskShown, setTaskShown] = useState(false);
  const [mapShown, setMapShown] = useState(true);
  const [textShown, setTextShown] = useState(true);
  const [selectedTimeline, setSelectedTimeline] = useState(null);
  const [isDesktop, setDesktop] = useState(false);
  const [artAcknowledgementShown, setArtAcknowledgementShown] = useState(false);

  
  
  //Media Size Functions
useEffect(() => {
  if (window.innerWidth > Desktopsize) {
    setDesktop(true);
  } else {
    setDesktop(false);
  }

  const updateMedia = () => {
    if (window.innerWidth > Desktopsize) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }
  };
  window.addEventListener('resize', updateMedia);
  return () => window.removeEventListener('resize', updateMedia);
}, []);
          

  // Function to handle when a role is clicked
  const handleRoleClicked = (roleName, roleIndex) => {
    setRole(roleName);
    setRoleIndex(roleIndex);
    setTimelineShown(true);
    setMapShown(false);
  };
   // Function to handle when a role is clicked
   const handleArtClicked = () => {
    setArtAcknowledgementShown(true);
    setMapShown(false);
  };

  // Function to handle when a timeline is clicked
  const handleTimelineClicked = (timeline) => {
    setTimeline(timeline);
    setSelectedTimeline(timeline);
    setTaskShown(true);
    setTextShown(false);
  };

  // Function to handle when the Back button is clicked
  const handleButtonClicked = () => {
    setMapShown(true);
    setTaskShown(false);
    setTimelineShown(false);
    setSelectedTimeline(null);
    setArtAcknowledgementShown(false);
  };
  
  //Function to Create Task lists
  function TaskList(props) {
    const tasks = props;
    const listItems = tasks.map((task) =>
      <li>{task}</li>
    );
    return (
      <ul className='tasks'>{listItems}</ul> 
    );
  }

  //keyboard accessibility
  useEffect(() => {
    const keyDownHandler = event => {

      if (event.key === 'Escape') {
        event.preventDefault();
        handleButtonClicked();
      }
      if (event.key === 'Enter') {
        event.preventDefault();
        document.activeElement.click();
      }
    };

    


    document.addEventListener('keydown', keyDownHandler);

    // 👇️ clean up event listener
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);


  return (
    <div className="App" style={{ 
      backgroundImage: `url('${mobilebackground}')`,
      backgroundAttachment: 'fixed',
      backgroundPosition: 'top',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      paddingTop:'auto',
    }}>
      {/* Back button */}
      {!mapShown && (
        <div className="backButtonDiv">
          <button
            className="backButton"
            type="button"
            onClick={() => handleButtonClicked('Residents', 0)}
            tabIndex={0}
          >
            Back
          </button>
        </div>
      )}
      {/* Main title 
      <h1>
        <u className='webpagetitle'>Wildfire Preparedness</u>
      </h1>*/}
      {/* Desktop Community map */}
      {mapShown && isDesktop && (
        <div style={{ 
        width: '100vmax',
        height: 'auto',
        alignItems:'center',
        textAlign:'center', 
    }}>
      <img src={CommunityImage} className='map'/>
      {/* Internal Roles map placement*/}
      <img src={RoleIcon[taskData[10].id + '.png']} roleIndex='10' className='MapImgOpCent' style={{left:'50%',top:'30%',transform: 'translate(-50%, -30%)',}} title={taskData[10].name}onClick={() => handleRoleClicked(taskData[10].name, 10)} tabIndex={0} />
      <img src={RoleIcon[taskData[3].id + '.png']} className='InternalRoleImg'  style={{left:'33.5%',top:'30%',transform: 'translate(-33.5%, -30%)',}} title={taskData[3].name}onClick={() => handleRoleClicked(taskData[3].name, 3)} tabIndex={0} />
      <img src={RoleIcon[taskData[12].id + '.png']} className='InternalRoleImg' style={{left:'38%',top:'12%',transform: 'translate(-38%, -12%)',}} title={taskData[12].name}onClick={() => handleRoleClicked(taskData[12].name, 12)} tabIndex={0}/>
      <img src={RoleIcon[taskData[5].id + '.png']} className='InternalRoleImg' style={{left:'38%',bottom:'52%',transform: 'translate(-38%, 52%)',}} title={taskData[5].name}onClick={() => handleRoleClicked(taskData[5].name, 5)} tabIndex={0}/>
      <img src={RoleIcon[taskData[0].id + '.png']} className='InternalRoleImg' style={{left:'50%',top:'5%',transform: 'translate(-50%, -5%)',}}title={taskData[0].name}onClick={() => handleRoleClicked(taskData[0].name, 0)} tabIndex={0} />
      <img src={RoleIcon[taskData[1].id + '.png']} className='InternalRoleImg' style={{left:'50%',bottom:'42%',transform: 'translate(-50%, 42%)',}}title={taskData[1].name}onClick={() => handleRoleClicked(taskData[1].name, 1)} tabIndex={0} />
      <img src={RoleIcon[taskData[2].id + '.png']} className='InternalRoleImg' style={{right:'38%',top:'12%',transform: 'translate(38%, -12%)',}}title={taskData[2].name}onClick={() => handleRoleClicked(taskData[2].name, 2)} tabIndex={0} />
      <img src={RoleIcon[taskData[6].id + '.png']} className='InternalRoleImg' style={{right:'38%',bottom:'52%',transform: 'translate(38%, 52%)',}}title={taskData[6].name}onClick={() => handleRoleClicked(taskData[6].name, 6)} tabIndex={0} />
      <img src={RoleIcon[taskData[4].id + '.png']} className='InternalRoleImg' style={{right:'33.5%',top:'30%',transform: 'translate(33.5%, -30%)',}} title={taskData[4].name}onClick={() => handleRoleClicked(taskData[4].name, 4)} tabIndex={0} />
      <img src={RoleIcon[taskData[7].id + '.png']} className='MapImgOpRole' style={{left:'50%',top:'25%',transform: 'translate(-50%, -32%)',}} title={taskData[7].name}onClick={() => handleRoleClicked(taskData[7].name, 7)} tabIndex={0} />
      <img src={RoleIcon[taskData[8].id + '.png']} className='MapImgOpRole' style={{right:'45%',top:'29%',transform: 'translate(45%, -36.4%)',}} title={taskData[8].name}onClick={() => handleRoleClicked(taskData[8].name, 8)} tabIndex={0} />
      <img src={RoleIcon[taskData[9].id + '.png']} className='MapImgOpRole' style={{left:'45%',top:'29%',transform: 'translate(-45%, -36.4%)',}} title={taskData[9].name}onClick={() => handleRoleClicked(taskData[9].name, 9)} tabIndex={0} />
      {/* Emergency responder map placement*/}
      <img src={RoleIcon[taskData[13].id + '.png']} className='EmergencyRoleImg'  style={{right:'22.5%',bottom:'53%',transform: 'translate(22.5%, 53%)',scale:'0.9'}} title={taskData[13].name}onClick={() => handleRoleClicked(taskData[13].name, 13)} tabIndex={0} />
      <img src={RoleIcon[taskData[14].id + '.png']} className='EmergencyRoleImg'  style={{right:'19%',bottom:'42%',transform: 'translate(19%, 42%)',}} title={taskData[14].name}onClick={() => handleRoleClicked(taskData[14].name, 14)} tabIndex={0} />
      <img src={RoleIcon[taskData[15].id + '.png']} className='EmergencyRoleImg'  style={{right:'31%',bottom:'32%',transform: 'translate(31%, 32%)',scale:'0.8'}} title={taskData[15].name}onClick={() => handleRoleClicked(taskData[15].name, 15)} tabIndex={0} />
      <img src={RoleIcon[taskData[16].id + '.png']} className='EmergencyRoleImg'  style={{right:'22.5%',bottom:'30.5%',transform: 'translate(22.5%, 30.5%)',scale:'0.8'}} title={taskData[16].name}onClick={() => handleRoleClicked(taskData[16].name, 16)} tabIndex={0} />
      <img src={RoleIcon[taskData[17].id + '.png']} className='EmergencyRoleImg'  style={{right:'26%',bottom:'41%',transform: 'translate(26%, 41%)',scale:'0.78'}} title={taskData[17].name}onClick={() => handleRoleClicked(taskData[17].name, 17)} tabIndex={0} />
      {/* Evacuation center map placement*/}
      <img src={RoleIcon[taskData[18].id + '.png']} className='EvacCenterImg' style={{left:'24.5%',bottom:'30%',transform: 'translate(-24.5%, 30%)', scale: '0.85',}} title={taskData[18].name}onClick={() => handleRoleClicked(taskData[18].name, 18)} tabIndex={0} />
      <img src={RoleIcon[taskData[22].id + '.png']} className='EvacCenterImg'  style={{left:'20%',bottom:'40%',transform: 'translate(-20%, 40%)', scale:'0.9',}} title={taskData[22].name}onClick={() => handleRoleClicked(taskData[22].name, 22)} tabIndex={0} />
      <img src={RoleIcon[taskData[23].id + '.png']} className='EvacCenterImg'  style={{left:'23.5%',bottom:'53%',transform: 'translate(-23.5%, 53%)',}} title={taskData[23].name}onClick={() => handleRoleClicked(taskData[23].name, 23)} tabIndex={0} />
      <img src={RoleIcon[taskData[24].id + '.png']} className='EvacCenterImg'  style={{left:'31.5%',bottom:'33%',transform: 'translate(-31.5%, 33%)',scale: '0.85'}} title={taskData[24].name}onClick={() => handleRoleClicked(taskData[24].name, 24)} tabIndex={0} />
      <img src={RoleIcon[taskData[25].id + '.png']} className='EvacCenterImg'  style={{left:'27%',bottom:'42%',transform: 'translate(-27%, 42%)',}} title={taskData[25].name}onClick={() => handleRoleClicked(taskData[25].name, 25)} tabIndex={0} />
      {/* External Organizations map placement*/}
      <img src={RoleIcon[taskData[11].id + '.png']} className='ExternalRoleImg' style={{left:'48.5%',bottom:'26%',transform: 'translate(-48.5%, 26%)',scale:'0.7'}} title={taskData[11].name}onClick={() => handleRoleClicked(taskData[11].name, 11)} tabIndex={0} />
      <img src={RoleIcon[taskData[19].id + '.png']} className='ExternalRoleImg' style={{right:'45%',bottom:'9%',transform: 'translate(45%, 9%)', scale: '0.9',}} title={taskData[19].name}onClick={() => handleRoleClicked(taskData[19].name, 19)} tabIndex={0} />
      <img src={RoleIcon[taskData[26].id + '.png']} className='ExternalRoleImg' style={{left:'45%',bottom:'9%',transform: 'translate(-45%, 9%)', scale:'0.7'}} title={taskData[26].name}onClick={() => handleRoleClicked(taskData[26].name, 26)} tabIndex={0} />
      <img src={RoleIcon[taskData[21].id + '.png']} className='ExternalRoleImg' style={{right:'49.25%',bottom:'17%',transform: 'translate(49.25%, 17%)',scale:'0.8'}} title={taskData[21].name}onClick={() => handleRoleClicked(taskData[21].name, 21)} tabIndex={0} />
      <img src={RoleIcon[taskData[20].id + '.png']} className='ExternalRoleImg' style={{right:'37%',bottom:'9%',transform: 'translate(37%, 9%)', scale:'0.9'}} title={taskData[20].name}onClick={() => handleRoleClicked(taskData[20].name, 20)} tabIndex={0} />
      <img src={RoleIcon[taskData[27].id + '.png']} className='ExternalRoleImg' style={{left:'37%',bottom:'9%',transform: 'translate(-37%, 9%)', scale:'0.85'}} title={taskData[27].name}onClick={() => handleRoleClicked(taskData[27].name, 27)} tabIndex={0} />
      {/*Artist Acknowledgement*/}
      <img src={tsista} className='AckMapImg' style={{left:'5%',top:'5%',transform: 'translate(-5%, -5%)', scale:'0.9'}} title={'Art Acknowledgement'}onClick={() => handleArtClicked()} tabIndex={0} />    
        </div>
      )}

      {/* Small Browser Window Community Map Replacement */}
      {mapShown && !isDesktop && (
        <div className='MobileBackground'>
            <img src={RoleIcon[taskData[0].id + '.png']} className='MobileMapImg' title={taskData[0].name}onClick={() => handleRoleClicked(taskData[0].name, 0)}tabIndex={0}/>
            <img src={RoleIcon[taskData[1].id + '.png']} className='MobileMapImg' title={taskData[1].name}onClick={() => handleRoleClicked(taskData[1].name, 1)}tabIndex={0}/>
            <img src={RoleIcon[taskData[2].id + '.png']} className='MobileMapImg' title={taskData[2].name}onClick={() => handleRoleClicked(taskData[2].name, 2)}tabIndex={0}/>
            <img src={RoleIcon[taskData[3].id + '.png']} className='MobileMapImg' title={taskData[3].name}onClick={() => handleRoleClicked(taskData[3].name, 3)}tabIndex={0}/>
            <img src={RoleIcon[taskData[4].id + '.png']} className='MobileMapImg' title={taskData[4].name}onClick={() => handleRoleClicked(taskData[4].name, 4)}tabIndex={0}/>
            <img src={RoleIcon[taskData[5].id + '.png']} className='MobileMapImg' title={taskData[5].name}onClick={() => handleRoleClicked(taskData[5].name, 5)}tabIndex={0}/>
            <img src={RoleIcon[taskData[6].id + '.png']} className='MobileMapImg' title={taskData[6].name}onClick={() => handleRoleClicked(taskData[6].name, 6)}tabIndex={0}/>
            <img src={RoleIcon[taskData[7].id + '.png']} className='MobileMapImg' title={taskData[7].name}onClick={() => handleRoleClicked(taskData[7].name, 7)}tabIndex={0}/>
            <img src={RoleIcon[taskData[8].id + '.png']} className='MobileMapImg' title={taskData[8].name}onClick={() => handleRoleClicked(taskData[8].name, 8)}tabIndex={0}/>
            <img src={RoleIcon[taskData[9].id + '.png']} className='MobileMapImg' title={taskData[9].name}onClick={() => handleRoleClicked(taskData[9].name, 9)}tabIndex={0}/>
            <img src={RoleIcon[taskData[10].id + '.png']} className='MobileMapImg' title={taskData[10].name}onClick={() => handleRoleClicked(taskData[10].name, 10)}tabIndex={0}/>
            <img src={RoleIcon[taskData[11].id + '.png']} className='MobileMapImg' title={taskData[11].name}onClick={() => handleRoleClicked(taskData[11].name, 11)}tabIndex={0}/>
            <img src={RoleIcon[taskData[12].id + '.png']} className='MobileMapImg' title={taskData[12].name}onClick={() => handleRoleClicked(taskData[12].name, 12)}tabIndex={0}/>
            <img src={RoleIcon[taskData[13].id + '.png']} className='MobileMapImg' title={taskData[13].name}onClick={() => handleRoleClicked(taskData[13].name, 13)}tabIndex={0}/>
            <img src={RoleIcon[taskData[14].id + '.png']} className='MobileMapImg' title={taskData[14].name}onClick={() => handleRoleClicked(taskData[14].name, 14)}tabIndex={0}/>
            <img src={RoleIcon[taskData[15].id + '.png']} className='MobileMapImg' title={taskData[15].name}onClick={() => handleRoleClicked(taskData[15].name, 15)}tabIndex={0}/>
            <img src={RoleIcon[taskData[16].id + '.png']} className='MobileMapImg' title={taskData[16].name}onClick={() => handleRoleClicked(taskData[16].name, 16)}tabIndex={0}/>
            <img src={RoleIcon[taskData[17].id + '.png']} className='MobileMapImg' title={taskData[17].name}onClick={() => handleRoleClicked(taskData[17].name, 17)}tabIndex={0}/>
            <img src={RoleIcon[taskData[18].id + '.png']} className='MobileMapImg' title={taskData[18].name}onClick={() => handleRoleClicked(taskData[18].name, 18)}tabIndex={0}/>
            <img src={RoleIcon[taskData[19].id + '.png']} className='MobileMapImg' title={taskData[19].name}onClick={() => handleRoleClicked(taskData[19].name, 19)}tabIndex={0}/>
            <img src={RoleIcon[taskData[20].id + '.png']} className='MobileMapImg' title={taskData[20].name}onClick={() => handleRoleClicked(taskData[20].name, 20)}tabIndex={0}/>
            <img src={RoleIcon[taskData[21].id + '.png']} className='MobileMapImg' title={taskData[21].name}onClick={() => handleRoleClicked(taskData[21].name, 21)}tabIndex={0}/>
            <img src={RoleIcon[taskData[22].id + '.png']} className='MobileMapImg' title={taskData[22].name}onClick={() => handleRoleClicked(taskData[22].name, 22)}tabIndex={0}/>
            <img src={RoleIcon[taskData[23].id + '.png']} className='MobileMapImg' title={taskData[23].name}onClick={() => handleRoleClicked(taskData[23].name, 23)}tabIndex={0}/>
            <img src={RoleIcon[taskData[24].id + '.png']} className='MobileMapImg' title={taskData[24].name}onClick={() => handleRoleClicked(taskData[24].name, 24)}tabIndex={0}/>
            <img src={RoleIcon[taskData[25].id + '.png']} className='MobileMapImg' title={taskData[25].name}onClick={() => handleRoleClicked(taskData[25].name, 25)}tabIndex={0}/>
            <img src={RoleIcon[taskData[26].id + '.png']} className='MobileMapImg' title={taskData[26].name}onClick={() => handleRoleClicked(taskData[26].name, 26)}tabIndex={0}/>
            <img src={RoleIcon[taskData[27].id + '.png']} className='MobileMapImg' title={taskData[27].name}onClick={() => handleRoleClicked(taskData[27].name, 27)}tabIndex={0}/>
        </div>
      )}

      {/* Timeline and task section */}
      <div>
        {/* Timeline section */}
        {timelineShown && (
          <div>
            <img src={RoleIcon[taskData[roleIndex].id + '.png']} className="roleicon" alt={taskData[roleIndex].name} />
            <h2 className='timelineheader'>{roleSelected}</h2>
            <img
              src={BeforeFire}
              className={`timelineGraphic ${
                selectedTimeline === 'Before the Fire' ? 'selected' : ''
              }`}
              tabIndex={0}
              onClick={() => handleTimelineClicked('Before the Fire')}
            />
            <img
              src={DuringFire}
              className={`timelineGraphic ${
                selectedTimeline === 'During the Fire' ? 'selected' : ''
              }`}
              tabIndex={0}
              onClick={() => handleTimelineClicked('During the Fire')}
            />
            <img
              src={AfterFire}
              className={`timelineGraphic ${
                selectedTimeline === 'After the Fire' ? 'selected' : ''
              }`}
              tabIndex={0}
              onClick={() => handleTimelineClicked('After the Fire')}
            />
          </div>
        )}
        {/* Task section */}
        {taskShown && (
          <div className="taskSection">
            <h2 className="taskheader">Tasks: {timelineSelected}</h2>
            {timelineSelected === 'Before the Fire' &&(
              <div>
                <img src={beforeFireIcon[taskData[roleIndex].id + '.jpg']} className="taskGraphic" alt="Tasks Before Fire" />
              </div>
            )}
            {timelineSelected === 'Before the Fire' && (
              TaskList(taskData[roleIndex].tasks.beforeFireTasks)
            )}
             {timelineSelected === 'During the Fire' &&(
              <div>
                <img src={duringFireIcon[taskData[roleIndex].id + '.jpg']} className="taskGraphic" alt="Tasks During Fire" />
              </div>
            )}
            {timelineSelected === 'During the Fire' && (
              TaskList(taskData[roleIndex].tasks.duringFireTasks)
            )}
            {timelineSelected === 'After the Fire' &&(
              <div>
                <img src={afterFireIcon[taskData[roleIndex].id + '.jpg']} className="taskGraphic" alt="Tasks After Fire" />
              </div>
            )}
            {timelineSelected === 'After the Fire' && (
              TaskList(taskData[roleIndex].tasks.afterFireTasks)
            )}
          </div>
        )}
        {artAcknowledgementShown && (
          <div style={{ 
            width: '40vmax',
            margin: 'auto',
            height: 'auto',
            alignItems:'center',
            textAlign:'center',
            paddingBottom: '40vh',
        }}>
          <a href={'https://hotdogwaterart.com/'} >
              <img src={tsista} className={"ackGraphic"} />
              </a>
            <div style={{
            padding: '20px', 
            border: '3px solid blue',
            borderColor: 'rgb(0, 0, 0)',
            backgroundColor: 'rgb(187, 187, 187)',}}> 
            <h2>Illustrations by Hotdog Water Art</h2>
            <t>Special thanks to Anishinaabe Onyota’a:aka artist, Tsista Kennedy, for their invaluable contribution of incredible woodland style icons and artwork to this website. 
              We are deeply grateful for their artistic vision and dedication. 
              We highly encourage you to explore </t> <a href={'https://hotdogwaterart.com/'}>Tsista’s other captivating creations.</a> 
          </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
