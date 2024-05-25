'use client'

const SubmitButtonComponent = ({
	url,
	setUrl,
	setDisabled,
}: {
	url: string | null
	setUrl: (url: string) => void
	setDisabled: (disabled: boolean) => void
}) => {
	return (
		<input
			name='url'
			className='w-full max-w-md rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50'
			placeholder='Enter Domain Name (e.g. koushikpuppala.com)'
			type='text'
			autoComplete='off'
			value={url || ''}
			onChange={e => {
				const value = e.target.value.toLocaleLowerCase()
				// const regex = new RegExp(/^(https?:\/\/)?(www\.)?([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/)
				const regex = new RegExp(/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/)
				setDisabled(!regex.test(value))
				setUrl(value)
			}}
		/>
	)
}

export default SubmitButtonComponent
