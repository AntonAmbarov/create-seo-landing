import type { Form, FormBlock as FormBlockType } from '@/payload/payload-types';
import { FormComponent } from '../modules/form/Form';
import { consultationHandler } from '@/actions/consultation/submit';
import { Container } from '../common/Container';
import { getFormById } from '@/lib/queries/getForm';

async function getForm(form: Form | number) {
	if (typeof form === 'object' && form !== null) {
		return form;
	}
	if (typeof form === 'number') {
		return await getFormById(form);
	}
}

export async function FormBlock(formBlock: FormBlockType) {
	const { form } = formBlock;
	const formData = await getForm(form);
	if (!formData) return null;

	return (
		<Container width="narrow">
			<FormComponent form={formData} action={consultationHandler} />
		</Container>
	);
}
