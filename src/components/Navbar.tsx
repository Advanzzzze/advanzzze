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
			className={`fixed top-0 flex w-full flex-col justify-evenly px-2 transition-colors sm:px-44 ${
				scrollPosition > 50 ? 'bg-black/20' : 'bg-black/10'
			} select-none backdrop-blur-md`}>
			<div className='flex h-14 w-full items-center justify-between py-2'>
				<Link href={'/'} className='flex h-full items-center'>
					<div className='relative aspect-square h-full'>
						<Image src={'/images/advanzzze_logo.png'} alt='Advanzzze Logo' fill className='object-contain' />
					</div>
					<p className='text-xl font-semibold'>Advanzzze</p>
				</Link>
				<div className='absolute left-1/2 flex h-full -translate-x-1/2 items-center max-sm:hidden'>
					<NavMenu />
				</div>
				<div className='flex h-full items-center justify-end'></div>
			</div>
			<div className='h-1 w-full bg-gradient-radial from-adv-purple-300 to-70%' />
		</nav>
	);
}
