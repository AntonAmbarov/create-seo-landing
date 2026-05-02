'use client';

import { Field, FieldError, FieldLabel } from '../../ui/field';
import { Input } from '../../ui/input';
import { useFormContext } from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import {
	BlockType,
	CheckboxFieldType,
	CountryFieldType,
	EmailFieldType,
	MessageFieldType,
	NumberFieldType,
	SelectFieldType,
	StateFieldType,
	TextareaFieldType,
	TextFieldType,
} from './types';

function FieldWrapper({
	children,
	width,
	className,
}: {
	children: React.ReactNode;
	width?: number | null;
	className?: string;
}) {
	return (
		<div className={className} style={{ width: width ? `${width}%` : '100%' }}>
			{children}
		</div>
	);
}

function TextField({ field }: { field: TextFieldType }) {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	const error = errors[field.name];

	return (
		<FieldWrapper width={field.width}>
			<Field>
				<FieldLabel htmlFor={field.name}>
					{field.label}
					{field.required && <span className="ml-1 text-red-500">*</span>}
				</FieldLabel>
				<Input
					id={field.name}
					required={!!field.required}
					{...register(`${field.name}`, {
						required: field.required ? `${field.label} is required` : false,
					})}
				/>
				{error && <FieldError>{error.message as string}</FieldError>}
			</Field>
		</FieldWrapper>
	);
}
function TextareaField({ field }: { field: TextareaFieldType }) {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	const error = errors[field.name];

	return (
		<FieldWrapper width={field.width}>
			<Field>
				<FieldLabel htmlFor={field.name}>
					{field.label}
					{field.required && <span className="ml-1 text-red-500">*</span>}
				</FieldLabel>
				<Textarea
					id={field.name}
					required={!!field.required}
					defaultValue={field.defaultValue || undefined}
					rows={4}
					{...register(field.name, {
						required: field.required ? `${field.label} is required` : false,
					})}
				/>
				{error && <FieldError>{error.message as string}</FieldError>}
			</Field>
		</FieldWrapper>
	);
}

function NumberField({ field }: { field: NumberFieldType }) {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	const error = errors[field.name];

	return (
		<FieldWrapper width={field.width}>
			<Field>
				<FieldLabel htmlFor={field.name}>
					{field.label}
					{field.required && <span className="ml-1 text-red-500">*</span>}
				</FieldLabel>
				<Input
					id={field.name}
					type="number"
					required={!!field.required}
					{...register(field.name, {
						required: field.required ? `${field.label} is required` : false,
						valueAsNumber: true,
					})}
				/>
				{error && <FieldError>{error.message as string}</FieldError>}
			</Field>
		</FieldWrapper>
	);
}

function EmailField({ field }: { field: EmailFieldType }) {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	const error = errors[field.name];

	return (
		<FieldWrapper width={field.width}>
			<Field>
				<FieldLabel htmlFor={field.name}>
					{field.label}
					{field.required && <span className="ml-1 text-red-500">*</span>}
				</FieldLabel>
				<Input
					id={field.name}
					type="email"
					required={!!field.required}
					{...register(field.name, {
						required: field.required ? `${field.label} is required` : false,
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: 'Please enter a valid email address',
						},
					})}
				/>
				{error && <FieldError>{error.message as string}</FieldError>}
			</Field>
		</FieldWrapper>
	);
}

function MessageField({ field }: { field: MessageFieldType }) {
	const getText = (content: MessageFieldType['message']): string => {
		if (!content?.root?.children) return '';

		const texts: string[] = [];
		const extractText = (node: any) => {
			if (node.type === 'text' && node.text) {
				texts.push(node.text);
			}
			if (node.children) {
				node.children.forEach(extractText);
			}
		};

		content.root.children.forEach(extractText);
		return texts.join(' ');
	};

	return (
		<FieldWrapper width={100}>
			<div className="bg-muted rounded-md p-4">
				<p className="text-muted-foreground text-sm">{getText(field.message)}</p>
			</div>
		</FieldWrapper>
	);
}

