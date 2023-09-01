<div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div>

{/* <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                ></path>
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-48"
            >
              <li>
                <Link>Make Up</Link>
              </li>
              <li>
                <Link>Skin</Link>
              </li>
              <li>
                <Link>Hair</Link>
              </li>
              <li>
                <Link>Personal Care</Link>
              </li>
              <li>
                <Link>Mom & Baby</Link>
              </li>
              <li>
                <Link>Fragrance</Link>
              </li>
              <div className="mt-3 mb-3">
              <button className="btn btn-outline border-orange-600 hover:bg-orange-600 btn-xs sm:btn-sm md:btn-md lg:btn-md rounded-full uppercase">My Account</button>
              <button className="btn btn-secondary btn-xs sm:btn-sm md:btn-md lg:btn-md rounded-full text-white ml-2">Bag</button>
              </div>
            </ul> */}