import { Component, ErrorInfo, ReactNode } from 'react';
import './ErrorBoundary.css';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    handleReset = () => {
        this.setState({ hasError: false, error: null });
    };

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div className="error-boundary">
                    <div className="error-content">
                        <div className="error-icon">⚠️</div>
                        <h2 className="error-title">
                            <span lang="zh">出错了</span>
                            <span lang="en">Something went wrong</span>
                        </h2>
                        <p className="error-message">
                            <span lang="zh">应用遇到了一个错误，请尝试刷新页面。</span>
                            <span lang="en">The application encountered an error. Please try refreshing the page.</span>
                        </p>
                        {this.state.error && (
                            <details className="error-details">
                                <summary>
                                    <span lang="zh">错误详情</span>
                                    <span lang="en">Error Details</span>
                                </summary>
                                <pre>{this.state.error.message}</pre>
                            </details>
                        )}
                        <div className="error-actions">
                            <button
                                className="error-button primary"
                                onClick={() => window.location.reload()}
                            >
                                <span lang="zh">刷新页面</span>
                                <span lang="en">Refresh Page</span>
                            </button>
                            <button
                                className="error-button secondary"
                                onClick={this.handleReset}
                            >
                                <span lang="zh">重试</span>
                                <span lang="en">Try Again</span>
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
