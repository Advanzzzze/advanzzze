import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function NavLink({
	pathName,
	href,
	title,
	disabled,
}: {
	pathName: string;
	href: string;
	title: string;
	disabled?: boolean;
}) {
	const LinkHrefPath = href.split('/')[1];

	return (
		<>
			<Link href={href} className={cn('peer p-2', { 'pointer-events-none text-slate-400': disabled })}>
				{title}
			</Link>
			<div
				className={cn(
					'pointer-events-none h-px w-full scale-x-0 bg-white transition peer-hover:scale-x-100',
					{
						'scale-x-100': pathName == LinkHrefPath,
					}
				)}
			/>
		</>
	);
}
