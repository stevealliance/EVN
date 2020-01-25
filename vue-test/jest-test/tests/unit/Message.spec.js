import { mount } from "@vue/test-utils";
import Message from "../../src/components/Message";

const createCmp = propsData => mount(Message, { propsData });

describe("Message.test.js", () => {
  let cmp;

  describe("Properties", () => {
    it("should has a message property", () => {
      cmp = createCmp({ message: "hey" });
      expect(cmp.props().message).toBe("hey");
    });

    it("should hasn't cat property", () => {
      cmp = createCmp({ cat: "hey", message: "hey" });
      expect(cmp.props().cat).toBeUndefined();
    });

    it("should Dylan is the default author", () => {
      cmp = createCmp({ message: "hey" });
      expect(cmp.props().author).toBe("Dylan");
    });
    
    describe('Validation', () => {
      const message = createCmp().vm.$options.props.message

      it('message is of type string', () => {
        expect(message.type).toBe(String)
      });

      it('message is required', () => {
        expect(message.required).toBeTruthy()
      });

      it('message has at least length 2', () => {
        expect(message.validator && message.validator('a')).toBeFalsy()
        expect(message.validator && message.validator('aa')).toBeTruthy()
      });
      
    });

    describe('Custom events', () => {

    });

  });
});
