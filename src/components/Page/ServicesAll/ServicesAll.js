import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';
import ServicesCard from '../Services/ServicesCard';

const ServicesAll = () => {
    const [services, setServices] = useState([])
    useTitle('Services')
    useEffect(() => {
        fetch(`https://assignmet-11-server.vercel.app/serviceAll`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-20'>
            <div className='text-center '>
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
                    <button className="btn btn-outline btn-success">
                        <Link to='/serviceAdd'>
                            Add New Services
                        </Link>
                    </button>
                }
            </div>
        </div>
    );
};

export default ServicesAll;