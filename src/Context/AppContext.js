import {React,createContext,useState,useEffect} from "react";
import { fetchDetailsFromApI } from "../Utils/api";
export const AppContext=createContext();

export function AppContextProvider({children})
{
    const [loading,setLoading]=useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectCategories, setSelectCategories] = useState("New");
    const [mobileMenu,setMobileMenu]=useState(false);


    useEffect(()=>{
        fetchSelectedCategoryData(selectCategories);
    },[selectCategories]);

    async function fetchSelectedCategoryData(query){
        setLoading(true);
        const {contents}=await fetchDetailsFromApI(`search/?q=${query}`);
        console.log(contents);
        setSearchResults(contents);
        setLoading(false);
    }



    const values={
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu
    };



    return(
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    );
}