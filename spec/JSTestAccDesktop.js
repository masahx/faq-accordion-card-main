describe('FAQ', function() {

    var figures = document.getElementsByTagName("figure");
    var img = document.getElementsByTagName("img")[0];    
    var shadow = figures[1];
    var body = document.getElementsByTagName("body")[0];
    var h2 = questions.querySelector("h2");
    var buttons = questions.querySelectorAll("button");
    var closedTitle = document.querySelector(".closed h3");
    var answer = questionOneList[1].querySelectorAll("p")[0];
    var headingColor = "rgb(29, 30, 53)";
    var main = document.getElementsByTagName("main")[0];
    var footer = document.getElementsByTagName("footer")[0];
    var copy = footer.querySelector("p");
    var figureMob = figures[0];
    var desktops = document.querySelectorAll("figure.desktop");
    var figureDeskt = desktops[1];
    var shadowDesktImage = desktops[0].children[0];
    var shadowDeskt = desktops[0];
    var sectDeskt = figureDeskt.parentElement;    

    
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

    it('img alt', function() {

        expect(img.getAttribute("alt")).not.toBe(null);

    });

    it('figure height', function() {

        expect(window.getComputedStyle(figure).getPropertyValue("height")).toBe("180px");

    })

    it('figure width', function() {

        expect(window.getComputedStyle(figure).getPropertyValue("width")).toBe("238px");

    })

    it('figure mob none display', function() {

        expect(window.getComputedStyle(figureMob).getPropertyValue("display")).toBe("none");

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

    it('font size h2 FAQ section', function() {

        expect(window.getComputedStyle(h2).getPropertyValue("font-size")).toBe("30px");

    })

    it('padding-top FAQ section', function() {

        expect(window.getComputedStyle(questions).getPropertyValue("padding-top")).toBe("0px");

    })
    
    it('margin-top h2 FAQ section', function() {

        expect(window.getComputedStyle(h2).getPropertyValue("margin-top")).toBe("0px");

    })

    it('margin-bottom h2 FAQ section', function() {

        expect(window.getComputedStyle(h2).getPropertyValue("margin-bottom")).toBe("20px");

    })

    it('questions padding right', function() {

        expect(window.getComputedStyle(questions).getPropertyValue("padding-right")).toBe("0px");

    })

    it('questions padding left', function() {

        expect(window.getComputedStyle(questions).getPropertyValue("padding-left")).toBe("0px");

    })

    it('h3s are 14px', function() {

        for (h3 of h3s) {

            expect(window.getComputedStyle(h3).getPropertyValue("font-size")).toBe("14px");

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

    it('h3 no top margin', function() {

        for (h3 of h3s) {

            expect(window.getComputedStyle(h3).getPropertyValue("margin-top")).toBe("0px");
            
        }

    })

    it('h3 no bottom margin', function() {
  

        expect(window.getComputedStyle(h3s[0]).getPropertyValue("margin-bottom")).toBe("0px");            
        

    })

    it('p in one-question bottom margin 0', function() {

        expect(window.getComputedStyle(answer).getPropertyValue("margin-bottom")).toBe("0px");

    })

    it('questions padding bottom 0px', function() {

        expect(window.getComputedStyle(questions).getPropertyValue("padding-bottom")).toBe("0px");

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

    it('h2 heading color', function() {

        expect(window.getComputedStyle(h2).getPropertyValue("color")).toBe(headingColor);

    })

    it('one question align-items is center', function() {

        for(questionOne of questionOneList) {
        
            expect(window.getComputedStyle(questionOne).getPropertyValue("align-items"))
                         .toBe("center");
        
        }

    })
  

    it('h3 width is 270px', function() {

        for (h3 of h3s) {

            expect(window.getComputedStyle(h3).getPropertyValue("width")).toBe("270px");
            
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

    it('figure margin-top is 0px', function() {

        expect(window.getComputedStyle(figure).getPropertyValue("margin-top")).toBe("0px");

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

    it('h3 has bluish dark color', function() {

        expect(window.getComputedStyle(h3s[1]).getPropertyValue("color")).toBe(headingColor);          

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


    it('footer is relative 40px bottom', function() {

        expect(window.getComputedStyle(footer).getPropertyValue("bottom"))
                                              .toBe("40px");

    })

    it('white thing margin right is auto', function() {

        //    var figureW = window.getComputedStyle(figure).getPropertyValue("width");
        var marginAuto = myMargin(main, body);
            // (extractPxValue(window.getComputedStyle(main).getPropertyValue("width")) 
            //                - extractPxValue(figureW)) / 2; // substr metoda https://www.w3schools.com/js/js_string_methods.asp 
        expect(window.getComputedStyle(main).getPropertyValue("margin-right"))
                     .toBe(marginAuto + "px");
    
    })

    it('footer has p', function() {

        expect(footer.children[0].tagName).toBe("P");

    })

    it('body top margin is 0', function() {

        expect(window.getComputedStyle(body).getPropertyValue("margin-top"))
                                            .toBe("0px");

    })

    it('body box-sizing is border-box', function() {

        expect(window.getComputedStyle(body).getPropertyValue("box-sizing"))
                                            .toBe("border-box");

    })

    it('footer position is static', function() {

        expect(window.getComputedStyle(footer).getPropertyValue("position"))
                                              .toBe("static");

    })

    it('question margin-top is 0px', function() {

        expect(window.getComputedStyle(questions).getPropertyValue("margin-top"))
                                                 .toBe("0px");

    })

    it('question margin-bottom is 0px', function() {

        expect(window.getComputedStyle(questions).getPropertyValue("margin-bottom"))
                                                 .toBe("0px");

    })

    it('shadow is absolute positioned', function() {

        expect(window.getComputedStyle(shadow).getPropertyValue("position"))
                                              .toBe("absolute");

    });

    it('main position relative', function() {

        expect(window.getComputedStyle(main).getPropertyValue("position"))
                                            .toBe("relative");

    })

    it('main margin-top is 0', function() {

        expect(window.getComputedStyle(main).getPropertyValue("margin-top"))
                                            .toBe("0px");

    });

    it('main margin-bottom is 0', function() {

        expect(window.getComputedStyle(main).getPropertyValue("margin-bottom"))
                                            .toBe("0px");

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
    
    it('figure is absolute positioned', function() {

        expect(window.getComputedStyle(figure).getPropertyValue("position"))
                                              .toBe("absolute");

    });

    it('figure is absolute positioned', function() {

        expect(window.getComputedStyle(figure).getPropertyValue("position"))
                                              .toBe("absolute");

    });

    it('figure is z-index 2', function() {

        expect(window.getComputedStyle(figure).getPropertyValue("z-index"))
                                              .toBe("2");

    });

    it('body padding is 0', function() {

        expect(window.getComputedStyle(body).getPropertyValue("padding-top"))
                                            .toBe("0px");

    });

    it('main padding is 128px', function() {

        expect(window.getComputedStyle(main).getPropertyValue("padding-top"))
                                            .toBe("128px");

    });

    it('body position is static', function() {

        expect(window.getComputedStyle(body).getPropertyValue("position"))
                                            .toBe("static");

    });

    it('footer display is block', function() {

        expect(window.getComputedStyle(footer).getPropertyValue("display"))
                                              .toBe("block");

    });

    it('footer flex direction is column', function() {

        expect(window.getComputedStyle(footer).getPropertyValue("flex-direction"))
                                              .toBe("column");

    });

    it('footer justify-content is center', function() {

        expect(window.getComputedStyle(footer).getPropertyValue("justify-content"))
                                              .toBe("center");

    });
/*   function myMargin(smaller, bigger) {
        
        return (extractPxValue(window.getComputedStyle(bigger).getPropertyValue("width")) 
                - extractPxValue(window.getComputedStyle(smaller).getPropertyValue("width"))) / 2;

    } */

    it('figure absolute on center', function() {

        expect(window.getComputedStyle(figure).getPropertyValue("left"))
                                              .toBe("43.5px");

    });

    it('min-height of body is 980', function() {

    //    var testResults = extractPxValue(window.getComputedStyle(html.querySelector(".jasmine_html-reporter")).getPropertyValue("min-height"));
    //    console.log(testResults);
        expect(window.getComputedStyle(body).getPropertyValue("min-height")) 
                                            .toBe("977px"); 
                                        
    });

    it('body is flex', function() {

        expect(window.getComputedStyle(body).getPropertyValue("display"))
                                            .toBe("flex");

    });    
    
    it('body flex direction is column', function() {

        expect(window.getComputedStyle(body).getPropertyValue("flex-direction"))
                                            .toBe("column");

    });  

    it('copyright has relative position', function() {

        expect(window.getComputedStyle(copy).getPropertyValue("position"))                    
                                            .toBe("static");

    });  

    it('copyright from bottom is auto', function() {

        expect(window.getComputedStyle(copy).getPropertyValue("bottom"))
                                            .toBe("auto");

    });  

    it('footer position is static', function() {

        expect(window.getComputedStyle(footer).getPropertyValue("position"))
                                              .toBe("static");

    });  


    it('justify-content is space-between', function() {

        expect(window.getComputedStyle(body).getPropertyValue("justify-content"))
                                            .toBe("space-between");

    }); 

    it('footer min-height is now auto', function() {

        expect(window.getComputedStyle(footer).getPropertyValue("min-height"))
                                              .toBe("auto");

    }); 


    it('big screen has desktop image', function() {

     //   window.resizeTo(1480, 1000);
        var width = window.innerWidth;
        console.log("evo " + width + " ");
        expect(window.getComputedStyle(figureDeskt).getPropertyValue("display"))
                     .toBe("block");
        window.resizeBy(50, 100);
        width = window.innerWidth;
        console.log("evo 2 " + width + " ");

    });

    it('three figures for desktop version', function() {

        expect(desktops.length).toBe(3);

    })


    it('there is figure with cube', function() {

        expect(figures[4].children[0].getAttribute("src")).toBe("images/illustration-box-desktop.svg");

    })

    it('there is figure with desktop shadow', function() {

        expect(shadowDesktImage.getAttribute("src")).toBe("images/bg-pattern-desktop.svg");

    })

    it('shadow desktop visible', function() {

        expect(window.getComputedStyle(figures[4]).getPropertyValue("display")).toBe("block");

    })

    it('desktop image wrapper is under wrapper', function() {

        expect(sectDeskt.tagName).toBe("SECTION");        

    })


    it('sectDesk has three children', function() {

        expect(sectDeskt.children.length).toBe(2);

    })

    it('sectDesk has height 507px', function() {

        expect(window.getComputedStyle(sectDeskt).getPropertyValue("height")).toBe("507px");

    })

    it('one line closed question', function() {

        expect(window.getComputedStyle(document.querySelectorAll(".one-question.closed")[0]).getPropertyValue("height")).toBe("51px");

    })

    it('sectDesk has width 388px', function() {

        expect(window.getComputedStyle(sectDeskt).getPropertyValue("width")).toBe("390px");

    })

    it('desktop 1 width is 472px', function() {

        expect(window.getComputedStyle(figureDeskt).getPropertyValue("width")).toBe("472px");         

    })
    
    it('desktop 1 height is 359px', function() {

        expect(window.getComputedStyle(figureDeskt).getPropertyValue("height")).toBe("359px");         

    })     

    it('desktop 0 width is 966px', function() {

        expect(window.getComputedStyle(shadowDeskt).getPropertyValue("width")).toBe("966px");         

    })

    it('desktop 0 height is 945px', function() {

        expect(window.getComputedStyle(shadowDeskt).getPropertyValue("height")).toBe("945px");         

    }) 

    it('sectDesk position is relative', function() {

        expect(window.getComputedStyle(sectDeskt).getPropertyValue("position")).toBe("relative"); 

    })

    it('figureDeskt left -84px', function() {

        /*   right 80px, top 70px ? prema paintu
           isprobaj .woman kad je right: 0, i svi pravci npr da su nula, tj kako se orijentiše woman */
        expect(window.getComputedStyle(figureDeskt).getPropertyValue("left")).toBe("-84px");         
    
    })

    it('shadowDeskt left -576px', function() {

        /*   right 80px, top 70px ? prema paintu
           isprobaj .woman kad je right: 0, i svi pravci npr da su nula, tj kako se orijentiše woman */
        expect(window.getComputedStyle(shadowDeskt).getPropertyValue("left")).toBe("-576px");         
    
    })

    it('shadowDeskt bottom 300px', function() {

        expect(window.getComputedStyle(shadowDeskt).getPropertyValue("bottom")).toBe("-138px");   

    })

    it('shadowDeskt top -300px', function() {

        expect(window.getComputedStyle(shadowDeskt).getPropertyValue("top")).toBe("-300px");   

    })

    it('sectDesk overflow hidden?', function() {

        expect(window.getComputedStyle(sectDeskt).getPropertyValue("overflow")).toBe("hidden");

    })

    it('sectDesk parent are questions?', function() {

        expect(sectDeskt.parentElement.getAttribute("class")).toBe("questions");

    })

    it('sectDesk parent is section?', function() {

        expect(sectDeskt.parentElement.tagName).toBe("SECTION");

    })

    it('three children of "questions"', function() {

     /*   two sections children of question, FAQ and pitanja u drugom */
        expect(questions.children.length).toBe(3);

    })

    it('h2 parent is section', function() {

        expect(h2.parentElement.tagName).toBe("SECTION");

    })

    it('questions are flex', function() {

        expect(window.getComputedStyle(questions).getPropertyValue("display")).toBe("flex");

    })

    it('main is auto', function() {

        expect(window.getComputedStyle(main).getPropertyValue("width")).toBe("920px");

    })

    it('pitanja are 352px width', function() {

        expect(window.getComputedStyle(justQ).getPropertyValue("width")).toBe("352px");

    })

    it('second child of questions has some class', function() {

        expect(questions.children[1].getAttribute("class")).toBe("desktop cube");

    })

    it('desktPitanja has margin-top 66px', function() {
    
        expect(window.getComputedStyle(desktPitanja).getPropertyValue("margin-top")).toBe("66px");

    })

    it('big-image margin-right is 85px', function() {

        expect(window.getComputedStyle(sectDeskt).getPropertyValue("margin-right")).toBe("85px");

    })

    it('button margin-right is 12px', function() {

        expect(window.getComputedStyle(buttons[0]).getPropertyValue("margin-right")).toBe("12px");

    })

    it('h2 is left-start', function() {

        expect(window.getComputedStyle(h2).getPropertyValue("text-align")).toBe("start");

    })

    it('footer is 128px height', function() {

        expect(window.getComputedStyle(footer).getPropertyValue("height")).toBe("128px");
     /*   ovo se rešava preko margine za p */
    })

    it('cube is top 202px', function() {

        expect(window.getComputedStyle(desktops[2]).getPropertyValue("top")).toBe("202px");

    })

    it('cube is left -93px', function() {

        expect(window.getComputedStyle(desktops[2]).getPropertyValue("left")).toBe("-93px");

    })

    it('cube is 191px width', function() {

        expect(window.getComputedStyle(desktops[2]).getPropertyValue("width")).toBe("191px");

    })

    it('cube is 184px height', function() {

        expect(window.getComputedStyle(desktops[2]).getPropertyValue("height")).toBe("184px");

    })

    it('cube\'s parent are questions', function() {

        expect(desktops[2].parentElement.getAttribute("class")).toBe("questions");        

    })

    it('questions position is relative', function() {

        expect(window.getComputedStyle(questions).getPropertyValue("position")).toBe("relative");       

    })
    
    it('questions bottom is 0px', function() {

        expect(window.getComputedStyle(questions).getPropertyValue("bottom")).toBe("0px");  

    })

    it('figureDeskt top 67px', function() {

        expect(window.getComputedStyle(figureDeskt).getPropertyValue("top")).toBe("67px");

    }) 

    it('padding bottom desktPitanja 85px', function() {

        expect(window.getComputedStyle(desktPitanja).getPropertyValue("padding-bottom")).toBe("85px");

    })

    it('click of question opens big-image too, no fixed height', function() {

        questionOneList[2].click();
        expect(window.getComputedStyle(sectDeskt).getPropertyValue("height")).toBe("571px");
        questionOneList[2].click();

    })

    it('woman right 2px', function() {

        expect(window.getComputedStyle(figureDeskt).getPropertyValue("right")).toBe("2px");

    })

    it('pattern right 0px', function() {

        expect(window.getComputedStyle(shadowDeskt).getPropertyValue("right")).toBe("0px");

    })

    it('main padding-left 42px to try', function() {

        expect(window.getComputedStyle(main).getPropertyValue("padding-left")).toBe("42px");

    })

    it('main is border-box', function() {

        expect(window.getComputedStyle(main).getPropertyValue("box-sizing")).toBe("border-box");
        console.log("hejj " + JSON.stringify(location));

    })

});