function CheckboxField({ field }: { field: CheckboxFieldType }) {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	const error = errors[field.name];

	return (
		<FieldWrapper width={field.width}>
			<Field>
				<div className="flex items-center space-x-2">
					<Checkbox
						id={field.name}
						defaultChecked={field.defaultValue || false}
						{...register(field.name, {
							required: field.required ? `${field.label} must be accepted` : false,
						})}
					/>
					<FieldLabel htmlFor={field.name} className="cursor-pointer">
						{field.label}
						{field.required && <span className="ml-1 text-red-500">*</span>}
					</FieldLabel>
				</div>
				{error && <FieldError>{error.message as string}</FieldError>}
			</Field>
		</FieldWrapper>
	);
}

function SelectField({ field }: { field: SelectFieldType }) {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	const error = errors[field.name];

	return (
		<FieldWrapper width={field.width}>
			<Field>
				<FieldLabel htmlFor={field.name}>
					{field.label}
					{field.required && <span className="ml-1 text-red-500">*</span>}
				</FieldLabel>
				<select
					id={field.name}
					required={!!field.required}
					defaultValue={field.defaultValue || ''}
					className="bg-background w-full rounded-md border px-3 py-2"
					{...register(field.name, {
						required: field.required ? `${field.label} is required` : false,
					})}
				>
					<option value="">Select {field.label}</option>
					{field.options?.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
				{error && <FieldError>{error.message as string}</FieldError>}
			</Field>
		</FieldWrapper>
	);
}

function CountryField({ field }: { field: CountryFieldType }) {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	const error = errors[field.name];

	const countries = [
		{ value: 'US', label: 'United States' },
		{ value: 'GB', label: 'United Kingdom' },
		{ value: 'DE', label: 'Germany' },
		{ value: 'FR', label: 'France' },
		{ value: 'IT', label: 'Italy' },
		{ value: 'ES', label: 'Spain' },
		{ value: 'RU', label: 'Russia' },
	];

	return (
		<FieldWrapper width={field.width}>
			<Field>
				<FieldLabel htmlFor={field.name}>
					{field.label || 'Country'}
					{field.required && <span className="ml-1 text-red-500">*</span>}
				</FieldLabel>
				<select
					id={field.name}
					required={!!field.required}
					className="bg-background w-full rounded-md border px-3 py-2"
					{...register(field.name, {
						required: field.required ? `${field.label || 'Country'} is required` : false,
					})}
				>
					<option value="">Select country</option>
					{countries.map((country) => (
						<option key={country.value} value={country.value}>
							{country.label}
						</option>
					))}
				</select>
				{error && <FieldError>{error.message as string}</FieldError>}
			</Field>
		</FieldWrapper>
	);
}

function StateField({ field }: { field: StateFieldType }) {
	const {
		register,
		formState: { errors },
		watch,
	} = useFormContext();
	const error = errors[field.name];
	// const selectedCountry = watch('country');

	const states = [
		{ value: 'CA', label: 'California' },
		{ value: 'NY', label: 'New York' },
		{ value: 'TX', label: 'Texas' },
	];

	return (
		<FieldWrapper width={field.width}>
			<Field>
				<FieldLabel htmlFor={field.name}>
					{field.label || 'State'}
					{field.required && <span className="ml-1 text-red-500">*</span>}
				</FieldLabel>
				<select
					id={field.name}
					required={!!field.required}
					className="bg-background w-full rounded-md border px-3 py-2"
					{...register(field.name, {
						required: field.required ? `${field.label || 'State'} is required` : false,
					})}
				>
					<option value="">Select state</option>
					{states.map((state) => (
						<option key={state.value} value={state.value}>
							{state.label}
						</option>
					))}
				</select>
				{error && <FieldError>{error.message as string}</FieldError>}
			</Field>
		</FieldWrapper>
	);
}

export const fieldsComponents: Record<BlockType, any> = {
	text: TextField,
	textarea: TextareaField,
	number: NumberField,
	email: EmailField,
	message: MessageField,
	checkbox: CheckboxField,
	select: SelectField,
	country: CountryField,
	state: StateField,
};
