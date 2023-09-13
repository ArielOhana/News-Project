import { Outlet,Link } from "react-router-dom";
import "../layout.css"
function Home() {
 return (<>
    <div className="navbar">
    <h3 style={{margin:0}}>N E W S I T E</h3>
    <div className="selection">
        
    <Link to={'/'}><span>Login</span>
        </Link> 
    <Link  to={'/Home'} ><span>Home</span>
        </Link>
        <Link to={'/Economic'}><span>Economic</span>
        </Link> 
        <Link to={'/Search'}><span>Search</span>
        </Link> 
        <Link to={'/General'}><span>General</span>
        </Link> 
        <Link to={'/Gaming'}><span>Gaming</span>
        </Link>
        <Link to={'/Sport'}><span>Sport</span>
        </Link>
        <Link to={'/Favorites'}><span>Favorites</span>
        </Link>
    </div>
    </div>
    <Outlet>

    </Outlet>
    </>
 )
}
export default Home;
