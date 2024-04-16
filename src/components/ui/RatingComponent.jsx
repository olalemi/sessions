import Rating from "@mui/material/Rating";

const RatingComponent = ({ product, ...props }) => {
  return (
    <Rating
      name="read-only"
      value={product.rating.rate}
      readOnly
      precision={0.5}
      size="small"
      sx={{ mt: 1 }}
      {...props}
    />
  );
};

export default RatingComponent;
