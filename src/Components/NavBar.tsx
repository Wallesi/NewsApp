import { Outlet, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="p-3 bg-sky-800 pl-14 pr-14">
            <nav className="flex items-center justify-between">
                <div className='flex items-center'>
                <img className='pr-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAYtJREFUSEvVld1RAkEQhLsjUDPQCIQI1AwwAs1AyUAjECNQM9AIxAgkAwnhiKCtpmap5Y69hUIe3CoeYO/6m+n5gTjw4YH1UQRIOgVwB+ASwCACmQGYAngmOd8muI0ASZMQ79OYkBzXIB2AJEd5Hi++AbCQf4MkZ3IP4CZlRHLYB1kDZJEvbE0SbgsEyFYdhV2GbjwrQHj+E08NLS7pGMBT1MFXFh2TbALyHc+flWqSA5LvLuAyIkm3AF5aoTUAHMBc0mvYtXqnnUYOSN4vo08PShoBSN8teAHgg+Qoy2JWqkUOkEVJ1lrXNjYkTyLL3vd2AmyqoiQDFiRdr86pWtTXgplFXyQ9kL2ATpFrQ7Rrkb0a1tp0y+g9M4Nqm0bBUhZuxavKoH0CsO+PJB+qg5a1Zb4q3Jbu8XxVeAF6PtLxnYNxUOUa5DdbLDvb4mw9I95bRUit5z3R7g6LWNRC/ngBepJtkddHEbL3H04NsjcgmiPP5Jrke7L8TwAZxCt+Jb5cPbVh2vf+/wN+AR0HwxlmzSEiAAAAAElFTkSuQmCC"/>
                    <h1 className='text-2xl font-semibold text-white'>Free Spech</h1>
                </div>
                <ul className="flex gap-2 text-white">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Economics">Economics</Link>
                    </li>
                    <li>
                        <Link to="/Sports">Sports</Link>
                    </li>
                    <li>
                        <Link to="/politics">Politics</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default NavBar;