import NavMenu from "./NavMenu"
export default function Header () {
    return (
        <>
        <NavMenu />
        <ul>
            <li><a href="/">Qualifying to Buy Real Estate Made Easy</a></li> 
            <li><a href="/">Home</a></li> 
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/userapplication">User Application</a></li>
            <li><a href="/checklist">Check List</a></li>
            <li><a href="/applyforfunding">Apply For Funding</a></li>
            <li><a href="/choosingthebestrealtor">Choosing the Best Realtor</a></li>
            <li><a href="/funfacts">Fun Facts</a></li>
            <li><a href="/contactus">Contact Us</a></li>
            
        </ul>
        </>
        
    )
} // Delete from ul to ul because I already have this list in my NavMenu