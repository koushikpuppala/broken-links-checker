'use client'

import classNames from 'classnames'
import { useFormStatus } from 'react-dom'

const SubmitButtonComponent = ({ disabled }: { disabled: boolean }) => {
	const { pending } = useFormStatus()

	return (
		<button
			aria-disabled={pending || disabled}
			disabled={pending || disabled}
			type='submit'
			className={classNames({
				'inline-block rounded-lg px-5 py-2 text-sm font-medium': true,
				'bg-gray-200 text-gray-900': pending || disabled,
				'bg-blue-500 text-white': !pending && !disabled,
			})}>
			{pending ? 'Checking...' : 'Check'}
		</button>
	)
}

export default SubmitButtonComponent
