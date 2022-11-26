import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Home() {
    const [user, setUser] = useState ([])

    useEffect(() => {
        fetch(process.env.REACT_APP_ENDPOINT)
        .then(res => res.json())
        .then(data => setPosts(data))
        .catch(err => console.error(err))
    }, [])

    console.log(posts)

const AllPosts = () => {
  return (
   <div className='post'>
    {posts.map((item, index) => {
        return (
            <Link state={item} to={'/single-post'} className='post-item' key={item._id}>
                <img src={`https://source.unsplash.com/random?sig=${index}`} alt='' />
            </Link>

        )
    })}</div>
  )
}

return (
    <div className='container'>
        <h1>Qualifying to Buy Real Estate Made Easy</h1>
        <AllPosts />
    </div>
)

}

// Add all my routes here....