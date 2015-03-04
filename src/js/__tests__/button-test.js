jest.dontMock('../button.js');

describe('Button', function() {
  it('toggles the className uk-active after click', function() {
    var React = require('react/addons');
    var CheckboxWithLabel = require('../button.js');
    var TestUtils = React.addons.TestUtils;

    // Render a checkbox with label in the document
    var button = TestUtils.renderIntoDocument(
      <Button />
    );

    // Verify that it's uk-active is not there by default
    expect(button.getDOMNode().classList.contains('uk-active')).toBeFalsy();

    // Simulate a click and verify that it is now active
    TestUtils.Simulate.click(button);
    expect(button.getDOMNode().classList.contains('uk-active')).toBeTruthy();
  });
});