const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 bg-cream px-10">
      <div className="flex flex-row space-x-2 items-center">
        <div className="w-3 h-3 rounded-full bg-blueish-100"></div>
        <div className="w-3 h-3 rounded-full bg-blueish-200"></div>
        <div className="font-serif" ><a href="/">Self</a></div>
        <div className="w-3 h-3 rounded-full bg-blueish-50"></div>
        <div className="w-3 h-3 rounded-full bg-blueish-100"></div>
      </div>
      <div className="flex gap-x-20 mr-2 lg:mr-6 font-serif">
        <a href="/starttest" className="text-blue-600 text-sm italic">
          take the test
        </a>
      </div>
    </div>
  );
};
export default Navbar;
