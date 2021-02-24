// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

describe('validator', () => {
  it('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });

  describe('validator.isValid', () => {
    it('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });

    it('debería retornar true para "5320485995286817"', () => {
      expect(validator.isValid("5320485995286817")).toBe(true);
    });

    it('debería retornar true para "5285847324176758"', () => {
      expect(validator.isValid("5285847324176758")).toBe(true);
    });

    it('debería retornar false para "1234567890857865"', () => {
      expect(validator.isValid("1234567890857865")).toBe(false);
    });

    it('debería retornar false para "0"', () => {
      expect(validator.isValid("0")).toBe(false);
    });
  });

  describe('validator.maskify', () => {
    it('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });

    it('Debería retornar "############5616" para "4556364607935616"', () => {
      expect(validator.maskify("4556364607935616")).toBe("**** **** **** 5616");
    });

    it('Debería retornar "false" para "1"', () => {
      expect(validator.maskify("1")).toBe(false);
    });

    it('Debería retornar "false" para "helloworld"', () => {
      expect(validator.maskify("helloworld")).toBe(false);
    });
  });
});
