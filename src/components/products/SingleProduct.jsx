import React from "react";
import { Grid, Button } from "@material-ui/core";
import productService from "./../../services/ProductsService";
import { withRouter } from "react-router";
const SingleProduct = (props) => {
  const { product, onDelete, history } = props;
  console.log(props);
  return (
    <Grid item xs={4}>
      <h2 className="name">
        {product.name}{" "}
        <Button className="but"
          variant="contained"
          color="primary"
          onClick={(e) => {
            console.log("navigate to update");
            history.push("/products/update/" + product._id);
          }}
        >
          Edit
        </Button>{" "}
        <Button className="but"
          variant="contained"
          color="secondary"
          onClick={(e) => {
            productService
              .deleteProduct(product._id)
              .then((data) => {
                console.log(data);
                onDelete();
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Delete
        </Button>
      </h2>
      <p>{product.price}</p>
      <hr />
    </Grid>
  );
};

export default withRouter(SingleProduct);
