import { BANNER } from "..";
import { handleError } from "@/lib/helpers/handleErrors"
import { api } from "@/lib/middleware/apiInceptor"

export const postBanner = async (payload) => {
    try {
        const res = await api.post(BANNER, payload);
        console.log(res, "response from home banner post api")
        return res; // Assuming the response contains an array of image URLs
    } catch (error) {
        handleError(error);
    }
}



export const EditBanner = async (payload) => {
    const { images, category } = payload;

    const formData = new FormData();
    images.forEach((image) => {
        formData.append('image', image);
    });
    formData.append('category', category);

    try {
        const res = await api.put(BANNER, formData);
        return res.data.payload.urls; // Assuming the response contains an array of image URLs
    } catch (error) {
        handleError(error);
        return null; // or throw error if you want to handle it differently
    }
};

export const getAllBanner = async () => {
    try {
        const res = await api.get(BANNER);
        //   console.log(res,"resssssssss");
        return res.data.payload.data;

    } catch (error) {
        handleError(error);
    }
};


