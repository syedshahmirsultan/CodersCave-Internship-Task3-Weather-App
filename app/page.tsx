'use client'
import Image from "next/image";
import axios from 'axios'
import { useState } from "react";
import { BsSearch } from "react-icons/bs";


export default function Home() {
  //Created Some States
  const [city,setCity] = useState("");
  const [weather,setWeather] = useState({});
  const [loading,setLoading] = useState(false);

  //API URL
  const url = `https://api.openweathermap.org/data/2.5/weather?q=karachi&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`

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
  return (
   <div>
    <Image  src='https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2575&q=80' layout="fill" alt={'Background Image'} className="object-cover"/>
   </div>
  );
}
