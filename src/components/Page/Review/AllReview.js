import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import AllreviewTable from './AllreviewTable';

const AllReview = () => {
    const { user } = useContext(AuthContext)
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/review`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);
    return (
        <div>
            <div className="overflow-x-auto mb-14">
                <h2 className='text-5xl text-orange-400 text-center my-10'>All Review </h2>
                <table className="table w-full border-4 ">
                    <thead>
                        <tr>
                            <th>serial</th>
                            <th> </th>
                            <th>Customer Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((u, idx) => <AllreviewTable key={u._id}
                                u={u}
                                id={idx}
                            >

                            </AllreviewTable>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllReview;