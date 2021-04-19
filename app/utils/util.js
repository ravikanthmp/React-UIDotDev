export default function fetchRepos(language){
    const endpoint = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
    return fetch(endpoint);
}

export function fetchUser(userName){
    const endpoint = `http://api.github.com/users/${userName}`
    return fetch(endpoint);
}