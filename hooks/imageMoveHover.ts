import { roundToDigits } from "./roundToDigits";

export function imageMoveHover (e: PointerEvent, a: number, b: number, c: number, d: number, W: number, H: number) {
    const coordinates = { a: 0.0, b: 0.0, c: 0.0, d: 0.0 };

    let nextA = a - e.movementX;
    let nextB = b - e.movementY;
    let nextC = nextA + W;
    let nextD = nextB + H;

    if ( nextA >= 0.0 ) nextA = a;
    if ( nextB >= 0.0 ) nextB = b;
    if ( nextC <= window.innerWidth ) nextA = a;
    if ( nextD <= window.innerHeight ) nextB = b;

    coordinates.a = roundToDigits( nextA, 2 );
    coordinates.b = roundToDigits( nextB, 2 );
    coordinates.c = roundToDigits( nextC, 2 );
    coordinates.d = roundToDigits( nextD, 2 );

    return coordinates;
}
