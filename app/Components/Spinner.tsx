import React from 'react';
import Image from 'next/image'

const Spinner = () => {
    return (
        <div>
        <Image src="/spinner.gif" alt="Loading ..." width={100} height={100} className='mx-auto mt-10 md:mt-40'/>
        </div>
    );
}

export default Spinner;
