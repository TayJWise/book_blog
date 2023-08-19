import Header from "../../header/header"
import Posts from "../../posts/posts.jsx"
import Sidebar from "../../sidebar/sidebar"
import "./home.css"

export default function HomePage() {
    return (
        <>
            <Header />
            <div className="home">
                <Posts />
                <Sidebar />
            </div>
        </>
    )
}