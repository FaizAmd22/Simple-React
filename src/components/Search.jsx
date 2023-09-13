import { useState } from "react"


function Search(props) {
    const [search, setSearch] = useState("")

    const changeSearch = () => {
        props.onSearch(search)
    }

    const searchKeydown = e => {
        if((e.key === "Enter")) {
            changeSearch()
        }
    }

    return (
        <>    
            <div>
                Cari Artikel : <input onChange={(e) => setSearch(e.target.value)} onKeyDown={searchKeydown}/>
                <button onClick={changeSearch}>Cari</button>
            </div>
            <small>
                Ditemukan {props.totalPosts} data dengan pencarian kata {search}
            </small>
        </>
    )
}

export default Search