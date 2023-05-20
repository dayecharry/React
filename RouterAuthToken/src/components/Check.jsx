
import React, { useEffect } from 'react'
import { API } from '../services/api';
const Check = ({ user }) => {

    const ls = JSON.parse(localStorage.getItem('token'));
    console.log(ls.token)
    useEffect(() => {

        //usando axios
        API.post('/user/checkSession')
            .then((data) => console.log(data))
        //usando fetch
        /*
                fetch(process.env.REACT_APP_BACK_URL + '/user/checkSession', {
                    'method': 'POST',
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': `Bearer ${ls.token}`,
                    }
                })
                    .then((data) => console.log(data))*/
    })
    return (
        <div>
            <h2>titulo</h2>
        </div>
    )
}

export default Check

