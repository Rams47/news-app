import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
            <nav className="flex bg-white flex-row h-14 items-center rounded-t-lg">
                <p className="text-2xl font-bold mx-10">NewsApp</p>
                <div>
                    <ul className='flex flex-row items-center'>
                        <li className='font-medium leading-3 text-lg mx-2.5'>
                            <Link to="/"> Home </Link>
                        </li>
                        <li className='font-medium leading-3 text-lg mx-2.5'>
                            <Link to="/business">Business</Link>
                        </li>
                        <li className='font-medium leading-3 text-lg mx-2.5'>
                            <Link to="/entertainment">Entertainment</Link>
                        </li>
                        <li className='font-medium leading-3 text-lg mx-2.5'>
                            <Link to="general/">General</Link>
                        </li>
                        <li className='font-medium leading-3 text-lg mx-2.5'>
                            <Link to="/health">Health</Link>
                        </li>
                        <li className='font-medium leading-3 text-lg mx-2.5'>
                            <Link to="/science">Science</Link>
                        </li>
                        <li className='font-medium leading-3 text-lg mx-2.5'>
                            <Link to="/sports">Sports</Link>
                        </li>
                        <li className='font-medium leading-3 text-lg mx-2.5'>
                            <Link to="/technology">Technology</Link>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar
