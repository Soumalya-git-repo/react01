import { useId, useState } from "react";
import graph from "../images/graph.jpg";
// import useCurrencyInfo from "../hooks/useCurrencyInfo";

const CurrencyConverter = ({
    label,
    // amount,
    onAmountOnChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) => {

const amountInputId = useId()




    return (
        <div className="converter_page" style={{ backgroundImage: `url(${graph})` }}>
            <div className="converter">
                <h1>💱 Currency Converter</h1>

                <div className="field">
                    <label htmlFor={amountInputId}>{label}</label>
                    <input
                        id={amountInputId}
                        type="number"
                        placeholder="Amount"
                        disabled={amountDisable}
                        value={amount}
                        onChange={(e) => onAmountOnChange && onAmountOnChange(number(e.target.value))}
                    />
                    <select
                        value={selectCurrency}
                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                        disabled={currencyDisable}
                    >
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>{currency}</option>
                        ))}
                    </select>
                </div>

                <div className="swap">
                    <button id="swap">⇄</button>
                </div>

                <div className="field">
                    <label>{label}</label>
                    <input type="number" id="to-amount" placeholder="0" />
                    <select id="to-currency">
                        <option value="USD">USD</option>
                        <option value="INR">INR</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                    </select>
                </div>

                <button id="convert">Convert</button>

            </div>
        </div>
    );
};

export default CurrencyConverter;