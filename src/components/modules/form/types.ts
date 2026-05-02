import { Form as FormType } from '@/payload/payload-types';

export type FieldsType = NonNullable<FormType['fields']>[number];
export type BlockType = FieldsType['blockType'];
export type TextFieldType = Extract<FieldsType, { blockType: 'text' }>;
export type TextareaFieldType = Extract<FieldsType, { blockType: 'textarea' }>;
export type NumberFieldType = Extract<FieldsType, { blockType: 'number' }>;
export type EmailFieldType = Extract<FieldsType, { blockType: 'email' }>;
export type MessageFieldType = Extract<FieldsType, { blockType: 'message' }>;
export type CheckboxFieldType = Extract<FieldsType, { blockType: 'checkbox' }>;
export type SelectFieldType = Extract<FieldsType, { blockType: 'select' }>;
export type CountryFieldType = Extract<FieldsType, { blockType: 'country' }>;
export type StateFieldType = Extract<FieldsType, { blockType: 'state' }>;
export type FormDataType = Record<string, string | boolean | number>;
