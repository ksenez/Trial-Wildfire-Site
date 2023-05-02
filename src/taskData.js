export const roleList = '["Residents", "Local Fire Department","Local Authorities","Electric Companies", "Wildland Firefighters", "Emergency Co-ordinator"]';

export const residentBeforeTaskData = [
    {task: "- Vegetation Management. Create priority zones to evaluate management work needed in each zone."},
    {task: "- Installation of a Fire/Fuel Breaks. Fire breaks are cleared area with little to no fuel sources, and fuel breaks are trenches dug down to mineral soil to stop the surface fire spread." },
    {task: "- Have a shovel and digging tool to manage small fires close to buildings. Also sprinkler system (water hose) if possible" },
    {task: "- Have firefighting tools propped against the house in a visible place"}
]

export const residentTaskData = [
    {duringTask: "Select an image",},
    {duringTask: "1. Report fire to Emergency Site"},
    {duringTask: "2. Close all windows and doors,  moving combustibles away from windows/doors" },
    {duringTask: "3. Place valuables in vehicle if possible to be prepped for quick departure "},
    {duringTask: "4. Turn off propane or natural gas valves and clear surrounding vegetation from the tanks "},
    {duringTask: "5. Fill sinks, tubs, and buckets with water as water reservoirs. Gather buckets and towels ",},
    {duringTask: "6. Cover all openings with fire-resistant materials to keep embers/sparks out of the house",},
    {duringTask: "7. Request needed resources from Emergency Co-ordinator",},
    {duringTask: " 1. Report fire to Emergency Site  \n2. Close all windows and doors,  moving combustibles away from windows/doors \n3. Place valuables in vehicle if possible to be prepped for quick departure \n4. Turn off propane or natural gas valves and clear surrounding vegetation from the tanks \n5. Fill sinks, tubs, and buckets with water as water reservoirs. Gather buckets and towels \n6. Cover all openings with fire-resistant materials to keep embers/sparks out of the house \n7. Request needed resources from Emergency Co-ordinator" }
]

