import React, { useEffect, useState } from 'react'
import { callAPI } from '../utlis/CallApi';
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline"
import {createSearchParams,useNavigate} from 'react-router-dom'



const Search = () => {
  const [suggestions , setSuggestions] = useState(null);
  const [searchTerm,setSearchTerm] = useState("");
  const [category,setCategory] = useState("All");

  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();

    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: `${searchTerm}`,
      })}`,
    });
    setSearchTerm("");
    setCategory("All");
  }  

  const getsuggestions=()=>{
    callAPI(`data/suggestions.json`).then((suggestionsResult)=>{setSuggestions(suggestionsResult)})
  }

  useEffect(()=>{getsuggestions()},[])

  return (
    <div className="w-[100%]">
      <div className="flex grow items-center h-10 bg-amazonclone-yellow rounded">
        <select onChange={(e)=>setCategory(e.target.value)} className="p-2 w-[50px] bg-gray-300 text-black border text-xs xl:text-sm" >
            <option>All</option>
            <option>Deals</option>
            <option>Amazon</option>
            <option>Fashion</option>
            <option>Computers</option>
            <option>Home</option>
            <option>Mobile</option>
        </select>
        <input className="flex w-[750px] item-center h-[100%] rounded-l text-black" type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
        <button className="w-[20px]" onClick={onHandleSubmit}>
            <MagnifyingGlassIcon className="pl-2 h-[20px] m-auto stroke-slate-900"/>
        </button>
      </div>
      {suggestions && <div className="bg-white text-black w-full z-40 absolute">
        {

          suggestions.filter((suggestion)=>{

            const currentSearchTerm = searchTerm.toLowerCase()
            const title = suggestion.title.toLowerCase()
            return(
              currentSearchTerm && 
              title.startsWith(currentSearchTerm) &&
              title !== currentSearchTerm
            )
          })
          .slice(0,10)
          .map((suggestion)=>(
            <div key={suggestion.id} onClick={()=>setSearchTerm(suggestion.title)}>{suggestion.title}</div>
          ))
        }</div>}
    </div>
  )
}

export default Search
