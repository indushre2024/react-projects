import {useState, useEffect} from 'react';

export function useFetch(initialData, fetchFunc){
    const [data, setData] = useState(initialData);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();

    useEffect(()=>{
        setIsFetching(true);
        async function fetchData(){
            try{
                const fetchedData = await fetchFunc();
                setData(fetchedData);
            }
            catch(e){
                setError({message:"Couldn't fetch the data"});
            }
            setIsFetching(false);
        }
        fetchData();
        
    }, [fetchFunc]);

    return {
        data,
        isFetching,
        error,
        setData
    }

}