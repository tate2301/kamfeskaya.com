import ApplicationLayout from 'components/layouts/ApplicationLayout';
import { ChartBarIcon, FolderIcon } from '@heroicons/react/solid';
import { HomeIcon } from '@radix-ui/react-icons';
import { ReactNode } from 'react';

const navigation = [
  { name: 'Dashboard', href: '', icon: HomeIcon, current: true },
  { name: 'Workspaces', href: 'workspaces', icon: FolderIcon, current: false },
  { name: 'Reports', href: 'reports', icon: ChartBarIcon, current: false },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

export default function RingproLayout({
  children,
  name,
}: {
  children: ReactNode;
  name?: string;
}) {
  return (
    <ApplicationLayout
      name={name ? name + ' - ' : undefined ?? 'RingPro'}
      navigation={navigation.map((m) => ({
        ...m,
        href: `/reblur/ringpro/${m.href}`,
      }))}
      userNavigation={userNavigation}
    >
      {children}
    </ApplicationLayout>
  );
}
