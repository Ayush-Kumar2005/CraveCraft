import React from 'react'
import FoodCard from './FoodCard'
import RestaurantCard from './RestaurantCard'

const Restaurants = () => {
  return (
    <div className='mx-8'>
        <div>
            <h1 className='text-xl font-bold'>What's on your mind?</h1>
            <div className='flex flex-wrap'>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>

            </div>
        </div>
        <div>
            <h1 className='text-xl font-bold mt-4'>Top restaurant chains in Bangalore</h1>
            <div className='flex flex-wrap gap-6 mt-4 '>

                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>

                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>

            </div>
        </div>

        <div className='mt-4'>
            <h1 className='text-xl font-bold'>Restaurants with online food delivery in Bangalore</h1>
            <div className='flex flex-wrap gap-6 mt-4'>

                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>

                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>

            </div>
        </div>

    </div>
  )
}

export default Restaurants