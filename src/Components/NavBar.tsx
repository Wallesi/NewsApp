const NavBar = () =>{
    return(
        <div className="p-5 bg-red-700">
            <nav className="flex items-center justify-between">
                <div>
                    <h1>Free Spech</h1>
                </div>
                <ul className="flex gap-2">
                    <li>Home</li>
                    <li>Economics</li>
                    <li>Sports</li>
                    <li>Policy</li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;