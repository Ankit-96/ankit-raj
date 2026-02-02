import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Container from '../components/layout/Container'

import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Work from '../components/sections/Work'
import Skills from '../components/sections/Skills'
import Contact from '../components/sections/Contact'

export default function App() {
	return (
		<>
			<Header />

			<main>
				<Hero />

				<Container>
					<About />
					<Work />
					<Skills />
					<Contact />
				</Container>
			</main>

			<Footer />
		</>
	)
}
