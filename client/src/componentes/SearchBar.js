import React,{useState} from 'react';
import "../styles/SearchBar.css";

export default function SearchBar({onSearch}) {

  const [Countrie, setCountrie] = useState();
 
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(Countrie);
      }}>

      <input
        type='text'
        placeholder='Countrie...'
        value={Countrie}
        onChange={e => setCountrie(e.target.value)}
        />

        <input className='btns' type='submit' value='Buscar'/>

    </form>
  );
};
