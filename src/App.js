
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState("Marketing");
  const [selectedTag,setSelectedTag] = useState("Marketing")
  useEffect(()=>{
    function fetchData () {
     
      fetch(`https://functions-cloud-hsb.harperdbcloud.com/api/resources/${selectedTag}`, {
    method: 'GET', // or 'PUT'
   
    
  })
  .then(response => response.json())
  .then(data => {
    setItems(data);
  })
    }
    fetchData()
    
   
  },[selectedTag]);
  
  

  const tags=["Marketing","Startups","Podcasts","Product","Crypto","Learn"];



function ChangeResource(tag){
 
  setSelectedTag(tag);
  setActiveIndex(tag);
}

  return (
    <> 
    <div className="row">
     <div className="Boxtitle">
      <h1> Curated List of Best Articles and Resources</h1>
     </div>
     </div>

     <div className="Boxcontent">
   
     {tags.map(tag=>(
       <div onClick={() => ChangeResource(tag)} key={tag} className={activeIndex === tag ? "sectionType active" : "sectionType"}> 
       <h3  > {tag} </h3>
       </div>
     ))}

     </div>
<div className="gridWrap"> 
 {items.map((item,key)=>{

  
    return(
        <div key={item.title} className="GridView">
     <a href={item.url} >
     <img   className="ImageStyle" src={item.cover} alt="" /> 
     <h3 style={{color:"white",width:"100%",maxWidth:"400px",textAlign:"center",display:"absolute"}}>  {item.title}  </h3>
     </a>
  </div> ) }
  )} 
    
    </div>

    

    
     
    </>
  );
}

export default App;
