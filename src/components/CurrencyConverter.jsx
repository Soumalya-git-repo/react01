import { useId } from "react";

const CurrencyConverter = ({
  label,
  amount,
  onAmountOnChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency,
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) => {
  const amountInputId = useId();

  return (
    <>
      <label htmlFor={amountInputId}>{label}</label>
      <input
        id={amountInputId}
        type="number"
        placeholder="Amount"
        disabled={amountDisable}
        value={amount || ""}
        onChange={(e) =>
          onAmountOnChange && onAmountOnChange(Number(e.target.value))
        }
      />
      <select
        value={selectCurrency}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisable}
      >
        {currencyOptions.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </>
  );
};

export default CurrencyConverter;
