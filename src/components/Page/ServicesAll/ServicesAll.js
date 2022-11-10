import React, { useEffect, useState } from 'react';
import useTitle from '../../../Hooks/useTitle';
import ServicesCard from '../Services/ServicesCard';

const ServicesAll = () => {
    const [services, setServices] = useState([])
    useTitle('Servicess')
    useEffect(() => {
        fetch(`http://localhost:5000/serviceAll`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-20'>
            <div className='text-center '>
                <p className='text-2xl font-bold text-orange-600'>Service</p>
                <h2 className='text-5xl font-semibold my-5'>My Service Area</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default ServicesAll;