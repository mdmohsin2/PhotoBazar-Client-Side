import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([])
    const [size, setSize] = useState(3)
    useEffect(() => {
        fetch(`http://localhost:5000/services?size=${size}`)
            .then(res => res.json())
            .then(data => setServices(data.services))
    }, [size])
    return (
        <div>
            <div className='text-center mb-8'>
                <p className='text-2xl font-bold text-orange-600'>Service</p>
                <h2 className='text-5xl font-semibold my-5'>Our Service Area</h2>
                <p className='w-3/5 mx-auto '>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
            <div className='text-center my-12'>
               {
                 <button onClick={()=>setSize(6)} className="btn btn-outline btn-warning">More Services</button>
               }
            </div>
        </div>
    );
};

export default Services;