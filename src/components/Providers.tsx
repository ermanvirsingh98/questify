"use client"
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes";

type Props = {
    children: React.ReactNode
}

const Providers = ({ children }: ThemeProviderProps) => {
    return (
        <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
            <SessionProvider>{children}</SessionProvider>
        </NextThemesProvider>
    )
}

export default Providers