import { Menu } from "lucide-react";
import logo from "../../../public/default-logo.png";
import { useState } from "react";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  console.log(openMenu);
  
  return (
    <nav className="w-full flex  h-20 items-center justify-center  ">
      <main className="container max-w-6xl  flex items-center justify-between h-20">
        <img src={logo} alt="Logo" className="w-15" />
        <Menu
          className="text-2xl hover:text-red-400 cursor-pointer font-bold"
          onClick={() => setOpenMenu((prev)=>!prev) }
          width={30}
          height={30}
        >
          {" "}
        </Menu>
      </main>
    </nav>
  );
};

export default NavBar;
