import ApiError from "../error/ApiError.js";

const ErrorHandlingMiddleware = (err, req, res, next) => {
    if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message });
    }
    return res.status(500).json({ message: "Непредвиденная работа" });
}

export default ErrorHandlingMiddleware;