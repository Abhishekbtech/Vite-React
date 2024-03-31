import React, { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
}) {
    const amountInputId = useId();

    return (
        // <div className={"bg-white p-3 rounded-lg text-sm flex"}>
        //     <div className="w-1/2">
        //         <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
        //             {label}
        //         </label>
        //         <input
        //             id={amountInputId}
        //             className="outline-none w-full bg-transparent py-1.5"
        //             type="number"
        //             placeholder="Amount"
        //             disabled={amountDisable}
        //             value={amount}
        //             onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        //         />
        //     </div>
        //     <div className="w-1/2 flex flex-wrap justify-end text-right">
        //         <p className="text-black/40 mb-2 w-full">Currency Type</p>
        //         <select
        //             className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        //             value={selectCurrency}
        //             onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        //             disabled={currencyDisable}
        //         >

        //                 {currencyOptions.map((currency) => (
        //                     <option key={currency} value={currency}>
        //                     {currency}
        //                     </option>
        //                 ))}

        //         </select>
        //     </div>
        // </div>

        <div style={{ backgroundColor: "#ffffff", padding: "0.75rem", borderRadius: "0.5rem", fontSize: "0.875rem", display: "flex",}}>
            <div style={{width: "50%", display: "flex", flexDirection: "column" }} >
                <label htmlFor={amountInputId} style={{color: "rgba(0, 0, 0, 0.4)", marginBottom: "0.5rem",}}>
                    {label}
                </label>
                <input id={amountInputId} 
                    style={{ width: "100%", backgroundColor: "transparent", padding: "0.375rem", outline: "none", border: "none", }}
                    type="number" placeholder="Amount" disabled={amountDisable} value={amount}
                    onChange={(e) =>
                        onAmountChange && onAmountChange(Number(e.target.value))
                    }
                />
            </div>
            <div style={{ width: "50%", display: "flex", flexDirection: "column", }} >
                <p style={{color: "rgba(0, 0, 0, 0.4)", marginBottom: "0.5rem", }} >
                    Currency Type
                </p>
                <select style={{borderRadius: "0.375rem", padding: "0.25rem 0.5rem", backgroundColor: "#f3f4f6", cursor: "pointer", 
                    outline: "none", border: "none", width: "100%" }} 
                    value={selectCurrency} disabled={currencyDisable}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} >
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

export default InputBox;
