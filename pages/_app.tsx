import React from "react";
import {
  ChakraProvider,
  Container,
  VStack,
  Image,
  Heading,
  Text,
  Box,
  Divider,
} from "@chakra-ui/react";
import { AppProps } from "next/app";
import theme from "@/theme";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Box padding={4}>
        <Container
          backgroundColor="white"
          boxShadow="md"
          maxWidth="container.xl"
          padding={4}
          borderRadius="lg"
        >
          <VStack marginBottom={6}>
            <Image borderRadius={999} src="//placehold.it/128x128"></Image>
            <Heading>Tienda PYME</Heading>
            <Text>Tienda bajo costo para PYME</Text>
          </VStack>
          <Divider marginY={6} />
          <Component {...pageProps} />
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default App;
