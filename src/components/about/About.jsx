import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/about.jpg";
import Team from "../home/team/Team.jsx";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="about">
        <Back name="" title="ჩვენ შესახებ" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading title="ვინ ვართ ჩვენ?" subtitle="" />
            <p>
              „ასიმეტრია“ ერთ სივრცეში აერთიანებს ახალგაზრდა, კრეატიულ,
              ინოვაციურ და რაც მთავარია, საპროექტო სფეროსთვის საჭირო ყველა
              სპეციალობის მქონე გუნდს. ჩვენი საქმიანობა მოიცავს სრული საპროექტო
              მომსახურებისთვის საჭირო ყველა სერვისს, რომელიც აერთიანებს
              პროექტირებისათვის ყველა აუცილებელ ეტაპს, როგორიცაა: მიწის
              ნაკვეთების ანალიზი, პროექტირება, მომზადებული პროექტის შესაბამის
              ორგანოებთან შეთანხმება და მშენებლობის ზედამხედველობა. კომპანიის
              ამოცანაა გაგიწიოთ უმაღლესი ხარისხის მომსახურება უმოკლეს ვადებში.
            </p>

            <p>
              ჩვენი გუნდის თითოეული წევრი მუშაობს როგორც პერსონალურ კომპიუტერზე,
              ასევე მძლავრ ნოუთბუქზე, რაც შესაძლებლობას იძლევა, კომფორტის დონის
              აწევის მიზნით, მომსახურების გაწევას როგორც ონლაინ, ასევე
              არქიტექტორის ადგილზე ვიზიტით.{" "}
            </p>

            <p>ჩვენ პასუხისმგებლები ვართ გაწეული სამუშაოს ეფექტურობაზე.</p>
          </div>
          <div className="right row">
            <img
              src="./immio.jpg"
              alt=""
              style={{
                width: "400px",
                aspectRatio: 1,
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
          </div>
        </div>
      </section>
      <Team />
    </>
  );
};
export default About;
