
export function roundToDigits (inputNumber: number, digits: number) {
    return Math.round(inputNumber * (10^digits)) / (10^digits);
}
