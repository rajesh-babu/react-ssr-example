import fetch from "isomorphic-fetch";

export function fetchCMSData(path) {
    console.log("api called" +path);
    return fetch( "http://localhost:3008/getCMSData?reqURL="+path)
        .then( res => res.json( ) )
}
