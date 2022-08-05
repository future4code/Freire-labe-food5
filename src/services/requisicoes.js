import axios from 'axios'
import { useState, useEffect } from 'react';

export const useRequestData = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const getData = () => {
        const token = JSON.parse(window.localStorage.getItem("token"))
      setIsLoading(true);
      axios
        .get(url, { headers: { auth: token } })
        .then((res) => {
          setIsLoading(false);
          setData(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.message);
        });
    };
    useEffect(() => {
      getData();
    }, [url]);
  
    return [data, isLoading, error, getData];
  };
  
export const updateProfile = (url, form) => {
    const token = JSON.parse(window.localStorage.getItem("token"))
    axios.put(url, form, {headers: {auth: token
}})
.then((res) => {
    console.log(res.data)
})
.catch((err) => {
    console.log(err.message)
})
}
export const updateAdress = (url, form) => {
    const token = JSON.parse(window.localStorage.getItem("token"))
    axios.get(url, form, {headers: {auth: token
}})
.then((res) => {
    console.log(res.data)
})
.catch((err) => {
    console.log(err.message)
})
}
