'use client';

import Navbar from '@/components/Navbar';
import './globals.css';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';
import { ScrollContext } from '@/lib/contexts';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const [isDarkTheme, setIsDarkTheme] = useState(true);
	const [scrollPosition, setScrollPosition] = useState(0);

	const handleScroll = () => {
		const position = window.scrollY;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<html lang='en'>
			<head>
				<title>Advanzzze</title>
				<meta
					name='description'
					content='Desenvolvedores especializados em sites, aplicativos e designs, impulsionando seu sucesso digital. Junte-se a nós e avance para o próximo nível.'
				/>
			</head>
			<body
				className={cn(`h-screen w-screen overflow-hidden pt-16 ${inter.className}`, {
					'dark bg-black text-white': isDarkTheme,
				})}>
				<ScrollContext.Provider value={scrollPosition}>
					<Navbar />
					{children}
				</ScrollContext.Provider>
			</body>
		</html>
	);
}
