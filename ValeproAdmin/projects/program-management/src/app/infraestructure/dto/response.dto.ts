interface ValidationError {
    propertyName: string;
    errorMessage: string;
    attemptedValue: any;
    customState: any;
    severity: number;
    errorCode: any;
    formattedMessagePlaceholderValues: any;
}

export interface ResponseBaseDto<T> {
    codeId: number;
    message: string;
    data: T;
}
