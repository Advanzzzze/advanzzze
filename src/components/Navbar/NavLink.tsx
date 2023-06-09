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
			<Link href={href} className={cn('p-2 peer', { 'text-slate-400 pointer-events-none': disabled })}>
				{title}
			</Link>
			<div
				className={cn(
					'h-px w-full bg-white pointer-events-none transition scale-x-0 peer-hover:scale-x-100',
					{
						'scale-x-100': pathName == LinkHrefPath,
					}
				)}
			/>
		</>
	);
}
