export enum ResStatuses {
    Success = 'success',
    Error = 'error'
}

export interface Res<T = unknown> {
    status: ResStatuses;
    data?: T;
    message?: string;
}

export interface PaginationRes<T> {
    nextCursor: string | null;
    data: T;
}
