
async function getRequestTypes(){

    let url = ""; //todo: waiting for Giosue's Endpoints
    const response = await fetch(url); 
    const requestTypesJson = await response.json(); 

    if (response.ok) {
        
        return requestTypesJson;  // have to do parsing
    }
    else {
        console.log("getRequestType Error"); 
        let err = {status: response.status, errObj: requestTypesJson};
        throw err; 
    }

}

// If Giosuè send me only one object, this function can be deleted.
async function getExpectedWaitingTimes() {
    let url = ""; //todo: waiting for Giosue's Endpoints
    const response = await fetch(url); 
    const requestExpectedWaitingTime = await response.json();
    
    if (response.ok){
        return requestExpectedWaitingTime; // have to do parsing
    }

    else {
        console.log("getExpectedWaitingTime error");
        let err = {status: response.status, errObj: requestExpectedWaitingTime}; 
        throw err; 
    }
}


const API = {getRequestTypes, getExpectedWaitingTimes};
export default API;