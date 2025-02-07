import { useCallback, useState } from 'react';
import { Specs } from '../constants/Specs';
import { Images } from '../constants/Images';
import { CatSleep } from '../components/CatSleep';
import { GameItem } from '../components/GameItem';
import { ClockItem } from '../components/ClockItem';
import { CalendarItem } from '../components/CalendarItem';
import { ImageMove } from '../hooks/ImageManipulate';
import { PlantItem } from '../components/PlantItem';
import { RadioItem } from '../components/RadioItem';
import { Cloud } from '../components/Cloud';
import './desk.css';
import { useNavigate } from 'react-router-dom';

export default function Desk() {
    const navigate = useNavigate();
    const screenW = Specs.screenWidth;
    const screenH = Specs.screenHeight;
    const webView = screenW > 800;
    const background = webView ? Images.hBackground : Images.vBackground;
    
    const defaultPositions = 
    {
        "clock":  webView ? { left: 0.45 * screenW, top: 0.58 * screenH } : { left: 0.56 * screenW, top: 0.59 * screenH },
        "calendar": webView ? { left: 0.85 * screenW, top: 0.1 * screenH } : { left: 0.6 * screenW, top: 0.42 * screenH },
        "radio": webView ? { left: 0.8 * screenW, top: 0.35 * screenH } : { left: 0 * screenW, top: 0.3 * screenH },
        "plant": webView ? { left: 0.78 * screenW, top: 0.18 * screenH } : { left: 0.8 * screenW, top: 0.24 * screenH },
        "game": webView ? { left: 0.45 * screenW, top: 0.1 * screenH } : { left: 0.1 * screenW, top: 0.55 * screenH },
        "catSleep": webView ? { left: 0.02 * screenW, top: 0.45 * screenH } : { left: 0 * screenW, top: 0.65 * screenH },
    }
    const defaultSize = 
    {
        "clock": webView ? { height: 0.1  * screenH, width: 0.3 * screenH } : { height: 0.05 * screenH, width: 0.15 * screenH },
        "calendar": webView ? { height: 0.2  * screenH, width: 0.2 * screenH } : { height: 0.13  * screenH, width: 0.13 * screenH },
        "radio": webView ? { height: 0.27 * screenH, width: 0.25 * screenH } : { height: 0.16 * screenH, width: 0.16 * screenH },
        "plant": webView ? { height: 0.2 * screenH, width: 0.1 * screenH } : { height: 0.14 * screenH, width: 0.07 * screenH },
        "game": webView ? { height: 0.2 * screenH, width: 0.2 * screenH } :  { height: 0.1 * screenH, width: 0.1 * screenH },
        "catSleep": webView ? { height: 0.6 * screenH, width: 0.6 * screenH } : { height: 0.34 * screenH, width: 0.34 * screenH },
    }

    const [ clockBox, setCBox ] = useState(
        {
            a: defaultPositions["clock"].left,
            b: defaultPositions["clock"].top,
            c: defaultPositions["clock"].left + defaultSize["clock"].width,
            d: defaultPositions["clock"].top + defaultSize["clock"].height,
            W: defaultSize["clock"].width,
            H: defaultSize["clock"].height
        });
    const [ calendarBox, setCLBox ] = useState(
        {
            a: defaultPositions["calendar"].left,
            b: defaultPositions["calendar"].top,
            c: defaultPositions["calendar"].left + defaultSize["calendar"].width,
            d: defaultPositions["calendar"].top + defaultSize["calendar"].height,
            W: defaultSize["calendar"].width,
            H: defaultSize["calendar"].height
        });
    const [ radioBox, setRDBox ] = useState(
        { 
            a: defaultPositions["radio"].left, 
            b: defaultPositions["radio"].top,
            c: defaultPositions["radio"].left + defaultSize["radio"].width,
            d: defaultPositions["radio"].top + defaultSize["radio"].height,
            W: defaultSize["radio"].width,
            H: defaultSize["radio"].height
        });
    const [ plantBox, setPTBox ] = useState(
        {
            a: defaultPositions["plant"].left,
            b: defaultPositions["plant"].top,
            c: defaultPositions["plant"].left + defaultSize["plant"].width,
            d: defaultPositions["plant"].top + defaultSize["plant"].height,
            W: defaultSize["plant"].width,
            H: defaultSize["plant"].height
        });
    const [ gameBox, setGMBox ] = useState(
    {
        a: defaultPositions["game"].left,
        b: defaultPositions["game"].top,
        c: defaultPositions["game"].left + defaultSize["game"].width,
        d: defaultPositions["game"].top + defaultSize["game"].height,
        W: defaultSize["game"].width,
        H: defaultSize["game"].height
    });

    const moveItem = useCallback((id, e, box) => {
        if (box.W === 0.0 || box.H === 0.0) {
            if ( id === "clock" ) setCBox({ a: box.a, b: box.b, c: box.c, d: box.d, W: defaultSize["clock"].width, H: defaultSize["clock"].height });
            if ( id === "calendar" ) setCLBox({ a: box.a, b: box.b, c: box.c, d: box.d, W: defaultSize["calendar"].width, H: defaultSize["calendar"].height });
            if ( id === "radio" ) setRDBox({ a: box.a, b: box.b, c: box.c, d: box.d, W: defaultSize["radio"].width, H: defaultSize["radio"].height });
            if ( id === "game" ) setGMBox({ a: box.a, b: box.b, c: box.c, d: box.d, W: defaultSize["game"].width, H: defaultSize["game"].height });
            if ( id === "plant" ) setPTBox({ a: box.a, b: box.b, c: box.c, d: box.d, W: defaultSize["plant"].width, H: defaultSize["plant"].height });
        } else {
            if ( id === "clock" ) setCBox(ImageMove(e, box));
            if ( id === "calendar" ) setCLBox(ImageMove(e, box));
            if ( id === "radio" ) setRDBox(ImageMove(e, box));
            if ( id === "game" ) setGMBox(ImageMove(e, box));
            if ( id === "plant" ) setPTBox(ImageMove(e, box));
        }
    }, [ clockBox, calendarBox, radioBox, plantBox, gameBox ]);
    
    return (
        <div className='main-container'>
            <div className='sky' />
            <img
                src={ background }
                className='background'
            />
            {
                Cloud(
                    Images.clouds,
                    {
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: screenW,
                        height: screenH,
                        zIndex: -1,
                    },
                    0.005,
                    1
                )
            }
            {
                ClockItem(
                    'clock',
                    (e) => moveItem('clock', e, clockBox),
                    {
                        position: 'absolute',
                        left: clockBox.a,
                        top: clockBox.b,
                        width: defaultSize["clock"].width,
                        height: defaultSize["clock"].height,
                    }
                )
            }
            {
                CalendarItem(
                    'calendar',
                    (e) => moveItem('calendar', e, calendarBox),
                    {
                        position: 'absolute',
                        left: calendarBox.a,
                        top: calendarBox.b,
                        height: defaultSize["calendar"].height,
                        width: defaultSize["calendar"].width,
                    }
                )
            }
            {
                RadioItem(
                    "radio",
                    (e) => moveItem("radio", e, radioBox),
                    {
                        position: 'absolute',
                        left: radioBox.a,
                        top: radioBox.b,
                        height: defaultSize["radio"].height,
                        width: defaultSize["radio"].width,
                    }
                )
            }
            {
                PlantItem(
                    "plant",
                    (e) => moveItem("plant", e, plantBox),
                    {
                        position: 'absolute',
                        left: plantBox.a,
                        top: plantBox.b,
                        height: defaultSize["plant"].height,
                        width: defaultSize["plant"].width,
                    }
                )
            }
            {
                GameItem(
                    "game",
                    (e) => moveItem("game", e, gameBox),
                    () => navigate('/game'),
                    {
                        position: 'absolute',
                        left: gameBox.a,
                        top: gameBox.b,
                        height: defaultSize["game"].height,
                        width: defaultSize["game"].width,
                    },
                )
            }
            {
                CatSleep(
                    "You can drag and re-arrange the items on the desk! Except for me, I am unmovable.",
                    {
                        position: 'absolute',
                        left: defaultPositions["catSleep"].left,
                        top: defaultPositions["catSleep"].top,
                        height: defaultSize["catSleep"].height,
                        width: defaultSize["catSleep"].width,
                    }
                )
            }
        </div>
    );
}