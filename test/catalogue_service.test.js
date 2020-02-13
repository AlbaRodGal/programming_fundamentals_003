const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooksByAuthor", () => {
    test("returns the total number of books written by the given author", () => {
      expect(catalogueService.countBooksByAuthor("Hilary Mantel")).toBe(5);
      expect(catalogueService.countBooksByAuthor("Celeste Ng")).toBe(1);
      expect(catalogueService.countBooksByAuthor("Charles Dickens")).toBe(3);
    });
  });
});
describe("catalogueService", () => {
  describe("catalogueService.checkBookByTitle", () => {
    test("returns true if the book exists", () => {
      expect(catalogueService.checkBookByTitle("The Assassination of Margaret Thatcher")).toBe(true);
      expect(catalogueService.checkBookByTitle("Sapiens")).toBe(false);
  });
});
});

describe("catalogueService", () => {
  describe("catalogueService.countBooksByFirstLetter", () => {
    test("returns the total number of books starting with W", () => {
      expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);
      expect(catalogueService.countBooksByFirstLetter("w")).toBe(2);
    });
  });
});

  describe("catalogueService.getQuantity", () => {
    test("returns the quantity of this item", () => {
      expect(catalogueService.getQuantity("A Place of Greater Safety")).toBe(11);
    });
  });

  describe('catalogueService.getBooksByAuthor',() =>{
    test('returns a list of books written by the given author', ()=> {
      expect(catalogueService.getBooksByAuthor('Robert Bolaño')).toEqual([{ title: "2666", author: "Robert Bolaño", quantity: 17 }, { title: "By Night In Chile", author: "Robert Bolaño", quantity: 8}]);
    });
  });

