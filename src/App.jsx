import { useState } from "react";
import Navigation from "./Navigation/Nav.jsx"
import Products from "./Products/Products.jsx";
import Recommended from "./Recommended/Recommended.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import "./index.css"

// DataBase
import products from "./DB/data";
import Card from "./components/Card.jsx";

function App() {
const [selectedCategory,setSelectedCategory]=useState(null)
const [query,setQuery]= useState("")

// ----------- Input Filter -----------

const handleInputChange = (event) => {
  setQuery(event.target.value)
}

const filteredItems = products.filter(
  (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1)

// ----------- Radio Filtering -----------
const handleChange=(event)=>{
  setSelectedCategory(event.target.value)
}

// ------------ Button Filtering -----------
const handleClick = (event) => {
  setSelectedCategory(event.target.value);
}

// ================================================
function filteredData(products,selected,query) {
  let filteredProducts=products

  // ---------- Filtering Input Items----------------
  if (query) {
    filteredProducts = filteredItems
  }

  //------------ Applying Selected Filter --------------------
  if (selected) {
    filteredProducts = filteredProducts.filter(
      ({ category, color, company, newPrice, title }) =>
        category === selected ||
        color === selected ||
        company === selected ||
        newPrice === selected ||
        title === selected
    )
  }

  return filteredProducts.map(
    ({ img, title, star, reviews, prevPrice, newPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    )
  );
}

const result=filteredData(products,selectedCategory,query)

  return (
  <>
  <Sidebar handleChange={handleChange}/>
   <Navigation query={query} handleInputChange={handleInputChange}/>
   <Recommended handleClick={handleClick}/>
   <Products result={result}/>
  
   </>);
}

export default App;