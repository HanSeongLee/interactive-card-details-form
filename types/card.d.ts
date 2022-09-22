export type CardDetails = {
    cardholderName?: string;
    cardNumber?: string;
    expireDate: {
        month?: string;
        year?: string;
    };
    CVC?: string;
};
