'use server';

import { FormDataType } from '@/components/modules/form/types';

export async function consultationHandler(data: FormDataType) {
	try {
		alert(data);
	} catch (error) {
		console.error(error);
	}
}
