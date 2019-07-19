import React from 'react'
import {Switch, Route} from 'react-router-dom';

//Components
import PrivateRoutes from './PrivateRoutes'
import {default as Login} from './pages/login';
//URL
import URLS from './helpers/url'

function Routes() {
    return (
        <Switch>
            <Route path={'/'} exact component={Login}/>
            {URLS.map((item, key) => {
            //    if (item.protected)
                    return <PrivateRoutes key={key} exact path={item.url} component={item.component}/>
            })}
        </Switch>
    )
}

export default (Routes)