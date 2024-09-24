import { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import styles from './SearchBar.module.css';

const SearchBar = (props) => {

  
    const [focused, setFocused] = useState(false)
    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);
    const [search, setSearch] = useState();
    // Search functions

    function checkSearch(task) {
      if (task) {
        if ((task.title.toLowerCase()).includes(search.toLowerCase()) || (task.summary.toLowerCase()).includes(search.toLowerCase())) { // later add category
        return true;
      }
      }
       
    }

    const [results, setResults] = useState([]);

    const updateSearch = async (event) => {
      setSearch(event.target.value);
    }


    const searchHandler = async (event) => {
      await updateSearch(event);
      let search_results = await props.tasks.filter(checkSearch);
      let search_output = await search_results.map(task => (
        <div key={task._id} className={`${styles.task2} ${styles.listItemText}`} > 
        {/* onClick={() => openTask(task)} */}
          <div className={styles.title}>{task.title}</div>
          <div className={styles.summary}>{task.summary}</div>
          <div className={styles.status}>{task.status}</div>
          <div className={styles.priority}>{task.priority}</div>
          <div className={styles.published}>{task.published?.substring(0, task.published.indexOf("T"))}</div>
          <div className={styles.deadline}>{task.deadline?.substring(0, task.deadline.indexOf("T")) || '-'}</div>
        </div>
      ));
      setResults(search_output);
    };

    return <div>
    <input className={styles.searchBox} id='search' onFocus={onFocus} onBlur={onBlur} onChange={searchHandler} placeholder='Search Tasks'/>
    <label htmlFor='search' className={styles.searchIcon}>
            <AiOutlineSearch size={'20px'} />
        </label>
        {results && results}
    </div>
};

export default SearchBar;