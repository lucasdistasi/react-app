import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDoubleRight, faCloudShowersHeavy, faSun, faThermometerHalf} from '@fortawesome/free-solid-svg-icons'

const CardWeatherComponent = (props) => {

  let countryName = props.data.Country.EnglishName
  let cityName = props.data.EnglishName
  let timeZoneName = props.data.TimeZone.Name
  let weatherText = props.data.WeatherText
  let temperature = props.data.Temperature.Metric.Value
  let isRaining = props.data.HasPrecipitation
  let isDaytime = props.data.IsDayTime

  const getImage = (weatherText) => {
    switch (weatherText) {
      case "Partly cloudy":
        return "https://cdn.pixabay.com/photo/2014/11/16/15/15/field-533541_960_720.jpg"
      case "Cloudy":
      case "Mostly cloudy":
      case "Some clouds":
        return "https://cdn.pixabay.com/photo/2016/06/22/16/22/clouds-1473311_960_720.jpg"
      case "Clear":
      case "Mostly clear":
        return "https://cdn.pixabay.com/photo/2014/10/03/16/53/refreshing-471950_960_720.jpg"
      case "Sunny":
      case "Mostly sunny":
        return "https://cdn.pixabay.com/photo/2012/12/29/21/11/sunrise-73074_960_720.jpg"
      case "Overcast":
        return "https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736875_960_720.jpg"
      case "Thunderstorm":
        return "https://cdn.pixabay.com/photo/2015/05/15/14/59/lightning-768801_960_720.jpg"
      case "Clouds and sun":
        return "https://cdn.pixabay.com/photo/2018/04/20/09/49/sky-3335585_960_720.jpg"
      case "Partly sunny":
        return "https://cdn.pixabay.com/photo/2017/03/02/08/42/warsaw-2110691_960_720.jpg"
      case "Thundershower":
        return "https://cdn.pixabay.com/photo/2016/07/09/15/32/lightning-1506403_960_720.jpg"
      case "Foggy":
      case "Light fog":
        return "https://cdn.pixabay.com/photo/2016/07/22/16/29/fog-1535201_960_720.jpg"
      case "Light rain":
      case "A shower":
      case "Rain":
      case "Rain shower":
        return "https://cdn.pixabay.com/photo/2017/08/06/08/39/rain-2590345_960_720.jpg"
      case "Light snow shower":
      case "Rain/snow":
      case "Light snow":
        return "https://cdn.pixabay.com/photo/2015/04/22/13/42/winter-734804_960_720.jpg"
      case "Drizzle":
        return "https://cdn.pixabay.com/photo/2019/06/30/16/07/plant-4308306_960_720.jpg"
      default:
        return "https://cdn.pixabay.com/photo/2017/06/08/17/32/not-found-2384304_960_720.jpg"
    }
  }

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4 mx-4 md:w-full lg:w-1/6">
      <img className="w-full h-56 object-cover object-center"
           src={getImage(props.data.WeatherText)}
           alt="avatar"/>
      <div className="flex items-center px-6 py-3 bg-gray-900">
        <h1 className="mx-3 text-white font-semibold text-lg">{countryName}</h1>
      </div>
      <div className="py-4 px-6">
        <h1 className="text-2xl font-semibold text-gray-800">{cityName}</h1>
        <p className="py-2 text-lg text-gray-700">{timeZoneName}</p>
        <div className="flex items-center mt-4 text-gray-700">
          <FontAwesomeIcon icon={faAngleDoubleRight}/>
          <h1 className="px-2 text-sm">{weatherText}</h1>
        </div>
        <div className="flex items-center my-4 text-gray-700">
          <FontAwesomeIcon icon={faThermometerHalf}/>
          <h1 className="px-2 text-sm">
            {`${temperature} °C`}
          </h1>
        </div>
        <hr/>
        <div className="flex items-center mt-4 text-gray-700">
          <FontAwesomeIcon icon={faCloudShowersHeavy}/>
          <h1 className="px-2 text-sm">
            {isRaining ? "Yes" : "No"}
          </h1>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <FontAwesomeIcon icon={faSun}/>
          <h1 className="px-2 text-sm">
            {isDaytime ? "Yes" : "No"}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default CardWeatherComponent
