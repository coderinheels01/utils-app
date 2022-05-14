import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import MutationObserver from "mutation-observer";

global.MutationObserver = MutationObserver;

const diff = require("jest-diff");

configure({ adapter: new Adapter() });

// extend jest expect functions
expect.extend({
  toContainObject(received, expected) {
    // assert that both received and expected be objects
    if (typeof received !== "object" || typeof expected !== "object") {
      return {
        message: () => `Both received and expected must be objects.`,
        pass: false
      };
    }

    // first transform objects into arrays via their keys
    const receivedKeys = Object.keys(received);
    const expectedKeys = Object.keys(expected);

    const pass = expectedKeys.every(argKey => {
      // next, check that all the expectedKeys are contained in receivedKeys
      const contains = receivedKeys.includes(argKey);

      if (contains) {
        // and that their values match
        return receivedKeys[argKey] === expectedKeys[argKey];
      }
      return contains;
    });

    // finally, return result
    if (pass) {
      return {
        message: () =>
          this.utils.matcherHint(".not.toContainObject") +
          `\n\n` +
          `Expected:\n\n` +
          `   ${this.utils.printExpected(expected)}` +
          `\n\nnot to be fully contained inside:\n\n   ` +
          `   ${this.utils.printReceived(received)}`,
        pass: true
      };
    } else {
      const diffString = diff(expected, received, {
        expand: this.expand
      });

      return {
        message: () =>
          this.utils.matcherHint(".toContainObject") +
          `\n\n` +
          `Expected:\n\n` +
          `   ${this.utils.printExpected(expected)}` +
          `\n\nto be fully contained within:\n\n` +
          `   ${this.utils.printReceived(received)}` +
          (diffString
            ? `\n\nDifference (the keys highlighted green ` +
              `need to be supplied for this test to pass):` +
              `\n\n${diffString}`
            : ""),
        pass: false
      };
    }
  }
});
