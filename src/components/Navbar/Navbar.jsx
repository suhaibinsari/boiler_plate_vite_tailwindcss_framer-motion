// src/Navbar.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'react-feather';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-blue-600 p-4">
			<div className="container mx-auto flex justify-between items-center">
				<div className="text-white font-bold text-xl">Brand</div>
				<div className="hidden md:flex space-x-4">
					<a href="#" className="text-white">Home</a>
					<a href="#" className="text-white">About</a>
					<a href="#" className="text-white">Services</a>
					<a href="#" className="text-white">Contact</a>
					<button className="bg-green-500 text-white px-4 py-2 rounded">Buy</button>
				</div>
				<div className="md:hidden">
					<button onClick={toggleMenu} className="text-white focus:outline-none">
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>
			<motion.div
				initial={{ height: 0 }}
				animate={{ height: isOpen ? 'auto' : 0 }}
				className="overflow-hidden md:hidden"
			>
				<div className="flex flex-col space-y-4 mt-4">
					<a href="#" className="text-white">Home</a>
					<a href="#" className="text-white">About</a>
					<a href="#" className="text-white">Services</a>
					<a href="#" className="text-white">Contact</a>
					<button className="bg-green-500 text-white px-4 py-2 rounded">Buy</button>
				</div>
			</motion.div>
		</nav>
	);
};

export default Navbar;

