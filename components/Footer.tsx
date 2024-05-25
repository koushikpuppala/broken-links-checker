import Link from 'next/link'

const FooterComponent = ({ toggle }: { toggle?: boolean }) => {
	return (
		<div className='fixed bottom-0 left-0 w-full pt-10 text-center'>
			<p className='pb-4 pt-2 text-xs/relaxed text-gray-500 backdrop-blur-md dark:text-gray-100'>
				Created by {}
				<Link
					href='https://koushikpuppala.com'
					target='_blank'
					className='text-gray-700 transition hover:text-gray-700/75 dark:text-gray-400 dark:hover:text-gray-400/75'>
					Koushikpuppala
				</Link>
				. Open sourced on {}
				<Link
					href='https://koushikpuppala.com/github/broken-links-checker'
					target='_blank'
					className='text-gray-700 transition hover:text-gray-700/75 dark:text-gray-400 dark:hover:text-gray-400/75'>
					GitHub
				</Link>
				{/* {toggle ? '. For formActions method ' : '. For onClick event method '}
				<Link
					href={toggle ? '/' : '/vercel'}
					className='text-gray-700 transition hover:text-gray-700/75 dark:text-gray-400 dark:hover:text-gray-400/75'>
					Click Here
				</Link> */}
			</p>
		</div>
	)
}

export default FooterComponent
