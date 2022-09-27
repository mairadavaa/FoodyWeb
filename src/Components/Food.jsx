import React from "react";

import ImageListItem from '@mui/material/ImageListItem';
import { useFooddataContext } from "../Context/fooddataContext";
export const Food = () => {
    const { item }= useFooddataContext()
    return(
      
     
   
        <ImageListItem sx={{justifyContent:"center" , display:"flex", alignItems:"center", flexDirection:"column"}}>
          <img
            style={{borderRadius:"50%" ,  width:"150px" , height:"150px"}}
            src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
            alt='Breakfast'
           
          />
        </ImageListItem>
     
      
    
    );
}
