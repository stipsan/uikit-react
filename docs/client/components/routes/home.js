import React from 'react'

export default class Home extends React.Component {

  render() {

    return (
        <div>
          <div className="tm-section tm-section-color-1 tm-section-colored">
            <div className="uk-container uk-container-center uk-text-center">
              <img
                className="tm-logo"
                src="/images/logo-large.svg"
                width={281}
                height={217}
                title="UIkit"
                alt="UIkit" />
              <p className="uk-text-large">
                A lightweight and modular front-end framework<br className="uk-hidden-small" /> for developing fast and powerful web interfaces.
              </p>
            </div>
          </div>
          <div className="tm-section tm-section-color-2 tm-section-colored">
            <div className="uk-container uk-container-center uk-text-center">
              <h1 className="uk-heading-large">Features</h1>
              <p className="uk-text-large">
  UIkit gives you a comprehensive collection of HTML, CSS, and JS components<br className="uk-hidden-small" /> which is simple to use, easy to customize and extendable.
  </p>
              <div className="uk-grid" data-uk-grid-margin>
                <div className="uk-width-medium-1-4">
                  <div className="uk-panel">
                    <img
                      className="tm-image-pull"
                      src="images/icon_less.svg"
                      width={200}
                      height={140}
                      alt="LESS" />
                    <h2 className="uk-margin-top-remove">LESS</h2>
                    <p>
  UIkit is developed in <a href="http://lesscss.org">LESS</a> to write well-structured, extendable code which is easy to maintain.
  </p>
                  </div>
                </div>
                <div className="uk-width-medium-1-4">
                  <div className="uk-panel">
                    <img
                      className="tm-image-pull"
                      src="images/icon_components.svg"
                      width={200}
                      height={140}
                      alt="Components" />
                    <h2 className="uk-margin-top-remove">Components</h2>
                    <p>
  A collection of small, responsive components using consistent and conflict-free naming conventions.
  </p>
                  </div>
                </div>
                <div className="uk-width-medium-1-4">
                  <div className="uk-panel">
                    <img
                      className="tm-image-pull"
                      src="images/icon_themes.svg"
                      width={200}
                      height={140}
                      alt="Themes" />
                    <h2 className="uk-margin-top-remove">Customizer</h2>
                    <p>
  UIkit's very basic style can be extended with themes and is easy to customize to create your own look.
  </p>
                  </div>
                </div>
                <div className="uk-width-medium-1-4">
                  <div className="uk-panel">
                    <img
                      className="tm-image-pull"
                      src="/images/icon_responsive.svg"
                      width={200}
                      height={140}
                      alt="Responsive" />
                    <h2 className="uk-margin-top-remove">Responsive</h2>
                    <p>
  With the mobile-first approach UIkit provides a consistent experience from phones and tablets to desktops.
  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }

}
