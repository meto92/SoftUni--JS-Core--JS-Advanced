let assert = require("chai").assert;

class Console {

    static get placeholder() {
      return /{\d+}/g;
    }
  
    static writeLine() {
      let message = arguments[0];
      if (arguments.length === 1) {
        if (typeof (message) === 'object') {
          message = JSON.stringify(message);
          return message;
        }
        else if (typeof(message) === 'string') {
          return message;
        }
      }
      else {
        if (typeof (message) !== 'string') {
          throw new TypeError("No string format given!");
        }
        else {
          let tokens = message.match(this.placeholder).sort(function (a, b) {
            a = Number(a.substring(1, a.length - 1));
            b = Number(b.substring(1, b.length - 1));
            return a - b;
          });
          if (tokens.length !== (arguments.length - 1)) {
            throw new RangeError("Incorrect amount of parameters given!");
          }
          else {
            for (let i = 0; i < tokens.length; i++) {
              let number = Number(tokens[i].substring(1, tokens[i].length - 1));
              if (number !== i) {
                throw new RangeError("Incorrect placeholders given!");
              }
              else {
                message = message.replace(tokens[i], arguments[i + 1])
              }
            }
            return message;
          }
        }
      }
    }
  };

describe("C# Console", () => {
    it("should have statis method writeline", () => {
        assert.isTrue(!!Console.writeLine);
    });

    describe("writeline", () => {
        it("should return given string when 1 string argument is given", () => {
            const str = "some {0} string {1}";

            const result = Console.writeLine(str);

            assert.equal(result, "some {0} string {1}");
        });

        it("should return object's JSON representation when single object is given", () => {
            const obj = {width: 2, height: 5};

            const result = Console.writeLine(obj);

            assert.equal(result, JSON.stringify(obj));
        });

        describe("writeLine(templateString, parameters)", () => {
            it("should throw TypeError when first argument is not string", () => {
                assert.throw(() => {
                    Console.writeLine({}, "1", "2");
                }, TypeError);
            });

            it("should throw RangeError when the number of parameters does not correspond to the number of placeholders in the template string", () => {
                assert.throw(() => {
                    Console.writeLine("{0} {1}", "1");
                }, RangeError);

                assert.throw(() => {
                    Console.writeLine("{0} {1}", "1", "2", "3");
                }, RangeError);
            });

            it("should throw RangeError when placeholders have indices not within the parameters range", () => {
                assert.throw(() => {
                    Console.writeLine("{1} {2}", "1", "2");
                }, RangeError);

                assert.throw(() => {
                    Console.writeLine("{10} {20}", "1", "2");
                }, RangeError);
            });

            it("should return string with replaced placeholders when arguments are correct", () => {
                assert.equal(Console.writeLine("{0} {1}", "10", "20"), "10 20");
                assert.equal(Console.writeLine("{1} {0} {2}", "20", "10", "30"), "10 20 30");
                assert.equal(Console.writeLine("F{0} S{1} t{2} f{3}", "40", "30", "20", "10"), "F40 S30 t20 f10");
            });
        });
    });
});