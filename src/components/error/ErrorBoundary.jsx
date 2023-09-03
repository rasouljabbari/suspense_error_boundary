import React from 'react';
import ErrorBoundaryContent from './ErrorBoundaryContent';

class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
        error: null,
        errorInfo: null
    }

    componentDidCatch(error, info) {
        this.setState({
            ...this.state,
            hasError: true,
            error: error,
            errorInfo: info
        })
    }

    render() {
        if (this.state.hasError) {
            return (
                <ErrorBoundaryContent 
                    error={this.state.error}
                    errorInfo={this.state.errorInfo}
                    fallback={this.props.fallback}
                />
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary;