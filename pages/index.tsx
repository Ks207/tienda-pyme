import api from "@/product/api";
import { Product } from "@/product/types";
import { GetStaticProps } from "next";
import React from "react";
import { Button, Grid, Stack, Text, Image } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

interface Props {
  products: Product[];
}

function parseCurrency(value: number): string {
  return value.toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
  });
}

const IndexRoute: React.FC<Props> = ({ products }) => {
  const [cart, setCart] = React.useState<Product[]>([]);
  const text = React.useMemo(() => {
    return cart
      .reduce(
        (message, product) =>
          message.concat(
            `* ${product.title} - ${parseCurrency(product.price)}\n`
          ),
        ``
      )
      .concat(
        `\nTotal: ${parseCurrency(
          cart.reduce((total, product) => total + product.price, 0)
        )}`
      );
  }, [cart]);

  return (
    <Stack spacing={6}>
      <Grid gridGap={6} templateColumns="repeat(auto-fill, minmax(240px, 1fr))">
        {products.map((product) => (
          <Stack
            borderRadius="md"
            padding={4}
            backgroundColor="gray.100"
            key={product.id}
            spacing={3}
          >
            <Image
              alt={product.title}
              borderTopRadius="md"
              maxHeight={128}
              objectFit="cover"
              src={product.image}
            />
            <Stack spacing={1}>
              <Text>{product.title}</Text>
              <Text fontSize="sm" fontWeight="500" color="green.500">
                {parseCurrency(product.price)}
              </Text>
            </Stack>
            <Button
              size="sm"
              variant="outline"
              colorScheme="primary"
              onClick={() => {
                setCart((cart) => cart.concat(product));
              }}
            >
              Agregar
            </Button>
          </Stack>
        ))}
      </Grid>
      {Boolean(cart.length) && (
        <Button
          size="lg"
          width="fit-content"
          margin="auto"
          bottom={0}
          position="sticky"
          as={Link}
          target="_blank"
          href={`https://wa.me/+56973541415?text=${encodeURIComponent(text)}`}
          colorScheme="whatsapp"
          leftIcon={
            <Image
              src="https://icongr.am/fontawesome/whatsapp.svg?size=32&color=ffffff

"
            />
          }
        >
          Completar Pedido (
          {cart.length > 1
            ? `${cart.length} Productos`
            : `${cart.length} Producto`}
          )
        </Button>
      )}
    </Stack>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await api.list();
  return {
    revalidate: 10,
    props: {
      products,
    },
  };
};

export default IndexRoute;
