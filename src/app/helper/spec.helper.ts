import { By } from '@angular/platform-browser';

export const expectClasses = (
  expect,
  classes,
  shouldHave: string[],
  allClasses: string[] = []
) => {
  const shouldNotHave = allClasses.filter(function(i) {
    return shouldHave.indexOf(i) < 0;
  });
  // Expect all shouldHave classes prensent
  for (const className of shouldHave) {
    expect(classes[className]).toBe(true);
  }
  // Expect allClasses without shouldHave classes not present
  if (shouldNotHave.length > 0) {
    for (const className of shouldNotHave) {
      expect(classes[className]).toBeFalsy();
    }
  }
};

export const getByCss = (fixture, css: string) => {
  return fixture.debugElement.query(By.css(css));
};

export const expectToHaveClassName = (expect, fixture, css, className) => {
  expect(getByCss(fixture, css).classes[className]).toBe(true);
};

export const expectToNotHaveClassName = (expect, fixture, css, className) => {
  expect(getByCss(fixture, css).properties[className]).toBeFalsy();
};

export const expectToBeDisabled = (expect, fixture, css) => {
  expect(getByCss(fixture, css).properties['disabled']).toBe(true);
};

export const expectToNotBeDisabled = (expect, fixture, css) => {
  expect(getByCss(fixture, css).properties['disabled']).toBeFalsy();
};

export const expectPropertyToBe = (
  expect,
  fixture,
  css,
  propertyName,
  variable
) => {
  expect(getByCss(fixture, css).properties[propertyName]).toBe(variable);
};

export const expectPropertyNotToBe = (
  expect,
  fixture,
  css,
  propertyName,
  variable
) => {
  expect(getByCss(fixture, css).properties[propertyName]).not.toBe(variable);
};

export const getAllByCss = (fixture, css: string) => {
  return fixture.debugElement.queryAll(By.css(css));
};

export const expectClassExist = (expect, fixture, css) => {
  expect(getByCss(fixture, css)).not.toEqual(null);
};

export const expectClassNotExist = (expect, fixture, css) => {
  expect(getByCss(fixture, css)).toEqual(null);
};
