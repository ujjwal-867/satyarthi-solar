import React from "react";
import { RotateCcw, AlertTriangle } from "lucide-react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
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
        <div className="p-6 bg-red-50/90 border border-red-200 rounded-3xl text-center space-y-3 my-4">
          <div className="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-red-950">
            {this.props.title || "Something went wrong in this section"}
          </h3>
          <p className="text-xs text-red-700 max-w-md mx-auto font-hindi">
            तकनीकी समस्या के कारण यह सेक्शन लोड नहीं हो सका। कृपया पुनः प्रयास करें।
          </p>
          <button
            type="button"
            onClick={this.handleReset}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold shadow-sm transition cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Retry • पुनः प्रयास करें</span>
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
