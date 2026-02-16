
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// System Health Check
console.log("%c NOUR MEDIA SYSTEM INITIALIZING... ", "background: #000; color: #fff; font-weight: bold; border: 1px solid #fff;");

const RootWrapper = () => {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.error("System Runtime Error:", error);
      setHasError(true);
    };
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <div style={{ 
        background: '#000', 
        color: '#fff', 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        fontFamily: 'monospace',
        padding: '20px',
        textAlign: 'center'
      }}>
        <h1 style={{ letterSpacing: '0.2em' }}>SYSTEM_HALTED</h1>
        <p style={{ color: '#666', marginTop: '20px' }}>A critical error occurred during initialization.</p>
        <button 
          onClick={() => window.location.reload()}
          style={{ 
            marginTop: '30px', 
            padding: '10px 20px', 
            background: '#fff', 
            color: '#000', 
            border: 'none', 
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          REBOOT_SYSTEM
        </button>
      </div>
    );
  }

  return <App />;
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("Critical: Could not find root element.");
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RootWrapper />
    </React.StrictMode>
  );
  console.log("%c NOUR MEDIA SYSTEM ONLINE ", "background: #fff; color: #000; font-weight: bold;");
}
