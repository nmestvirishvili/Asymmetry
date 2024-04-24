import React from "react"
import ImageSlider from "./ImageSlider";
import { list } from "../../data/Data"

const RecentCard = () => {
  const containerStyles = {
    width: "100%",
    height: "30vh",
    margin: "0 auto",
  };
  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { images, location, name, price, type } = val
          return (
            <div className='box shadow' key={index}>
              <div style={containerStyles}>
                <ImageSlider slides={images} />
              </div>
              {/* <div className='img'>
                <img src={cover} alt='' />
              </div> */}
              <div className='text'>
                <h4>{name}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {location}
                </p>
              </div>
              <div className='button flex'>
                <div>
                  <button className='btn2'>{price}</button> <label htmlFor=''></label>
                </div>
                <span>{type}</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
