describe('FAQ', function() {

    var img = document.getElementsByTagName("img")[0];
    var figure = document.getElementsByTagName("figure")[0];
    var shadow = document.getElementsByTagName("figure")[1];
    var body = document.getElementsByTagName("body")[0];
    var html = document.getElementsByTagName("html")[0];
    var h1 = questions.querySelector("h1");
    var buttons = questions.querySelectorAll("button");
    var closedTitle = document.querySelector(".closed h2");
    var answer = questionOneList[1].querySelectorAll("p")[0];
    var headingColor = "rgb(29, 30, 53)";
    var main = document.getElementsByTagName("main")[0];
    var footer = document.getElementsByTagName("footer")[0];

    
    function extractPxValue(pxValue) {

        return pxValue.substring(0, pxValue.length - 2);

    }

    function myMargin(smaller, bigger) {
        
        return (extractPxValue(window.getComputedStyle(bigger).getPropertyValue("width")) 
                - extractPxValue(window.getComputedStyle(smaller).getPropertyValue("width"))) / 2;

    }

    it('second figure', function() {
        
        expect(main.children.item(0).tagName).toBe("FIGURE"); // Be("images/illustration-woman-online-mobile.svg");

    });

    it('second figure width is 240px', function() {

        expect(window.getComputedStyle(shadow).getPropertyValue("width")).toBe("240px");

    });

    it('second figure height is 104px', function() {

        expect(window.getComputedStyle(shadow).getPropertyValue("height")).toBe("104px");

    })

    it('second figure margin-top is 0', function() {

        expect(window.getComputedStyle(shadow).getPropertyValue("margin-top")).toBe("0px");

    })

    it('second figure has img child', function() {
        
        expect(shadow.children.item(0).tagName).toBe("IMG");

    });

    it('second figure has img src', function() {
        
        expect(shadow.children.item(0).getAttribute("src")).toBe("images/bg-pattern-mobile.svg");

    });
    
    it('image margin-bottom is 0', function() {

        expect(window.getComputedStyle(figure).getPropertyValue("margin-bottom")).toBe("0px");

    })

    it('img alt', function() {

        expect(img.getAttribute("alt")).not.toBe(null);

    });

    it('img src', function() {

        expect(img.getAttribute("src")).toBe("images/illustration-woman-online-mobile.svg");

    });

    it('img alt', function() {

        expect(img.getAttribute("alt")).not.toBe(null);

    });

    it('figure height', function() {

        expect(window.getComputedStyle(figure).getPropertyValue("height")).toBe("180px");

    })

    it('figure width', function() {

        expect(window.getComputedStyle(figure).getPropertyValue("width")).toBe("238px");

    })

    it('background gradient', function() {

        expect(window.getComputedStyle(body).getPropertyValue("background-image")).toBe("linear-gradient(rgb(175, 103, 233), rgb(101, 101, 231))");

    })

    it('background FAQ section', function() {

        expect(window.getComputedStyle(questions).getPropertyValue("background-color")).toBe("rgb(255, 255, 255)");

    })

    it('rounded corners FAQ section', function() {

        expect(window.getComputedStyle(questions).getPropertyValue("border-radius")).toBe("25px");

    })

    it('font family FAQ section', function() {

        expect(window.getComputedStyle(body).getPropertyValue("font-family")).toBe("\"Kumbh Sans\", sans-serif");

    })

    it('font size body section', function() {

        expect(window.getComputedStyle(body).getPropertyValue("font-size")).toBe("12px");

    })

    it('font size h1 FAQ section', function() {

        expect(window.getComputedStyle(h1).getPropertyValue("font-size")).toBe("30px");

    })

    it('align center h1 FAQ section', function() {

        expect(window.getComputedStyle(h1).getPropertyValue("text-align")).toBe("center");

    })

    it('padding-top FAQ section', function() {

        expect(window.getComputedStyle(questions).getPropertyValue("padding-top")).toBe("132px");

    })
    
    it('margin-top h1 FAQ section', function() {

        expect(window.getComputedStyle(h1).getPropertyValue("margin-top")).toBe("0px");

    })

    it('margin-bottom h1 FAQ section', function() {

        expect(window.getComputedStyle(h1).getPropertyValue("margin-bottom")).toBe("14px");

    })

    it('questions padding right', function() {

        expect(window.getComputedStyle(questions).getPropertyValue("padding-right")).toBe("22px");

    })

    it('questions padding left', function() {

        expect(window.getComputedStyle(questions).getPropertyValue("padding-left")).toBe("22px");

    })

    it('h2s are 14px', function() {

        for (h2 of h2s) {

            expect(window.getComputedStyle(h2).getPropertyValue("font-size")).toBe("14px");

        }        

    })

    it('closed title question is not bold', function() {

        expect(window.getComputedStyle(closedTitle).getPropertyValue("font-weight")).toBe("400");

    })

    it('second child in the first question is a button', function() { 

        // second child da bude button, pa vezati sličicu strelice na njega https://www.w3schools.com/jsref/prop_node_childnodes.asp
        for (var i = 0; i < 2; i++) {

            expect(questionOneList[i].childNodes[3].tagName).toBe("BUTTON");
            
        }        

    })    

    it('question one has top padding 16px', function() {

        for (questionOne of questionOneList) {

            expect(window.getComputedStyle(questionOne).getPropertyValue("padding-top")).toBe("16px");
            
        }
        

    })

    it('question one has bottom padding 16px', function() {

        for (questionOne of questionOneList) {

            expect(window.getComputedStyle(questionOne).getPropertyValue("padding-bottom")).toBe("16px");
            
        }

    })

    it('h2 no top margin', function() {

        for (h2 of h2s) {

            expect(window.getComputedStyle(h2).getPropertyValue("margin-top")).toBe("0px");
            
        }

    })

    it('h2 no bottom margin', function() {
  

        expect(window.getComputedStyle(h2s[0]).getPropertyValue("margin-bottom")).toBe("0px");            
        

    })

    it('p in one-question bottom margin 0', function() {

        expect(window.getComputedStyle(answer).getPropertyValue("margin-bottom")).toBe("0px");

    })

    it('questions padding bottom 50px', function() {

        expect(window.getComputedStyle(questions).getPropertyValue("padding-bottom")).toBe("50px");

    })

    it('p in one-question top margin 0', function() {

        expect(window.getComputedStyle(answer).getPropertyValue("margin-top")).toBe("10px");

    })

    it('button questions', function() {

        expect(window.getComputedStyle(buttons[0]).getPropertyValue("margin-top")).toBe("0px");

    })

    it('button no top borders', function() {

        for (button of buttons) {

            expect(window.getComputedStyle(button).getPropertyValue("border-top-style")).toBe("none");

        } 

    })

    it('button no bottom borders', function() {

        for (button of buttons) {

            expect(window.getComputedStyle(button).getPropertyValue("border-bottom-style")).toBe("none");

        }   

    })

    it('button no right borders', function() {

        for (button of buttons) {

            expect(window.getComputedStyle(button).getPropertyValue("border-right-style")).toBe("none");

        }   

    })

    it('button no left borders', function() {

        for (button of buttons) {

            expect(window.getComputedStyle(button).getPropertyValue("border-left-style")).toBe("none");

        }   

    })

    it('button has bckg image', function() {
  
        for (button of buttons) { 
            expect(window.getComputedStyle(button).getPropertyValue("background-image"))
                         .toBe("url(\"file:///C:/Users/Masha/Downloads/faq-accordion-card-main/images/icon-arrow-down.svg\")");     
        
        }                 
    })

    it('button has bckg image no-repeat', function() {
  
        for (button of buttons) {

            expect(window.getComputedStyle(button).getPropertyValue("background-repeat"))
                         .toBe("no-repeat"); 

        }            

    })

    it('button 0 has bckg image position center', function() {
         
        expect(window.getComputedStyle(buttons[0]).getPropertyValue("background-position"))
                         .toBe("50% 50%"); 
               

    })

    it('button 0 has bckg color transparent', function() {
         
        expect(window.getComputedStyle(buttons[0]).getPropertyValue("background-color"))
                         .toBe("rgba(0, 0, 0, 0)"); 
               

    })

    it('buttons have bckg image no-repeat', function() {
  
        for (button of buttons) {

            expect(button.innerHTML)
                         .toBe(""); 

        }            

    })

    it('button 0 is 12px high', function() {
         
        expect(window.getComputedStyle(buttons[0]).getPropertyValue("height"))
                         .toBe("12px"); 
               

    })

    it('one question is flex', function() {
         
        expect(window.getComputedStyle(questionOneList[0]).getPropertyValue("display"))
                     .toBe("flex"); 
           
    })

    it('one question wrap is on', function() {

        for(questionOne of questionOneList) {
        
            expect(window.getComputedStyle(questionOne).getPropertyValue("flex-wrap"))
                         .toBe("wrap");
        
        }

    })

    it('answer is 270px wide', function() {

        expect(window.getComputedStyle(answer).getPropertyValue("width"))
                     .toBe("270px");
        
    })    

    it('one question flex is space between', function() {

        for(questionOne of questionOneList) {
        
            expect(window.getComputedStyle(questionOne).getPropertyValue("justify-content"))
                         .toBe("space-between");
        
        }

    })

    it('one question color of answer', function() {

        expect(window.getComputedStyle(answer).getPropertyValue("color"))
                     .toBe("rgb(120, 120, 135)");  

    })

    it('line-height of answer', function() {

        expect(window.getComputedStyle(answer).getPropertyValue("line-height"))
                     .toBe("18px");  

    })

    it('one question color of closed question', function() {

        expect(window.getComputedStyle(closedTitle).getPropertyValue("color"))
                     .toBe("rgb(74, 75, 94)");  

    })

    it('h1 heading color', function() {

        expect(window.getComputedStyle(h1).getPropertyValue("color")).toBe(headingColor);

    })

    it('one question align-items is center', function() {

        for(questionOne of questionOneList) {
        
            expect(window.getComputedStyle(questionOne).getPropertyValue("align-items"))
                         .toBe("center");
        
        }

    })
   
    it('figure margin left is auto', function() {

        expect(window.getComputedStyle(figure).getPropertyValue("margin-left"))
                     .toBe("0px");

    })

    it('h2 width is 270px', function() {

        for (h2 of h2s) {

            expect(window.getComputedStyle(h2).getPropertyValue("width")).toBe("270px");
            
        }

    })

    it('body margin-left 0px', function() {

        expect(window.getComputedStyle(body).getPropertyValue("margin-left")).toBe("0px");

    })

    it('body margin-right 0px', function() {

        expect(window.getComputedStyle(body).getPropertyValue("margin-right")).toBe("0px");

    })

    it('body margin-bottom 0px', function() {

        expect(window.getComputedStyle(body).getPropertyValue("margin-bottom")).toBe("0px");

    })

    it('html height is 768px', function() {

        expect(window.getComputedStyle(html).getPropertyValue("height")).toBe("768px");

    })

    it('figure margin-top is 0px', function() {

        expect(window.getComputedStyle(figure).getPropertyValue("margin-top")).toBe("0px");

    })

    it('questions section relative from bottom', function() {

        expect(window.getComputedStyle(questions).getPropertyValue("bottom")).toBe("174px");

    })

    it('questions section is z-index 0', function() {

        expect(window.getComputedStyle(questions).getPropertyValue("z-index")).toBe("0");

    })

    it('drop-shadow below image', function() {

        expect(window.getComputedStyle(img).getPropertyValue("filter")).toBe("none");

    })

    it('one question has cursor pointer', function() {

        for(questionOne of questionOneList) {
        
            expect(window.getComputedStyle(questionOne).getPropertyValue("cursor"))
                         .toBe("pointer");
        
        }

    })

    it('button has upside down image', function() {

        expect(window.getComputedStyle(buttons[1]).getPropertyValue("transform")).toBe("matrix(-1, 0, 0, -1, 0, 0)");          

    })

    it('h2 has bluish dark color', function() {

        expect(window.getComputedStyle(h2s[1]).getPropertyValue("color")).toBe(headingColor);          

    })

    it('closed question doesn\'t show answer', function() {
        
        expect(window.getComputedStyle(question.querySelector("p")).getPropertyValue("display"))
                     .toBe("none");
        
    })

    it('button has cursor pointer', function() {

        buttons.forEach((b) => expect(window.getComputedStyle(b).getPropertyValue("cursor"))
                                            .toBe("pointer"));        

    })

    it('footer has bluish dark color', function() {

        expect(window.getComputedStyle(footer).getPropertyValue("color"))
                                              .toBe(headingColor);        

    })

    it('body is relative position', function() {

        expect(window.getComputedStyle(body).getPropertyValue("position"))
                                            .toBe("relative");

    })

    it('footer is relative 40px bottom', function() {

        expect(window.getComputedStyle(footer).getPropertyValue("bottom"))
                                              .toBe("40px");

    })

    it('questions are 325px wide for small screen', function() {

        expect(window.getComputedStyle(questions).getPropertyValue("width"))
                                                 .toBe("325px");

    }); // should be širok nešto, vidi u Paintu

    it('white thing margin right is auto', function() {

        //    var figureW = window.getComputedStyle(figure).getPropertyValue("width");
        var marginAuto = myMargin(main, body);
            // (extractPxValue(window.getComputedStyle(main).getPropertyValue("width")) 
            //                - extractPxValue(figureW)) / 2; // substr metoda https://www.w3schools.com/js/js_string_methods.asp 
        expect(window.getComputedStyle(main).getPropertyValue("margin-right"))
                     .toBe(marginAuto + "px");
    
    })

    it('footer height is 83px', function() {

        expect(window.getComputedStyle(footer).getPropertyValue("height"))
                                              .toBe("83px");

    })

    it('footer has p', function() {

        expect(footer.children[0].tagName).toBe("P");

    })

    it('body top margin is 0', function() {

        expect(window.getComputedStyle(body).getPropertyValue("margin-top"))
                                            .toBe("0px");

    })

    it('body height is 768px', function() {

        expect(window.getComputedStyle(body).getPropertyValue("height"))
                                            .toBe("768px");

    })

    it('body box-sizing is border-box', function() {

        expect(window.getComputedStyle(body).getPropertyValue("box-sizing"))
                                            .toBe("border-box");

    })

    it('footer position is static', function() {

        expect(window.getComputedStyle(footer).getPropertyValue("position"))
                                              .toBe("static");

    })

    it('question margin-top is 145px', function() {

        expect(window.getComputedStyle(questions).getPropertyValue("margin-top"))
                                                 .toBe("145px");

    })

    it('question margin-bottom is 0px', function() {

        expect(window.getComputedStyle(questions).getPropertyValue("margin-bottom"))
                                                 .toBe("0px");

    })

    it('shadow is absolute positioned', function() {

        expect(window.getComputedStyle(shadow).getPropertyValue("position"))
                                              .toBe("absolute");

    });

    it('shadow left or right', function() {

        var marg = extractPxValue(window.getComputedStyle(questions).getPropertyValue("width")) / 2 
                 - extractPxValue(window.getComputedStyle(shadow).getPropertyValue("width")) / 2;

        expect(window.getComputedStyle(shadow).getPropertyValue("left"))
                                              .toBe(marg + "px");

    });

    it('main width 325px', function() {

        expect(window.getComputedStyle(main).getPropertyValue("width"))
                                            .toBe("325px");

    })

    it('main position relative', function() {

        expect(window.getComputedStyle(main).getPropertyValue("position"))
                                            .toBe("relative");

    })

    it('question position static', function() {

        expect(window.getComputedStyle(questions).getPropertyValue("position"))
                                                 .toBe("static");

    })
 
    it('shadow is absolute positioned', function() {

        expect(window.getComputedStyle(shadow).getPropertyValue("position"))
                                              .toBe("absolute");

    });

    it('shadow is bottom 430px', function() {

        expect(window.getComputedStyle(shadow).getPropertyValue("bottom"))
                                              .toBe("430px");

    });

    it('shadow is bottom 430px', function() {

        expect(window.getComputedStyle(shadow).getPropertyValue("bottom"))
                                              .toBe("430px");

    });

    it('shadow is top -2px', function() {

        expect(window.getComputedStyle(shadow).getPropertyValue("top"))
                                              .toBe("-2px");

    });
    
    it('figure is absolute positioned', function() {

        expect(window.getComputedStyle(figure).getPropertyValue("position"))
                                              .toBe("absolute");

    });

    it('figure is z-index 2', function() {

        expect(window.getComputedStyle(figure).getPropertyValue("z-index"))
                                              .toBe("2");

    });

    it('figure bottom is 460', function() {

        expect(window.getComputedStyle(figure).getPropertyValue("bottom"))
                                              .toBe("460px");

    });

    it('body padding is 0', function() {

        expect(window.getComputedStyle(body).getPropertyValue("padding-top"))
                                            .toBe("0px");

    });

    it('main padding is 145px', function() {

        expect(window.getComputedStyle(main).getPropertyValue("padding-top"))
                                            .toBe("145px");

    });


});