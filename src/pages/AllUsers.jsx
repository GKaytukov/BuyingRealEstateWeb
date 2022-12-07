// import Table from 'react-bootstrap/Table';
// import { useNavigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';



// export default function AllUsers() {
//   const [allUsers, setAllUsers] = useState()


//   const navigate = useNavigate()

//   const submitPost = (e) => {

//     e.preventDefault()
//     const formData = new FormData(e.target),
//           formDataObj = Object.fromEntries(formData.entries())
//           // console.log(formDataObj)
  
//     // fetch('https://buying-real-estate-api-v-c7168.web.app/users', {
//     fetch('http://127.0.0.1:4050/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formDataObj),
//     })
//     .then(response => response.json())
//     .then(() => {
//       alert("Message Sent")
//     })
//     .catch(err => console.error(err))    
//   }

      
//       // function App() {
//       //   const [allUsers, setAllUsers] = useState([{ name: '', price: '' }])

//       //   console.log(allUsers)
        
//       //   useEffect(() => {
//       //     getAllUsers()
//       //   }, [])
        
        
//       //     const getAllUsers = () => {
//       //       fetch('https://buying-real-estate-api-v-c7168.web.app/users')
//       //       .then( response => response.json())//convert to JSON 
//       //       .then( data => setAllUsers(data)) //get formatted data
//       //       .catch (err => console.error(err)); //Each one of these need a callback function  
//       //     }

        
//       //     return (
        
//       //     <div className='users'>
//       //       <main>
//       //         <h1>List of All Users</h1>
//       //         <button onClick={() => getAllUsers()}>Get All Users</button>
//       //         <div className='users'>
                
//       //         </div>
//       //       </main> 
//       //     </div>
//       //     )
//       //         }
        
      
//       // navigate('/AllUsers')



//   return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Username</th>
//         </tr>
//       </thead>
//       <tbody>
//       {/* {allUsers.map(item => {
//                   console.log('each user', item)
//                   return <AllUsers entireObject={item} />
//                 })} */}
//        {/* maybe map here hmmm???  */}
//         <tr>
//           <td>1</td> 
//           <td>Mark</td>
//           <td>Otto</td>
//           <td>@mdo</td>
//         </tr>

//         <tr>
//           <td>2</td>
//           <td>Jacob</td>
//           <td>Thornton</td>
//           <td>@fat</td>
//         </tr>
//         <tr>
//           <td>3</td>
//           <td colSpan={2}>Larry the Bird</td>
//           <td>@twitter</td>
//         </tr>
//       </tbody>
//     </Table>
//   );
// }


import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

export default function AllUsers() {
   const [allUsers, setAllUsers] = useState()
   

   useEffect(() => {
    fetch('https://buying-real-estate-api-v-c7168.web.app/users')
    //fetch('http://localhost:4050/users')
            .then(response => response.json())//convert to JSON 
            .then(data => setAllUsers(data)) //get formatted data
            .catch(err => console.error(err)); //Each one of these need a callback function  
   }, [setAllUsers])


   return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Application Status</th>
        </tr>
      </thead>
      <tbody>
        {
          allUsers
          ? allUsers.map(user=> (
            <tr>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>Received</td>
          </tr>
          ))
          : <p>Loading...</p>
        }
      </tbody>
    </Table>   
   )
}