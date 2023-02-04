import {Link} from 'react-router-dom'
import Logo from '../assets/polygon-logo.png'



function Navbar() {
  return (
    <nav className='navbar mb-12 shadow-lg bg-white text-black'>
        <div className='container mx-auto'>
            <div className='flex-row px-2 mx-2'>
                <Link to='/' className='text-lg font-bold align-middle'>
                    <img src={Logo} alt="polygon logo" width={150} className="inline"  />
                </Link>
            </div>
            <div className='flex-1 px-2 mx-2'>
                <div className='flex justify-end'>
                    <Link to='/' className='btn btn-ghost btn-sm mr-2 rounded-btn hover:bg-secondary hover:text-white'>
                        Home
                    </Link>
                    <Link to='/about' className='btn btn-ghost btn-sm ml-2 rounded-btn hover:bg-secondary hover:text-white'>
                        About
                    </Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar