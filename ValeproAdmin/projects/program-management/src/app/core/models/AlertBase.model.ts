export interface AlertModalData {
  type: 'error' | 'success' | 'warning';
  title?: string;
  message?: string;
  buttons?: Partial<{
    accept: string;
    cancel: string;
    retry: string;
  }>;
}
