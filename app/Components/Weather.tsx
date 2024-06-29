import React from 'react';
import Image from 'next/image';

const Weather = ({data}:{data:any}) => {
    console.log(data.main)
    return (
        <section>
    <div className='relative flex justify-between max-w-[500px] w-full h-[90vh] m-auto text-white p-4'>
           <div className='relative grid grid-rows-4'>
            <div className='flex flex-cols items-center  self-center'>
             <Image 
             src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
             alt="/"  
             width='150'
             height='150'/> 
             <p className='text-4xl text-white font-medium'>{data.weather[0].main}</p>
            </div>
            <p className='text-9xl font-medium text-white ml-10'>{data.main.temp.toFixed(0)}&#176;</p>
            </div>  </div>
            {/* Bottom*/}
            <div className='bg-transparent relaive rounded-md p-8 '>
                <p className='text-2xl text-center pb-6'>Weather in{data.name}</p>
                <div className='flex justify-between text-center'>
                    <div>
                        <p className='font-bold text-2xl'>{data.main.feels_like.toFixed(0)}&#176;</p>
                        <p className='text-xl'>Feels Like</p>
                    </div>
                    <div>
                        <p className='font-bold text-2xl'>{data.main.humidity}</p>
                        <p className='text-xl'>Humidity</p>
                    </div>
                    <div>
                        <p className='font-bold text-2xl'>{data.wind.speed.toFixed(0)} MPH</p>
                        <p className='text-xl'>Wind</p>
                    </div>
                </div>
            </div>
       </section>
    );
}

export default Weather;
