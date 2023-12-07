import CommunityCards from "./CommunityCards"
import NewStoryForm from "./NewStoryForm"
import StoryWall from "./StoryWall"
import {useState, useEffect} from 'react';

function CommunityPage(){

    const [stories, setStories] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/story-posts")
        .then(r=>r.json())
        .then(data=>setStories(data))
        }
      ,[])

    function addStoryPost(newStoryPost){
        fetch("http://localhost:3000/story-posts",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(newStoryPost)
          })
          .then(r=>r.json())
          .then(data=> setStories([...stories,data]))
        }

    return(
        <div className="pt-14 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <h1 className= "pt-14 text-9xl font:display flex justify-center">Community</h1>
            <p className="mx-6 pb-12 text-3xl font-semibold flex justify-center"> See how creatives and businesses are connecting on Magnet</p>
            <CommunityCards/>
            <NewStoryForm addStoryPost={addStoryPost}/>
            <StoryWall stories={stories}/>
        </div>
    )
}

export default CommunityPage