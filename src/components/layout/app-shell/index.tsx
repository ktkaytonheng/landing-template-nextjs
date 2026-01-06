import { ReactNode } from 'react';
import TopBar from '@/components/layout/components/topbar';
import SideBar from '@/components/layout/components/sidebar';
import Content from '@/components/layout/components/content';
import css from './index.module.scss';

export default function AppShell({ children }: { children: ReactNode }) {
    return (
        <>
            <TopBar />
            <div className={css['container']}>
                <SideBar className={css['sidebar']} />
                <Content>{children}</Content>
            </div>
        </>
    );
}
