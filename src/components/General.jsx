import { NewsContext } from "./App";
import { useContext } from "react";
import Article from "./Article";
function General() {
    const { GeneralNews } = useContext(NewsContext);
 return (<>
   
{GeneralNews.articles ? (
        <div style={{width:'100vw', display:'flex', justifyContent:'center', margin:0, flexDirection:'column',alignItems:'center'}}>
{ 

   <div style={{width:'70%', display:'flex', justifyContent:'center', margin:0, backgroundColor:'#DDD',    flexWrap:'wrap'}}>
    <h1>General News</h1>
   { GeneralNews.articles.map((article, index) => (<Article article={article}  key={index}></Article>))}
   </div>

   
 }
 </div>
) : (
    <div style={{width:'100vw', display:'flex', justifyContent:'center', margin:0, flexDirection:'column',alignItems:'center'}}>
 <h1>Loading...</h1>
 </div>
)}
</>
 )
}
export default General;
