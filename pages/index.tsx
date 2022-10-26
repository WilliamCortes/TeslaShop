import type { NextPage } from "next";
import { ShopLayout } from "@components/layouts";
import { Typography } from "@mui/material";

const Home: NextPage = () => {
  return (
    <ShopLayout
      title={"Tesla Shop"}
      description={"Encuentra los mejores productos"}
    >
      <Typography variant="h1" component="h1">
        Tienda
      </Typography>
      <Typography variant="h2" component="h2" sx={{mb:1}}>
        Todos los productos
      </Typography>
    </ShopLayout>
  );
};

export default Home;
