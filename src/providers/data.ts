import {
  DataProvider,
  BaseRecord,
  GetListParams,
  GetListResponse,
} from "@refinedev/core";
import { mockSubjects } from "@/constants/mock-data";

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({
    resource,
  }: GetListParams): Promise<GetListResponse<TData>> => {
    // Implementation for fetching a list of records
    if (resource !== "subjects") {
      return {
        data: [] as TData[],
        total: 0,
      };
    }

    return {
      data: mockSubjects as unknown as TData[],
      total: mockSubjects.length,
    };
  },
  getOne: async () => {
    throw new Error("This Function is not present in mock");
  },
  create: async () => {
    throw new Error("This Function is not present in mock");
  },
  update: async () => {
    throw new Error("This Function is not present in mock");
  },
  deleteOne: async () => {
    throw new Error("This Function is not present in mock");
  },

  getApiUrl: () => "",
};
