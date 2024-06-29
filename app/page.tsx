'use client'
import Image from "next/image";
import axios from 'axios'
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Weather from "./Components/Weather";
import Spinner from "./Components/Spinner";

export default function Home() {
  //Created Some States
  const [city,setCity] = useState("");
  const [weather,setWeather] = useState({});
  const [loading,setLoading] = useState(false);

  //API URL
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`

  //FetchWeather Function
  const fetchWeather = (e:any)=> {
    e.preventDefault();
    setLoading(true)
    axios.get(url).then((response)=>{
      setWeather(response.data);
      console.log(response.data)
    })

    setCity('');
    setLoading(false);
  }





  if(loading){
    return <Spinner/>
  }

  
  else{

    return (
      <div>
       {/*Overlay */}
       <div className="absolute top-0 right-0 left-0 bottom-0 bg-black/10 z-[1] h-screen"/>
       {/*Background Image*/}
       <Image  src='https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2575&q=80' layout="fill" alt={'Background Image'} className="object-cover"/>
      {/*Search */}
      <div className="relative flex justify-around items-center max-w-[500px] w-full mx-auto pt-4 text-white z-10">
       <form onSubmit={fetchWeather} className="flex justify-around items-center w-full mx-auto p-3 bg-transparent border border-gray-300 rounded-2xl text-white">
   <input 
   onChange={(e)=> setCity(e.target.value)}
   value={city}
   type="text"
    placeholder="Search City"
     className="bg-transparent text-white outline-none text-xl"/>
   <button type="submit" onClick={fetchWeather}><BsSearch size={20}/></button>
       </form>
      </div>
   
      {/* Weather */}
      {
        weather.main && <Weather data={weather}/>  
      }
      </div>
     );
  }
 
}
