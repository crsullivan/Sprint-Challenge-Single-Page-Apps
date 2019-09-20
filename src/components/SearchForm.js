import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components';

const SearchFormCard = styled.section `

display:flex;
flex-wrap:wrap;
`
const H2 = styled.h2 `
margin:2%;
`

const Form = styled.form `

`
const SearchForm = () => {

  const [searches, setSearches] = useState('');
  const [searchResult, setSearchResult] = useState([])

  useEffect ( () => {
    axios.get("https://rickandmortyapi.com/api/character")
    .then(response => {
      const peeps = response.data.results
      const results = peeps.filter(item => {
        if(item.name.toLowerCase().includes(searches)) {
        return item.name.toLowerCase().includes(searches)
      }})
      setSearchResult(results)
    })
  },[searches])

  const handleChange = search => {
    setSearches(search.target.value)
  }

  return (
    <SearchFormCard>
      <Form>
        <input type="text" placeholder="Find Quickly" name="searchText" value={searches} onChange={handleChange} />

      </Form>
      {searchResult.map(item => {
        return (
          <div key={item.id}>
            <Link to = {`/character/${item.id}`}>
              <H2>{item.name}</H2>
              <p>{item.status}</p>
            </Link>
          </div>
        )
      })}
    </SearchFormCard>
  );
}

export default SearchForm