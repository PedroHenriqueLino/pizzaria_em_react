import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()

    console.error(error)

    return (
        <div>
            <h1>Ops...</h1>
            <h2>{error.statusText || error.message}</h2>
        </div>
    )
}

export default ErrorPage