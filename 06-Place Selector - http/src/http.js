async function getAvailablePlaces(){
    const response = await fetch('http://localhost:3000/places');
    const data = await response.json();
    if(!response.ok){
        throw new Error("Could not Fetch available places");
    }
    return data.places || [];
}

async function getUserPlaces(){
    const response = await fetch('http://localhost:3000/user-places');
    if(!response.ok){
        throw new Error("Could not Fetch User places");
    }
    const data = await response.json() || [];
    
    return data.places || [];
}

async function updateSelectedPlace(places, errorMessage){
    try {
        const response = await fetch('http://localhost:3000/user-places', {
            method:'PUT',
            body:JSON.stringify({ places }),
            headers:{
                'Content-Type': 'application/json',
            }
        });
        // const data = await response.json();
        if(!response.ok){
            throw new Error(errorMessage);
        } 
        return {message:"Place added Successfully"};
    } catch (error) {
        throw new Error(errorMessage);
    }
}

export {getAvailablePlaces,updateSelectedPlace, getUserPlaces};