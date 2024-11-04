// == Import : npm
import React,{Component} from 'react';

// == Import : local
import './app.scss';
import SearchBar from '../search-bar';
import axios from 'axios'
import Prevision from '../prevision';
import Message from '../message';
import 'bootstrap/dist/css/bootstrap.min.css';




const API_KEY = "CACHER";
const API_END_POINT = "https://api.weatherbit.io/v2.0/current?city=";


// pour les icones
const API_ICONE = "https://www.weatherbit.io/static/img/icons/"

const icone = "https://www.weatherbit.io/static/img/icons/"

// == Composant
class App extends Component {
  constructor(props){
    super(props);
    this.state = {forecast:{}, climat:{} ,iconW:{}, secondIcon: {} , verification:{} ,
     hasError: false , inputEmpty :false, errorInput :'Enter the city',
  }
  
    
  }
 

  
  

 /* componentDidMount() {
    console.log('Le composant App vient juste de s\'afficher');
    this.handleSubmit();
  }*/
  handleChange = (text) => {
    this.setState({
      searchText: text,
     
    });
  }


  handleSubmit = () => {
    const {searchText} = this.state;

  if(searchText == null  )
  {
   
    this.setState({
      inputEmpty: true,
    
  });
}
 
   else  { 
   
    axios.get(`${API_END_POINT}${searchText}&key=${API_KEY}`).then(function(response){
     // console.log('SALUT')
     //console.log(response)
       console.log(searchText);

   
     //const forecast = response.data.data[0];
     this.setState({climat:response.data.data[0].weather,forecast:response.data.data[0]})
     // console.log('',this.state.forecast);
      //console.log('',this.state.climat);
      //console.log('',response.statusText);

      const iconW = response.data.data[0].weather.icon;

      this.setState({status:response.statusText})
     
     
      const status = response.statusText;
    if (status === 'OK'){

        this.setState({
          verification: true,
          iconeApp : iconW,
          hasError: false, 
          inputEmpty: false,
         
        })

       // console.log('', this.state.verification);
     //   console.log('ENVOYER');
       // const iconW = response.data.data[0].weather.icon;
      /*  console.log('', this.state.iconeApp);
        axios.get(`${icone}${iconW}.png`).then(function(r){
          console.log(r)
          //console.log('',r.data);
          this.setState({secondIcon:r.data})
          console.log('',this.state.secondIcon);
      
        }.bind(this))
        .catch((error) => {
          console.log('Fail 222')
        });
       */
     
     
      }   
      
    }.bind(this))
  .catch((error) => {
   // console.log(error)
    this.setState({
      hasError: true,
     
    })
    
  });
  
}
}

 
render() {
  const {
    hasError,inputEmpty,errorInput,
  } = this.state;
  const input = () => {

    if (inputEmpty == true){
      return(
        <p id="entre">*Enter the city</p>
      )
    }
    }
    
    return (
     
    <div id="app" >
      <div  className="container ">
    {inputEmpty &&  input()}
   <SearchBar
    validInput={this.state.inputEmpty}
    onChange={this.handleChange}
    onSubmit={this.handleSubmit}
    />
     {hasError && <Message/> }

  <Prevision ville={this.state.forecast.city_name}
  pays={this.state.forecast.country_code}
  weatherIcon={this.state.iconeApp}
  temperature={this.state.forecast.temp}
  description={this.state.climat.description}
  validationImage={this.state.verification}
  
  />
</div>
  </div>
    )

}

}

export default App;
