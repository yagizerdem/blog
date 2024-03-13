import '../styles/Header.css'
import SearchInput from './SearchInput'
export default function Header(){


    return(
        <nav className="head">
            <SearchInput></SearchInput>
            <div className='logos'>
                <span><i className="fa-brands fa-instagram"></i></span>
                <span><i className="fa-brands fa-facebook"></i></span>
                <span><i className="fa-brands fa-linkedin"></i></span>
            </div>
        </nav>
    )
}