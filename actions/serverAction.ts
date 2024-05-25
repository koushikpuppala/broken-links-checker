'use server'

import { linkChecker } from '@/actions'

export const serverAction = async (prevState: any, formData: FormData) => {
	let url = formData.get('url')?.toString().toLocaleLowerCase()

	return await linkChecker(url)
}
