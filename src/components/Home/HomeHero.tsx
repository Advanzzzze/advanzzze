import Link from 'next/link';

export default function HomeHero() {
	return (
		<div className='py-32 flex flex-col items-center gap-12 overflow-hidden'>
			<h1 className='sm:w-2/3 text-4xl sm:text-6xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-400 p-4'>
				Advanzzze sua presença digital
			</h1>
			<div className='text-lg text-center px-2 text-slate-400'>
				<p>
					Desenvolvedores especializados em sites, aplicativos e designs, impulsionando seu sucesso digital.
				</p>
				<p>Junte-se a nós e avance para o próximo nível.</p>
			</div>
			<Link
				href={'https://www.instagram.com/advanzzze/'}
				target='_blank'
				className='py-2 px-4 rounded-full bg-gradient-to-br from-adv-purple-300 from-10% via-adv-blue-300 to-adv-orange-300 to-90% transition-all duration-300 bg-[length:100px_70px] hover:bg-right-bottom'>
				Contatar
			</Link>
		</div>
	);
}
