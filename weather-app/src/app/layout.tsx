import "./globals.css";
import { ContextProvider } from "./providers/ContextProviders";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 bg-no-repeat bg-fixed ">
        <main>
          <ContextProvider>{children}</ContextProvider>
        </main>
        <footer className=" cursor-default grid place-items-center py-4">
          <div className="typewriter text-gray-200 ">
            <span className="tracking-[0.1rem] ">{"</> "}</span>
            Made with <span className="animate-heartbeat">❤️</span> by{" "}
            <span className="text-green-300 tracking-[0.025rem] font-bold">
              Lan Skrobar
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
