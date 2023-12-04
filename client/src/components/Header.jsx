import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
        <div className="bg-slate-200 shadow-md">
            <div className="flex justify-between items-center p-3 max-w-6xl mx-auto ">
                <Link to='/'>
                    <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                        <span className='text-slate-500'>Falah</span>
                        <span className="text-slate-700">Estate</span>
                    </h1>                
                </Link>
                <form action="" className="bg-slate-100 p-3 rounded-lg flex items-center">
                    <input type="text" placeholder="search . . ." className="bg-transparent" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                </form>
                <ul className='flex gap-8'>
                    <Link to="/">
                        <li className='hidden text-slate-700 sm:inline hover:underline'>Home</li>
                    </Link>
                    <Link to="/about">
                        <li className='hidden text-slate-700 sm:inline hover:underline'>About</li>
                    </Link>
                    <Link to="/signin">
                        <li className='text-slate-700 hover:underline'>Sign in</li>
                    </Link>
                </ul>
            </div>
        </div>
    </header>
)
}
