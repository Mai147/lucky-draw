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

type NestedObject = {
    [key: string]: NestedObject | string;
};

export const flattenObject = (
    obj: NestedObject,
    prefix: string = ""
): { [key: string]: string } => {
    const flattened: { [key: string]: string } = {};

    for (const key in obj) {
        const newKey = prefix ? `${prefix}-${key}` : key;

        if (typeof obj[key] === "object" && obj[key] !== null) {
            Object.assign(
                flattened,
                flattenObject(obj[key] as NestedObject, newKey)
            );
        } else {
            flattened[newKey] = obj[key] as string;
        }
    }

    return flattened;
};
