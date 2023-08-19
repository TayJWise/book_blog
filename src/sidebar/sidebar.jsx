import "./sidebar.css"

export default function Sidebar() {
    return(
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img 
                src="https://images.pexels.com/photos/2868441/pexels-photo-2868441.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Fantasy</li>
                    <li className="sidebarListItem">Science Fiction</li>
                    <li className="sidebarListItem">Historical Fiction</li>
                    <li className="sidebarListItem">Romance</li>
                    <li className="sidebarListItem">Nonfiction</li>
                </ul>
            </div>
        </div>
    )
}