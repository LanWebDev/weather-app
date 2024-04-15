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
          <div className="typewritser text-gray-200 flex">
            <span className="tracking-[0.1rem] ">{"</> "}</span>
            Made with{" "}
            <span className="animate-heartbeat mx-1">
              <svg
                className="h-5 w-5 text-red-500 fill-current"
                viewBox="0 0 24 24"
                fill="full"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </span>{" "}
            by{" "}
            <span className="text-green-300 font-bold mx-1"> Lan Skrobar</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
