import React from "react";
import "./css/App.css";
import timeLineElements from "./timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {ReactComponent as WorkIcon} from "./icons/token.svg";
import {ReactComponent as AuditIcon} from "./icons/audit.svg";
import {ReactComponent as ApiIcon} from "./icons/api.svg";
import {ReactComponent as NotificationIcon} from "./icons/notification.svg";
import {ReactComponent as ToolIcon} from "./icons/tools.svg";
import {ReactComponent as HandShake} from "./icons/hand-shake.svg";
import {ReactComponent as Flag} from "./icons/flag.svg";
import {ReactComponent as People} from "./icons/group.svg";
import {ReactComponent as Sdk} from "./icons/sdk_convert.svg";
import {ReactComponent as Extension} from "./icons/extension.svg";
import {ReactComponent as Blockchain} from "./icons/blockchain.svg";
import {ReactComponent as Nodes} from "./icons/nodes.svg";
import {ReactComponent as Verify} from "./icons/verified.svg";
import {ReactComponent as Finish} from "./icons/finish.svg";
let q1Style = {
  background: "#06D6A0",
};
let q2Style = {
  background: "#f9c74f",
};

let q3Style = {
  background: "#FF6347",
};
let q4Style = {
  background: "#FFA500",
};

let iconArray = [
  <AuditIcon />,
  <WorkIcon />,
  <ApiIcon />,
  <NotificationIcon />,
  <ToolIcon />,
  <HandShake />,
  <Flag />,
  <People />,
  <Sdk />,
  <Extension />,
  <Flag />,
  <Sdk />,
  <Sdk />,
  <Blockchain />,
  <Nodes />,
  <Verify />,
  <Extension />,
  <Flag />,
  <WorkIcon />,
  <WorkIcon />,
];

const App = () => {
  return (
    <div>
      <h1 className="title">EPNS 2021 Roadmap</h1>
    

      <VerticalTimeline>
        {timeLineElements.map((element) => {
          if (element.id === 21) {
            return (
              <VerticalTimelineElement
                key={element.key}
                iconStyle={{background: "rgb(16, 204, 82)", color: "#fff"}}
                icon={<Finish />}
                className="lastElement"
              />
            );
          } else {
            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.when}
                dateClassName="date"
                iconStyle={
                  element.when === "2021 Q1"
                    ? q1Style
                    : element.when === "2021 Q2"
                    ? q2Style
                    : element.when === "2021 Q3"
                    ? q3Style
                    : q4Style
                }
               
                icon={iconArray[element.id - 1]}
                className="allElements"
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.status}
                </h5>
                <p id="description">{element.description}</p>
                <a
                  href={element.moreInfo}
                  className={`button ${
                    element.when === "2021 Q1"
                      ? "q1Btn"
                      : element.when === "2021 Q2"
                      ? "q2Btn"
                      : element.when === "2021 Q3"
                      ? "q3Btn"
                      : "q4Btn"
                  }`}
                >
                  Readmore
                </a>
              </VerticalTimelineElement>
            );
          }
        })}
      </VerticalTimeline>
    </div>
  );
};

export default App;
