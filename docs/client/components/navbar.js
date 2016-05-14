import React from 'react';
import {Link} from 'react-router';

export default class MasterNavBar extends React.Component {

	static defaultProps = {loading: true};

	render() {

		let {loading} = this.props;

		return <nav className="tm-navbar uk-navbar uk-navbar-attached">
        <div className="uk-container uk-container-center">
          <Link
            className="uk-navbar-brand uk-hidden-small"
            to="/"
            style={{position: 'relative'}}>
              <img
              src="/images/logo-horizontal.svg"
              style={{height: 70, marginTop: -15, opacity: loading ? 0.66 : 0.9, width: 172}}
              title="UIkit" />
              <i className="uk-icon-circle-o-notch uk-icon-spin" style={{
              visibility: loading ? 'visible' : 'hidden',
              position: 'absolute',
              left: 79,
              top: 13,
              color: 'white',
              fontSize: 15
            }} />
          </Link>
          <ul className="uk-navbar-nav uk-hidden-small">
            {this.props.children || <li><a href="#">Loading…</a></li>}
          </ul>
          <div className="uk-navbar-flip">
            <ul className="uk-navbar-nav uk-hidden-small">
              {!loading && <li><a href="https://github.com/stipsan/uikit-react">GitHub</a></li>}
            </ul>
          </div>
          <a
            href="#tm-offcanvas"
            className="uk-navbar-toggle uk-visible-small"
            data-uk-offcanvas />
          <div className="uk-navbar-brand uk-navbar-center uk-visible-small">
            <img
            src="/images/logo.svg"
            style={{width: 60, height: 60, marginTop: -10}}
            title="UIkit"
            alt="UIkit" />
          </div>
        </div>
      </nav>;
	}
}