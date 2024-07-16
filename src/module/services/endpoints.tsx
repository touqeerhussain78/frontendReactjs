import config from "../../config";

const stripeBaseUrl = config.baseURLStripe;
const prcInternalBaseUrl = config.baseURLPRC;
export const endpoints = {
    recipients: (): string => "/recipients",
    getRecipient: (id): string => `/recipients/show/${id}`,
    updateRecipient: (id): string => `/recipients/${id}`,
    deleteRecipients: (id): string => `/recipients/${id}`,
}