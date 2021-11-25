import React from 'react';
 import './Cards.css';
 import CardItem from './CardItem';

 function Cards() {
   return (
     <div className='cards'>
       <h1>Check out these TRENDING Recipes!</h1>
       <div className='cards__container'>
         <div className='cards__wrapper'>
           <ul className='cards__items'>
             <CardItem
               src=''
               text='Make an upside Down cake'
               label='Cake'
               path='/services'
             />
             <CardItem
               src=''
               text='Enjoy in the comfort of tomato soup '
               label='Comfort'
               path='/services'
             />
           </ul>
           <ul className='cards__items'>
             <CardItem
               src=''
               text='Fancy it up with this Lobster recipe'
               label='Luxury '
               path='/services'
             />
             <CardItem
               src=''
               text='Eat your Greens with this Chipotle Salad'
               label='Vegetarian'
               path='/products'
             />
             <CardItem
               src=''
               text='Halloween Special'
               label='Seasonal'
               path='/sign-up'
             />
           </ul>
         </div>
       </div>
     </div>
   );
 }

 export default Cards;
