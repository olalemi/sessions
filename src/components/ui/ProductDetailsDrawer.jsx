import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import RatingComponent from "./RatingComponent";
import CloseIcon from "@mui/icons-material/Close";
import {Box} from "@mui/material";
import { useQuery } from "react-query";
import { ProductService } from "../../api/productservice/ProductService";

const ProductDetailsDrawer = ({
  open,
  onClose,
  anchor,
  TransitionComponent,
  activeProduct,
}) => {
  const { data, isLoading, isError, error } = useQuery(
    ["product", activeProduct],
    () => ProductService.getProduct(activeProduct),
  );
  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        Loading...
      </Box>
    );
  }
  if (isError) {
    return <Box>Error: {error?.message}</Box>;
  }
  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      TransitionComponent={TransitionComponent}
      sx={{
        "& .MuiDrawer-paper": {
          width: { xs: "100vw", sm: "460px" },
          maxWidth: "100vw",
          height: "100%",
          maxHeight: "100vh",
          boxSizing: "border-box",
          transition: "width 0.3s ease",
        },
      }}
    >
      <Box
        sx={{
          px: 4,
          py: 1,
          borderBottom: "1px solid #f2f2f2",
          position: "sticky",
          inset: 0,
          zIndex: 1,
          backgroundColor: "white",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 8,
              color: "grey.500",
            }}
          >
            <CloseIcon />
          </IconButton>

          <Typography variant="h5">Product Details</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          p: 4,
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography variant="h3" sx={{ fontSize: "2rem" }}>
          {data.title}
        </Typography>

        <Typography sx={{ mt: 1, fontWeight: "bold", fontSize: "2.4rem" }}>
          ${data.price}
        </Typography>

        <RatingComponent product={data} size="large" />
        <Box sx={{ display: "flex" }}>
          <Box>
            <img
              src={data.image}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                display: "block",
                margin: "auto",
              }}
              alt={data.title}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ mt: 10, fontSize: "1.2rem" }}>
                {" "}
                {data.description}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default ProductDetailsDrawer;
