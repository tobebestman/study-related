describe("Assignment 1", function() {
  describe('document body', function () {
    it("should contain a #top, #middle and #bottom div", function() {
      var top = document.getElementById('top');
      var middle = document.getElementById('middle');
      var bottom = document.getElementById('bottom');
      expect(top).not.toBe(null);
      expect(middle).not.toBe(null);
      expect(bottom).not.toBe(null);
    });
  });

  describe('#top div', function() {
    it("should contain 3 images, 3 links and 3 paragraphs", function() {
      var topDiv = document.getElementById('top');
      expect(topDiv.getElementsByTagName('img').length).toBe(3);
      expect(topDiv.getElementsByTagName('a').length).toBe(3);
      expect(topDiv.getElementsByTagName('p').length).toBe(3);
    });

    it('should have a class name "change"', function() {
      var topDiv = document.getElementById('top');
      expect(topDiv.className.indexOf('change')).not.toBe(-1);
    });

    it("should toggle the color of paragraphs between red/black when hovered", function() {
      var topParagraphs = document.getElementById('top').getElementsByTagName('p');
      for (var i = 0; i < topParagraphs.length; i++) {
        topParagraphs[i].onmouseenter();
        expect(topParagraphs[i].style.color).toBe('red');
        topParagraphs[i].onmouseleave();
        expect(topParagraphs[i].style.color).toBe('black');
      }
    });
  });

  describe('#middle div', function() {
    it("should contain 3 images, 3 links and 3 paragraphs", function() {
      var middleDiv = document.getElementById('middle');
      expect(middleDiv.getElementsByTagName('img').length).toBe(3);
      expect(middleDiv.getElementsByTagName('a').length).toBe(3);
      expect(middleDiv.getElementsByTagName('p').length).toBe(3);
    });

    it('should not have a class "change"', function() {
      var middleDiv = document.getElementById('middle');
      expect(middleDiv.className.indexOf('change')).toBe(-1);
    });

    it("should not have an onmouseenter and onmouseleave event handler", function() {
      var middleParagraphs = document.getElementById('middle').getElementsByTagName('p');
      for (var i = 0; i < middleParagraphs.length; i++) {
        expect(middleParagraphs[i].onmouseenter).toBeFalsy();
        expect(middleParagraphs[i].onmouseleave).toBeFalsy();
      }
    });
  });

  describe('#bottom div', function() {
    it("should contain 3 images, 3 links and 3 paragraphs", function() {
      var bottomDiv = document.getElementById('bottom');
      expect(bottomDiv.getElementsByTagName('img').length).toBe(3);
      expect(bottomDiv.getElementsByTagName('a').length).toBe(3);
      expect(bottomDiv.getElementsByTagName('p').length).toBe(3);
      expect(bottomDiv.className).toBe('change');
    });

    it('should have a class name "change"', function() {
      var bottomDiv = document.getElementById('bottom');
      expect(bottomDiv.className.indexOf('change')).not.toBe(-1);
    });

    it("should toggle the color of paragraphs between red/black when hovered", function() {
      var bottomParagraphs = document.getElementById('bottom').getElementsByTagName('p');
      for (var i = 0; i < bottomParagraphs.length; i++) {
        bottomParagraphs[i].onmouseenter();
        expect(bottomParagraphs[i].style.color).toBe('red');
        bottomParagraphs[i].onmouseleave();
        expect(bottomParagraphs[i].style.color).toBe('black');
      }
    });
  });

  describe("all paragraphs", function() {
    it("should toggle the border to 1px dashed black when clicked", function() {
      var paragraphs = document.getElementsByTagName('p');
      for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].onclick();
        expect(paragraphs[i].style.border).toBe('1px dashed black');
        paragraphs[i].onclick();
        expect(paragraphs[i].style.border).toBe('');
      }
    });
  });

  describe("#top images", function() {
    it("should have a 'display: none' style when double clicked", function() {
      topImgs = document.getElementById('top').getElementsByTagName('img');
      for (var i = 0; i < topImgs.length; i++) {
        topImgs[i].ondblclick();
        expect(topImgs[i].style.display).toBe('none');
        topImgs[i].style.display = 'inherit';
      }
    });
  });

  describe("#middle images", function() {
    it("should have a 'display: none' style when double clicked", function() {
      var middleImgs = document.getElementById('middle').getElementsByTagName('img');
      for (var i = 0; i < middleImgs.length; i++) {
        middleImgs[i].ondblclick();
        expect(middleImgs[i].style.display).toBe('none');
        // reset
        middleImgs[i].style.display = 'inline-block';
      }
    });
  });

  describe("#bottom images", function() {
    it("should not have a double click event handler", function() {
      var bottomImgs = document.getElementById('bottom').getElementsByTagName('img');
      for (var i = 0; i < bottomImgs.length; i++) {
        expect(bottomImgs[i].bottomImgs).not.toBeDefined();
      }
    });
  });

  describe("#top links", function() {
    it("should have at least one link that redirects to an url containing 'nhl'", function() {
      var topLinks = document.getElementById('top').getElementsByTagName('a');
      var hasNhlLink = false;
      for (var i = 0; i < topLinks.length; i++) {
        var eventMock = { preventDefault() {} };
        spyOn(eventMock, 'preventDefault');
        if (topLinks[i].href.indexOf('nhl') !== -1) hasNhlLink = true;
      }
      expect(hasNhlLink).toBe(true);
     });
  });

  describe("#middle links", function() {
    it("should have at least one link that redirects to an url containing 'nhl'", function() {
      var middleLinks = document.getElementById('middle').getElementsByTagName('a');
      var hasNhlLink = false;
      for (var i = 0; i < middleLinks.length; i++) {
        var eventMock = { preventDefault() {} };
        spyOn(eventMock, 'preventDefault');
        if (middleLinks[i].href.indexOf('nhl') !== -1) hasNhlLink = true;
      }
      expect(hasNhlLink).toBe(true);
     });
  });

  describe("#botttom links", function() {
    it("should have at least one link that redirects to an url containing 'nhl'", function() {
      var bottomLinks = document.getElementById('bottom').getElementsByTagName('a');
      var hasNhlLink = false;
      for (var i = 0; i < bottomLinks.length; i++) {
        if (bottomLinks[i].href.indexOf('nhl') !== -1) hasNhlLink = true;
      }
      expect(hasNhlLink).toBe(true);
     });

    it("should call preventDefault if href contains 'nhl'", function() {
      var bottomLinks = document.getElementById('bottom').getElementsByTagName('a');
      for (var i = 0; i < bottomLinks.length; i++) {
        var eventMock = { preventDefault() {} };
        spyOn(eventMock, 'preventDefault');
        if (bottomLinks[i].href.indexOf('nhl') !== -1) {
          bottomLinks[i].onclick(eventMock);
          expect(eventMock.preventDefault).toHaveBeenCalled();
        } else {
          expect(eventMock.preventDefault).not.toHaveBeenCalled();
        }
      }
     });
  });
});
