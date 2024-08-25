import { useState, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
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
                <ErrorBoundary fallback={<span>Błąd pobierania danych!</span>}>
                    <Suspense fallback={<span>Ładowanie...</span>}>
                        <People />
                    </Suspense>
                </ErrorBoundary>
            </div>
        </CurrencyContext.Provider>
    );
}

export default App;
