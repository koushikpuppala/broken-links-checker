'use client'

import { useState } from 'react'
import { serverAction } from '@/actions'
import { useFormState } from 'react-dom'
import { InputComponent, LinksTableComponent, SubmitButtonComponent } from '@/components'

const initialState: {
	links: string[] | null
	message: string | null
} = {
	links: null,
	message: null,
}

const FormActionComponent = () => {
	const [state, formAction] = useFormState(serverAction, initialState)
	const [disabled, setDisabled] = useState(true)
	const [url, setUrl] = useState<string | null>(null)

	return (
		<form action={formAction} className='mx-auto mb-0 mt-4 flex flex-col items-center space-y-4'>
			<InputComponent url={url} setUrl={setUrl} setDisabled={setDisabled} />
			<SubmitButtonComponent disabled={disabled} />
			<LinksTableComponent links={state.links} message={state.message} />
		</form>
	)
}

export default FormActionComponent
