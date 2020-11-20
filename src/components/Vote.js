import React, {useState} from 'react'


function Vote() {
  const[likes , setLikes]= useState(0);
  const[dislikes , setDislikes]= useState(0);
     
        
    
       const handleClickLike = () =>{
       setLikes ( likes + 1)
       }
     
        const handleClickDislike = () =>{
        setDislikes ( dislikes + 1 )
        }
      

     return(
        <div>
    <buttton onChange={handleClickLike}> Like {likes} </buttton>
    <button onChange= {handleClickDislike} > Dislike {dislikes}</button>
  </div>

    )
    
}
export default Vote
