import React from 'react'
import { Component } from 'react';
import OtherPagesHeader from '../OtherPagesHeader'
import './SelectedCours.css'
import axios from 'axios';
import {useState,useEffect} from 'react'
// const API = 'AIzaSyCf-D4xDy4ojX1pJCixSEaZgGo0CY_oXog'

// const API = 'AIzaSyDlN7KdkTDWILbPWmttRL2N7dHnWpo1vEY'
// const playlistId = 'PLqGkxBW9XT3KJRmZRm8TkHOTbIxc7ETMQ'
// var takedata=''

// const res = 2

export default function TeacherIndex()
{
    /**Variables */
    const [CoursesList,setCourses]=useState([])
    const [PlaylistItems,setPlaylistItems]=useState([])
const API = 'AIzaSyDlN7KdkTDWILbPWmttRL2N7dHnWpo1vEY'
const playlistId = 'PLqGkxBW9XT3KJRmZRm8TkHOTbIxc7ETMQ'
const res = 4;
 /**Variables */
const Pk =window.location.href.toString().substr(window.location.href.toString().lastIndexOf('@')+1).split(' ')[0]
 
//  const getUser = s => s.includes('@') && s.substr(s.lastIndexOf('@') + 1).split(' ')[0]
const items=[]

    useEffect(()=>{
        async function Fetchdata()
        {
           
            //    console.log(string)
                // var x = 37;
                
                const {data} = await axios.get(`/api/courses/${Pk}`)
                setCourses(data)
                var fina= `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=${res}&playlistId=${data.PlaylistId}&key=${API}`
                return fetch(fina)
                .then((response) => response.json())
                .then((json) => {
                    //   console.log(json)
                    //   
                    //   var videolink = "https://www.youtube.com/embed/"+link.snippet.resourceId.videoId;
                    //     var frame=<iframe className="IframeVideo" src={videolink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    setPlaylistItems(json.items)
                    
                })
                .catch((error) => {
                        
    });
        }
        Fetchdata()
        
    },[])
    if(PlaylistItems.length != null || PlaylistItems.length != 0)
    {

        for(var i = 0 ;i<PlaylistItems.length;i++)
        {
            var title = <h5>{PlaylistItems[i].snippet.title}</h5>
            var videolink = "https://www.youtube.com/embed/"+PlaylistItems[i].snippet.resourceId.videoId;
            var frame=<iframe className="IframeVideo" src={videolink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>;
            items.push(<div className="VideosDIv" >{title}{frame} </div>)
            
        }
    }
    else
    {
        items.push(<div className="VideosDIv" >Votre Channel ne Contient Rien </div>)
    }

   
    return(
        <div>
  <div className="Head">
<OtherPagesHeader/>
  </div>
  <div className="CenterDiv" >
    <div>
    <a href="/Courses" >Go Back</a>
  
        <h1 className="CoursTitle" >{CoursesList.Title}</h1>

    </div>
   
        {items}
         
       
 
    </div>
    </div>
    )
}