import { Specs } from "../constants/Specs";
import { RoundToDigits } from "./RoundToDigits";

export function ImageHover (e, left, top, width, height) {
    const R = left + width;
    const B = top + height;

    const distR = RoundToDigits(Math.abs(Specs.screenWidth - R), 2);
    const distB = RoundToDigits(Math.abs(Specs.screenHeight - B), 2);

    var newL = left - e.movementX * distR * 0.001;
    var newT = top - e.movementY * distB * 0.001;
    var newR = newL + width;
    var newB = newT + height;

    if ( newL > 0.0 ) newL = left;
    if ( newT > 0.0 ) newT = top;
    if ( newR < Specs.screenWidth ) newL = left;
    if ( newB < Specs.screenHeight ) newT = top;

    const L = RoundToDigits( newL, 2 );
    const T = RoundToDigits( newT, 2 );

    return { L, T };
}

export function ImageMove (e, box) {
    const newBox = { a: 0.0, b: 0.0, c: 0.0, d: 0.0, W: 0.0, H: 0.0 };

    let nextA = e.pageX - box.W/2;
    let nextB = e.pageY - box.H/2;
    let nextC = nextA + box.W;
    let nextD = nextB + box.H;

    if ( nextA <= 0.0 ) nextA = box.a;
    if ( nextB <= 0.0 ) nextB = box.b;
    if ( nextC >= window.innerWidth ) nextA = box.a;
    if ( nextD >= window.innerHeight ) nextB = box.b;

    newBox.a = RoundToDigits( nextA, 2 );
    newBox.b = RoundToDigits( nextB, 2 );
    newBox.c = RoundToDigits( nextC, 2 );
    newBox.d = RoundToDigits( nextD, 2 );

    return newBox;
}