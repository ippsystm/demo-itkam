import React from 'react'
import Preloader from "../common/Loading/Global";

export const withSuspense = (Component) => {
    return (props) => {
       return <React.Suspense fallback={<Preloader/>}>
            <Component {...props} />
        </React.Suspense>
    }
}