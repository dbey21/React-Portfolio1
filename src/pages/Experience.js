import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School"

function Experience() {
  return (
    <
      div className="experience">
      
      <VerticalTimeline lineColor="blue" >
        
        <VerticalTimelineElement className="vertical-timeline-element--education" date="2023-"
        iconStyle={{background:"blue", color: "white"}}
        icon={<SchoolIcon />}>

        <h3 className="vertical-timeline-element--title">UC Berkeley coding bootcamp, Berkeley,CA</h3>
        
        <p>Certificate</p>
      
      </VerticalTimelineElement>
      
      </VerticalTimeline>
      
      <VerticalTimelineElement className="vertical-timeline-element--education" date="April 2023-May 2023" iconStyle={{background:"blue", color: "white"}}
        
        icon={<SchoolIcon />}>

         <h3 className="vertical-timeline-element--title">Created a application that allows a user to save events for each hour of the day, using  HTML and CSS powered by jQuery. </h3>
        
        <p></p>
        
        </VerticalTimelineElement>

      
    </div>

    
  );
}

export default Experience;
