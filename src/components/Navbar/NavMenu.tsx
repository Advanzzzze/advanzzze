'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavLink from './NavLink';

export default function NavMenu() {
	const pathName = usePathname().split('/')[1];

	return (
		<ul className='grid grid-flow-col col gap-2'>
			<li>
				<NavLink pathName={pathName} href='/' title='Home' />
			</li>
			<li>
				<NavLink pathName={pathName} href='/em Breve' title='Em Breve' disabled />
			</li>
		</ul>
	);
}
