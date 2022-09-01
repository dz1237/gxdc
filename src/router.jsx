import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App'
import Admin from './admin';
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import Loadings from './pages/ui/loadings';
import Notice from './pages/ui/notice';
import Message from './pages/ui/message';
import Tab from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import Carousels from './pages/ui/carousel';
import Login from './pages/form/login';
import Reg from './pages/form/reg';
import BasicTable from './pages/table/basicTable';

import NoMatch from './pages/nomatch';

export default class IRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    
                    <Route path='/admin' render={() =>
                        <Admin>
                            <Switch>
                                <Route path='/admin/ui/buttons' component={Buttons} />
                                <Route path='/admin/ui/modals' component={Modals} />                      
                                <Route path='/admin/ui/loadings' component={Loadings} />                           
                                <Route path='/admin/ui/notice' component={Notice} />
                                <Route path='/admin/ui/message' component={Message} />
                                <Route path='/admin/ui/tabs' component={Tab} />
                                <Route path='/admin/ui/gallery' component={Gallery} />
                                <Route path='/admin/ui/carousel' component={Carousels} />
                                <Route path='/admin/form/login' component={Login} />
                                <Route path='/admin/form/reg' component={Reg} />
                                <Route path='/admin/table/basic' component={BasicTable} />
                               
                            
                                
                                <Route component={NoMatch} />
                            </Switch>
                        </Admin>
                    } />
                </App>
            </HashRouter>
        )
    }
}