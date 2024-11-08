import { roundToDigits } from "./roundToDigits";

export function imageHover (e: PointerEvent, box: ElemntBox) {
    const newBox = { a: 0.0, b: 0.0, c: 0.0, d: 0.0, W: 0.0, H: 0.0 };

    let nextA = box.a - e.movementX;
    let nextB = box.b - e.movementY;
    let nextC = nextA + box.W;
    let nextD = nextB + box.H;

    if ( nextA >= 0.0 ) nextA = box.a;
    if ( nextB >= 0.0 ) nextB = box.b;
    if ( nextC <= window.innerWidth ) nextA = box.a;
    if ( nextD <= window.innerHeight ) nextB = box.b;

    newBox.a = roundToDigits( nextA, 2 );
    newBox.b = roundToDigits( nextB, 2 );
    newBox.c = roundToDigits( nextC, 2 );
    newBox.d = roundToDigits( nextD, 2 );

    return newBox;
}

export function imageMove (e: PointerEvent, box: ElemntBox) {
    const newBox = { a: 0.0, b: 0.0, c: 0.0, d: 0.0, W: 0.0, H: 0.0 };

    let nextA = e.pageX - box.W/2;
    let nextB = e.pageY - box.H/2;
    let nextC = nextA + box.W;
    let nextD = nextB + box.H;

    if ( nextA <= 0.0 ) nextA = box.a;
    if ( nextB <= 0.0 ) nextB = box.b;
    if ( nextC >= window.innerWidth ) nextA = box.a;
    if ( nextD >= window.innerHeight ) nextB = box.b;

    newBox.a = roundToDigits( nextA, 2 );
    newBox.b = roundToDigits( nextB, 2 );
    newBox.c = roundToDigits( nextC, 2 );
    newBox.d = roundToDigits( nextD, 2 );

    return newBox;
}