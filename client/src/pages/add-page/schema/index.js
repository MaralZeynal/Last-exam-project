import * as Yup from "yup";

export const AddSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Short name!")
    .max(50, "Long name!")
    .required("Required"),
    imgUrl: Yup.string()
    .min(2, "Too Short!")
    // .max(50, "Too Long!")
    .required("Required"),
    price: Yup.number()
    .min(2, "Too Short!")
    // .max(50, "Too Long!")
    .required("Required"),
});
