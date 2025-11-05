import { createRoot } from 'react-dom/client';
/*import App from './App.jsx';*/
import './index.css';
import Recipe from './Recipe.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

function Cards() {
  return (
    <>
      <header className='top'>Recipe Menu Cards </header>

      <div className='main-parent'>
        <Recipe
          RecipeName="MASALA CHAI"
          Time="prep time: 5 minutes | Cook Time : 10 minutes"
          Serving="Serves : 2 people"
          Difficulty="Difficulty : Easy"
          Type="Type : Beverage"
          Note="Traditional Appu Tea Recipe since 2002"
          img="https://www.shutterstock.com/image-photo/cup-tea-glass-hot-brew-600nw-2369395563.jpg"
        />

        <Recipe RecipeName="FILTER COFFE"
          Time="prep time: 10 minutes | Cook Time : 5 minutes"
          Serving="Serves : 4 people"
          Difficulty="Difficulty : Moderate"
          Type="Type : Beverage"
          Note="Traditional chikmagaluru Recipe since 1997"
          img="https://sipmagic.in/cdn/shop/files/SouthFilter2_1200x1200.webp?v=1708318933"
        />
        <Recipe RecipeName="DOSA" 
         Time="prep time: 15 minutes | Cook Time : 13 minutes"
          Serving="Serves : 1 people"
          Difficulty="Difficulty : Moderate"
          Type="Type : Beverage"
          Note="Traditional Dharvad Recipe since 1950"
          img="https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg"
        />
        <Recipe RecipeName="BIRYANI"
          Time="prep time: 20 minutes | Cook Time : 15 minutes"
          Serving="Serves : 6 people"
          Difficulty="Difficulty : Moderate"
          Type="Type : Beverage"
          Note="Traditional Hoskote Recipe since 2021"
          img="https://www.kannammacooks.com/wp-content/uploads/chettinadu-chicken-biriyani-1-3.jpg"
        />
        <Recipe RecipeName="FRUIT JUICE" 
         Time="prep time: 10 minutes | Cook Time : 10 minutes"
          Serving="Serves : 1 people"
          Difficulty="Difficulty : Moderate"
          Type="Type : Beverage"
          Note="Traditional Mysore Recipe since 2025"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1agM9OILdKJOVPArFt0EZKgDawdUoGQgnKg&s"
        />
      </div>
    </>
  );
}
root.render(<Cards />);
