import React from 'react';

const Update = () => {


    // const [user, setUser] = useState(storedUsers)

    // const handleUpdateUser = (event) => {
    //     event.preventDefault();
    //     // console.log(user);
    //     fetch(`http://localhost:5000/users/${user._id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(user),
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.modifiedCount > 0) {
    //                 alert('user Updated')
    //                 console.log(data);
    //             }
    //         })

    // }


    return (
        <div className='bg-base-300 pb-60'>
            <h2 className='text-5xl py-10 text-orange-400 text-center'>Update Review</h2>
            <form>
                <div className="form-control mt-14">
                    <div className='mx-16'>
                        <textarea className=" textarea textarea-bordered h-32" name='message' placeholder=" update review" required></textarea>
                        <input className='mb-20 w-full mt-5 btn btn-primary' type="submit" value="Update now" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Update;