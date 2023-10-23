import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);



    useEffect( () =>{
        fetch('services.json')
        .then ( res => res.json())
        .then(data => setServices(data))
    },[])


    return (
        <div>
            <div className='text-center'>
                <h3 className='text-4xl font-bold text-orange-600'>Service Area</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServiceCard
                    key={service.id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;