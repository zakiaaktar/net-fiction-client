import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const BookService = () => {
    const service = useLoaderData();
    const { title, price, _id, img } = service;
    const { user } = useContext(AuthContext);
    

    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const date = form.date.value;


        const booking = {
            customerName: name,
            email,
            date,
            service: title,
            service_id: _id,
            price: price,
            img
        }
        console.log(booking)


        fetch('http://localhost:1000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                
            },
            body: JSON.stringify(booking)
           
            
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Service Book Successfully')
                    form.reset();
                }
            })
            .catch(er => console.error(er));
        
    }

    return (
        <div className='card bg-base-100 shadow-xl rounded-none my-10 p-6 w-1/2 mx-auto'>

        <form onSubmit={handleBookService}>
            <div className='text-center mt-6 mb-6 font-bold'>
                <h2 className='text-3xl'>Your's Order: {title}</h2>
                <h4 className="text-xl text-orange-500  font-bold mt-3">Price: ${price}</h4>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <input name="name" type="text" placeholder="Your Name" defaultValue={user?.displayName} className="input input-bordered input-orange w-full" />
                <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                <input name="date" type="date" className="input input-bordered w-full" />
                <input type="text" placeholder="Due Amount" defaultValue={'$' + price }className="input input-bordered w-full" required />
                
            </div>
            
            <div className='text-center mt-6'>
                <input className='btn bg-orange-500 mt-3 w-full rounded-full border-none' type="submit" value="Place Your Order" />
            </div>

        </form>
    </div>
    );
};

export default BookService;