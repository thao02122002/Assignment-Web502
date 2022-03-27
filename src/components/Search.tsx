import React from 'react'

type Props = {}

const Search = (props: Props) => {
  return (
    <form className="d-flex">
                <input className="form-control me-2 rounded-lg" type="search" placeholder="Search" aria-label="Search" />
                <button className="p-2 border border-yellow-500 bg-yellow-500 rounded-lg hover:bg-yellow-300" type="submit">Search</button>
              </form>
   
  
  )
}

export default Search