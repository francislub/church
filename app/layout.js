import './css/globals.css';
import './css/style.css';
import Head from 'next/head';

export const metadata = {
    title: 'Banga Central Church',
    description: 'Developed by Leon Chirodza',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>
                { children }
            </body>
        </html>
    )
}