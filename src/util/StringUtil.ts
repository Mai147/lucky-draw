export const isValidInteger = ({
    value,
    minValue,
    maxValule,
}: {
    value: string;
    minValue?: number;
    maxValule?: number;
}) => {
    if (isNaN(Number(value))) return false;
    const numberValue = Number(value);
    if (!Number.isInteger(numberValue)) return false;
    if (minValue && numberValue < minValue) return false;
    if (maxValule && numberValue > maxValule) return false;
    return true;
};

export const splitNumber = (num: number) => {
    return num.toString().split("").map(Number);
};
