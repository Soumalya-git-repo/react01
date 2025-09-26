// import './App.css'
// import PasswordGenarator from './components/PasswordGenarator'
// import Counter from './components/Counter'
// import useCurrencyInfo from "./hooks/useCurrencyInfo";
// import CurrencyConverter from './components/CurrencyConverter'
// import { useState } from "react";
// import graph from "./images/graph.jpg";

// function App() {
//   const [amount, setAmount] = useState(0);
//   const [from, setFrom] = useState("usd");
//   const [to, setTo] = useState("inr");
//   const [convertedAmount, setConvertedAmount] = useState(0);

//   const currencyInfo = useCurrencyInfo(from);
//   const options = Object.keys(currencyInfo || {});

//   const swap = () => {
//     setFrom(to);
//     setTo(from);
//     setAmount(convertedAmount);
//     setConvertedAmount(amount);
//   };

//   const convert = () => {
//     if (currencyInfo[to]) {
//       setConvertedAmount(amount * currencyInfo[to]);
//     }
//   };

//   return (
//     <>
//       {/* <Counter /> */}
//       {/* <PasswordGenarator /> */}

//       <div
//         className="converter_page"
//         style={{ backgroundImage: `url(${graph})` }}
//       >
//         <div className="converter">
//           <h1>💱 Currency Converter</h1>
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               convert();
//             }}
//           >
//             <div className="field">
//               <CurrencyConverter
//                 label="From"
//                 amount={amount}
//                 currencyOptions={options.length > 0 ? options : [from, to]} // ✅ fallback
//                 onCurrencyChange={(currency) => setFrom(currency)}
//                 selectCurrency={from}
//                 onAmountOnChange={(val) => setAmount(val)}
//               />
//             </div>

//             <div className="swap">
//               <button type="button" onClick={swap}>
//                 ⇄
//               </button>
//             </div>

//             <div className="field">
//               <CurrencyConverter
//                 label="To"
//                 amount={convertedAmount}
//                 currencyOptions={options.length > 0 ? options : [from, to]} // ✅ fallback
//                 onCurrencyChange={(currency) => setTo(currency)}
//                 selectCurrency={to}
//                 amountDisable
//               />
//             </div>

//             <button type="submit">
//               Convert {from.toUpperCase()} to {to.toUpperCase()}
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;




import './App.css'
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import CurrencyConverter from './components/CurrencyConverter'
import { useState, useEffect } from "react";
import graph from "./images/graph.jpg";
 import PasswordGenarator from './components/PasswordGenarator'
 import Counter from './components/Counter'




function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  // Keep last non-empty options
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const keys = Object.keys(currencyInfo || {});
    if (keys.length > 0) {
      setOptions(keys);
    }
  }, [currencyInfo]);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  return (

//       {/* <Counter /> */}
//       {/* <PasswordGenarator /> */}

    <div
      className="converter_page"
      style={{ backgroundImage: `url(${graph})` }}
    >
      <div className="converter">
        <h1>💱 Currency Converter</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          {/* From */}
          <div className="field">
            <CurrencyConverter
              label="From"
              amount={amount}
              currencyOptions={[...new Set([from, ...options])]} // ✅ include current from
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountOnChange={(val) => setAmount(val)}
            />
          </div>

          {/* Swap button */}
          <div className="swap">
            <button type="button" onClick={swap}>
              ⇄
            </button>
          </div>

          {/* To */}
          <div className="field">
            <CurrencyConverter
              label="To"
              amount={convertedAmount}
              currencyOptions={[...new Set([to, ...options])]} // ✅ include current to
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>

          <button type="submit">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
