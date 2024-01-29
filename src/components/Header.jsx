import { Button, Navbar, NavbarCollapse, TextInput } from "flowbite-react";
import { Link } from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'
import Home from './../pages/Home';
import About from './../pages/About';
import Signin from './../pages/Signin';

export default function Header() {
  return (
    <Navbar className="border-b-2">
      <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Prajwals</span>
        Blog
      </Link>
      <form>
        <TextInput type="text" placeholder="Search..." rightIcon={AiOutlineSearch} className="hidden lg:inline"/>
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
            <FaMoon/>
        </Button>
        <Link >
        <Button gradientDuoTone="purpleToBlue">
           Sing IN
        </Button>
        </Link>        
      </div>
      <NavbarCollapse>
            <Navbar.Link>
                <Link to="/">
                    Home
                </Link>
            </Navbar.Link>
            <Navbar.Link>
                <Link to="/about">
                    About
                </Link>
            </Navbar.Link>
            <Navbar.Link>
                <Link to="/sig IN">
                    Signin
                </Link>
            </Navbar.Link>
        </NavbarCollapse>
    </Navbar>
  )
}
