type ErrorBoundaryProps = {
  children: React.ReactNode;
};

type ErrorBoundaryState = {
  errorMessage: string;
};

export { ErrorBoundaryProps, ErrorBoundaryState };
