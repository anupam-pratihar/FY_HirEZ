import axios from "axios";

export const createProduct = async (product, authtoken) => {
	return axios.post("http://localhost:8000/api/product", product, {
		headers: {
			authtoken,
		},
	});
};

export const listAllProducts = async (count) => {
	return axios.get(`http://localhost:8000/api/products/${count}`);
};

export const removeProduct = async (slug, authtoken) => {
	return await axios.delete(`http://localhost:8000/product/${slug}`, {
		headers: {
			authtoken,
		},
	});
};
