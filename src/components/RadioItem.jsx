import React, { useCallback, useState } from 'react';
import { DraggableContainer } from './Interactable/DraggableContainer';
import { Images } from '../constants/Images';
import { Audios } from '../constants/Audios';
import { Specs } from '../constants/Specs';
import './RadioItem.css';
import '../styles/global.css';
import '../styles/theme.css';

export function RadioItem(id, handleDrag, style ) {
    const isWideScreen = Specs.screenWidth > 800;

    const [ LBtn, setLBtn ] = useState(Images.leftButton);
    const [ PBtn, setPBtn ] = useState(Images.pauseButton);
    const [ RBtn, setRBtn ] = useState(Images.rightButton);

    const playlist ={
        0: { title: "morning", path: Audios.morning },
        1: { title: "raindrops", path: Audios.raindrops },
        2: { title: "happy", path: Audios.happy },
    };

    const [ index, setIndex ] = useState(0);
    const [ status, setStatus ] = useState('init');
    const music = document.getElementById("audio");

    const img = document.createElement('img');
    img.src = Images.clearImg;

    const playMusic = useCallback(( previous, pause, next ) => {
        if (previous) {
            setLBtn(Images.leftButtonClick);
            setTimeout(function(){
                setLBtn(Images.leftButton);
            }, 880);

            if ( index > 0 ) {
                setIndex(index - 1);
            } else {
                setIndex(Object.keys(playlist).length - 1);
            }
            setStatus('playing');
        }
    
        if (pause) {
            setPBtn(Images.pauseButtonClick);
            setTimeout(function(){
                setPBtn(Images.pauseButton);
            }, 880);

            music.pause();
            setStatus('paused');
        }
    
        if (next) {
            setRBtn(Images.rightButtonClick);
            setTimeout(function(){
                setRBtn(Images.rightButton);
            }, 880);

            if (status !== 'playing') {
                music.play();
                setStatus('playing');
            } else {
                if ( index < Object.keys(playlist).length - 1 ) {
                    setIndex(index + 1);
                } else {
                    setIndex(0);
                }
            }   
        }
        
    },[ music, index, setIndex, status, setStatus ]);

    return (
        <DraggableContainer
            id={ id }
            handleDrag = { handleDrag }
            style={ style }
        > 
            <video
                width='0'
                height='0'
                loop
                autoPlay
                id='audio'
                src={ status === "init" ? "" : playlist[index]?.path }
            />
            <div className='radio-container'>
                <img
                    src={Images.radio}
                    contentFit='cover'
                    className='radio'
                    style={{ left: style.left, top: style.top, height: style.height, width: style.width }}
                />
                <p className='now-playing raleway-xs default-white'>
                    { status === 'init' ? 
                        'press right arrow to play! :)'
                        :
                        `Now playing: ${ playlist[index]?.title }`
                    }
                </p>
                <div
                    className='button-display'
                    style={{ height: style.height/5, width: style.width/5 }}
                >
                    <img
                        src={ LBtn }
                        className='left-button'
                        onClick={() => playMusic(true, false, false)}
                    />
                    <img
                        src={ PBtn }
                        className='pause-button'
                        onClick={() => playMusic(false, true, false)}
                    />
                    <img
                        src={ RBtn }
                        className='right-button'
                        onClick={() => playMusic(false, false, true)}
                    />
                </div>
            </div>
        </DraggableContainer>
    );
}