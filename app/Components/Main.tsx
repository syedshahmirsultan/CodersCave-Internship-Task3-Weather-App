'use client'
import Image from "next/image";
import axios from 'axios';
import { useState, FormEvent, ChangeEvent } from "react";
import { BsSearch } from "react-icons/bs";
import { WeatherData } from "@/types";
import Spinner from "./Spinner";
import Weather from "./Weather";



export default function Main() {
  // Created Some States
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // API URL
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  // FetchWeather Function
  const fetchWeather = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(url);
      setWeather(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setCity('');
      setLoading(false);
    }
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <Image 
          src='https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2575&q=80' 
          layout="fill" 
          alt={'Background Image'} 
          className="object-cover" 
        />
        
        {/* Overlay */}
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-black/20 z-[1] h-full" />

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center mt-4 h-full text-white">
          {/* Search */}
          <div className="w-full max-w-[400px] p-4">
            <form onSubmit={fetchWeather} className="flex items-center w-full p-3 mt-2 bg-transparent border border-white rounded-2xl">
              <input 
                onChange={(e: ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
                value={city}
                type="text"
                placeholder="Search City"
                className="w-full bg-transparent text-white outline-none text-xl"
              />
              <button type="submit" className="ml-2">
                <BsSearch size={20} />
              </button>
            </form>
          </div>

          {/* Weather */}
          {weather && <Weather data={weather} />}
        </div>
      </div>
    );
  }
}
