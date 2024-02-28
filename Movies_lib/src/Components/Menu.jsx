import { Link, useNavigate } from "react-router-dom"
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi"
import './MenuBar.css'
import { useState } from "react";

const Menu = () => {

    const [search , setSearch] = useState('')

    const navigate = useNavigate();

    const handleSubmit = (ev) => {
        ev.preventDefault()

        if(!search) return

        navigate(`/search?q=${search}`)
        setSearch('')
    }

    return(
        <nav id='navbar'>
        <h2>
            <Link to="/">
                 <BiCameraMovie/>MovieLiB
            </Link>
        </h2>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Busque um filme" 
            value={search}
            onChange={(ev) => setSearch(ev.target.value)}
            />
            <button type="submit">
                <BiSearchAlt2/>
            </button>
        </form>
      </nav>
    )
};

export default Menu