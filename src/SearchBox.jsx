import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
    const API_KEY = "7UU74PFSD9BPVRDAV3X6KEENV";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}/${city}?key=${API_KEY}`)
        let jsonResponse = await response.json();
        let result ={
            city: city,
            temp: jsonResponse.currentConditions.temp,
            visibility: jsonResponse.currentConditions.visibility,
            windSpeed : jsonResponse.currentConditions.windspeed,
            pressure: jsonResponse.currentConditions.pressure,
            humidity : jsonResponse.currentConditions.humidity,
            conditions :  jsonResponse.currentConditions.conditions
        }
        console.log(result);
        return result;
        } catch(err) {
            throw(err)
        }
        
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch(err) {
            setError(true);
        }
    };

    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    label="City Name" 
                    variant="outlined" 
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br></br>
                <br></br>
                <Button variant="contained" type ="submit">
                    Search
                </Button>
                {error && <p>No such place Found..!</p>}
            </form>
        </div>
    )
}