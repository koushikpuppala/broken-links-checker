'use client'

import { linkChecker } from '@/actions'
import { InputComponent, LinksTableComponent } from '@/components'
import classNames from 'classnames'
import { useState } from 'react'

const OnClickComponent = () => {
	const [links, setLinks] = useState<string[] | null>(null)
	const [message, setMessage] = useState<string | null>(null)
	const [loading, setLoading] = useState<boolean>(false)
	const [disabled, setDisabled] = useState(true)
	let [url, setUrl] = useState<string | null>(null)

	return (
		<form className='mx-auto mb-0 mt-4 flex flex-col items-center space-y-4'>
			<InputComponent url={url} setUrl={setUrl} setDisabled={setDisabled} />
			<button
				aria-disabled={loading || disabled}
				disabled={loading || disabled}
				type='submit'
				onClick={async e => {
					e.preventDefault()
					setLoading(true)
					const { links, message } = await linkChecker(url)
					setLinks(links)
					setMessage(message)
					setLoading(false)
				}}
				className={classNames({
					'inline-block rounded-lg px-5 py-2 text-sm font-medium': true,
					'bg-gray-200 text-gray-900': loading || disabled,
					'bg-blue-500 text-white': !loading && !disabled,
				})}>
				{loading ? 'Checking...' : 'Check'}
			</button>
			<LinksTableComponent links={links} message={message} />
		</form>
	)
}

export default OnClickComponent
