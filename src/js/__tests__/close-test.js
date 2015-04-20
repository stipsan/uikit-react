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
	
	it('supports additional event handlers, like onClick', function() {
    var React = require('react/addons');
    var Close = require('../close.js');
    var TestUtils = React.addons.TestUtils;

    // Render a checkbox with label in the document
    var triggered = false, container = TestUtils.renderIntoDocument(
      <Close onClick={function(){triggered = true}}>close</Close>
    );
    var button = TestUtils.findRenderedDOMComponentWithTag(container, 'a');

    // Simulate a click and verify that it is now active
    TestUtils.Simulate.click(button);

    // Verify that the type is submit
    expect(triggered).toBeTruthy();
  });
});