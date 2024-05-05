import Category from "./Category/Category.jsx"
import Color from "./Color/Color.jsx"
import Price from "./Price/Price.jsx"
import "./Sidebar.css"

function Sidebar({handleChange}) {
  return (
    <>
    <section className="sidebar">
      <div className="logo-container">
        <h1>🛒</h1>
      </div>
      <Category handleChange={handleChange}/>
      <Price handleChange={handleChange}/>
      <Color handleChange={handleChange}/>
    </section>
    </>
  )
}

export default Sidebar