export const taskData = [
    {
        id: 0,
        name: "Residents",
        tasks: {
                task1: "Vegetation Management. Create priority zones to evaluate management work needed in each zone.",
                task2: "Have a shovel and digging tool to manage small fires close to buildings. Also sprinkler system (water hose) if possible",
                beforeFireImage: './graphics/ResidentTasks1.jpg',
                beforeFireTasks: "- Vegetation Management. Create priority zones to evaluate management work needed in each zone. \n - Installation of a Fire/Fuel Breaks. Fire breaks are cleared area with little to no fuel sources, and fuel breaks are trenches dug down to mineral soil to stop the surface fire spread. \n - Have a shovel and digging tool to manage small fires close to buildings. Also sprinkler system (water hose) if possible. \n - Have firefighting tools propped against the house in a visible place. ",
                duringFireTasks : " 1. Report fire to Emergency Site  \n2. Close all windows and doors,  moving combustibles away from windows/doors \n3. Place valuables in vehicle if possible to be prepped for quick departure \n4. Turn off propane or natural gas valves and clear surrounding vegetation from the tanks \n5. Fill sinks, tubs, and buckets with water as water reservoirs. Gather buckets and towels \n6. Cover all openings with fire-resistant materials to keep embers/sparks out of the house \n7. Request needed resources from Emergency Co-ordinator",
                afterFireTasks: "- Request reimbursments for evacuation costs from food and gas", 
            }
        //relevant icons
    },

    {
        id: 1,
        name: "Local Fire Department",
        tasks: {
            beforeFireTasks: "- Interface Priority Zones. Determine fuel considerations around building(s) \n- Structural Assessments. This is an evaluation of the buildings in the Wildland Urban Interface (WUI). A scoring system evaluates the flammability of the building's materials to assess the overall fire risk to the structure \n- Fire Suppression Checklist. This list evaluates the ability of the fire service to respond to fire incidents",
            duringFireTasks: "- Protect lives and property within jurisdiction \n- Primary role is structural fire suppression, but in some jurisdictions may be wildfire as well \n- Fire Commisioner's Office: Provide authority for evacuation initiatives in some provinces",
            afterFireTasks: "SEE OTHER CATEGORIES",
        }
           
            
        },

    {
        id: 2,
        name: "Local Authorities",
        tasks: {
            beforeFireTasks: "- Have reflective, non combustible signs for the roadways \n- Ensure Fire service personnel have access to any locks or gates that restrict access on the roadways \n- Ensure roadways are capable of handling fire crews' vehicles; both for their weight and length",
            duringFireTasks: "SEE OTHER CATEGORIES",
            afterFireTasks: "SEE OTHER CATEGORIES",
        }
               
                
    },
    
    {
        id: 3,
        name: "Electric Company",
        tasks: {
            beforeFireTasks: "- Maintain vegetation around above ground power delivery lines. Underground power lines are most ideal",
            duringFireTasks: "SEE OTHER CATEGORIES",
            afterFireTasks: "SEE OTHER CATEGORIES",
        }
           
            
        },

    {
        id: 4,
        name: "Wildland Firefighters",
        tasks: {
            beforeFireTasks: "- Have practiced in both training and drills",
            duringFireTasks: "- Create defensive breaks in wildfire scenario (a location deprived of fuels due to terrain, absence of fuels) \n- Protect forest and range resources on public lands within their jurisdiction",
            afterFireTasks: "SEE OTHER CATEGORIES",
        }
           
            
        },

    {
        id: 5,
        name: "Emergency Co-ordinator",
        tasks: {
            beforeFireTasks: "- Develop an Emergency Plan with other stakeholders involved \n- Maintains and updates the Emergency Plan as well as its listed contacts \n- Oversees the region's emergency preparedness program \n- Run evacuation drills for community",
            duringFireTasks: "- Maintain contact with the emergency site \n- Directs the emergency operation as a decision maker/faciliator \n- Ensures requested resources are provided to the emergency site \n- Keep officials informed on the situation \n- Co-ordinates resource allocation to other needs outside the site",
            afterFireTasks: "SEE OTHER CATEGORIES",
        }
               
                
    },

    {
        id: 6,
        name: "Emergency Site Commander",
        tasks: {
            beforeFireTasks: "SEE OTHER CATEGORIES",
            duringFireTasks: "- Activate the public emergency warning system \n- Establishes perimeters and moves responders and affected public to safe positions \n- Ensures communication back to Emergency Operations Centre \n- Requests resources from Emergency Operations Centre as needed \n - Co-ordinates all response efforts at the site, makes decisions and establishes mutual priorities while allocating resources \n- Communicate with all agencies and disseminate information \n- Monitors the event to ensure all responders are informed \n -Ensures resources are used appropriately",
            afterFireTasks: "SEE OTHER CATEGORIES",
        }
               
                
    },

    {
        id: 7,
        name: "Emergency Operations Centre Liasion",
        tasks: {
            beforeFireTasks: "SEE OTHER CATEGORIES",
            duringFireTasks: "- Determine the nature and scope of the incident \n- Ensure all mandated agency responsibilities are fulfilled \n- Ensures that agency's resources are available or brought to the emergency site \n- Ensures safe and effective response is occurring \n- Establishes a communication link with emergency site and Emergency Operations Centre to ensure information flows \n- Contacts mutual aid partners to provide status and resource needs",
            afterFireTasks: "SEE OTHER CATEGORIES",
        }
               
                
    },

    {
        id: 8,
        name: "Emergency Operations Centre",
        tasks: {
            beforeFireTasks: "SEE OTHER CATEGORIES",
            duringFireTasks: "- Co-ordinates the provincial government response and municipal support to the local government \n-Provides specialized leasing, purchasing, or borrowing of emergency products or services \n- Provides timely distribution of reliable information to reduce rumours and misinformation \n- Assists with requests for supporting materials and supplies beyond the capacity of the municipality\n -Operations centre reps remain in constant contact with the affected municipality via the provincial emergency management organization liaison officer who is typically present at the EOC",
            afterFireTasks: "SEE OTHER CATEGORIES",
        }
               
                
    },

    {
        id: 9,
        name: "Government Emergency Organizer Liasion",
        tasks: {
            beforeFireTasks: "SEE OTHER CATEGORIES",
            duringFireTasks: "- Establish communications between governent and municipal / local authority emergency management organizations \n- Shadows municipal / local authority to provide external perspective to the progress \n- Assess evolving resource requirements that may involve provincial or federal resources",
            afterFireTasks: "SEE OTHER CATEGORIES",
        }
                
    },

    {
        id: 10,
        name: "Utility and Public Works",
        tasks: {
            beforeFireTasks: "SEE OTHER CATEGORIES",
            duringFireTasks: "- Assist response with technical support",
            afterFireTasks: "- Assess and reestablish damaged infrastructure",
        }
               
                
    },

    {
        id: 11,
        name: "Transportation Authority",
        tasks: {
            beforeFireTasks: "SEE OTHER CATEGORIES",
            duringFireTasks: "- Manage traffic \n- Establishes and control detours",
            afterFireTasks: "- Secure any transportation corridors affected by the incident \n- Maintains, repairs, and expedites reopening of transport infrastructure",
        }
               
                
    },

    {
        id: 12,
        name: "Police",
        tasks: {
            beforeFireTasks: "SEE OTHER CATEGORIES",
            duringFireTasks: "- Protect life and property, establish and maintain a secure incident perimeter\n- Control traffic and crowds \n- Coordinate emergency evacuations and enforce evacuation orderes",
            afterFireTasks: "- Safeguard evidence, conduct investigations",
        }
 
    },

    {
        id: 13,
        name: "Social Services",
        tasks: {
            beforeFireTasks: "SEE OTHER CATEGORIES",
            duringFireTasks: "- Activate reception centre \n- Provide food, shelter, clothing, and personal services for evacuess \n- Register and track evacuees",
            afterFireTasks: "SEE OTHER CATEGORIES",
        }
 
    },

    {
        id: 14,
        name: "Environment Advisor",
        tasks: {
            beforeFireTasks: "SEE OTHER CATEGORIES",
            duringFireTasks: "- Works with responders to ensure that safe and effective incident response has minimal adverse environmental impacts",
            afterFireTasks: "- Monitor environmental impacts associated with incident",
        }
 
    },

    {
        id: 15,
        name: "Health Advisor",
        tasks: {
            beforeFireTasks: "SEE OTHER CATEGORIES",
            duringFireTasks: "- Addresses incident specific health concerns of affected public or responders \n- Communicate with social services to attend to health care concerns of evacuees",
            afterFireTasks: "- Arrange counsel for residents after evacuation, and ensure residents are aware of resources",
        }
 
    },

    {
        id: 16,
        name: "Agriculture Advisor",
        tasks: {
            beforeFireTasks: "SEE OTHER CATEGORIES",
            duringFireTasks: "- Assess and mitigate the impact of fire on Agricutlural Resources \n- Assist with evacuation and care of livestock (or slaughter and disposal of injured livestock)",
            afterFireTasks: "SEE OTHER CATEGORIES",
        }
 
    },

    {
        id: 17,
        name: "Public Informations Officer",
        tasks: {
            beforeFireTasks: "SEE OTHER CATEGORIES",
            duringFireTasks: "- Ensure all info released has been approved by the municipal emergency coordinator \n- Maintains contact with all emergency centre representatives \n- Ensures that all inquires are responded to accurately and promptly",
            afterFireTasks: "SEE OTHER CATEGORIES",
        }
 
    },

    {
        id: 18,
        name: "Media",
        tasks: {
            beforeFireTasks: "SEE OTHER CATEGORIES",
            duringFireTasks: "- Report the news \n- Assist prevention and preparedness efforts with public service bulletins and announcements \n- Assist response and recovery efforts by informing the public of incident status, current risk, and protective measures",
            afterFireTasks: "SEE OTHER CATEGORIES",
        }
 
    },

    {
        id: 19,
        name: "Local Volunteer Organizations",
        tasks: {
            beforeFireTasks: "- Local volunteers fulfill roles as needed",
            duringFireTasks: "- Local volunteers fulfill roles as needed",
            afterFireTasks: "- Local volunteers fulfill roles as needed",
        }
 
    },

    {
        id: 20,
        name: "Local Leader",
        tasks: {
            beforeFireTasks: "- Ensure the community is prepared for emergency (pre-incident) \n- Maintain relationship with provincial emergency management agencies",
            duringFireTasks: "- Provide overall leadership and continuity of government \n- Declare a state of emergency \n- Communicate incident status (through news conferences and official statements) \n- During incident their number one concern is public safety and protection of property \n- Communicate with police, social services, fire depatment and other external groups \n- Spread Evacuation order and ensure entire band is aware whether it is voluntary or mandatory",
            afterFireTasks: "- Communcicate funding available to band members (eg. For groceries or gas)",
        }
 
    },
        
];

