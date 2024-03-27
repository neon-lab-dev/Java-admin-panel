import axios from "axios";
import { API } from ".";

export const getAllOrders = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(API.getOrders, {
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


export const getSingleOrder = (orderId) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`${API.getSingleOrder}/${orderId}`, {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                console.log("callllll");
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
