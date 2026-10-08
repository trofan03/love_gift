const firstScreen = document.getElementById("firstScreen");
const secondScreen = document.getElementById("secondScreen");
const letterScreen = document.getElementById("letterScreen");
const memoriesScreen = document.getElementById("memoriesScreen");
const finalScreen = document.getElementById("finalScreen");


const startButton = document.getElementById("startButton");
const nextButton = document.getElementById("nextButton");
const memoriesButton = document.getElementById("memoriesButton");
const finalButton = document.getElementById("finalButton");
document.body.classList.remove("letter-scroll");

/* ================================= */
/* ПЕРВЫЙ ЭКРАН → ВТОРОЙ */
/* ================================= */

startButton.addEventListener("click", function () {

    firstScreen.style.opacity = "0";

    setTimeout(function () {

        firstScreen.style.visibility = "hidden";

        secondScreen.style.visibility = "visible";
        secondScreen.style.opacity = "1";

    }, 1500);

});


/* ================================= */
/* ВТОРОЙ ЭКРАН → ОТКРЫТКА */
/* ================================= */

nextButton.addEventListener("click", function () {

    secondScreen.style.opacity = "0";

    setTimeout(function () {

        secondScreen.style.visibility = "hidden";

        letterScreen.style.visibility = "visible";
        letterScreen.style.opacity = "1";
        // Разрешаем прокрутку только для открытки
        document.body.classList.add("letter-scroll");

        // Возвращаемся в начало открытки
        window.scrollTo(0, 0);


        startTyping();

    }, 1500);

});


/* ================================= */
/* ПЕЧАТЬ ТЕКСТА */
/* ================================= */

const text = `
Представляешь вот уже как два года прошло с момента моего признания.

Не к кому как к тебе я не испытывал таких чувств, и не к кому я не испытывал такой привязанности,
ты мое солнышко, моя радость, моя поддержка и моя любовь.
В этот прекрасный день я хочу сказать тебе как ты дорога мне, 
я правда счастлив встретить лучик света в своей жизни и этот лучик я буду всеми силами оберегать.
Возможно, я не так красноречив и не могу сказать очень душевных слов,
все время, что мы проводим вместе я очень дорожу и ценю.
Я всегда стараюсь делать для тебя что-то важное и отдавать всю свою любовь,
потому что по другому я просто не умею.

Ты знаешь какой я у тебя вредина, все же ты меня понимаешь и поддерживаешь,
Я ценю каждую вещь, которую ты делаешь для меня, хоть она не значительна.
Солнышко, я люблю тебя всем сердцем, я уверен что с нашими усилиями мы станем прекрасной парой, 
семьей окутанной любовью, теплом и счастьем.

И я хочу, чтобы ты всегда знала,
как много ты для меня значишь.
Я люблю тебя, буду всегда стараться ради нас, наших мечтаний и нашей любви.
`;


let textIndex = 0;


function startTyping() {

    const typedText = document.getElementById("typedText");

    typedText.innerHTML = "";

    textIndex = 0;

    typeLetter();

}


function typeLetter() {

    if (textIndex < text.length) {

        typedText.innerHTML += text[textIndex];

        textIndex++;

        setTimeout(typeLetter, 35);

    } 
    
    else {

        memoriesButton.classList.add("show-button");

    }

}


/* ================================= */
/* ОТКРЫТКА → ВОСПОМИНАНИЯ */
/* ================================= */

memoriesButton.addEventListener("click", function () {

    letterScreen.style.opacity = "0";

    setTimeout(function () {

        letterScreen.style.visibility = "hidden";
        // Запрещаем дальнейшую прокрутку
        document.body.classList.remove("letter-scroll");

        // Возвращаем страницу наверх
        window.scrollTo(0, 0);
        memoriesScreen.style.visibility = "visible";
        memoriesScreen.style.opacity = "1";

    }, 1500);

});


/* ================================= */
/* ВОСПОМИНАНИЯ → ФИНАЛ */
/* ================================= */

finalButton.addEventListener("click", function () {

    memoriesScreen.style.opacity = "0";

    setTimeout(function () {

        memoriesScreen.style.visibility = "hidden";
        document.body.classList.remove("letter-scroll");
        window.scrollTo(0, 0);
        finalScreen.style.visibility = "visible";
        finalScreen.style.opacity = "1";

        

        window.scrollTo(0, 0);

    }, 1500);

});