import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="rgb(29, 22, 113)">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="March 2023- Augest 2023"
          iconStyle={{ background: "rgb(29, 22, 113)", color: "white" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element--title">
            UC Berkeley coding bootcamp, Berkeley,CA
          </h3>

          <p>Certificate✅</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2023-May 2023"
          iconStyle={{ background: "rgb(29, 22, 113)", color: "white" }}
          icon={<SchoolIcon />}
        >
          <h4>Calendar Creator</h4>
          <h3 className="vertical-timeline-element--title">
            I Developed a program that enables a user to store events for every
            hour of the day, utilizing HTML and CSS enhanced by jQuery💻.{" "}
          </h3>

          <p>Geade A</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="June 2023-July 2023"
          iconStyle={{ background: "rgb(29, 22, 113)", color: "white" }}
          icon={<SchoolIcon />}
        >
          <h4>Express.js:Note Taker</h4>
          <h3 className="vertical-timeline-element--title">
            Your assignment is to modify starter code to create an application
            called Note Taker that can be used to write and save notes. This
            application will use an Express.js back end and will save and
            retrieve note data from a JSON file.The application’s front end has
            already been created. It's your job to build the back end, connect
            the two, and then deploy the entire application to Heroku💻.
          </h3>

          <p>Grade A</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="June 2023 - July 2023"
          iconStyle={{ background: "rgb(29, 22, 113)", color: "white" }}
          icon={<SchoolIcon />}
        >
          <h4>ORM E-Commerce Portfolio</h4>
          <h3 className="vertical-timeline-element--title">
            The MySQL database is used in this backend application, which also
            uses Node.Js, Express, Sequelize, and dotenv💻.
            <p>Grade A</p>
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
