import './App.css'
import Counter from './components/Counter'
import CurrencyConverter from './components/CurrencyConverter'
import PasswordGenarator from './components/PasswordGenarator'
import useCurrencyInfo from "../hooks/useCurrencyInfo";
import { useId, useState } from "react";

function App() {

const [amount, setAmount] = useState(0)
const [from , setForm] = useState("usd")
const [to , setTo] = useState("inr")
const [convertedAmount , setConvertedAmount] = useState(0)

const currencyInfo = useCurrencyInfo(from)

const options = Object.keys(currencyInfo)




  return (
    <>

      {/* <Counter /> */}
      {/* <PasswordGenarator /> */}
      <CurrencyConverter />


    </>
  )
}

export default App



