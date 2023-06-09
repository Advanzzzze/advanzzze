import { cn } from '@/lib/utils';

export default function BlurSpot({
	className,
	size,
	color,
}: {
	className?: string;
	size: 'small' | 'medium' | 'big';
	color: 'purple' | 'blue' | 'orange';
}) {
	const isSmall = size == 'small';
	const isMedium = size == 'medium';
	const isBig = size == 'big';

	const isPurple = color == 'purple';
	const isBlue = color == 'blue';
	const isOrange = color == 'orange';

	const random = Math.round(Math.random() * 2);

	return (
		<div
			className={cn(
				`absolute -z-50 bg-gradient-radial from-10% to-70% animate-pulse duration-10s dela ease-in-out ${className}`,
				{
					'from-adv-purple-300': isPurple,
					'from-adv-blue-300': isBlue,
					'from-adv-orange-300': isOrange,
					'w-[570px] h-[490px]': isSmall,
					'w-[980px] h-[1010px]': isMedium,
					'w-[1570px] h-[1990px]': isBig,
					'delay-0': random == 0,
					'delay-100': random == 1,
					'delay-200': random == 2,
				}
			)}
		/>
	);
}
