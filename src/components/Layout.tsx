import React from 'react';


interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-background font-sans antialiased">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 items-center">
                    <div className="font-bold text-lg">Clinic Workflow Sandbox</div>
                </div>
            </header>

            <main className="flex-1">
                {children}
            </main>

            <footer className="border-t py-4">
                <div className="container flex justify-center items-center h-14 text-sm text-muted-foreground">
                    Built as a synthetic demo environment for experimenting with clinician productivity tools.
                </div>
            </footer>
        </div>
    );
};
