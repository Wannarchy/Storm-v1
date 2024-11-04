import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const SearchBar = ({
 
      onChange, onSubmit , validInput , 
  }) => {

  
  const handleSubmit = (event) => {
    // J'empeche le rechargement
    event.preventDefault();
    // J'informe mon app qu'il y a eu submit
   
    onSubmit();
  
  };

  const handleChange = (event) =>{

    const {value} = event.target;
    onChange(value)
     
  };


      return (
        <div id="divform" className="row ">
         
          <form onSubmit={handleSubmit} id="formStyle" className="col-12 col-sm-12 col-lg-12	" >
            <input placeholder="  Ex: Paris, fr"  onChange={handleChange}  id="inputStyle"></input>
            <Button variant="dark" type="submit" id="search-button" >Get Weather</Button>
            
          </form>
        </div>

      );

      };





export default SearchBar;
