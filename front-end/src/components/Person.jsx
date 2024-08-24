import { use } from "react";
import { CurrencyContext } from "../context/CurrencyContext";

const getSalary = (salaryInPLN, currency) => {
    if (currency === "USD") {
        return `${(salaryInPLN / 3.95).toFixed(2)} USD`;
    } else {
        return `${salaryInPLN} PLN`;
    }
};

export function Person({ data }) {
    let currency = "";

    if (data.salaryInPLN) {
        currency = use(CurrencyContext);
    }

    return (
        <>
            <h3>Imię: {data.name}</h3>
            <p>Wiek: {data.age}</p>
            {data.salaryInPLN && (
                <p>Pensja: {getSalary(data.salaryInPLN, currency)}</p>
            )}
        </>
    );
}
