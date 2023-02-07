const Navbar = () => {
  const helloAlert = (page) => {
    alert(`This is ${page} page.`)
  }

  return (
    <nav className="sticky top-0 h-12 w-full flex items-center px-12 bg-neutral-800 text-[#f0f0f0] shadow-lg">
      <ul className="flex">
        <li className="cursor-pointer" onClick={() => helloAlert("HOME")}>HOME</li>
        <li className="cursor-pointer ml-4" onClick={() => helloAlert("ABOUT")}>ABOUT</li>
        <li className="cursor-pointer ml-4" onClick={() => helloAlert("CONTACT")}>CONTACT</li>
      </ul>
    </nav>
  );
}

export default Navbar;
