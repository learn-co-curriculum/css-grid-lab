const fs = require("fs");
const path = require("path");
const chai = require("chai");
const CSSOM = require("cssom");
chai.use(require("chai-dom"));
const { expect } = chai;

const cssFile = fs.readFileSync(
  path.resolve(__dirname, "../index.css"),
  "utf-8"
);

function findRule(rules, cssSelector) {
  return rules.find((r) => r.selectorText === cssSelector);
}

describe('within main.css', function () {
  let stylesheet;
  let rules;

  before(function () {
    stylesheet = CSSOM.parse(cssFile);
    rules = stylesheet.cssRules;
  });

  it('contains a .grid-container rule set', function () {
    const rule = findRule(rules, ".grid-container");
    expect(rule).to.exist;
  });

  it('the .grid-container rule contains the display property, set to grid', function () {
    const rule = findRule(rules, ".grid-container");
    expect(rule).to.exist;
    expect(rule.style.getPropertyValue("display")).to.equal("grid");
    expectedTemplateProperty = rule.style.hasOwnProperty("grid-template") || 
                              (rule.style.hasOwnProperty("grid-template-rows") && rule.style.hasOwnProperty("grid-template-columns"))
    expect(expectedTemplateProperty).to.be.true;
  });

  it('contains a .bigItem rule set', function () {
    const rule = findRule(rules, ".bigItem");
    expect(rule).to.exist;
  });

  it('the .bigItem rule contains the grid-area property', function () {
    const rule = findRule(rules, ".bigItem");    
    expect(rule.style.hasOwnProperty("grid-area")).to.be.true;
  });
});
