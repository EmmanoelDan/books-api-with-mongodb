export class CustomError extends Error {
    public readonly statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
        Error.captureStackTrace(this);
    }
}

export class ValidationError extends CustomError {
    constructor(message: string) {
        super(message, 400); // 400 Bad Request
    }
}

export class NotFoundError extends CustomError {
    constructor(message: string) {
        super(message, 404); // 404 Not Found
    }
}