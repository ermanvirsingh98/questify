"use client"
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes";
import {
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
type Props = {
    children: React.ReactNode
}

const queryClient = new QueryClient();

const Providers = ({ children }: ThemeProviderProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
                <SessionProvider>{children}</SessionProvider>
            </NextThemesProvider>
        </QueryClientProvider>
    )
}

export default Providers