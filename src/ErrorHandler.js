import React from "react";
import { Alert } from "react-bootstrap";
import * as PropTypes from "prop-types";

ErrorHandler.propTypes = {
  error: PropTypes.any,
};
export default function ErrorHandler({ error }) {
  return (
    <>
      <Alert variant="danger">
        <Alert.Heading>An uncaught exception occurred!</Alert.Heading>
        <pre>{error.message}</pre>
        <hr />
        <pre>{`${error.stack}`}</pre>
      </Alert>
    </>
  );
}

// export default class ErrorBoundary extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { hasError: false };
//         this.error = 'no message';
//         this.errorInfo = 'no error info';
//     }

//     // eslint-disable-next-line handle-callback-err
//     static getDerivedStateFromError(error) {
//         // Update state so the next render will show the fallback UI.
//         return { hasError: true };
//     }

//     componentDidCatch(error, errorInfo) {
//         // You can also log the error to an error reporting service
//         // logErrorToMyService(error, errorInfo);
//         console.error('Component error: %o', error);
//         this.error = error;
//         this.errorInfo = errorInfo;
//     }

//     render() {
//         if (this.state.hasError) {
//             // You can render any custom fallback UI
//             return (
//                 <div>
//                     <h1>Something went wrong.</h1>
//                     <h2>{this.error.toString()}</h2>
//                     <pre>{JSON.stringify(this.errorInfo, undefined, 2)}</pre>
//                 </div>
//             );
//         }

//         return this.props.children;
//     }
// }
