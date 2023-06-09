'use client';

import Image from 'next/image';
import NavMenu from './Navbar/NavMenu';
import Link from 'next/link';
import { useContext } from 'react';
import { ScrollContext } from '@/lib/contexts';
import { cn } from '@/lib/utils';

export default function Navbar() {
	const scrollPosition = useContext(ScrollContext);

	return (
		<nav
			className={`fixed top-0 w-full flex flex-col justify-evenly px-2 sm:px-44 transition-colors ${
				scrollPosition > 50 ? 'bg-black/20' : 'bg-black/10'
			} backdrop-blur-md select-none`}>
			<div className='w-full h-14 flex justify-between items-center py-2'>
				<Link href={'/'} className='h-full flex items-center'>
					<div className='relative h-full aspect-square'>
						<Image src={'/images/advanzzze_logo.png'} alt='Advanzzze Logo' fill className='object-contain' />
					</div>
					<p className='text-xl font-semibold'>Advanzzze</p>
				</Link>
				<div className='absolute max-sm:hidden left-1/2 -translate-x-1/2 h-full flex items-center'>
					<NavMenu />
				</div>
				<div className='h-full flex justify-end items-center'></div>
			</div>
			<div className='h-1 w-full bg-gradient-radial from-adv-purple-300 to-70%' />
		</nav>
	);
}
