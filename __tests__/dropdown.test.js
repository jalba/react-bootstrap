jest.dontMock('../dropdown.js');


var
  React = require('react/addons'),
  Dropdown = require('../dropdown.js'),
  TestUtils = React.addons.TestUtils,
  DropdownComponent = TestUtils.renderIntoDocument(
    <Dropdown />
  );


describe('Dropdown' , function() {
 it('should have 2 children', function() {
   var DropdownInstance = TestUtils.findRenderedDOMComponentWithClass(DropdownComponent, 'dropdown');
   expect(DropdownInstance.props.children.length).toEqual(2);
 });
});