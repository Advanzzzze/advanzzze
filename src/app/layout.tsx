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
			<body
				className={cn('h-screen w-screen pt-16 overflow-x-hidden overflow-y-hidden', {
					'bg-black text-white dark': isDarkTheme,
				})}>
				<ScrollContext.Provider value={scrollPosition}>
					<Navbar />
					{children}
				</ScrollContext.Provider>
			</body>
		</html>
	);
}
