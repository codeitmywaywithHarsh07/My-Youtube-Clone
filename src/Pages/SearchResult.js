import {React,useState,useContext,useEffect} from 'react'
import { AppContext } from '../Context/AppContext'
import { fetchDetailsFromApI } from '../Utils/api'
import SearchResultVideo from '../Components/SearchResultVideo'
import LeftNav from '../Components/LeftNav'
import { useParams } from 'react-router-dom'

export default function SearchResult() {
  const[result,setResult]=useState();
  const {searchQuery}=useParams();
  const{setLoading}= useContext(AppContext);

  async function fetchQueryResults()
  {
    setLoading(true);
    const data = await fetchDetailsFromApI(`search/?q=${searchQuery}`);
    console.log(data)
    setResult(data?.contents);
    setLoading(false);
  }

  useEffect(()=>{
    document.getElementById("root").classList.remove('custom-h');
    fetchQueryResults();
  },[searchQuery])

    // console.log(result);
  return (
    <div className='flex flex-row  h-[calc(100%-56px)]'>

      <LeftNav/>

      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 gap-2 p-5">
          {result?.map((item)=>{
            if(item?.type!=='video')
            {
              return false;
            }
            let video=item?.video;
            return(
              <SearchResultVideo key={video?.videoId} video={video} />
            );
          })}
        </div>
      </div>
      
    </div>
  )
}
