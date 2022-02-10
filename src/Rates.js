import rates from "./getProp";

export function Actual() {
    return (  
        <div>
            <h2>Dollar rate: {Number(rates.usd).toFixed(2)}UAH</h2>
            <h2>Euro rate: {Number(rates.eur).toFixed(2)}UAH</h2>
        </div>
    );
}