import React, { useEffect, useState } from "react";
import createCouponimg from "../../assets/icon/createCoupon.svg";
import { createCoupon, getAllCoupon } from "../../api/coupon";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { data } from "autoprefixer";
import AppLoading from "../../components/loaders/AppLoading";

const CouponModal = (props) => {
  let { dataDisplay, setdataDisplay, allCouponsData } = props;
  const [values, setvalues] = useState({});
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: ({ code, amount }) => createCoupon({ code, amount }),
    onError: (error) => {
      window.create_new_coupon.close();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error,
      });
      reset();
      console.log(error);
    },
    onSuccess: () => {
      window.create_new_coupon.close();
      queryClient.invalidateQueries({ queryKey: ["coupons"] });
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Coupon Created Successfully",
      });
    },
  });
  useEffect(() => {
    if (!isPending) {
      // document.getElementById("create_new_coupon").close();
    }
  }, [isPending]);

  const onSubmit = async (data) => {
    const mutatedData = mutate({
      ...data,
      amount: Number(data.amount),
    });
  };

  const handleVerify = () => {
    document.getElementById("verify_new_coupon").showModal();
    setvalues(getValues());
  };

  return (
    <>
      {/*createCoupon Modal Start */}
      <dialog id="create_new_coupon" className="modal">
        <div className="modal-box lg:w-[763px] lg:h-[410px] sm:h-[1/6] w-5/6 max-w-5xl h-1/2 max-h-5xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex h-full w-full">
            <div className="w-2/5 flex justify-center items-center place-content-center">
              <img src={createCouponimg} className="h-full w-full" />
            </div>
            <div className="border-l-2 border-dashed" />
            <div className="w-3/5">
              <div className=" flex flex-col place-content-center place-items-center">
                <form
                  className=" flex flex-col place-content-center place-items-center"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <p className="w-[324px] text-start text-black text-2xl font-semibold font-['Lato'] tracking-tight">
                    Create New Coupon
                  </p>
                  <input
                    className="mt-[32px] w-[324px] h-11 pl-3 bg-white rounded-xl border border-zinc-300 justify-start items-center inline-flex placeholder:text-black opacity-40 text-sm font-light font-['Lato'] leading-[16.80px]"
                    type="text"
                    placeholder="Enter New Coupon Code"
                    {...register("code", {
                      required: true,
                    })}
                  />
                  <input
                    className="mt-[18px] w-[324px] h-11 pl-3 bg-white rounded-xl border border-zinc-300 justify-start items-center inline-flex placeholder:text-black opacity-40 text-sm font-light font-['Lato'] leading-[16.80px]"
                    type="number"
                    placeholder="Amount"
                    {...register("amount", {
                      required: true,
                    })}
                  />
                  <button className="mt-[24px] w-[324px] h-11 pl-[111px] pr-[112.44px] py-2.5 bg-slate-400 rounded-xl justify-center items-center inline-flex">
                    {isPending ? (
                      <span className="loading loading-spinner loading-md text-white"></span>
                    ) : (
                      <p className="w-[100.56px] h-6 text-center text-white text-lg font-bold font-['Lato'] leading-snug">
                        Create
                      </p>
                    )}
                  </button>
                </form>
                <button
                  className="mt-[12px] w-[324px] h-11 pl-[111px] pr-[112.44px] py-2.5 rounded-xl border border-neutral-400 justify-center items-center inline-flex"
                  onClick={() => handleVerify()}
                >
                  <p className="w-[100.56px] h-6 text-center text-zinc-800 text-lg font-bold font-['Lato'] leading-snug">
                    Verify
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </dialog>
      {/*create coupon Modal End */}
      {/*verify coupon Modal start */}
      <dialog id="verify_new_coupon" className="modal">
        <div className="modal-box lg:w-[763px] lg:h-[410px] sm:h-[1/6] w-5/6 max-w-5xl h-1/2 max-h-5xl">
          <div className="flex h-full w-full">
            <div className="w-2/5 flex justify-center items-center place-content-center">
              <img src={createCouponimg} className="h-full w-full" />
            </div>
            <div className="border-l-2 border-dashed" />
            <div className="w-3/5">
              <div className="h-full flex flex-col place-content-start place-items-start items-center">
                <div className="w-4/5">
                  <p className="mt-[50px] text-black text-2xl font-semibold font-['Lato'] tracking-tight">
                    Verify &nbsp;the&nbsp; Coupon
                  </p>
                  <p className="mt-[28px]">
                    <span className=" text-black text-2xl font-semibold font-['Lato'] tracking-tight">
                      Coupon &nbsp;Code :&nbsp;&nbsp;
                    </span>
                    <span className="text-black text-lg font-light font-['Lato'] tracking-tight">
                      {values?.code}
                    </span>
                  </p>
                  <p className="mt-[18px]">
                    <span className="text-black text-2xl font-semibold font-['Lato'] tracking-tight">
                      Amount :&nbsp;&nbsp;
                    </span>
                    <span className="text-black text-lg font-light font-['Lato'] tracking-tight">
                      ₹{values?.amount}
                    </span>
                  </p>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn bg-white w-[324px] h-11 pl-[111px] pr-[112.44px] py-2.5 rounded-xl border border-neutral-400 justify-center items-center inline-flex">
                      <span className="w-[100.56px] h-6 text-center text-zinc-800 text-lg font-bold font-['Lato'] leading-snug">
                        Close
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
      {/* verify coupon modal ends */}
    </>
  );
};

export default CouponModal;
