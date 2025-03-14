import { Transaction } from "../../../infra/database/typeorm/dt-money/entity/Transaction";
import { OrderDirection } from "../../../interfaces/order-direction";
import { Paginated } from "../../../interfaces/paginated";

export interface GetTransactionsParams {
  userId: number;
  pagination?: {
    page: number;
    perPage: number;
  };
  filters: {
    from?: Date | undefined;
    to?: Date | undefined;
    typeId?: number;
    categoryId?: number;
  };
  sort?: {
    id?: OrderDirection;
  };
  searchText?: string;
}

export interface UpdateTransactionParams {
  id: number;
  userId: number;
  typeId?: number;
  categoryId?: number;
  value?: number;
}

export interface CreateTranscationParams {
  typeId: number;
  value: number;
  categoryId: number;
  userId: number;
}

export interface TransactionRepositoryInterface {
  getTransactions(
    params: GetTransactionsParams
  ): Promise<Paginated<Transaction>>;
  deleteTransaction(transactionId: number): Promise<void>;
  findById(id: number): Promise<Transaction>;
  updateTransaction(params: UpdateTransactionParams): Promise<void>;
  createTransaction(params: CreateTranscationParams): Promise<Transaction>;
}
