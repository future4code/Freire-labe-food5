import axios from 'axios'
import { useState, useEffect } from 'react';

const token = JSON.parse(localStorage.getItem('token'))
// const tokenExample = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlIxTHh6Yks1bDUyemQwQ0VmUUdUIiwibmFtZSI6ImpvYW8iLCJlbWFpbCI6ImpvYW9ndWltYXJhZXMxNEBnbWFpbC5jb20iLCJjcGYiOiIzNTMuMTIzLjUyNi0xMiIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJQYXJrIFdheSwgMSwgQ29uZC4gUmlvIERvdXJvIC0gU01QVyIsImlhdCI6MTY1OTM5ODMyM30.kdgqr5bYaCQfRmBaZd5QMA7a1JGegXCzUndu38dFCAo'

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
      // eslint-disable-next-line
    }, [url]);
  
    return [data, isLoading, error, getData];
  };
  
export const updateProfile = (url, form) => {
    axios.put(url, form, {headers: {auth: token}})
.then((res) => {
    console.log(res.data)
})
.catch((err) => {
    console.log(err.message)
})
}
export const updateAdress = (url, form) => {
    axios.get(url, form, {headers: {auth: token}})
.then((res) => {
    console.log(res.data)
})
.catch((err) => {
    console.log(err.message)
})
}
