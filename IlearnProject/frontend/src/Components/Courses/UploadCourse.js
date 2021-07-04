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
const Pk =window.location.href.toString().substr(window.location.href.toString().lastIndexOf('@')+1).split(' ')[0]
console.log(Pk)
const [PlaylistId, setPlaylistId] = useState("")
const [Cetegorie, setCetegorie] = useState("")
const [Title, setTitle] = useState("")
const [Description, setDescription] = useState("")
const [CurrentUserId, setCurrentUserId] = useState("")
// const AddCourse = async (event)=>{
    function AddCourse (event)
    {
        
       
     let form_data = new FormData();
        form_data.append("User_id",Pk)
        form_data.append("PlaylistId",PlaylistId)
        form_data.append("categorie",Cetegorie)
        form_data.append("Title",Title)
        form_data.append("Description",Description)
        console.log(Title);
        if(Cetegorie === "" || Cetegorie === "Selectionnez Votre Categorie" ||Cetegorie === " "  )
        {
            event.preventDefault();
            alert("choisissez la categorie");
        }
        else
        {
            
            axios.post("/api/Postcourses/",form_data).then((response)=>{
              alert("AAAAA")
                var link = `/MyUploads/@${Pk}`
                window.location.href = link ;
            }).catch((error)=>{
              alert("AAAAA")
              var link = `/MyUploads/@${Pk}`
              window.location.href = link ;
            })
        }
      
    }
    
    
    var Goback = `/MyUploads/@${Pk}`
    // window.location.href = links ;
    









    return(
<div>
  <div className="Head">
<OtherPagesHeader/>
  </div>
  <div className="containerDiv" >

          <a href={Goback}>
            Go back
          </a>
        <div className="currentMonth">
        <h3>Add Your Course</h3>
      </div>
      <div id="transparency">
      <form onSubmit={AddCourse}  >
        
      
      


           

         
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
           
            <input type="Submit" style={{backgroundColor:"#3498db"}} />
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