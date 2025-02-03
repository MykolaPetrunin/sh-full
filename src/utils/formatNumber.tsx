export function formatNumber({ value, precision = 0 }: { value?: number; precision?: number }): string {
    if (value === undefined) return '';
    const parts = value.toFixed(precision).split('.');
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const result = precision > 0 ? `${integerPart}.${parts[1]}` : integerPart;

    const [mainVal, precisionVal] = result.split('.');
    if (!precisionVal) return result;
    const newPrecision = precisionVal.replace(/0+$/, '');
    if (newPrecision === '') return mainVal;
    return `${mainVal}.${newPrecision}`;
}
