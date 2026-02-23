import React, { useState } from "react";
function Instalike(){
    const[liked,setLiked] =useState(false);
    return(
        <>
        <button id="likeBtn" className={liked?"liked":"notLiked"} onClick={()=>setLiked(!liked)}>♥ {liked?"liked":"like"}</button>
        </>
    );
}
export default Instalike;