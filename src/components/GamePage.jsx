import { useEffect, useState, useRef } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { Games } from '../constants/Games';
import '../styles/global.css';
import '../styles/theme.css';
import './GamePage.css';
import { useNavigate } from "react-router-dom";

export function GamePage() {
    const navigate = useNavigate();
    const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
        loaderUrl: Games.deskLoaderUrl,
        dataUrl: Games.deskDataUrl,
        frameworkUrl: Games.deskFrameworkUrl,
        codeUrl: Games.deskCodeUrl,
    });

    return (
        <div className='main-container'>
            {!isLoaded && (
                <div className='sub-container'>
                    <p className='raleway-default default-white' >Loading... {Math.round(loadingProgression * 100)}%</p>
                </div>
            )}
            <Unity
                unityProvider={unityProvider}
                style={{ visibility: isLoaded ? "visible" : "hidden", width: '100vw', height: '94vh', marginTop: '6vh' }}
            />
        </div>
    );    
}