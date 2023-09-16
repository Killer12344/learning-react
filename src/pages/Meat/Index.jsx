import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../../components/Card';
function Index () {

    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getMeal = async () => {
        const { data } = (await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'))
        setMeals(data.meals);
        setIsLoading(false);
    }

    useEffect(() => {
        getMeal();
    }, []);

    return (
        <div>
            {isLoading ?
                (<div className='text-lg font-bold text-center'> Loading... </div>)
                :
                (
                    <div className='grid grid-cols-5 gap-6 mb-5'>
                        {meals?.map(meal => <Card key={meal.idMeal} meal={meal.strMeal} img={meal.strMealThumb} id={meal.idMeal} />)}
                    </div>
                )}
        </div>
    )
}

export default Index