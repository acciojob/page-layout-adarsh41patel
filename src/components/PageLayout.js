import React from "react";

// PageLayout.jsx
export default function PageLayout({ header, footer, children }) {
    return (
        <div>
            <header>{header}</header>

            <main>{children}</main>

            <footer>{footer}</footer>
        </div>
    );
}
