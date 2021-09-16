import React, { useContext } from 'react'
import '../assets/styles/Homepages.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { DataContext } from '../Context';

function NavSearch() {


  const { searchValue, setSearchValue, dataInitial } = useContext(DataContext);

  const onSearchValueChange = (e) => {
    const searchword = e.target.value;
    const newFilter = dataInitial.filter((value) => {
      return value.title.toLowerCase().includes(searchword.toLowerCase());
    });
    if (searchword === "") {
      setSearchValue([])
    } else {
      setSearchValue(newFilter)
    }


  }
  return (
    <>
      <div className="searching">
        <input
          onChange={onSearchValueChange}
          className=" searching__input"
          type="text"
          placeholder="Search the challenge"
        />
        <AiOutlineSearch className="icon__search" />
      </div>
      {searchValue.length != 0 && (
        <div className="dataresult">
          {searchValue.slice(0, 15).map((value, key) => {
            return (<a className="dataItem" href={value.src} target="_blank">
              <p>{value.title}</p>
            </a>);
          })}
        </div>
      )}
    </>
  )
}

export default NavSearch
