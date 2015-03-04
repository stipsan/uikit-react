jest.dontMock('../button.js');

describe('Button', function() {
  it('toggles the className uk-active after click', function() {
    var React = require('react/addons');
    var Button = require('../button.js');
    var TestUtils = React.addons.TestUtils;

    // Render a checkbox with label in the document
    var container = TestUtils.renderIntoDocument(
      <Button>Submit</Button>
    );
    var button = TestUtils.findRenderedDOMComponentWithTag(container, 'button');

    // Verify that it's uk-active is not there by default
    expect(button.getDOMNode().className).not.toContain('uk-active');

    // Simulate a click and verify that it is now active
    TestUtils.Simulate.click(button);
    expect(button.getDOMNode().className).toContain('uk-active');
  });
  
  it('toggles classNames based on props', function() {
    var React = require('react/addons');
    var Button = require('../button.js');
    var TestUtils = React.addons.TestUtils;

    // Render a checkbox with label in the document
    var container = TestUtils.renderIntoDocument(
      <Button primary={true}>Submit</Button>
    );
    var button = TestUtils.findRenderedDOMComponentWithTag(container, 'button');

    // Verify that the class is set
    expect(button.getDOMNode().className).toContain('uk-button-primary');
  });
  
  it('ignores clicks when disabled', function() {
    var React = require('react/addons');
    var Button = require('../button.js');
    var TestUtils = React.addons.TestUtils;

    // Render a checkbox with label in the document
    var container = TestUtils.renderIntoDocument(
      <Button disabled={true}>Save</Button>
    );
    var button = TestUtils.findRenderedDOMComponentWithTag(container, 'button');
    
    // Verify that it's disabled
    expect(button.getDOMNode().disabled).toBeTruthy();

    // Simulate a click and verify that it is now active
    TestUtils.Simulate.click(button);
    expect(button.getDOMNode().className).not.toContain('uk-active');
  });
});