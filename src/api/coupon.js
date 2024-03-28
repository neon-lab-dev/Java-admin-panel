import axios from "axios";
import { API } from ".";

export const getAllCoupon = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(API.allCoupon, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(
          err?.response?.data?.message ||
            "Something went wrong, please try again"
        );
    });
  });
};

export const deleteCoupon = (id) => {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${API.allCoupon}/${id}`, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(
            err?.response?.data?.message || "Error deleting coupon, please try again"
          );
        });
    });
  };