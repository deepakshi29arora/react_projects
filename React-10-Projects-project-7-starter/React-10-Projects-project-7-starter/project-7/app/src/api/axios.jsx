import axios from "axios";

import React from 'react'

// const axios = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }
const Axios=axios.create({
    baseURL:import.meta.env.VITE_BACKEND_RULE,
    withCredentials:true,
})

export default Axios;
