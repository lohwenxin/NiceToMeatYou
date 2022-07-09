import '../../App.css';
import Cards2 from '../Cards2';
import Footer from '../Footer';
import { Option } from 'nasi-lemak';
import React, {useEffect, useState} from 'react'
import '../Spinner.css'

import SearchButton from '../SearchButton';

function Search () {
    const [posts, setPosts] = useState();
    const [loading, setLoading] = useState(true);
    const [keyword, setKeyword] = useState("");
    const [name, setName] = useState("");
    const [empty, setEmpty] = useState(false);

    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`;
    
    const fetchData = async () => {
        const data = await fetch(url, {
        headers : { 
            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json'
        }
        })
        const json = await data.json();
        if (Option.isSome(Option.truthy(json.meals))) {
          setPosts(json);
          setEmpty(false);
        } else {
          setEmpty(true);
        }
        setLoading(false);
    }

    useEffect(() => {
      fetchData();
    }, []);
  
    useEffect(() => {
      fetchData();
    }, [name]);
  
    return (
        <>
        {loading
        ? (
          <div className="spinner-container">
            <div className="loading-spinner">
            </div>
          </div>
        )
        :  empty 
          ? (
          <div>
            <h3>EMPTY</h3>
            <div className = "search">
                  <SearchButton {...{keyword: keyword, setKeyword: setKeyword, name: name, setName: setName}}/>
                  <Footer/>
              </div>
          </div>
          )
          :
            (
            <div className = "search">
              <h1 className = "text-top">Look for recipes by ingredient you have!</h1>
                <SearchButton {...{keyword: keyword, setKeyword: setKeyword, name: name, setName: setName}}/>
                <Cards2 {...{ posts: posts, name: name, keyword: keyword }} />
                <Footer/>
            </div>
            )
        } 
        </>
    )
}

export default Search;
