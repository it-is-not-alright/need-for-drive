import React, { Component, ErrorInfo } from 'react';

import ApiError from '~/api/ApiError';
import ErrorPage from '~/components/pages/ErrorPage/ErrorPage';

import { unknownErrorMessage } from './constants';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { errorMessage: '' };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
    const errorMessage: string =
      error.name === ApiError.name ? error.message : unknownErrorMessage;
    this.setState({ errorMessage });
  }

  private reset = (): void => {
    this.setState({ errorMessage: '' });
  };

  render() {
    const { errorMessage } = this.state;
    if (errorMessage) {
      return (
        <ErrorPage
          title="Что-то пошло не так..."
          errorMessage={errorMessage}
          reset={this.reset}
        />
      );
    }
    const { children } = this.props;
    return children;
  }
}

export default ErrorBoundary;
