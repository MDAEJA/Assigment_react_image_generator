// import axios from 'axios'
// import React, { useState } from 'react'

// function ImageGenarator() {
//     const[imageurl,setImageUrl] = useState([]);
//     const[inputvalue,setInputValue] = useState("");
//     const[page,setPage] = useState(10);
//     // const userref = useRef(null);
//     const accessKey ="q3mNwJ4eDuARWHU3pK4oBYPFtBYAC6cS6XtgLoDfwS4"
//     // let url =`https://api.unsplash.com/search/photos?per_page=2&page=${page}&query=${inputValue}&client_id=${accessKey}`
  
//    let getdata = async ()=>{
//     //<https://api.unsplash.com/search/collections?page=1&query=office>
//     const api_key = 'oyHVdp9WPS7C_KD2fpPMu_12SiO_1kJvmStINHHNuKc'
//     let url =`https://api.unsplash.com/search/photos?per_page=${page}&query=${inputvalue}&client_id=${accessKey}`
//     let response = await axios.get(`${url}`);
//    let data = (response);
//    console.log(data);
//    setImageUrl(data);
// //    console.log(imageurl)
//    } 
//   return (
//     <>
//     <div>
//         <h1>Image Generator</h1>
//          <input type='text' onChange={(e)=>{setInputValue(e.target.value)}} placeholder='Enter to create an image'></input>
//          <button onClick={(getdata)} >click me</button>
//          <img src={`${imageurl}`} alt='search-img'></img>
         
//     </div>
//     </>
//   )
// }

// export default ImageGenarator
