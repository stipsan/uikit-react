jest.dontMock('../close.js');

describe('Close', function() {
	it('renders on the page with alternative styling', function() {
    var React = require('react/addons');
    var Close = require('../close.js');
    var TestUtils = React.addons.TestUtils;

    // Render a checkbox with label in the document
    var container = TestUtils.renderIntoDocument(
      <Close alt={true}>close</Close>
    );
    var anchor = TestUtils.findRenderedDOMComponentWithTag(container, 'a');

    expect(anchor.getDOMNode().className).toContain('uk-close-alt');
  });
});