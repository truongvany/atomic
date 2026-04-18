import './globals.css';

export const metadata = {
    title: 'Atomic — Trương Văn Ý',
    description: 'Cần mọi thứ về công nghệ, giày dép  thì liên hệ mình nhé.',
    icons: {
        icon: 'https://cdn.prod.website-files.com/683703490bc01e1b8c052e06/68381362603d6402ee03c00e_favicon.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning>{children}</body>
        </html>
    );
}
