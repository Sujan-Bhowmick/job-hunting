import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { updateFilters } from '../features/filters/filtersSlice';
// import { isSearch, isSort } from '../features/job/jobSlice';

export default function SearchSort() {

    // const [search , setSearch] = useState("");
    // const [option , setOption] = useState({
    //     lth: "",
    //     htl: ""
    // });
    //  useEffect(() => {
    //         dispatch(isSearch(search))
    //         dispatch(isSort(option))
    //         console.log(search)
    //  }, [dispatch, search, option])

    const {sort, search} = useSelector(state => state.filters)
    console.log(sort, search)
    const dispatch = useDispatch() ;
    const [filterValues, setFilterValues] = useState({
        sort: "",
        search: "",
    });

    useEffect( () => {
        dispatch(updateFilters(filterValues))
    }, [dispatch, filterValues])

    const handleChange = (e) => {
        setFilterValues({...filterValues, [e.target.name]: e.target.value})
    }

    return (
        <div className="flex gap-4">
            <div className="search-field group flex-1">
                <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
                <input  onChange={handleChange} name='search' type="text" placeholder="Search Job" className="search-input" id="lws-searchJob" />
            </div>
            <select onChange={handleChange} id="lws-sort" name="sort" autoComplete="sort" className="flex-1">
                <option value= "">Default</option>
                <option value="lth">Salary (Low to High)</option>
                <option value="htl">Salary (High to Low)</option>
            </select>
        </div>
    )
}
