import Places from './Places.jsx';
import {sortPlacesByDistance} from '../loc.js'
import { getAvailablePlaces } from '../http.js';
import Error from './Error.jsx';
import {useFetch} from '../hooks/useFetch.js';

async function getplaces(){
    const places = await getAvailablePlaces();
    return new Promise((resolve)=>{
      navigator.geolocation.getCurrentPosition((pos)=>{
        const lat = pos.coords.latitude;
        const longitude = pos.coords.longitude;
        resolve(sortPlacesByDistance(places, lat, longitude));
      })
    }) 
}

export default function AvailablePlaces({ onSelectPlace }) {
  const {data:availablePlaces, isFetching:setupDone, error:errorMessage} = useFetch([], getplaces);
  return (
    <>
    {errorMessage &&
    <Error title="Could not fetch the places" 
            message={errorMessage?.message || ""}
         />}
    {!errorMessage && 
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText={!setupDone?"Loading Places":"No places available."}
      onSelectPlace={onSelectPlace}
    />}
    </>
  );
}
