import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { getById, update } from "../api/products";
import { useEffect } from "react";
import { updateForm, updateSchema } from "../models";

const ProductUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<updateForm>({
    resolver: yupResolver(updateSchema),
    defaultValues: async () => {
      if (id) {
        return await fetchProductById(id);
      }
    },
  });

  const onSubmit = async (data: updateForm) => {
    try {
      if (id) {
        const response = await update(id, data);
        console.log(response);
        navigate("/admin");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchProductById = async (id: string) => {
    const { data } = await getById(id);
    return data;
  };

  useEffect(() => {
    if (id) {
      fetchProductById(id);
    }
  }, []);

  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12"></div>

          <div className="rounded-lg border bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form
              action=""
              className="space-y-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label>Name</label>
                <input
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                  {...register("name")}
                />
                <p className="text-[10px] text-red-600">
                  {errors.name && errors.name.message}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label>Price</label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    {...register("price")}
                    type="number"
                  />
                  <p className="text-[10px] text-red-600">
                    {errors.price && errors.price.message}
                  </p>
                </div>

                <div>
                  <label>Sale Price</label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    {...register("original_price")}
                    type="number"
                  />
                  <p className="text-[10px] text-red-600">
                    {errors.original_price && errors.original_price.message}
                  </p>
                </div>
              </div>

              <div>
                <label>About</label>

                <textarea
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                  {...register("description")}
                ></textarea>
                <p className="text-[10px] text-red-600">
                  {errors.description && errors.description.message}
                </p>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg border bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductUpdate;
