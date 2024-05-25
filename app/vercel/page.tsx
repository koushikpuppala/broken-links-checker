import { FooterComponent, OnClickComponent } from '@/components'

const HomePage = () => {
	return (
		<div className='mx-auto min-h-screen max-w-screen-xl px-4 py-8 text-center sm:px-6 sm:py-12 lg:px-8'>
			<h1 className='text-2xl font-bold text-gray-900 dark:text-gray-50 sm:text-3xl'>
				Broken Links Checker (onClick event method) 🎉
			</h1>
			<p className='mt-1.5 text-sm text-gray-500'>
				Check for broken links on your website by entering the domain name below.
			</p>
			<OnClickComponent />
			<FooterComponent toggle />
		</div>
	)
}

export default HomePage
