import { Fragment, useCallback, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { ThemedText } from "./ThemedText";

export function GamePage() {
    const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
        loaderUrl: "https://github.com/xcathy/website/blob/184223c0f54a60c312ec9961aa4cd58e2e4a3f9e/builds/maze/1.2/maze1.2.loader.js",
        dataUrl: "https://github.com/xcathy/website/blob/184223c0f54a60c312ec9961aa4cd58e2e4a3f9e/builds/maze/1.2/maze1.2.data.unityweb",
        frameworkUrl: "https://github.com/xcathy/website/blob/184223c0f54a60c312ec9961aa4cd58e2e4a3f9e/builds/maze/1.2/maze1.2.framework.js.unityweb",
        codeUrl: "https://github.com/xcathy/website/blob/184223c0f54a60c312ec9961aa4cd58e2e4a3f9e/builds/maze/1.2/maze1.2.wasm.unityweb",
        
    }); 

    const handleGameOver = useCallback(() => {
        window.open( "./desk", "_self")
    }, []);

    useEffect(() => {
        window.addEventListener("ExitGame", handleGameOver);
        return () => {
            window.removeEventListener("ExitGame", handleGameOver);
        };
    }, [Unity, handleGameOver]);

    return (
        <Fragment>
            {!isLoaded && (
                <ThemedText
                    type='default'
                    lightColor='#9896AA'
                    darkColor='#9896AA'
                >
                    <p>Loading... {Math.round(loadingProgression * 100)}%</p>
                </ThemedText>
            )}
            <Unity
                unityProvider={unityProvider}
                style={{ visibility: isLoaded ? "visible" : "hidden" }}
            />
        </Fragment>
    );    
}