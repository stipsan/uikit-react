jest.dontMock('../transitiongroup.js');

describe('TransitionGroup', function() {
	it('reminds me not to close the PR before tests are written', function() {
    var React = require('react/addons');
    var TransitionGroup = require('../tarnsitiongroup.js');
    var TestUtils = React.addons.TestUtils;

    // Render a checkbox with label in the document
    var container = TestUtils.renderIntoDocument(
      <TransitionGroup>this time i'll break travis, I'm sure of it</TransitionGroup>
    );

    expect(anchor.getDOMNode().className).toContain('not-a-chance');
  });
});