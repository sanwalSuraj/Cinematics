import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Stack, Scene, Router, ActionConst, Drawer } from 'react-native-router-flux';
import LAUNCH from './components/launch';
import sidebarComponent from './components/sidebar'
// import Home from './components/home'
import icon from './img/icon.png';
import styles from './components/styles';

export default class MyRouter extends Component {
      constructor(props) {
            super(props)
      }

      render() {
            return (
                  <Router navigationBarStyle={styles.navBar}
                        titleStyle={styles.navBarTitle}
                        barButtonTextStyle={styles.barButtonTextStyle}
                        barButtonIconStyle={styles.barButtonIconStyle}>
                        <Scene key="root" hideNavBar hideTabBar>
                              <Drawer
                                    hideNavBar
                                    key="drawer"
                                    contentComponent={sidebarComponent}
                                    drawerImage={icon}
                                    drawerWidth={230}
                                    title="Cinematics"

                              >
                                    <Scene key="Launch" component={LAUNCH} title="Cinematics" hideTabBar hideNavBar/>
                              </Drawer>
                        </Scene>
                  </Router>
            )
      }
}