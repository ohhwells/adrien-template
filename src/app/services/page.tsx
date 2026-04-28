import { redirect } from 'next/navigation';

// Legacy /services route — redirect to /consultations.
export default function ServicesPage() {
  redirect('/consultations');
}
