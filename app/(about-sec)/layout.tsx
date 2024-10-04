import Nav from "../components/nav";
export default function RootLayout({
    children,
} : Readonly< {
    children: React.ReactNode;
}>) {
    return (
        <body className="bg-green-100">
            <div>
                <Nav/>
                {children}
            </div>
        </body>
    );
}