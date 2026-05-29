import type { Form, ContactSectionBlock } from '@/payload/payload-types';
import { FormComponent } from '../modules/form/Form';
import { consultationHandler } from '@/actions/consultation/submit';
import { getFormById } from '@/lib/queries/getForm';
import { Card } from '../ui/card';
import { cn } from '@/lib/utilities/ui';
import { getContacts } from '@/lib/queries/getContacts';
import { Dribbble, Facebook, Linkedin, Mail, Phone, Twitter } from 'lucide-react';
import { LayoutWrapper } from '@/components/common/LayoutWrapper';
import { getLayoutSettings } from '@/lib/layout/utils';

async function getForm(form: Form | number) {
	if (typeof form === 'object' && form !== null) {
		return form;
	}
	if (typeof form === 'number') {
		return await getFormById(form);
	}
}

export async function ContactSection(props: ContactSectionBlock) {
	const { form, title, text, layoutSettings } = props;
	const formData = await getForm(form);
	if (!formData) return null;

	const { phone, email } = await getContacts();

	const settings = getLayoutSettings(layoutSettings);

	return (
		<LayoutWrapper settings={settings}>
			<div className="flex flex-col">
				<div className="mb-16 text-center">
					<h2 className="text-4xl font-bold">{title}</h2>
					<p className="text-muted-foreground mx-auto mt-4 max-w-lg text-lg">{text}</p>
				</div>
				<Card
					className={cn('grid grid-cols-1 gap-10 rounded-2xl bg-white p-8 lg:grid-cols-2 lg:p-10')}
				>
					<FormComponent form={formData} action={consultationHandler} />

					<div className="bg-linear-to-br flex flex-col justify-between rounded-xl from-gray-900 to-black lg:p-12">
						<div>
							<h3 className="mb-4 text-2xl font-bold text-white">Contact Information</h3>
							<p className="mb-12 max-w-lg text-gray-300">
								Fill up the form and our Team will get back to you within 24 hours.
							</p>
							<div className="space-y-6">
								<div className={cn('flex items-center gap-4')}>
									<div>
										<Phone />
									</div>
									<div>{phone}</div>
								</div>
								<div className={cn('flex items-center gap-4')}>
									<div>
										<Mail />
									</div>
									<div>{email}</div>
								</div>
							</div>
						</div>
						<div className="mt-12 flex items-center gap-6">
							<a
								href="#"
								className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-all hover:bg-white/20 hover:text-white"
							>
								<Twitter className="h-5 w-5" />
							</a>
							<a
								href="#"
								className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-all hover:bg-white/20 hover:text-white"
							>
								<Linkedin className="h-5 w-5" />
							</a>
							<a
								href="#"
								className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-all hover:bg-white/20 hover:text-white"
							>
								<Dribbble className="h-5 w-5" />
							</a>
							<a
								href="#"
								className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-all hover:bg-white/20 hover:text-white"
							>
								<Facebook className="h-5 w-5" />
							</a>
						</div>
					</div>
				</Card>
			</div>
		</LayoutWrapper>
	);
}
