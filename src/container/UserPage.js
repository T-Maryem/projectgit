import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import UserInfo from '../component/UserInfo';
import Tabs from '../component/Tabs';
import Repositories from '../component/Repositories';
//import Repositories from '../component/Repositories';
import {getUserData, getUserRepo} from  '../api/Api';
// eslint-disable-next-line no-unused-vars
import { matchPath} from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import Loading from '../component/Loading';



function UserPage({match}) {

    const [user, setUser] = useState()
    const [repos, setRepos] = useState([])

    const userNameParams = match.params.userName


    useEffect(() => {
        fetchUser()
        fetchRepos()


    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function fetchUser() {
        const {data} = await getUserData(userNameParams);
        setUser(data);
    }
    async function fetchRepos() {
        const {data} = await getUserRepo(userNameParams);
        setRepos(data);
    }

    return (
        
        <>
           {user ?  (
               <>
            <Navbar user = {user} />
            <div className="container">

            <UserInfo user={user}/>
            <Tabs repos = {repos} user={user}/>
            <Repositories repos = {repos} user ={user} />
            </div>

            </>

     
           ) : (
               <loading />
           )}
        </>
          
    );
}
export default UserPage;    