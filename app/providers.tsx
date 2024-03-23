'use client'

import { ChakraProvider } from '@chakra-ui/react'
import theme from "./theme";

export function Providers({ children }: { readonly children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}