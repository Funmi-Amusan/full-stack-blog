import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./routes/LoginPage.tsx";
import Registerpage from "./routes/Registerpage.tsx";
import PostsListPage from "./routes/PostsListPage.tsx";
import PostDetailsPage from "./routes/PostDetailsPage.tsx";
import Homepage from "./routes/Homepage.tsx";
import MainLayout from "./components/Layout/MainLayout.tsx";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route index element={<Homepage />} />
                        {/* <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<Registerpage />} /> */}

                        <Route path="login" element={<LoginPage />} />
                        <Route path="register" element={<Registerpage />} />

                        <Route path="posts">
                            <Route index element={<PostsListPage />} />
                            <Route path=":slug" element={<PostDetailsPage />} />
                            {/* <Route path="trending" element={<Trending />} /> */}
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ClerkProvider>
    </StrictMode>
);
