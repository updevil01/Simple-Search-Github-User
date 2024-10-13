import React from 'react'

const GitHubuser =  ({userData})=>{
    if (!userData) return null

    return (
        <div>
            <h2>{userData.login}</h2>
            <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="150" />
            <p>{userData.bio}</p>
            <p>Public Repos: {userData.public_repos}</p>
        </div>
    )
}

export default GitHubuser;

