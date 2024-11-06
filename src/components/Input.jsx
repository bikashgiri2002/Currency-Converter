import { useId } from "react";

function Input({
  lable,
  amount,
  onAmoutChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "USD",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex justify-around ${className}`}>
      <div className="w-1/2 p-2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {lable}
        </label>
        <input
          id={amountInputId}
          type="number"
          className="text-black outline-none rounded-lg w-full bg-gray-200 p-1.5"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmoutChange && onAmoutChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 p-2">
        <label className="text-black/40 mb-2 inline-block">Currency Type</label>
        <select
          className=" text-black w-full rounded-lg p-1 bg-gray-200 cursor-pointer outline-none"
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
      </div>
    </div>
  );
}

export default Input;
