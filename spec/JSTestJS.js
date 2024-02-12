describe('JS', function() {

    var questiones = questions.querySelectorAll(".one-question");
    var headings2 = ["How many team members can I invite",
                     "What is the maximum file upload size",
                     "How do I reset my password",
                     "Can I cancel my subscription",
                     "Do you provide additional support"];
    var answers = ["You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan",
                   "No more than 2GB. All files in your account must fit your allotted storage space",
                   "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you",
                   "Yes! Send us a message and we’ll process your request no questions asked",
                   "Chat and email support is available 24/7. Phone lines are open during normal business hours"];
 
    var srcFile = document.getElementsByTagName("script")[5].getAttribute("src");

    it('open and close question', function() {

        question.click();
        question.click();
        expect(window.getComputedStyle(h2s[0]).getPropertyValue("font-weight"))
                     .toBe("400");

    });

    it('open question', function() {

        question.click();
        expect(window.getComputedStyle(h2s[0]).getPropertyValue("font-weight"))
                     .toBe("700");
        question.click();

    })

    it('open question shows answer', function() {

        question.click();
        expect(window.getComputedStyle(question.querySelector("p")).getPropertyValue("display"))
                     .toBe("block");
        question.click();

    })

    it('close open question', function() {

        queOpen.click();
        expect(queOpen.className.includes("closed"))
                      .toBe(true);
        queOpen.click();

    })

    it('there are five .one-questions', function() {
        
        expect(questiones.length).toBe(5); 

    })

    it('.one-questions are sections', function() {
        
        questiones.forEach((q) => expect(q.tagName).toBe("SECTION"));        

    })

    it('first child in .one-question is h2', function() {

        questiones.forEach((q) => expect(q.children[0].tagName).toBe("H2"));

    })

    it('second child in .one-question is button', function() {

        questiones.forEach((q) => expect(q.children[1].tagName).toBe("BUTTON"));

    })

    it('third child in .one-question is button', function() {

        questiones.forEach((q) => expect(q.children[2].tagName).toBe("P"));

    })

    it('in the beginning all closed .one-question', function() {

        var cont;
        for(var i = 2; i < 5; i++) {

            cont = questiones[i].classList.contains("closed");
            console.log(i + ", " + cont);
            expect(cont).toBe(true);

        }

    })

    it('h2 for other .one-question', function() {
        
        for(var i = 2; i < 5; i++) {

            expect(questiones[i].children[0].innerHTML).toBe(headings2[i] + "?");

        }

    })

    it('p for other .one-question', function() {
        
        for(var i = 2; i < 5; i++) {

            expect(questiones[i].children[2].innerHTML).toBe(answers[i] + ".");

        }

    })

    it('click toggle for .one-question', function() {

        for(var i = 2; i < 5; i++) {

            expect(questiones[i].getAttribute("onclick")).toBe("togle(this)");

        }

    })

    it('spec file when small screen', function() {
        
        if (window.innerWidth < 1000) {

            expect(srcFile).toBe("spec/JSTestAcc.js");

        }

    })

    it('spec file when big screen', function() {
        
        if (window.innerWidth >= 1000) {

            expect(srcFile).toBe("spec/JSTestAccDesktop.js");

        }

    })



})

