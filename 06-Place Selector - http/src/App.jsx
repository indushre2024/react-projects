import { useRef, useState, useCallback} from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import {updateSelectedPlace, getUserPlaces} from './http.js';
import Error from './components/Error.jsx';
import {useFetch} from './hooks/useFetch.js';

function App() {
  const selectedPlace = useRef();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [error, setError] = useState();

  const {data:userPlaces ,isFetching, error:errorLoading, setData:setUserPlaces} = useFetch([],getUserPlaces);

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });
      try{
        await updateSelectedPlace([selectedPlace,...userPlaces ], "Could not add a selected place");
      }
      catch(e){
        setUserPlaces(userPlaces);
        setError({message:e.message || "Something went Wrong"});
      }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );
    setModalIsOpen(false);
    try{
        await updateSelectedPlace(userPlaces.filter((place)=>place.id!==selectedPlace.current.id), "Could not remove a selected place");
      }
      catch(e){
        setUserPlaces(userPlaces);
        setError({message:e.message || "Something went Wrong"});
      }
  }, [userPlaces]);

  return (
    <>
      <Modal open={error} onClose={()=>setError(null)}>
        {error && <Error title={"Error occured"} message={error.message|| ""} onConfirm={()=>setError(null)}></Error>}
      </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          isFetching= {isFetching}
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          places={userPlaces}
          errorLoading = {errorLoading?.message}
          onSelectPlace={handleStartRemovePlace}
          errorOnConfirm={()=>setError(null)}
        />
        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
