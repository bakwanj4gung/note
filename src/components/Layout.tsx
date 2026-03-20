import { Outlet } from 'react-router';
import Navbar from './Navbar';

export default function Layout() {
    return (
        <div className="size-full min-h-screen px-8 md:px-16 lg:px-32 xl:px-48">
			<div className="size-full min-h-screen p-2 text-dark dark:text-light font-noto transition-color">
				<Navbar />
				<main className="py-4 space-y-8">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
