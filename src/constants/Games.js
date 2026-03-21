// Maze
const gamePath = `${process.env.PUBLIC_URL}/builds/maze1.2/`;
const htmlPath = gamePath + 'index.html';
const buildPath = gamePath + 'Build/';

const loaderUrl = buildPath + "maze1.2.loader.js";
const dataUrl = buildPath + "maze1.2.data.unityweb";
const frameworkUrl = buildPath + "maze1.2.framework.js.unityweb";
const codeUrl = buildPath + "maze1.2.wasm.unityweb";

// Desk
const deskGamePath = `${process.env.PUBLIC_URL}/builds/Desk3Dv1.0/`;
const deskHtmlPath = deskGamePath + 'index.html';
const deskBuildPath = deskGamePath + 'Build/';

const deskLoaderUrl = deskBuildPath + "Desk3Dv1.0.loader.js";
const deskDataUrl = deskBuildPath + "Desk3Dv1.0.data";
const deskFrameworkUrl = deskBuildPath + "Desk3Dv1.0.framework.js";
const deskCodeUrl = deskBuildPath + "Desk3Dv1.0.wasm";

export const Games = {
    gamePath,
    htmlPath,
    buildPath,
    loaderUrl,
    dataUrl,
    frameworkUrl,
    codeUrl,
    deskGamePath,
    deskHtmlPath,
    deskBuildPath,
    deskLoaderUrl,
    deskDataUrl,
    deskFrameworkUrl,
    deskCodeUrl,
};
