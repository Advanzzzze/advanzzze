import BlurSpot from '@/components/BlurSpot';
import HomeHero from '@/components/Home/HomeHero';

export const metadata = {
	title: 'Advanzzze',
	description:
		'Desenvolvedores especializados em sites, aplicativos e designs, impulsionando seu sucesso digital. Junte-se a nós e avance para o próximo nível.',
};

export default function Home() {
	return (
		<main className='flex justify-center overflow-y-hidden'>
			<BlurSpot className='-translate-y-2/3 translate-x-1/3' size='big' color='purple' />
			<BlurSpot className='right-0 translate-x-2/3 translate-y-1/4' size='big' color='orange' />
			<BlurSpot className='left-0 -translate-x-2/3' size='medium' color='blue' />
			<HomeHero />
		</main>
	);
}
