import Link from 'next/link';

export default function HomeHero() {
	return (
		<div className='flex flex-col items-center gap-12 overflow-hidden py-32'>
			<h1 className='bg-gradient-to-br from-white to-slate-400 bg-clip-text p-4 text-center text-4xl font-semibold text-transparent sm:w-2/3 sm:text-6xl'>
				Advanzzze sua presença digital
			</h1>
			<div className='px-2 text-center text-lg text-slate-400'>
				<p>
					Desenvolvedores especializados em sites, aplicativos e designs, impulsionando seu sucesso digital.
				</p>
				<p>Junte-se a nós e avance para o próximo nível.</p>
			</div>
			<Link
				href={'https://www.instagram.com/advanzzze/'}
				target='_blank'
				className='rounded-full bg-gradient-to-br from-adv-blue-300 via-adv-purple-300 to-adv-orange-300 bg-[length:120px_80px] px-4 py-2 transition-all duration-300 hover:bg-right-bottom'>
				Contatar
			</Link>
		</div>
	);
}
