import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";

const getSalary = (salaryInPLN, currency) => {
    if (!salaryInPLN) {
        return "-";
    } else if (currency === "USD") {
        return `${(salaryInPLN / 3.95).toFixed(2)} USD`;
    } else {
        return `${salaryInPLN} PLN`;
    }
};

export function Person({ data }) {
    const currency = useContext(CurrencyContext);

    return (
        <>
            <h3>Imię: {data.name}</h3>
            <p>Wiek: {data.age}</p>
            <p>Pensja: {getSalary(data.salaryInPLN, currency)}</p>
        </>
    );
}
