import axios from "axios";

const URL_BASE = "https://api.github.com";

export async function getUserData(userName){
    console.log(userName);
        const userInfo = await axios.get(`https://api.github.com/users/${userName}`)

    console.log(userInfo) 
    return userInfo
} 
export async function getUserRepo(userName){
    console.log('test')
    const repos = await axios.get(`https://api.github.com/users/${userName}/repos`)

    console.log(repos)
    return repos;
}