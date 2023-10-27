import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const data = useLoaderData();
    //console.log(data);
    const { _id, title, description, img, price } = data;


    return (
        <div className="card card-side bg-base-100 shadow-xl rounded-none mb-14 mt-24">
        <figure className='w-1/2'>

            <img src={img} alt='service-img' />

        </figure>
        <div className="card-body w-1/2">
            <h2 className="card-title text-2xl font-bold">{title}</h2>
            <p className='mt-12'>{description}</p>
            <p className='text-xl text-orange-500 font-bold text-semibold'>Price: ${price}</p>
            <div className="card-actions justify-center">

                <Link to={`/checkout/${_id}`}>
                    <button className="btn font-bold bg-orange-500 rounded-full mt-3 pr-24 pl-24 border-none">Proceed Ckecout</button>
                </Link>
            </div>
        </div>

    </div>
    );
};

export default ServiceDetails;