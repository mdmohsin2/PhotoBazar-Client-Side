import React, { useEffect, useState } from 'react';
import './ServiceAdd.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ServiceAdd = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);
    const notify = () => toast("Review success!");

    const handleAddUser = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.name.value;
        const email = form.email.value;
        const img = form.photo.value;
        const description = form.description.value;
        const price = form.price.value;

        const users = { title, email, img, description, price }
        console.log(users);

        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(users),
        })
            .then(res => res.json())
            .then(data => {
                const newUser = [...user, data]
                setUser(newUser)
                toast.success('Services add success',{autoClose: 1000})
                form.reset();

            })
            .catch(error => console.error(error))



    }

    return (
        <div id="form-main">
            <ToastContainer />
            <div id="form-div">
                <form onSubmit={handleAddUser} class="form" id="form1">

                    <p class="name">
                        <input name="name" type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Name" id="name" />
                    </p>

                    <p class="email">
                        <input name="email" type="email" className="validate[required,custom[email]] feedback-input" id="email" placeholder="Email" />
                    </p>
                    <p class="photo">
                        <input name="photo" type="text" className="feedback-input" placeholder="Photo Url" />
                    </p>
                    <p class="Price">
                        <input name="price" type="text" className="feedback-input" placeholder="Price" />
                    </p>

                    <p class="text">
                        <textarea name="description" className="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Content"></textarea>
                    </p>


                    <div class="submit">
                        <input type="submit" value="Add service" id="button-blue" />
                        <div class="ease"></div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ServiceAdd;