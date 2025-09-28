import { api } from "@/lib/axios";

interface GetOrderDetailsResponse {
  id: string;
  status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
  createdAt: string;
  totalInCents: number;
  customer: {
    name: string;
    email: string;
    phone: string | null;
  };
  orderItems: {
    id: string;
    priceInCents: number;
    quantity: number;
    product: {
      name: string;
    };
  }[];
}

interface GetOrdersDetailsParams {
  orderId: string;
}

export async function getOrderDetails({ orderId }: GetOrdersDetailsParams) {
  const response = await api.get<GetOrderDetailsResponse>(`/orders/${orderId}`);

  return response.data;
}
