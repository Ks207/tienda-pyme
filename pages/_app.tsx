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
  Link,
  Center,
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
            <Image
              alt="imagen de un cartel de tienda abierta "
              maxHeight={128}
              borderRadius={999}
              src="https://res.cloudinary.com/dg4lwg1ih/image/upload/v1696959276/open-shop_do3eyy.avif"
            ></Image>
            <Heading>Tienda PYME</Heading>
            <Text>
              Tienda PYME utilizando{" "}
              <Link
                target="_blank"
                color="teal.500"
                href="https://docs.google.com/spreadsheets/d/1m7KrDR3dP3vzFcE0iF3bPV1stvomCwvLTN4pHq16xtg/edit?usp=sharing"
              >
                Google Sheets
              </Link>
              <Center>
                <Text fontSize="xs">Actualiza info cada 15 segundos</Text>
              </Center>
            </Text>
          </VStack>
          <Divider marginY={6} />
          <Component {...pageProps} />
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default App;
