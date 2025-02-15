// Maze
const gamePath = `${process.env.PUBLIC_URL}/builds/maze1.2/`;
const htmlPath = gamePath + 'index.html';
const buildPath = gamePath + 'Build/';

const loaderUrl = buildPath + "maze1.2.loader.js";
const dataUrl = buildPath + "maze1.2.data.unityweb";
const frameworkUrl = buildPath + "maze1.2.framework.js.unityweb";
const codeUrl = buildPath + "maze1.2.wasm.unityweb";

// Desk
const deskGamePath = `${process.env.PUBLIC_URL}/builds/desk1.3/`;
const deskHtmlPath = deskGamePath + 'index.html';
const deskBuildPath = deskGamePath + 'Build/';

const deskLoaderUrl = deskBuildPath + "desk1.3.loader.js";
const deskDataUrl = deskBuildPath + "desk1.3.data.unityweb";
const deskFrameworkUrl = deskBuildPath + "desk1.3.framework.js.unityweb";
const deskCodeUrl = deskBuildPath + "desk1.3.wasm.unityweb";

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
