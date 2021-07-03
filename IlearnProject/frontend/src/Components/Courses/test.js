import React from 'react'
import { Component } from 'react';
import OtherPagesHeader from '../OtherPagesHeader'
import './SelectedCours.css'
import axios from 'axios';
// const API = 'AIzaSyCf-D4xDy4ojX1pJCixSEaZgGo0CY_oXog'

const API = 'AIzaSyDlN7KdkTDWILbPWmttRL2N7dHnWpo1vEY'
const playlistId = 'PLqGkxBW9XT3KJRmZRm8TkHOTbIxc7ETMQ'
var takedata=''

const res = 2
// var fina = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${res}`;

export default class PlaylistRender extends Component
{
    constructor(props){
        super(props);
        this.state={
            YoutubeChannelListing:[],
            Courses:[],
            CoursesT:[],
            testplaylistId:''
        };
        // this.clicked=this.clicked.bind(this);
    }
    
    bringindata()
    {
       
        var x = 33 ;
      return axios.get(`/api/courses/${x}`)
      .then((json) => {
        const Courses=json.data;
        this.setState({Courses})
        takedata=Courses.PlaylistId
        console.log(Courses.PlaylistId);
        
      })
      .catch((error) => {
        console.error(error);
      });
          
    }
    YoutubeApiPlaylistLister()
    {
console.log(takedata)
        var fina= `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=2&playlistId=${playlistId}&key=${API}`
        return fetch(fina)
    .then((response) => response.json())
    .then((json) => {
      const YoutubeChannelListing=json.items;
      this.setState({YoutubeChannelListing});
    })
    .catch((error) => {
      console.error(error);
    });
    
    }
/**/
    componentDidMount()
    {
        this.bringindata();
        this.YoutubeApiPlaylistLister();
    }
  


render()
{
    
    return (
<div>
  <div className="Head">
<OtherPagesHeader/>
  </div>
  <div className="CenterDiv" >
    <div>
  
        <h1 className="CoursTitle" >{this.state.Courses.Title}</h1>

    </div>
    <div  >
        
         
       
    </div>
    </div>
    </div>
   
    )
}


}