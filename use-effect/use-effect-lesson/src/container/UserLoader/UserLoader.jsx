import { useEffect, useState } from "react";
import { getRandomUser } from "../../Service/user-services";
import UserCard from "../../componenets/UserCard/UserCard";

export default function UserLoader() {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [fetchStatus, setFetchStatus] = useState('PENDING');

    useEffect(() => {
        //setFetchStatus('LOADING');
        getRandomUser().then((data) => {
            setFetchStatus('SUCCESS');
            setUserData(data);
        }).catch(e => {
            setFetchStatus('FAILED')
            // I can do extra stuff here like create error logs
            setError(e)
        })

    }, []);

    return (
        <>
        {fetchStatus === 'LOADING' && <p>Loading...</p>}
        {fetchStatus === 'FAILED' && (
            <p style={{ color: 'red'}}>{error.message}</p>
        )}
        {fetchStatus === "SUCCESS" && <UserCard userData={userData}/>}
        </>
    )
}