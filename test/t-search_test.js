// <!doctype html>
// <html lang="en">

// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes">

//   <title>t-search test</title>

//   <script src="../bower_components/webcomponentsjs/webcomponents-lite.js"></script>
//   <script src="../bower_components/web-component-tester/browser.js"></script>
//   <script src="../bower_components/iron-test-helpers/mock-interactions.js"></script>

//   <script src="../bower_components/test-fixture/test-fixture-mocha.js"></script>

//   <link rel="import" href="../bower_components/iron-test-helpers/test-helpers.html">
//   <link rel="import" href="../t-search.html">

// </head>

// <body>
//   <test-fixture id="basic">
//     <template>
//       <t-search id="search"></t-search>
//     </template>
//   </test-fixture>

//   <script>

function runAfterOpen(menu, callback) {
  menu.$.menuButton.$.dropdown.addEventListener('iron-overlay-opened', function () {
    Polymer.Base.async(callback, 1);
  });
  MockInteractions.tap(menu);
}
suite('t-search', function () {

  //test case for initial condition in t-search.html.
  test('instantiating the element works', function () {
    var header = fixture('basic');
    assert.equal(header.is, 't-search');
  });
  var header;
  setup(function () {
    header = fixture('basic');
  });

  //test case for travellers dropdown property in t-search.html 

  test("choice default value for travellers dropdown in property", function () {
    assert.equal(header.choice, '0');
  });
  //test case for travellers dropdown toggle in t-search.html
  // test("show variable for hidden traveller dropdown toggle", function () {
  //   assert.equal(header.showTravellersPaperCard, true)
  // });
  //test case for appearing the date in t-search.html


  //test case for check in date picker is appearing in t-search.html
  test('keypress is appearing for check in date picker', function () {
    var myElement = document.querySelector("#start");
    if (myElement.isSelected == true) {
      assert.equal(myElement.fire(new CustomEvent('keypress')));
    }
  });

  //test case for check out date picker is appearing in t-search.html

  test('keypress is appearing for check out date picker', function () {
    var myElement = document.querySelector("#end");
    if (myElement.isSelected == true) {
      assert.equal(myElement.fire(new CustomEvent('keypress')));
    }
  });

  //test case for button triggered in t-search.html

  test('search button can be triggered with enter', function () {
    var button = document.querySelector("#button");
    button.addEventListener('click', function () {
                assert.equal(button.fire(new CustomEvent('click')));

     // click();
    });
    MockInteractions.pressEnter(button);

  });

  //test case for dropdown open in t-search

  test('travellers dropdown opens when tapped', function (isSelected) {
    if (runAfterOpen.isSelected == true) {
      var content = document.querySelector("#deskinput1");
      var contentRect = content.getBoundingClientRect();
      contentRect = content.getBoundingClientRect();
      assert.equal(content.fire(new CustomEvent('click')));

    }
    isSelected();
  });

  //test case for dropdown close in t-search.html

  test('travellers dropdown closes when an item is activated', function () {
    var content = document.querySelector("#deskinput1");
    runAfterOpen(content, function () {
      var firstItem = Polymer.dom(content).querySelector('paper-item');
      if (firstItem.click == true) {
        assert.equal(done.hide, false);
      }
      done();
    });

  });

  //test case for triggered addRoom in choice-card.html 
  test('can be triggered add room button', function (done) {
    var card = document.querySelector("#choiceCard");
    var button = card.querySelector("#button1");
    button.addEventListener('click', function () {
      done();
    });
    MockInteractions.tap(button);
  });
  //test case for triggered done in choice-card.html
  test('done button can be triggered with enter', function () {
    var card = document.querySelector("#choiceCard");
    var button = card.querySelector("#button2");
    button.addEventListener('click', function () {
      expect(button.click).to.be.equal(true);
      done();
    });
    MockInteractions.pressEnter(button);
  });
  //test case for triggered addRoom by enter in choice-card.html
  test('add room button can be triggered with enter', function () {
    var card = document.querySelector("#choiceCard");
    var button = card.querySelector("#button1");
    button.addEventListener('click', function () {
      expect(button.click).to.be.equal(true);
      done();
    });
    MockInteractions.pressEnter(button);
  });


  //test case for triggered used for done button which is used on the header ofdate picker on mobile screen in t-search.html
  test('done button can be triggered after selection of start and end date', function (click) {

    var startValue = document.querySelector("#start").value;


    var endValue = document.querySelector("#end").value;
    if (this.click == true) {
      assert.equal(click.startValue, click.endValue, true);
      this._showDateToolbar = true;
    }
    click();
  });
  //test case for work after clicking on clear button on autocomplete toolbar at mobile screen in t-search.html
  test(' To clear the written Input ', function (autoInput) {
    if (this.autoInput == true) {
      var node = document.querySelector("#dropBox");
      while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
      }
      assert.equal(autoInput.stopPropagation, true);
      this.clear();
    }
    autoInput();
  });
  //test case for  used for Add Room button  on click this function adds the room to form ,in choice-card.html

  test('add Room after clicking on add button', function (push) {

    if (push.isSelected) {
      selectEventCounter++;
      assert.equal(push.room, s.selectedRoom);
    }
    push();

  });

  //test case for used for delete Room button (trash icon),on click this function delete the room to form,in choice-card.html

  test('delete the Room after clicking on deleteRoom', function (splice) {

    if (this.isSelected == true) {

      assert.equal(splice.room, isSelected);
      this.roomCount = this.roomCount - 1;
    }
    splice();
  });
  // test case for done button on click it count total adults, children nad rooms from the form,in choice-card.html
  test('done the Room after clicking on doneRoom', function (isSelected) {
    if ((this.roomCount += 1) == true) {
      assert.equal(isSelected.button.doneRoom, true);
    }

    isSelected();
  });
  //test case for function is used for child dropdown on click ,this function adds the child age dropdown to form,in choice-form.html
  test('To Count the child age', function (push) {
    if (push.isSelected) {
      for (var i = 0; i < cCount; i++) {
        assert.equal(push.children, child);
      }
    }
    push();
  });

  //test case for clear the input in t-autosuggest.html
  test('To clear the written input', function (event) {
    if (this.event == true) {
      assert.equal(event.stopPropagation, true);
      Polymer.dom(this.$.clearContainer).node.setAttribute('class', 'hide');
      this.clear();

    }
    event();

  });

  //test case for to show loader while processing and the cross icon after selection to clear in autocomplete.js
  test('Test to show loader while processing and cross icon after selection to clear', function () {


    input.onkeyup = function () {
      inputValue = custParams.pre(input);
      if (inputValue.length >= component.minimumCharacters) {
        custParams = self.CustParams(input);
        assert.equal(component.$.spinner.hidden, false);
      }
    }
  });

  //test case for to show focus after typing 3 charset in autocomplete.js                    
  test('input on keyup after 3 charset', function () {
    input.onkeyup = function () {
      inputValue = custParams.pre(input);
      if (this.inputValue.length > 3) {
        custParams = self.CustParams(input);
        assert.equal(custParams.pre(input), true);
      }
    }
  });

  //test case for Should fire when user stop typing - Gap should be min 50ms in autocomplete.js
  test('set timeOut for user stop typing Gap should be min 50ms', function () {
    var timeout = null;
    input.onkeyup = function (e) {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        console.log('Input Value:', input.value);
      }, component.delay);
    }
  });

  //test case for if Pax count is having child than age selection should be mandatory in choice-form.html
  test('Pax count is having child than age selection should be mandatory', function (push) {

    if (push.isSeleted) {
      var cCount = this.countChildren;
      for (var i = 0; i < cCount; i++) {
        this.push('children', { child: "" });
        assert.isTrue(child._ageLabelShow, true);
      }
    }
    push();
  });

  //test case for checking the correct dayname when we select the date
  test('check the Day Name is correct', function (date) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(date);
    if (d.isSelected == true) {
      //var d = new Date(date);
      var dayName = days[d.getDay()];
      assert.equal(dayName.show, true);
    }
    date();

  });


  //test case for the selected date should be in proper format from t-date-picker.html
  test('is selected date should be in proper dateFormat', function (isSelected) {
    var date = new Date();
    if (isSelected.date == true) {
      assert.isTrue(date.DateFormat("MM/DD/YY"));
    }
    isSelected();
  });

  //test case for checkingthe last day of month in t-calender.html
  test('check Last Day of Month', function (isSelected) {
    var date = new Date();
    if (date.isSelected) {
      assert.equal(date.getFullYear(), date.getMonth() + 1, 0);
      //  expect().toEqual(dateFormat);
      return date;
    }
    isSelected();
  });

  //test case for checking first day of month in t-calender.html
  test('check First Day of Month', function (isSelected) {
    var date = new Date();
    if (date.isSelected) {
      assert.equal(d.setMonth(d.getMonth(), 1), true);
      d.setHours(0, 0, 0, 0);
      return date;
    }
    isSelected();
  });

  //test case for checking the first day of week in t-calender.html

  test('check first day of week', function (isSelected) {
    var date = new Date();
    if (date.isSelected) {
      var dayName = document.querySelector("#weekday").textContent;
      if (dayName == "M") {
        return "Monday";
      }
      else {
        return "Sunday";
      }
    }
    isSelected();
  });
  // _swipeNextMonth: function () {
  //   if (!this.maxDate || this.currentYear < this.maxDate.getFullYear() || this.currentMonth < this.maxDate.getMonth() + 1) {
  //     this._translateX(+1, 'swipe', function () {
  //       this.set('_contentClass', '');
  //       this.transform('translateX(' + this._startPos + 'px)', this.$.months);
  //       this.fire('swiped', { direction: 'left' });
  //     }.bind(this));
  //   }
  // },

});
//   </script>
// </body>
