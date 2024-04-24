import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.png' alt='' />
              <h2>არ გამოტოვოთ სიახლეები</h2>
              <div className='input flex'>
                <input type='text' placeholder='მეილის მისამართი' />
                <button>გამოწერა</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>Copyright 2023 Asymmetry llc.</span>
      </div>
    </>
  )
}

export default Footer
