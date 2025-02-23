interface DataProperties {
  createdAt: string;
  updatedAt: string;
  _id: string;
}

interface Response<T> {
  status: "success" | "error";
  statusCode: number;
  message: string;
  data: (T & DataProperties) | (T & DataProperties)[];
  meta?: {};
}
