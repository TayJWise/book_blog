import "./navbar.css"

export default function NavBar() 
{
    return (
        <div className = "nav">
            <div className="navCenter">
                <ul className="navList">
                    <li className="navListItem">HOME</li>
                    <li className="navListItem">ABOUT</li>
                    <li className="navListItem">GENRES</li>
                    <li className="navListItem">CONTACT</li>
                </ul>
            </div>
        </div>
    )
}