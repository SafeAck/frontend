'use client'

import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ children }: { readonly children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>
}