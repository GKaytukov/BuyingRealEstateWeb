import Accordion from 'react-bootstrap/Accordion';
import img from '../assets/carousel14.jpg';


function AboutUs() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>About Us</Accordion.Header>
        <Accordion.Body>
        We specializes in assisting NFL Players with the purchase of Commercial Real Estate Investments, 
//         Multi-Family Communities, Wholesale Off Market Flips, Bulk REO Deals from the lender for pennies on the dollar and Luxury Residential Homes. 
//         Our clientele ranges from NFL Players, athletes, celebrities, cash buyers, investors, and international buyers. Elite Celebrity Realty, Inc. 
//         recently sold an NFL Player over $23 million worth of apartment buildings in the state of Florida. Elite Celebrity Realty specializes in assisting 
//         NFL Players purchase C-Class Apartment Complexes that can be renovated into B-Class Apartment Complexes with capital improvements such as painting the exterior, 
//         repairing a pool,upgrading a pool, adding a pool, adding a playground, adding a clubhouse, adding a fitness center, upgrading the exterior lighting, upgrading the landscaping, 
//         new windows, new doors, and more instantly increasing the value of the asset. All while we focus on important issues such as encouraging an in-house onsite management staff, 
//         improving low occupancy, reducing expenses, increasing low rents, and finding the most cost-effective CRM Customer Relationship Management system for better client-to-tenant engagement.
//         Text input with checkbox"
        </Accordion.Body>
      </Accordion.Item>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How Does it Work?</Accordion.Header>
        <Accordion.Body>

        <h1>7 Easy Steps to Get a Pre-Approval Letter From Your Lender: </h1>

        <br></br>


<div>• Step 1: Click the tab called "Applying for Funding" </div>

<div>• Step 2: Fill out the Intake Form and have all requested documents collected to be submitted to the lender of your choice. 
</div>

<div>	• Step 3: Once you Click on the submit tab it will automatically take you to the tab called "All Users" to confirm your Application Status confirming receipt of your Application. 
</div>

<div>• Step 4: Click the next tab called "Choose a Lender" and select your Lender of choice from the list or any other Lender that is not on the list. </div>

<div>• Step 5: Click the next tab called "Choosing the Best Realtor" and use the questionnaire to interview each realtor of choice till you find one that meet you needs. 
</div>

<div>• Step 6: Click the next tab called "Fun Facts" to read some amazing Real Estate Hacks that can save you thousands of dollars and/or even buy a property at zero cost to you. 
</div>

<div>• Step 7: Click on the last tab called "Contact Us" if you have an Questions or Concerns. </div>



        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <img
          src={img}
          alt=""
          style={{objectFit: 'cover', width: '100vw', height: '95vh'}}

          />
    </Accordion>
  );
}

export default AboutUs;







// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';

// export default function AboutUs() {
//   return (
//     <>
//     <div className='about-container'>
//           <p>
//             ""
//           </p>

//       <InputGroup className="mb-3">
//         <InputGroup.Checkbox aria-label="Checkbox for following text input" />
//         <Form.Control aria-label="We specializes in assisting NFL Players with the purchase of Commercial Real Estate Investments, 
//         Multi-Family Communities, Wholesale Off Market Flips, Bulk REO Deals from the lender for pennies on the dollar and Luxury Residential Homes. 
//         Our clientele ranges from NFL Players, athletes, celebrities, cash buyers, investors, and international buyers. Elite Celebrity Realty, Inc. 
//         recently sold an NFL Player over $23 million worth of apartment buildings in the state of Florida. Elite Celebrity Realty specializes in assisting 
//         NFL Players purchase C-Class Apartment Complexes that can be renovated into B-Class Apartment Complexes with capital improvements such as painting the exterior, 
//         repairing a pool,upgrading a pool, adding a pool, adding a playground, adding a clubhouse, adding a fitness center, upgrading the exterior lighting, upgrading the landscaping, 
//         new windows, new doors, and more instantly increasing the value of the asset. All while we focus on important issues such as encouraging an in-house onsite management staff, 
//         improving low occupancy, reducing expenses, increasing low rents, and finding the most cost-effective CRM Customer Relationship Management system for better client-to-tenant engagement.
//         Text input with checkbox" />
//       </InputGroup>
//       <InputGroup>
//         <InputGroup.Radio aria-label="Radio button for following text input" />
//         <Form.Control aria-label="Text input with radio button" />
//       </InputGroup>
//       </div>
//     </>
//   );
// }




// // export default function AboutUs(){
// //     return (
// //         <h1></h1>
// //     )
// // }