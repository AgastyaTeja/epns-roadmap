import React from 'react'
import "./css/App.css"
import timeLineElements from './timelineElements'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {ReactComponent as WorkIcon} from './icons/token.svg'
import {ReactComponent as AuditIcon} from './icons/audit.svg'
import {ReactComponent as ApiIcon} from './icons/api.svg'
import {ReactComponent as NotificationIcon} from './icons/notification.svg'
import {ReactComponent as toolsIcon} from './icons/tools.svg'
import {ReactComponent as handShakeIcon} from './icons/hand-shake.svg'

let q1Style = {
    background: "#06D6A0"
}
let q2Style = {
    background: "#f9c74f"
}

let q3Style = {
    background: "#FF6347"
}
let q4Style = {
    background: "#FFA500"
}

const currentIcon = (id) =>{
    if (id === 1){
        return <AuditIcon />
    }
    if (id ===2 ){
        return <WorkIcon />
    }
    if (id ===3){
        return <ApiIcon />
    }
    if (id===4){
        return <NotificationIcon />
    }
    if (id===5){
        return <toolsIcon/>
    }
    if (id===6){
        return <handShakeIcon/>
    }
}

const App = () =>{


    return (
        <div>
            <h1 className="title">EPNS 2021 Roadmap</h1>
            <VerticalTimeline>
                {
                    timeLineElements.map(element => {
                        return(
                            <VerticalTimelineElement
                             key={element.key}
                            date={element.when}
                            dateClassName="date"
                            iconStyle={element.when==="2021 Q1"?q1Style:element.when==="2021 Q2"?q2Style:element.when==="2021 Q3"?q3Style:q4Style}
                            icon={currentIcon(element.id)}
                            >
                                <h3 className="vertical-timeline-element-title">{element.title}</h3>
                                <h5 className="vertical-timeline-element-subtitle">{element.status}</h5>
                                <p id="description">{element.description}</p>
                                <a href={element.moreInfo} className={`button ${element.when==="2021 Q1"?"q1Btn":element.when==="2021 Q2"?"q2Btn":element.when==="2021 Q3"?"q3Btn":"q4Btn"}`}>Readmore</a>
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </div>
    )
}

export default App