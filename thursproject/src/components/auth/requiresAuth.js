import React from 'react'
import axios from 'axios'


axios.interceptors.request.use(
    function(Config) {
        Config.headers.authorization = localStorage.getItem('token')

        return Config
    },
    function(error) {
        return Promise.reject()
    }
)

export default function(Component) {
    return class Authenticated extends React.Component {
        render() {
            const token = localStorage.getItem('token')
            const notLoggedIn = <h3>Please Login to see the users</h3>
            return <>{ token ? <Component {...this.props} /> : notLoggedIn }</>
        }
    }
}