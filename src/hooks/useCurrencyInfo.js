import {useState, useEffect} from "react"

function useCurrencyInfo(currency){
 const [data, setData] = useState({})

useEffect(() => {

    fetch(`https://api.frankfurter.dev/v1/latest?base=${currency}`)
    .then((res) => res.json())
      .then((res) => {
        setData(res[currency]); 
    })
},[currency])

 return data

}

export default useCurrencyInfo;