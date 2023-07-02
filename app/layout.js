import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "PassItOn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="main">
        <Provider>
          <Nav />
          {children}
        </Provider>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
