import React from 'react';
import Image from 'next/image';

const Weather = ({data}:{data:any}) => {
    return (
        <section className="relative flex items-center justify-center w-full mt-4 m-8 md:m-0 lg:w-4/12 md:mt-8  md:bg-transparent pb-4 text-white">
            <div className="z-50 flex flex-col items-center max-w-6xl w-full p-6 bg-white bg-opacity-20 backdrop-blur-xl rounded-lg shadow-lg mb-20">
                <div className="flex flex-col items-center mb-2">
                    <Image 
                        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
                        alt="/"  
                        width={150}
                        height={150}
                    /> 
                    <p className="text-4xl font-medium mt-0">{data.weather[0].main}</p>
                    <p className="text-8xl font-bold mt-4 ml-6">{data.main.temp.toFixed(0)}&#176;</p>
                </div>
                <p className="text-2xl text-center mb-6">Weather in {data.name}</p>
                <div className="flex justify-around w-full text-center">
                    <div className="flex flex-col items-center">
                        <p className="font-bold text-2xl">{data.main.feels_like.toFixed(0)}&#176;</p>
                        <p className="text-xl mt-2">Feels Like</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="font-bold text-2xl">{data.main.humidity}%</p>
                        <p className="text-xl mt-2">Humidity</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="font-bold text-2xl">{data.wind.speed.toFixed(0)} MPH</p>
                        <p className="text-xl mt-2">Wind</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Weather;
