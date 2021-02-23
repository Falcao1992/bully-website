import React from "react"
import {Route} from "react-router-dom"
import Layout from "./Layout"

const LayoutManage = ({component: Component, ...rest}) => {
    
    return (
        <Route {...rest} render={props => (
            <Layout>
                <Component {...props} />
            </Layout>
        )}/>
    )
}

export default LayoutManage