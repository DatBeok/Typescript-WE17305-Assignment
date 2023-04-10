import * as Yup from "yup";

export interface IProduct {
  id: number;
  name: string;
  price: number;
  original_price: number;
  description: string;
  images: { base_url: string }[];
  brand: {
    id: number;
    name: string;
    slug: string;
  };
  specifications: ISpecification[];
}

interface ISpecification {
  name: string;
  attributes: { code: string; value: string; name: string }[];
}

export const signupSchema = Yup.object({
  firstName: Yup.string().required("Truong du lieu bat buoc"),
  lastName: Yup.string().required("Truong du lieu bat buoc"),
  email: Yup.string().email("Email sai dinh dang").required("Truong du lieu bat buoc"),
  password: Yup.string().min(6).required("Truong du lieu bat buoc"),
  confrimPassword: Yup.string().oneOf([Yup.ref('password'),"Mat khau ko trung khop"]),
})

export type SignupForm = Yup.InferType<typeof signupSchema>;

export const signinSchema = Yup.object({
  email: Yup.string().email("Email sai dinh dang").required("Truong du lieu bat buoc"),
  password: Yup.string().min(6).required("Truong du lieu bat buoc"),
})

export type SigninForm = Yup.InferType<typeof signinSchema>;

export const updateSchema = Yup.object({
  name: Yup.string().required("Truong du lieu bat buoc"),
  price: Yup.number().required("Truong du lieu bat buoc"),
  original_price: Yup.number().required("Truong du lieu bat buoc"),
  description: Yup.string()
    .min(10, "Toi thieu 10 ky tu")
    .required("Truong du lieu bat buoc"),
});

export type updateForm = Yup.InferType<typeof updateSchema>;
