'use client';

import type { Form as FormType } from '@/payload/payload-types';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { FormDataType } from './types';
import { fieldsComponents } from './Fields';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { cn } from '@/lib/utilities/ui';

interface FormComponentProps {
	form: FormType;
	action: (data: FormDataType) => Promise<void>;
}

export function FormComponent({ form, action }: FormComponentProps) {
	if (typeof form === 'number') return null;

	const { fields, submitButtonLabel } = form;

	if (!fields) return null;

	const methods = useForm<FormDataType>();

	const { isSubmitting } = methods.formState;

	const onSubmit: SubmitHandler<FormDataType> = async (data) => {
		await action(data);
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<div className={cn('space-y-6')}>
					{fields.map((field, index) => {
						const FieldComponent = fieldsComponents[field.blockType];
						if (!FieldComponent) return null;
						return <FieldComponent key={index} field={field} />;
					})}
					<Button
						type="submit"
						disabled={isSubmitting}
						size="lg"
						className={cn('w-full sm:w-auto')}
					>
						{isSubmitting && <Spinner data-icon="inline-start" />}
						{submitButtonLabel}
					</Button>
				</div>
			</form>
		</FormProvider>
	);
}
