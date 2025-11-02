import Places from './Places.jsx';
import {useEffect, useState} from 'react';
import {sortPlacesByDistance} from '../loc.js'
import { getAvailablePlaces } from '../http.js';
import Error from './Error.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [setupDone, setSetupDone] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(()=>{
    async function getPlaces(){
      try{
        const places = await getAvailablePlaces();
        return places;
      }
      catch(error){
        console.log(error);
        setErrorMessage({message:error.message || "Something went Wrong"});
        setSetupDone(true);
      }
    }
    navigator.geolocation.getCurrentPosition((pos)=>{
      const lat = pos.coords.latitude;
      const longitude = pos.coords.longitude;
      getPlaces().then((places)=>{
        setAvailablePlaces(sortPlacesByDistance(places, lat, longitude));
        setSetupDone(true);
      });
      
    })
    
  }, [])

  return (
    <>
    {errorMessage !== null? 
    <Error title="Could not fetch the places" 
            message={errorMessage.message}
            onConfirm={()=>setErrorMessage(null)} />:
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText={!setupDone?"Loading Places":"No places available."}
      onSelectPlace={onSelectPlace}
    />}
    </>
  );
}
