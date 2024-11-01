import { roundToDigits } from "./roundToDigits";

export function imageMoveHover (e: PointerEvent, x: number, y: number, boundingBox: DOMRect) {
    const coordinates = { x: 0.0, y: 0.0 };
    const mouseX = roundToDigits(e.screenX, 2);
    const mouseY = roundToDigits(e.screenY, 2);

    const distanceBottom = window.innerHeight - boundingBox?.bottom;
    const distanceRight = window.innerWidth - boundingBox?.right;

    if (mouseX !== -x) {
        coordinates.x = roundToDigits(mouseX / distanceRight, 2);
    }

    if (mouseY !== -y) {
      coordinates.y = roundToDigits(mouseY / distanceBottom, 2);
    }

    return coordinates;
}
