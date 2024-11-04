import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';



const Prevision = ({ville, pays, weatherIcon , temperature, description, validationImage}) => {


    
    const chargerApi = () => {
        if(validationImage == true){

            
          return (
              
            <div id="prevision" className="col-12  col-sm-12 col-lg-12">
            <h1 >{ville}, {pays}</h1>
            
            <img  id="imgWeather" src={"https://www.weatherbit.io/static/img/icons/" + weatherIcon+ ".png"} />
            <h2>{temperature}°</h2>
            <h3>{description} </h3>

            </div>
            )
        }
     


      }
   
    return (

        <div className="prevision-style row">
          
            {chargerApi()}
           
        </div>
    )
}

export default Prevision;