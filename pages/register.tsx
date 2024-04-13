import React, { useEffect } from "react";
import { Layout } from "../components";
export default function Register() {
    useEffect(() => {
        // Create a script element
        const script = document.createElement("script");
        script.src = "//embed.typeform.com/next/embed.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
             <Layout>
            <div data-tf-live="01H94JRWRYPZGCDBAN4T7F3M41"></div>
            </Layout>
        </div>
    );
}