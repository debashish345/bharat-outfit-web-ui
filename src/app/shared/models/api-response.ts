export interface ApiResponse<T> {

    body: Data<T>;
    timeStamp: Date;
    status: Number;
    message: string;

}

export interface Data<T> {
    data: T
}