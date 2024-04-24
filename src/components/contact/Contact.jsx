import React from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='' title='დაგვიკავშირდით' cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h1>საკონტაქტო ინფორმაცია</h1> <br />    
<div> <p1>connectasymmetry@gmail.com</p1><br/></div>
<div><p2>+995 571 14 14 69</p2></div>
<div>  <p3>WhatsApp</p3></div>
<div>  <p3>Viber</p3></div>
<div><p4>თქვენი დროის უკეთესი მეჯენმენტისთვისა და კომფორტისთვის, ჩვენ გთავაზობთ მომსახურებას როგორც ონლაინ, ასევე არქიტექტორის ვიზიტით. </p4></div>          
          </form>
        </div>
      </section>
      
    </>
  )
}

export default Contact
