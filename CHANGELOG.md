# uikit-react change log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

## [2.1.1] - 2017-02-06
### Bugfixes
* `Notify` component was not passing `icon` props in the storybook.
* Added space between NotifyMesssage and `icon` if `icon` is added.

## [2.1.0] - 2017-01-04
* Added two props, `confirmButtonClass` and `cancelButtonClass` to footer buttons that allows to pass CSS classes.
* `handleClose` allows callbacks.
* `Notify` component allows to pass `onClick` props that can be used trigger `onClick` event on `NotifyMesssage`

## [2.0.0] - 2016-11-22
### Bugfixes
* `Notify` component was not passing all the props.

### Breaking Changes
* `Modal` component needs to pass `target` as Element instead of Node. `target` is required.

### Coverage
* uikit-react has 100% test coverage now.

### Features
* `Modal` component is rendered using [react-portal](https://github.com/tajo/react-portal) for better positioning and styling

## [1.0.0] - 2016-11-10
### Added
* Added new component [Notify](http://uikit-react.io/?selectedKind=Notify&selectedStory=Basic%20Usage&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel).

## [0.6.2] - 2016-08-24
### Documentation
* add reference to [redux-form-uikit](https://github.com/stipsan/redux-form-uikit). (#173)

## [0.6.1] - 2016-08-23
### Features
* Improved icon support in [Input](http://uikit-react.io/?selectedKind=Input&selectedStory=Form%20and%20icons&full=0&down=0&left=1&panelRight=0) component. You can `flip` the icon position, and `icon="spinner"` and `icon="refresh"` will have a spinning animation applied. (#171)

### Documentation
* The Select component is removed from readme and storybook until it's stable. It's still available but it's not recommended to use it in production as its API is likely to change. (#172)

## [0.6.0] - 2016-08-23
### Features
* New [Input](http://uikit-react.io/?selectedKind=Input&selectedStory=Basic%20Usage&full=0&down=0&left=1&panelRight=0) component added (#169)

### Documentation
* Readme updated with links to each component.
* npm homepage link points to [uikit-react.io](https://uikit-react.io/) instead of the GitHub project page.

## [0.5.0] - 2016-08-19
### Breaking Changes
* SCSS source of Select component removed, all in on LESS now.

### Documentation
* [uikit-react.io](https://uikit-react.io/) is now using the gradient theme.

## [0.4.1] - 2016-08-19
### Documentation
* Typos in README.md (#157)
* Added GA tracking to [uikit-react.io](https://uikit-react.io/) (#159).

## [0.4.0] - 2016-08-18
### Features
* New [Modal](http://uikit-react.io/?selectedKind=Modal&selectedStory=Basic%20Usage&full=0&down=0&left=1&panelRight=0) component added.

## [0.3.0] - 2016-08-13
### Breaking Changes
* `<Button />` no longer toggles `.uk-active` on clicks and is no longer a stateful Component (#142)

## [0.2.0] - 2016-08-11
### Features
* [Dropdown](https://uikit-react.io/?selectedKind=Dropdown&selectedStory=Basic%20Usage&full=0&down=1&left=1&panelRight=0) got a `component` prop that controls the rendering of the dropdown wrapper.

### Storybook
* Check out the new [Advanced](https://uikit-react.io/?selectedKind=Dropdown&selectedStory=Advanced&full=0&down=1&left=1&panelRight=0) Dropdown story to see how this new prop lets you use `<Dropdown />` inside a navbar.

## [0.1.2] - 2016-08-09
### Bugfixes
* `scss` folder was in the wrong location

## [0.1.1] - 2016-08-09
### Features
* `scss` folder now included on npm

### Example

Here's how you can import the styling for the [Select](http://uikit-react.io/?selectedKind=Select&selectedStory=Basic%20Usage&full=0&down=1&left=1&panelRight=0) component assuming you're using webpack and sass-loader:
```scss
@import "~uikit-react/scss/Select.scss";
```

A complete example if you only need the styling required to render the `uikit-react` components, assuming you already have `uikit` as a dependency in your `package.json`:

```scss
$icon-font-path: "~uikit/dist/fonts";

@import "~uikit/dist/scss/uikit-mixins.scss";
@import "~uikit/dist/scss/uikit-variables.scss";
@import "~uikit/dist/scss/uikit.scss";
@import "~uikit/dist/scss/components/autocomplete.scss";
@import "~uikit/dist/scss/components/form-advanced.scss";

@import "~uikit-react/scss/Select.scss";
```

## [0.1.0] - 2016-08-08
### Features
* [Select](http://uikit-react.io/?selectedKind=Select&selectedStory=Basic%20Usage&full=0&down=0&left=1&panelRight=0) component added, a fork of react-select adapted to reuse as much UIkit markup as possible.

### Documentation
* [uikit-react.io](https://uikit-react.io) storybook site updated with a navbar with logo.

### Bugfixes
* Storybook on [uikit-react.io](https://uikit-react.io) no longer minifies the component name.

## [0.1.0-alpha.2] - 2016-08-01
### Features
* added simple [Button](http://uikit-react.io/?selectedKind=Button&full=0&down=0&left=1&panelRight=0) component.
* added simple [Dropdown](http://uikit-react.io/?selectedKind=Dropdown&selectedStory=Basic%20Usage&full=0&down=0&left=1&panelRight=0) component.

### Docs
In the initial alphas we had a docs site up on firebase: https://uikit-react.firebaseapp.com/#/
But instead of a conventional OSS project site we decided to host the React Storybook of the project here: [uikit-react.io](https://uikit-react.io) which will serve as documentation and usage examples of the UIkit React components included in `uikit-react`

Proved stable enough for a stable semver major version 💃

[Unreleased]: https://github.com/stipsan/uikit-react/compare/v2.1.1...HEAD
[2.1.1]: https://github.com/stipsan/uikit-react/compare/v2.1.0...v2.1.1
[2.1.0]: https://github.com/stipsan/uikit-react/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/stipsan/uikit-react/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/stipsan/uikit-react/compare/v0.6.2...v1.0.0
[0.6.2]: https://github.com/stipsan/uikit-react/compare/v0.6.1...v0.6.2
[0.6.1]: https://github.com/stipsan/uikit-react/compare/v0.6.0...v0.6.1
[0.6.0]: https://github.com/stipsan/uikit-react/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/stipsan/uikit-react/compare/v0.4.1...v0.5.0
[0.4.1]: https://github.com/stipsan/uikit-react/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/stipsan/uikit-react/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/stipsan/uikit-react/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/stipsan/uikit-react/compare/v0.1.2...v0.2.0
[0.1.2]: https://github.com/stipsan/uikit-react/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/stipsan/uikit-react/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/stipsan/uikit-react/compare/v0.1.0-alpha.2...v0.1.0
