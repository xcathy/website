import { useState } from "react";
import { Specs } from '../constants/Specs';
import { GamePage } from '../components/GamePage';
import { GameEntry } from '../components/GameEntry';
import { Images } from '../constants/Images';
import GridLayout from 'react-grid-layout';
import Scrollbar from 'react-scrollbars-custom';
import '../styles/global.css';
import '../styles/theme.css';
import './games.css';

export default function Games({ setDisplayNav }) {
    const screenW = Specs.screenWidth;
    const mobileView = screenW < 600;
    const baseID = 'game';
    const cols = 1;
    const rowH = 300;
    // set full screen mode to be true if playing on web
    const [ fullScreen, setFullScreen ] = useState(false);
    // set the current playing game's name
    const [ currentGame, setCurrentGame ] = useState("");

    // Game Entries
    const gameEntries = [
        {   id: `${ baseID }1`,
            src: Images.desk,
            title: "The Desk 3D",
            desc: 'The Desk 3D is a small Unity game project I made.\nDownloadable in .exe, also playable in web!',
            exeLink: "https://xcathy.github.io/website/downloads/Desk3Dv1.3Win.zip",
            webLink: "Click Here to Play in Browser!",
        },
    ];

    // Generate game entries layout
    const generateLayout = (length) => {
        var layoutArray = [];
        var i = 0;
        
        while (i < length) {
            layoutArray.push({ i: `game${i + 1}`, x: 0, y: 0, w: 1, h: mobileView ? 1.5 : 1 });
            i++;
        }
        return layoutArray;
    };

    const layout = generateLayout(gameEntries.length);

    // set to full screen mode when web play mode is selected
    const fullScreenMode = () => {
        setDisplayNav(false);
        setFullScreen(true);
    };

    // quit full screen mode when game exit
    window.OnUnityQuit = function() {
        setDisplayNav(true);
        setFullScreen(false);
    };

    // game page where the developed games are published
    // each entry will have downloadable packages as well as a webGL version available for online play
    return (
        fullScreen?
            <div className='container'>
                <GamePage />
            </div>
        :

        <div className='main-container light-blue-background'>
            <Scrollbar
                style={{ width: "100vw", height: "100vh", top: "10%" }} 
            >
                <div className='grid-page'>
                    <GridLayout
                        cols={ cols }
                        rowHeight={ rowH }
                        width={screenW}
                        preventCollision={true}
                        allowOverlap={ false }
                        className='layout'
                        layout={ layout }
                        isResizable={ false }
                        isDraggable={ false }
                    >
                        {gameEntries.map((entry) => (
                            GameEntry(
                                entry.id,
                                entry.src,
                                entry.title,
                                entry.desc,
                                fullScreenMode,
                                mobileView,
                                entry.exeLink,
                                entry.apkLink,
                                entry.webLink
                            )
                        ))}
                    </GridLayout>
                        
                    <div className='footer'>
                        <p className='raleway-default default-grey'>you have reached the end</p>
                    </div>
                </div>
            </Scrollbar>
        </div>
    );
}