import {useState, useEffect} from "react";
import MealItem from "./MealItem";

export default function Meals(){
    const [meals, setMeals] = useState([]);
        const [isLoading, setIsLoading] = useState(false);
        const [error, setError] = useState(null);

    useEffect(()=>{
        async function getMeals(){
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch("http://localhost:3000/meals");

                if (!response.ok) {
                    const text = await response.text();
                    throw new Error(`HTTP ${response.status}: ${text || response.statusText}`);
                }

                const data = await response.json();
                setMeals(data);
            } catch (err) {
                console.error("Failed to load meals:", err);
                setError(err.message || "Failed to load meals");
            } finally {
                setIsLoading(false);
            }
        }
            getMeals();
    },[]);
    
    return (
        <>
            {isLoading && <p>Loading meals...</p>}
            {error && <p className="error">Error loading meals: {error.message || 'Something went wrong!'}</p>}
            {!isLoading && !error && (
                <ul id="meals">
                    {meals.length > 0 &&
                        meals.map((meal) => {
                            return <MealItem key={meal.id} item={meal} />;
                        })}
                </ul>
            )}
        </>
        
    );
}