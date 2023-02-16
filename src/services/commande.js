const OrderService = {
    order: (value) => {
        return Promise.resolve(true);
    },

    cancelTheOrder: (value) => {
        return Promise.resolve(true);
    },

    getAdsList: () => {
        return fetch('ads/ads.json')
            .then(res => res.json())
    }
};

export default OrderService;