import React from "react";
import { Formik, Form, Field } from "formik";
import { AddSchema } from "./schema/index.js";
import axios from "axios";
import { useNavigate } from "react-router";
import "./index.scss";

const AddPage = () => {
  const navigate = useNavigate();
  return (
    <div className="addPage">
      <img
        src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/background1.jpg"
        alt=""
        className="bg-img"
      />
      <div id="container">
        <div className="addBox">
          <h1>Add product</h1>
          <Formik
            initialValues={{
              name: "",
              imgUrl: "",
              price: "",
            }}
            validationSchema={AddSchema}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
              axios.post(`http://localhost:8080/products`, values);
              navigate("/");
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Field
                  name="name"
                  placeholder="Name of flower"
                  className="inputBox"
                />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
                <br />
                <Field
                  name="imgUrl"
                  placeholder="Image URL of flower"
                  className="inputBox"
                />
                {errors.imgUrl && touched.imgUrl ? (
                  <div>{errors.imgUrl}</div>
                ) : null}
                <br />
                <Field
                  name="price"
                  placeholder="Price of flower"
                  className="inputBox"
                />
                {errors.price && touched.price ? (
                  <div>{errors.price}</div>
                ) : null}
                <br />
                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddPage;
