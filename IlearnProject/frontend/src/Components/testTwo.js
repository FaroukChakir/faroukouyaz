import React from 'react'
import { Component } from 'react';
import axios from 'axios'
import { async } from 'regenerator-runtime';
// const API = 'AIzaSyCf-D4xDy4ojX1pJCixSEaZgGo0CY_oXog'

const API = 'AIzaSyDlN7KdkTDWILbPWmttRL2N7dHnWpo1vEY'
const channelId = 'UC7i9YRuyi7ey3v5yYpLVzMA'
const TotalVids = 2
var fina = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${TotalVids}`;
export default class YoutuberenderWithName extends Component
{
    constructor(props){
        super(props);
        this.state={
            YoutubeChannelListing:[],
            UsersChannels:[]
        };
        this.clicked=this.clicked.bind(this);
    }
    clicked()
    {
        // const Userch=  axios.get('http://127.0.0.1:8000/api/channels/');
    //    console.log(Userch);
//         const API = 'AIzaSyDlN7KdkTDWILbPWmttRL2N7dHnWpo1vEY'
// const channelId = 'UC7i9YRuyi7ey3v5yYpLVzMA'
// const TotalVids = 2
// var fina = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${TotalVids}`;

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
// componentDidMount()
// {
//     this.clicked();
// }



render()
{
    
    return (
<div>
    <div>
    hello
    <button onClick={this.clicked} >Get List</button>
    </div>
    <div >
        
           {
            this.state.YoutubeChannelListing.map((link,i)=>{
              var title = <h1>{link.snippet.title}</h1>
              var videolink = "https://www.youtube.com/embed/"+link.id.videoId;
                var frame=<iframe width="560" height="315" src={videolink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                // console.log(link);
                return [title,frame];
            })
        }
        {this.title}
        {this.frame}
    </div>
    <div>
 
    </div>
</div>
    )
}


}