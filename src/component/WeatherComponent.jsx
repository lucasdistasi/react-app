import React, {Component} from 'react'
import CardWeatherComponent from "./CardWeatherComponent";
import SearchInputComponent from "./SearchInputComponent";
import axios from "axios";
import LastUpdateComponent from "./LastUpdateComponent";

let [month, date, year] = new Date().toLocaleDateString("en-US").split("/")
let [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /)
const URI = `http://dataservice.accuweather.com/currentconditions/v1/topcities/150?apikey=${process.env.REACT_APP_WEATHER_API_KEY}&language=en-US`

class WeatherComponent extends Component {

  allData = []

  state = {
    weatherArr: this.allData,
    lastUpdate: `${month} / ${date} / ${year} - ${hour}:${minute}:${second}`
  }

  componentDidMount() {
    axios.get(URI)
      .then(response => {
        this.setState({
          weatherArr: response.data
        })
        this.allData = response.data
      })

    setInterval(() => this.updateData(), 5400000)
  }

  getFilterValue = (value) => {
    this.setState({
      weatherArr: this.allData.filter(country => country.EnglishName.toLowerCase().includes(value.toLowerCase()) ||
        country.Country.EnglishName.toLowerCase().includes(value.toLowerCase()))
    })
  }

  updateData() {
    console.log("Updating data at ..." + new Date())

    let [month, date, year] = new Date().toLocaleDateString("en-US").split("/")
    let [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /)

    axios.get(URI)
      .then(response => {
        this.setState({
          weatherArr: response.data,
          lastUpdate: `${month} / ${date} / ${year} - ${hour}:${minute}:${second}`
        })
        this.allData = response.data
      })
  }

  render() {
    let weatherList = this.state.weatherArr

    return (
      <>
        <SearchInputComponent filter={this.getFilterValue}/>
        <LastUpdateComponent lastUpdate={this.state.lastUpdate}/>
        <div className="flex flex-wrap justify-center">
          {
            weatherList.length > 0 ?
              weatherList.map(data => {
                return <CardWeatherComponent data={data} key={data.EnglishName}/>
              }) :
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F1554526%2Fscreenshots%2F3399669%2Fno_results_found.png&f=1&nofb=11"
                alt="No results were found"/>
          }
        </div>
      </>
    )
  }
}

export default WeatherComponent
