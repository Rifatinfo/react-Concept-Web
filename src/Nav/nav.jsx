

const Nav = ({selected}) => {
  return (
   <div >
     <nav className="bg-gray-800 text-white px-4 py-3 shadow-md w-full">
      <div className="container mx-auto flex items-center justify-between">
        <div>
            <p>Logo</p>
        </div>
        {/* Left Section */}
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <a href="#" className="hover:text-gray-400">
            Product
          </a>
          <a href="#" className="hover:text-gray-400">
          <p>  Cart <span className="text-white">{selected.lenght}</span></p>
          </a>
          <div>
          <span className="font-semibold">$500</span>
        </div>
        </div>

        {/* Right Section */}
       
      </div>
    </nav>
   </div>
  );
};

export default Nav;
