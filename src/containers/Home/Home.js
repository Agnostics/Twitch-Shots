import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    return (
	<div>
    <Helmet title="Home"/>
		<div className={styles.MainContainer}>
		</div>
	</div>
    );
  }
}
