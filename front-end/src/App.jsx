import { useState } from "react";
import "./App.css";
import { People } from "./components/People";
import { CurrencyContext } from "./context/CurrencyContext";

function App() {
    const [currency, setCurrency] = useState("PLN");

    return (
        <CurrencyContext.Provider value={currency}>
            <div className="App">
                <header className="App-header">
                    <h1>Aplikacja do zarządzania pracownikami</h1>
                    Waluta:{" "}
                    <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                    >
                        <option value="PLN">PLN</option>
                        <option value="USD">USD</option>
                    </select>
                </header>
                <People />
            </div>
        </CurrencyContext.Provider>
    );
}

export default App;
