import "./globals.css";
export const metadata = {
  title: "Password Generator",
  description: "Create Random Password",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
