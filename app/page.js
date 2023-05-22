import Image from 'next/image';

export default function Home() {
	return (
		<main className='flex justify-center items-center h-screen'>
			<a
				href='https://github.com/advanzzze'
				className='
          absolute
          top-2/3
        text-white/20
          text-6xl
          font-bold
          transition
          duration-300
          hover:text-white/80
          hover:scale-105
          border-b
          border-black/0
          hover:border-white
          '>
				<p>Advanzzze.</p>
			</a>
			<div className=' shadow-[0_0_50px_rgba(126,34,206,0.25)] bg-purple-700/10 rounded-full animate-pulse'>
				<Image src={'/images/our_galaxy.png'} alt='Galaxy gif' width={100} height={100} />
			</div>
			<div className='absolute bottom-1 text-white/10'>
				<p>Advanzzze © 2023</p>
			</div>
		</main>
	);
}
