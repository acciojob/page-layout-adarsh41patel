import React from "react";
import "./../styles/App.css";

const App = () => {
  const header = "Welcome to my website";
  const footer = "© 2023 My Website. All rights reserved.";
  return (
    <div>
      <PageLayout header={header} footer={footer}>
        <p className="font-serif text-2xl mb-6">
          This is the content of my website.
        </p>

        {/* Example: show the uploaded image for reference (local path provided) */}
        <div className="mt-6">
          <img
            src="/mnt/data/a150753e-54f0-4fc5-ad15-f0d8e0ee6d61.png"
            alt="page layout reference"
            className="w-full max-w-xl border"
          />
        </div>
      </PageLayout>
    </div>
  );
};

export default App;

export function PageLayout({ header, footer, children }) {
  return (
    <div className="min-h-screen p-8 bg-white text-gray-900">
      {/* Header area */}
      <header className="mb-8">
        {typeof header === "string" ? (
          <h1 className="font-serif text-6xl leading-tight">{header}</h1>
        ) : (
          header
        )}
      </header>

      {/* Main content */}
      <main className="mb-8 max-w-4xl">{children}</main>

      {/* Footer area */}
      <footer className="mt-auto">
        {typeof footer === "string" ? (
          <p className="font-serif text-xl">{footer}</p>
        ) : (
          footer
        )}
      </footer>
    </div>
  );
}
