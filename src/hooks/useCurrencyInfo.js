import { useEffect, useState } from "react";
//Your API Key: 8c1fc2e1786b2fe82f0359c0
//Example Request: https://v6.exchangerate-api.com/v6/8c1fc2e1786b2fe82f0359c0/latest/USD
function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/8c1fc2e1786b2fe82f0359c0/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res.conversion_rates));
    }, [currency])
    console.log(data);
    return data;
}
export default useCurrencyInfo;