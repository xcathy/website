import { Images } from "../constants/Images";
import './CatSleep.css';
import '../styles/global.css';
import '../styles/theme.css';
import { Tooltip } from "react-tooltip";

export function CatSleep(dialogue, style) {

    return (
        <div>
            <div
                className='cat-sleep'
                draggable={ false }
                style={ style }
            >
                <img
                    src={Images.catSleep}
                    style={{ left: style.left, top: style.top, height: style.height, width: style.width }}
                />
            </div>
            <Tooltip anchorSelect=".cat-sleep" place="top">
                { dialogue }
            </Tooltip>
        </div>
    );
}