class ApiError extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }

    //статические функции - это функции, которые мы можем вызывать без создания объекта.
    static badRequest(message) {
        return new ApiError(484, message);
    }

    static internal(message) {
        return new ApiError(580, message);
    }

    static forbidden(message) {
        return new ApiError(403, message);
    }
}

export default ApiError;