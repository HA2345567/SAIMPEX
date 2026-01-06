import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    console.warn("Clerk Publishable Key is missing in .env")
}

createRoot(document.getElementById("root")!).render(
    <ClerkProvider publishableKey={PUBLISHABLE_KEY || "pk_test_placeholder_key_replace_me"} afterSignOutUrl="/">
        <App />
    </ClerkProvider>
);
