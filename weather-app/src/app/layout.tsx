import "./globals.css";
import { ContextProvider } from "./providers/ContextProviders";
import Sun from "@/assets/icons/clear-day.svg";

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
        <footer className="py-4 ">
          <div className="group flex items-center justify-center gap-1 text-gray-200">
            <span className="transition ease-out hover:scale-120 cur">
              &#x276E;
            </span>
            Made with love by Lan Skrobar
          </div>
        </footer>
      </body>
    </html>
  );
}
