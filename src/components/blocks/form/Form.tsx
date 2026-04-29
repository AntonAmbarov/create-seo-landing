'use client';

import type { FormBlock as FormBlockType } from '@/payload/payload-types';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { FieldsType } from './types';
import { fieldsComponents } from './Fields';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layouts/Container';
import { cn } from '@/lib/utilities/ui';

async function formAction(data: FieldsType): Promise<any> {
	console.log(data);
}

export function FormBlock({ form }: FormBlockType) {
	if (typeof form === 'number') return null;

	const { fields, title, submitButtonLabel } = form;

	if (!fields) return null;

	const methods = useForm<FieldsType>();

	const handler: SubmitHandler<FieldsType> = async (data) => {
		try {
			await formAction(data);
		} catch (error) {
			console.error(error);
		}
	};

	console.log('FormBlock');

	return (
		<Container width="narrow" className={cn('bg-green-700')}>
			<div className={cn('bg-amber-800')}>
				<h2>{title}</h2>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(handler)}>
						{fields.map((field, index) => {
							console.log('Получаем поле: ', field);

							const FieldComponent = fieldsComponents[field.blockType];
							if (!FieldComponent) return null;
							return <FieldComponent key={index} field={field} />;
						})}
						<Button>{submitButtonLabel}</Button>
					</form>
				</FormProvider>
			</div>
		</Container>
	);
}
