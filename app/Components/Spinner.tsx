import React from 'react';
import Image from 'next/image'

const Spinner = () => {
    return (
        <div>
        <Image src="/spinner.gif" alt="Loading ..." className='w-[200px] m-auto block'/>
        </div>
    );
}

export default Spinner;
