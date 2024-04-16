import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import RatingComponent from "./RatingComponent";
import { Grid } from "@mui/material";

function ProductCard({ product, onClick }) {
  return (<Grid sx={{ mt:{xs:15,md:5}, cursor: "pointer" }} item xs={12} sm={6} md={3} key={product.id}>
    <Card  sx={{ boxShadow: 2, p: 2, maxWidth: "300px", margin: "auto", zIndex :-3 }} onClick={onClick}>
      <Box component={"img"}
        src={product.image}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "contain",
          display: "block",
          margin: "auto",
          cursor: "pointer",
        }}
        alt="Product Image"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 1,
        }}
      >
        <Typography
          variant="h6"
          component="p"
          sx={{
            flexGrow: 1,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {product.title}
        </Typography>

        <RatingComponent product={product} />

        <Typography sx={{ mt: 1, fontWeight: "bold" }}>
          ${product.price}
        </Typography>
      </Box>
    </Card></Grid>
  );
}

export default ProductCard;
