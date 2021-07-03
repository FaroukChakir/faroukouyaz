import React,{useState,useEffect} from 'react'
import { Component } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import OtherPagesHeader from '../OtherPagesHeader'
export default function  UploadCourse()
{
            // let form_data = new FormData();
        // form_data.append("User_id",userid)
        // form_data.append("PlaylistId",PlaylistId)
        // form_data.append("Cetegorie",Cetegorie)
        // form_data.append("Title",Title)
const [User_id, setUser_id] = useState(null)
const [PlaylistId, setPlaylistId] = useState("")
const [Cetegorie, setCetegorie] = useState("")
const [Title, setTitle] = useState("")
const [Description, setDescription] = useState("")
const [CurrentUserId, setCurrentUserId] = useState("")
// const AddCourse = async (event)=>{
    function AddCourse (event)
    {
        
       
     let form_data = new FormData();
        form_data.append("User_id",User_id)
        form_data.append("PlaylistId",PlaylistId)
        form_data.append("categorie",Cetegorie)
        form_data.append("Title",Title)
        form_data.append("Description",Description)
        console.log(Title);
        if(Cetegorie === "" || Cetegorie === "Selectionnez Votre Categorie" ||Cetegorie === " " || User_id=="Selectionnez Votre Categorie" )
        {
            event.preventDefault();
            alert("choisissez la categorie");
        }
        else
        {
            
            axios.post("/api/Postcourses/",form_data).then((response)=>{
                console.log(response.Description);
                
            }).catch((error)=>{
                console.log("pas jolie")
            })
        }
      
    }
    
     useEffect(() => {
         async function fetchUsers(){
            const {data}=await axios.get('/api/users/')
            setCurrentUserId(data)
            // console.log(CurrentUserId)
         }
         fetchUsers()
        //  console.log(CurrentUserId)

     },[])
          console.log(CurrentUserId)
    
          const items=[]
    for(var i=0;i<CurrentUserId.length;i++)
    {
      
        items.push(<option value={CurrentUserId[i].User_id} >{CurrentUserId[i].Name}</option>)
        

    }









    return(
<div>
  <div className="Head">
<OtherPagesHeader/>
  </div>
  <div className="containerDiv" >

        <div className="currentMonth">
        <h3>Add Your Course</h3>
      </div>
      <div id="transparency">
      <form onSubmit={AddCourse}  >
        
        <ul>User Id*</ul>
        <select name="Categorie"  onChange={(e)=>setUser_id(e.target.value)} >
            <option value="Selectionnez Votre Categorie" >----Selectionnez Votre Categorie</option>
               {items}
               
            </select>


           

         
           <ul>Playlist Id*</ul>
           <ul className="Smol"  >(Id of the playlist you wanna upload) </ul>
            <input type="text" required placeholder="Playlist Id" name="PlaylistId" value={PlaylistId} onChange={(e)=>setPlaylistId(e.target.value)}  />
           

            
        
            <ul>Description*</ul>
           <input type="text" required  placeholder="Description" name="Description" value={Description} onChange={(e)=>setDescription(e.target.value)}  />
          
            
          
          <ul>Title*</ul>
           <input type="text" required  placeholder="Title" name="Title" value={Title} onChange={(e)=>setTitle(e.target.value)}  />
         

         
            <ul>Categorie</ul>
            <select name="Categorie"  onChange={(e)=>setCetegorie(e.target.value)} >
            <option value="Selectionnez Votre Categorie" >----Selectionnez Votre Categorie</option>
               <option value="C#" >C#</option>
               <option value="C++" >C++</option>
               <option value="C" >C</option>
               <option value="Java" >Java</option>
               <option value="HTML" >HTML</option>
               <option value="Javascript" >Javascript</option>
               <option value="Python" >Python</option>
               <option value="React Js" >React Js</option>
            </select>
           
            <input type="Submit" />
     </form>
      </div>
  </div>
</div>
   
    );
}

















                //     <div className="containerDiv" >
    //     <form onSubmit={AddCourse}  >
    //         User Id
    //         <input type="text" name="UserId" value={User_id} onChange={(e)=>setUser_id(e.target.value)}  />
    //         <br></br>

    //         PlaylistId
    //         <input type="text" name="PlaylistId" value={PlaylistId} onChange={(e)=>setPlaylistId(e.target.value)}  />
    //         <br></br>

            
    //         Description
    //         <input type="text" name="Description" value={Description} onChange={(e)=>setDescription(e.target.value)}  />
    //         <br></br>
            
    //         Title
    //         <input type="text" name="Title" value={Title} onChange={(e)=>setTitle(e.target.value)}  />
    //         <br></br>

    //         Categorie
    //         <select name="Categorie"  onChange={(e)=>setCetegorie(e.target.value)} >
    //         <option value="" >Selectionnez Votre Categorie</option>
    //            <option value="C#" >C#</option>
    //            <option value="POO" >POO</option>
    //         </select>
    //         <br></br>
            
    //         Smitting
    //         <input type="Submit"/>
    //     </form>
    // </div>