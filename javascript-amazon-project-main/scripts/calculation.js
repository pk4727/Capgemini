// Helper: convert cents to dollars
export function centToDollar(centMoney) {
    return (Math.round(centMoney) / 100).toFixed(2);
}