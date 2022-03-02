import React from 'react'
import Tippy from '@tippyjs/react'
import { FaGithub, FaReact, FaNodeJs, FaUnity, FaAws } from 'react-icons/fa'
import { SiCsharp, SiFlutter, SiArduino, SiFirebase } from 'react-icons/si'
import { WindowContainer, Slider, Logos, Fab } from './SkillElements'
import ToolTip from './ToolTip'
import 'tippy.js/dist/tippy.css'

const ScrollWindow = () => {
    const GitHubInfo = ['Very familiar with Bitbucket and Github', 'Used git in scrum/agile dev environments', 'Solved a plethora of merge conflicts', 'Patience is a virtue'];
    const ReactInfo = ['Created this website with React!', 'My favourite framework for web dev and experimenting'];
    const CSharpInfo = ['Over 2 years experience with industry standard C# code', 'Test driven development with unit tests (NUnit)', 'Working with human machine interfaces created with Windows Forms'];
    const FlutterInfo = ['My favourite cross-platform mobile app developement framework', 'Created xml data-driven UI for iOS and Android devices', 'Integrated Google API into the app and documented any progress I made which was not readily available at a time where Flutter was relatively new', 'Utilized Firebase and Firestore to store key-value data and documents']
    const NodeJsInfo = ['Used NodeJs middleware and serverless to create AWS lambda functions which process and send information to a specified endpoint', 'Familiar with RESTful API calls made using ExpressJs', 'Wrote helper methods for writing data to AWS DynamoDB and S3 bucket services'];
    const UnityInfo = ['Designed and Imported assets into Unity to design a game launcher in VR', 'Wrote scripts to collect data from in-game GUIs and store them in Firebase', 'Played lots of VR games!'];
    const ArduinoInfo = ['Created many projects involving different Arduino libraries and electrical components involved in visual, audio, and environmental interactions', 'Created an IV fluid tracker which prevents lethal doses and generates an alarming sound sound', 'Lots of soldering'];
    const FireBaseInfo = ['Stored client details concerning credentials and documents', 'Used Firebase analytics and Google API (sheets, maps) with Flutter to collect location and documentation data for users'];
    const AWSInfo = ['Used NodeJs to read and write data from services such as Lambda, S3, and DynamoDB', 'Aspiring AWS Cloud Fundamentalist'];

    return (
        <WindowContainer>
            <Slider>
                <Logos>
                    <Tippy content={<ToolTip title="GitHub" bullets={GitHubInfo} />}>
                        <Fab><center><FaGithub size={80} style={{ color: 'black' }} /></center></Fab>
                    </Tippy>
                    <Tippy content={<ToolTip title="React.js" bullets={ReactInfo} />}>
                        <Fab><center><FaReact size={80} style={{ color: '#5bd3f3' }} /></center></Fab>
                    </Tippy>
                    <Tippy content={<ToolTip title="C#" bullets={CSharpInfo} />}>
                        <Fab><center><SiCsharp size={80} style={{ color: '#9e72d6' }} /></center></Fab>
                    </Tippy>
                    <Tippy content={<ToolTip title="Flutter" bullets={FlutterInfo} />}>
                        <Fab><center><SiFlutter size={80} style={{ color: '#00c7fa' }} /></center></Fab>
                    </Tippy>
                    <Tippy content={<ToolTip title="Node.js" bullets={NodeJsInfo} />}>
                        <Fab><center><FaNodeJs size={80} style={{ color: '#509941' }} /></center></Fab>
                    </Tippy>
                    <Tippy content={<ToolTip title="Unity" bullets={UnityInfo} />}>
                        <Fab><center><FaUnity size={80} style={{ color: 'black' }} /></center></Fab>
                    </Tippy >
                    <Tippy content={<ToolTip title="Arduino" bullets={ArduinoInfo} />}>
                        <Fab><center><SiArduino size={80} style={{ color: '#19949b' }} /></center></Fab>
                    </Tippy >
                    <Tippy content={<ToolTip title="FireBase" bullets={FireBaseInfo} />}>
                        <Fab><center><SiFirebase size={80} style={{ color: '#f7c62f' }} /></center></Fab>
                    </Tippy >
                    <Tippy content={<ToolTip title="AWS" bullets={AWSInfo} />}>
                        <Fab><center><FaAws size={80} style={{ color: '#222e3d' }} /></center></Fab>
                    </Tippy >
                </Logos >
                <Logos>
                    <Tippy content={<ToolTip title="GitHub" bullets={GitHubInfo} />}>
                        <Fab><center><FaGithub size={80} style={{ color: 'black' }} /></center></Fab>
                    </Tippy>
                    <Tippy content={<ToolTip title="React.js" bullets={ReactInfo} />}>
                        <Fab><center><FaReact size={80} style={{ color: '#5bd3f3' }} /></center></Fab>
                    </Tippy>
                    <Tippy content={<ToolTip title="C#" bullets={CSharpInfo} />}>
                        <Fab><center><SiCsharp size={80} style={{ color: '#9e72d6' }} /></center></Fab>
                    </Tippy>
                    <Tippy content={<ToolTip title="Flutter" bullets={FlutterInfo} />}>
                        <Fab><center><SiFlutter size={80} style={{ color: '#00c7fa' }} /></center></Fab>
                    </Tippy>
                    <Tippy content={<ToolTip title="Node.js" bullets={NodeJsInfo} />}>
                        <Fab><center><FaNodeJs size={80} style={{ color: '#509941' }} /></center></Fab>
                    </Tippy>
                    <Tippy content={<ToolTip title="Unity" bullets={UnityInfo} />}>
                        <Fab><center><FaUnity size={80} style={{ color: 'black' }} /></center></Fab>
                    </Tippy >
                    <Tippy content={<ToolTip title="Arduino" bullets={ArduinoInfo} />}>
                        <Fab><center><SiArduino size={80} style={{ color: '#19949b' }} /></center></Fab>
                    </Tippy >
                    <Tippy content={<ToolTip title="FireBase" bullets={FireBaseInfo} />}>
                        <Fab><center><SiFirebase size={80} style={{ color: '#f7c62f' }} /></center></Fab>
                    </Tippy >
                    <Tippy content={<ToolTip title="AWS" bullets={AWSInfo} />}>
                        <Fab><center><FaAws size={80} style={{ color: '#222e3d' }} /></center></Fab>
                    </Tippy >
                </Logos>
            </Slider >
        </WindowContainer >
    )
}

export default ScrollWindow
