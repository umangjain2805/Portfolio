function Navbar() {
  return (
    <nav className="px-8 py-6">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl">
          Portfolio
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-700">
          <li>Skills</li>
          <li>Projects</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>

        <button
          className="
            px-5
            py-2
            rounded-full
            bg-black
            text-white
          "
        >
          Resume
        </button>
      </div>
    </nav>
  );
}

export default Navbar;