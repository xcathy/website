
export function RoundToDigits (inputNumber, digits) {
    return Math.round(inputNumber * (10^digits)) / (10^digits);
}
