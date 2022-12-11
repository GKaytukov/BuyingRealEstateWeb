import Video from '../components/Video';
import Cards from 'react-bootstrap/Card';

export default function Home() {
    
return (
    <>
        {/* <h1>Qualifying to Buy Real Estate Made Easy</h1> */}
        <div style={{textAlign:'center'}}>
        <h1>Qualifying to Buy a House Made Easy</h1></div>
        <Video />
        <Cards />
        {/* <AllPosts /> */}
    </>
)

}






















// import { useEffect, useState } from 'react';
// import {Link} from 'react-router-dom';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';


// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
// import Sonnet from '../../components/Sonnet';

// function UncontrolledExample() {
//   return (
//     <Tabs
//       defaultActiveKey="profile"
//       id="uncontrolled-tab-example"
//       className="mb-3"
//     >
//       <Tab eventKey="home" title="Home">
//         <Sonnet />
//       </Tab>
//       <Tab eventKey="profile" title="Profile">
//         <Sonnet />
//       </Tab>
//       <Tab eventKey="contact" title="Contact" disabled>
//         <Sonnet />
//       </Tab>
//     </Tabs>
//   );
// }

// export default UncontrolledExample;

// const [user, setUser] = useState ([])

    // useEffect(() => {
    //     fetch(process.env.REACT_APP_ENDPOINT)
    //     .then(res => res.json())
    //     .then(data => setPosts(data))
    //     .catch(err => console.error(err))
    // }, [])

    //console.log(posts)

// const AllPosts = () => {
//   return (
//    <div className='post'>
//     {posts.map((item, index) => {
//         return (
//             <Link state={item} to={'/single-post'} className='post-item' key={item._id}>
//                 <img src={`https://source.unsplash.com/random?sig=${index}`} alt='' />
//             </Link>

//         )
//     })}</div>
//   )
// }
