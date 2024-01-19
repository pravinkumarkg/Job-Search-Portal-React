import Div from "./Div"

const Search = ({onChange, Value}) => {
    return(
        <Div className=" d-flex align-items-center justify-content-center search-wrapper text-center">
            <Div className="position-relative w-100">
                <span class="material-icons-outlined position-absolute">search</span>
                <input type="search" class="py-2 ps-5 pe-2 w-100" placeholder="Search" value={Value} onChange={onChange} />
            </Div>
        </Div>
    )
}

export default Search;