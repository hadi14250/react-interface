import { BiSearch, BiCaretDown, BiCheck } from "react-icons/bi";
import { useState } from "react";

const DropDown = ( {dropDown} ) => {
  if (!dropDown)
      return(null)
  else
    return (
      <div className="origin-top-right absolute right-0 mt-2 w-56
        rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <div
            className="px-4 py-2 text-sm text-gray hover:bg-gray hover:text-gray flex justify-between cursor-pointer"
            role="menuitem">Pet Name <BiCheck /></div>
          <div
            className="px-4 py-2 text-sm text-gray hover:bg-gray hover:text-gray flex justify-between cursor-pointer"
            role="menuitem">Owner Name  <BiCheck /></div>
          <div
            className="px-4 py-2 text-sm text-gray hover:bg-gray hover:text-gray flex justify-between cursor-pointer"
            role="menuitem">Date <BiCheck /></div>
          <div
            className="px-4 py-2 text-sm text-gray hover:bg-gray hover:text-gray flex justify-between cursor-pointer border-gray-1 border-t-2"
            role="menuitem">Asc <BiCheck /></div>
          <div
            className="px-4 py-2 text-sm text-gray hover:bg-gray hover:text-gray flex justify-between cursor-pointer"
            role="menuitem">Desc <BiCheck /></div>
        </div>
      </div>
    )
  }
  

const Search = ()=> {

    let [dropDown, setDropDown] = useState(false)

        return (
            <div className="py-5">
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <BiSearch />
                  <label htmlFor="query" className="sr-only" />
                </div>
                <input type="text" name="query" id="query" value=""
                  className="pl-8 rounded-md focus:ring-indigo focus:border-indigo block w-full sm:text-sm border-gray" placeholder="Search" />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <div>
                    <button
                    type="button"
                    className="justify-center px-4 py-2 bg-blue border-2 border-blue text-sm text-white hover:bg-blue focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center" id="options-menu" aria-haspopup="true" aria-expanded="true"
                    onClick={
                      () => setDropDown(!dropDown)
                    }
                    >
                      Sort By <BiCaretDown className="ml-2" />
                    </button>
                    <DropDown dropDown={dropDown} />
                  </div>
                </div>
              </div>
            </div>
          )
}

export default Search