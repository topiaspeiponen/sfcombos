import { PageLayout } from '../app/layouts/PageLayout'
import { Metadata } from 'next';

export const metadata : Metadata = {
  title: 'Home',
}

export default function Page() {
  return (
    <PageLayout>
      <div>This is an empty frontpage using the PageLayout layout</div>
    </PageLayout>
  )
}
