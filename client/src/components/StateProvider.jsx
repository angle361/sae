import React, {useState,useEffect,createContext, useContext} from 'react';
import axios from 'axios';


export const StateContext = createContext();

export const StateProvider = (props) => {
     const [deta, setData] = useState(null);
    // useEffect(()=>{
    //         axios({
    //             method: "GET",
    //             withCredentials: true,
    //             url: "http://localhost:3000/registerforevent",
    //         }).then((res)=> {
    //             setData(res.data.username);
    //             console.log(res.data.username);
    //         }).catch((err)=> console.log(err));
    //         console.log(deta);
        
    // })


    return(
        <StateContext.Provider value = {[deta, setData]}>
            {props.children}
        </StateContext.Provider>
    )
};

export const useStateValue = () => useContext(StateContext);         //useStateValu will have the value hello