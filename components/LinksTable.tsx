'use client'

import Link from 'next/link'
import { useFormStatus } from 'react-dom'

const LinksTableComponent = ({ links, message }: { links: string[] | null; message: string | null }) => {
	const { pending } = useFormStatus()

	if (pending) {
		return (
			<div className='mx-auto mt-8 w-full max-w-md rounded-md border border-blue-300 p-4 shadow'>
				<div className='flex animate-pulse space-x-4'>
					<div className='flex-1 space-y-6 py-1'>
						<div className='space-y-3'>
							<div className='h-2 rounded bg-slate-700'></div>
							{/* <div className='grid grid-cols-3 gap-4'>
								<div className='h-2 bg-slate-700 rounded col-span-2'></div>
								<div className='h-2 bg-slate-700 rounded col-span-1'></div>
							</div> */}
							<div className='h-2 rounded bg-slate-700'></div>
						</div>
					</div>
				</div>
			</div>
		)
	}

	return links ? (
		<div className='mx-auto mt-8 flex max-w-md flex-col space-y-2'>
			{links.map(link => (
				<Link
					className='rounded-lg border border-gray-500 px-4 py-2 font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700'
					target='_blank'
					href={link}
					key={link}
					rel='noopener noreferrer'>
					<span className='text-nowrap line-clamp-1'>{link}</span>
				</Link>
			))}
		</div>
	) : (
		message && (
			<div className='mt-8 w-full max-w-md'>
				<p className='overflow-auto rounded-lg border border-gray-500 px-4 py-2 text-sm font-medium text-gray-500'>
					{message}
				</p>
			</div>
		)
	)
}

export default LinksTableComponent
