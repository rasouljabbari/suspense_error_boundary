import React from 'react'

function ErrorBoundaryContent({ fallback, error, errorInfo }) {
    return (
        <div className='shadow-lg bg-rose-50 p-4 rounded-xl max-w-200 mx-auto my-8 space-y-5'>
            <h2 className='text-2xl text-rose-600'>{fallback}</h2>
            <p className='text-center text-xl'>
                <b>{error?.toString()}</b>
            </p>
            <div className='text-md text-left'><b>Stack Trace:</b> {errorInfo?.componentStack}</div>
        </div>
    )
}

export default ErrorBoundaryContent