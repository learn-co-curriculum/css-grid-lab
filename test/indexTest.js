require ( './helpers.js' );

const chai = require("chai");
chai.use(require("chai-dom"));
const { assert } = chai;

describe('styling', function() {

  describe('within index.html', function() {

    it('contains a <link> tag', function() {
      const link = document.querySelector('link');
      assert.isNotNull(link, "No <link> tag was found");
    });

    it('correctly links to the index.css file with a relative path', function() {
      const link = document.querySelector('link');
      assert.isNotNull(link, "No <link> tag was found");
      assert.match(link.getAttribute('href'), /index.css/, "Make sure you provide a relative path to index.css from index.html");
    });

    it('contains at least one div assigned the "bigItem" class', function() {
      const divs = Array.from(document.querySelectorAll('div'));
      assert.isTrue(divs.some(div => div.classList.contains('bigItem')), "No div with class 'bigItem' was found");
    });

  });

  // describe('within index.css', function() {

  //   it('contains a .grid-container rule set', function() {
  //     const styles = document.styleSheets[0].cssRules;
  //     console.log(styles);
  //     const gridContainerRule = Array.from(styles).find(rule => rule.selectorText === '.grid-container');
  //     assert.isTrue(gridContainerRule !== undefined, "The .grid-container rule set was not found");
  //   });

  //   it('the .grid-container rule contains the display property, set to grid', function() {
  //     const styles = document.styleSheets[0].cssRules;
  //     const gridContainerRule = Array.from(styles).find(rule => rule.selectorText === '.grid-container');
  //     assert.isTrue(gridContainerRule.style.display === 'grid', "The display property for .grid-container is not set to 'grid'");
  //     assert.match(gridContainerRule.style.gridTemplate, /./, "The grid-template property for .grid-container is not set");
  //   });

  //   it('contains a .bigItem rule set', function() {
  //     const styles = document.styleSheets[0].cssRules;
  //     const bigItemRule = Array.from(styles).find(rule => rule.selectorText === '.bigItem');
  //     assert.isTrue(bigItemRule !== undefined, "The .bigItem rule set was not found");
  //   });

  //   it('the .bigItem rule contains the grid-area property', function() {
  //     const styles = document.styleSheets[0].cssRules;
  //     const bigItemRule = Array.from(styles).find(rule => rule.selectorText === '.bigItem');
  //     assert.isTrue(bigItemRule.style.gridArea !== '', "The grid-area property for .bigItem is not set");
  //   });

  // });
});
