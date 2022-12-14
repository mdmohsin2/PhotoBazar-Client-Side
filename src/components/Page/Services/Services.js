import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([])
    useTitle('services')
    useEffect(() => {
        fetch(`https://assignmet-11-server.vercel.app/services`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])



    return (
        <div>
            <div className='mb-8'>
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
            <div className='text-center my-12'>
                {
                    <button className="btn btn-outline btn-warning">
                        <Link to='/serviceAll'>
                            see More
                        </Link>
                    </button>
                }
            </div>
        </div>
    );
};

export default Services;