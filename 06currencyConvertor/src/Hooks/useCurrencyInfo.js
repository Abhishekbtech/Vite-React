import {useEffect, useState} from 'react'

function useCurrencyInfo(currency){
    const [info, setInfo] = useState({})
    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setInfo(res[currency]))
        
    }, [currency])
    return info;
}

export default useCurrencyInfo;