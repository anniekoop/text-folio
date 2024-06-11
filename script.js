document.addEventListener('DOMContentLoaded', function() {
    displayCurrentTime();
    loadInitialContent();
});

function displayCurrentTime() {
    const timeDisplay = document.getElementById('time');
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    timeDisplay.classList.add('time');

    minutes = minutes < 10 ? '0' + minutes : minutes;

    if (hours === 0) {
        timeDisplay.innerText = `12:${minutes} AM`;
    } else if (hours < 12) {
        timeDisplay.innerText = `${hours}:${minutes} AM`;
    } else if (hours === 12) {
        timeDisplay.innerText = `12:${minutes} PM`;
    } else {
        timeDisplay.innerText = `${hours - 12}:${minutes} PM`;
    }
}

const messages = [
    {
        question: 'What kind of work do you specialize in?',
        answer: 'My specialties are Figma design systems and UX/UI design. I also provide services for web design and development, brand design, and user research.'
    },
    {
        question: 'What tools do you use?',
        answer: "I use <a class='text-link' href='https://figma.com' target='_blank'>Figma</a> and <a class='text-link' href='https://code.visualstudio.com/' target='_blank'>VS Code</a> daily, and often use <a class='text-link' href='https://webflow.com' target='_blank'>Webflow</a> and <a class='text-link' href='https://github.com' target='_blank'>Github</a> as well. I'm also familiar with Framer, Zeplin, Creative Cloud, and Protopie."
    },
    {
        question: 'Why did you decide to specialize in design systems?',
        answer: 'I learned how to build design systems with <a class="text-link" href="https://www.coursera.org/professional-certificates/google-ux-design" target="_blank">Google</a> and <a class="text-link" href="https://help.figma.com/hc/en-us/articles/14552901442839-Overview-Introduction-to-design-systems#h_01HDH7JGE4NPRH0QE33K1SHXXA" target="_blank">Figma</a>, and love the organization and consistency that they can bring to digital products. I enjoy teaching clients about the benefits of using design libraries, and then watching the positive effect those libraries have on their brand. 🎨'
    },
    {
        question: 'What programming languages are you familiar with?',
        answer: "Since beginning my web development journey, I've learned HTML/CSS, JavaScript (including libraries like React and Bootstrap), and am currently learning Python and PHP."
    },
    {
        question: 'How did you get into web design and development?',
        answer: "I studied journalism for my undergrad at the <a class='text-link' href='https://roehampton.ac.uk' target='_blank'>University of Roehampton</a>, but after college, I found web design through <a class='text-link' href='https://www.coursera.org/professional-certificates/google-ux-design' target='_blank'>Google's UX Design program</a>. I studied with their courses for six months, and then learned how to code with the likes of <a class='text-link' href='https://www.freecodecamp.org/' target='_blank'>freeCodeCamp</a> and <a class='text-link' href='https://codecademy.com' target='_blank'>Codecademy</a>."
    },
    {
        question: 'What web design and development certificates have you earned?',
        answer: "My <a class='text-link' href='https://www.credly.com/badges/82478201-cf07-48e9-b259-065253c1e679/linked_in_profile' target='_blank'>first certification</a> was earned with the Google UX program. In the months following, I also received fCC's <a class='text-link' href='https://www.freecodecamp.org/certification/anniekoop/responsive-web-design' target='_blank'>Responsive Web Design</a> certificate and <a class='text-link' href='https://www.freecodecamp.org/certification/anniekoop/javascript-algorithms-and-data-structures-v8' target='_blank'>JavaScript Algorithms</a> certificate. Other achievements include Webflow's <a class='text-link' href='https://drive.google.com/file/d/1zHJBCsMXd42Jv7Ohl5hQYq4RbToJXTYp/view' target='_blank'>CMS</a> and <a class='text-link' href='https://drive.google.com/file/d/1fNyZ_oPq74aq6UB7HLZO1XHt3My09616/view' target='_blank'>Webflow 101</a> courses."
    },
    {
        question: 'Can you show me some of your recent projects?',
        intro: "Yes! Here are a few projects I've worked on recently:",
        projects: [
            {
                title: 'Atomic Design System',
                link: 'https://anniekoopdesign.com/case-studies/atomic-design-system',
                img: 'https://framerusercontent.com/images/dsQZX9iZHYAUm3hnBuPItd2mTrU.png'
            },
            {
                title: 'Summer Light',
                link: 'https://github.com/anniekoop/summer-light',
                img: 'https://framerusercontent.com/images/fDqZlBds8kbH9ZpDPMi0rpfVzNs.png'
            },
            {
                title: 'Phoebe',
                link: 'https://anniekoopdesign.com/case-studies/phoebe',
                img: 'https://framerusercontent.com/images/fmY4jZOVFLNGxC9dzIe13l7SBo.webp'
            }
        ]
    },
    {
        question: 'Are you available for full-time or freelance work?',
        answerHTML: "I'm not open to full-time or part-time positions right now, since I'm currently working at <span class='emphasis'><a class='text-link' href='https://wcf.com' target='_blank'>WCF Insurance</a></span> as a UX Design Intern. However, I'm happy to discuss freelance opportunities. Just send me a <span class='emphasis'><a class='text-link' href='mailto:anniebkoop@gmail.com'>message</a></span> and I'll be in touch! 🤗"
    },
    {
        question: 'Where can I view your other projects and designs?',
        answer: "I regularly publish my work on <a class='text-link' href='behance.net/anniekoop' target='_blank'>Behance</a>, <a class='text-link' href='https://github.com/anniekoop' target='_blank'>Github</a>, and the <a class='text-link' href='https://figma.com/@anniekoop1' target='_blank'>Figma Community</a>. Feel free to connect with me there!"
    },
    {
        question: 'Where can I stay up-to-date with your web design progress?',
        answer: 'Feel free to connect with me via <a class="text-link" href="https://linkedin.com/in/anniekoop" target="_blank">Linkedin</a>! You can also visit my personal website and portfolio at <a class="text-link" href="https://anniekoopdesign.com" target="_blank">anniekoopdesign.com</a>.<br><br>Thanks for stopping by! 🤗'
    }
];

let sentQuestions = new Set();

function loadInitialContent() {
    loadFirstMessage();
    updateSuggestedQuestions();
}

function loadFirstMessage() {
    const firstChat = document.createElement('div');
    firstChat.innerHTML = "<div class='tail'></div><p class='message-text'>Hi! I'm Annie Koop, a product designer from Salt Lake City, Utah. I create accessible, engaging experiences that benefit brands and their users. It's nice to meet you! 😊</p>";
    firstChat.classList.add('received');

    const chatBody = document.getElementById('chat-body');
    chatBody.appendChild(firstChat);
}

function updateSuggestedQuestions() {
    const questionsContainer = document.getElementById('questions');
    questionsContainer.innerHTML = '';

    const unsentQuestions = getUnsentQuestions();
    if (unsentQuestions.length > 0) {
        const questionObj = unsentQuestions[0];
        const questionElement = document.createElement('p');
        questionElement.classList.add('question');
        questionElement.innerHTML = `<p class="question-text">${questionObj.question}</p><i class="fa-solid fa-circle-arrow-up send-arrow"></i>`;
        questionElement.addEventListener('click', () => sendQuestion(questionObj));
        questionsContainer.appendChild(questionElement);
    }
}

function getUnsentQuestions() {
    return messages.filter((_, index) => !sentQuestions.has(index));
}

function sendQuestion(questionObj) {
    const questionIndex = messages.indexOf(questionObj);
    markQuestionAsSent(questionIndex);

    const sentQuestion = document.createElement('div');
    sentQuestion.classList.add('sent');
    sentQuestion.innerHTML = `<p class="message-text">${questionObj.question}</p><div class="tail"></div>`;

    const chatBody = document.getElementById('chat-body');
    chatBody.appendChild(sentQuestion);
    chatBody.scrollTop = chatBody.scrollHeight;

    setTimeout(() => {
        displayLoadingMessage(() => displayAnswer(questionIndex));
    }, 750);
}


function markQuestionAsSent(index) {
    sentQuestions.add(index);
}

function displayLoadingMessage(callback) {
    const chatBody = document.getElementById('chat-body');
    const loadingMessage = document.createElement('div');
    const loadingElipsis1 = document.createElement('div');
    const loadingElipsis2 = document.createElement('div');
    const loadingElipsis3 = document.createElement('div');

    loadingMessage.appendChild(loadingElipsis1);
    loadingMessage.appendChild(loadingElipsis2);
    loadingMessage.appendChild(loadingElipsis3);

    loadingMessage.classList.add('loading-message');
    loadingElipsis1.classList.add('elipsis');
    loadingElipsis2.classList.add('elipsis');
    loadingElipsis3.classList.add('elipsis');

    chatBody.appendChild(loadingMessage);

    chatBody.scrollTop = chatBody.scrollHeight;

    function animateEllipsis() {
        setTimeout(() => {
            loadingElipsis1.classList.add('elipsis-0');
            setTimeout(() => {
                loadingElipsis1.classList.remove('elipsis-0');
                loadingElipsis2.classList.add('elipsis-0');
                setTimeout(() => {
                    loadingElipsis2.classList.remove('elipsis-0');
                    loadingElipsis3.classList.add('elipsis-0');
                    setTimeout(() => {
                        loadingElipsis3.classList.remove('elipsis-0');
                        chatBody.removeChild(loadingMessage);
                        callback();
                    }, 325);
                }, 325);
            }, 325);
        }, 325);
    }

    animateEllipsis();
}


function displayAnswer(questionIndex) {
    const chatBody = document.getElementById('chat-body');

    if (messages[questionIndex].answerHTML) {
        const receivedMessage = document.createElement('div');
        receivedMessage.classList.add('received');
        receivedMessage.innerHTML = `<div class="tail"></div><p class="message-text">${messages[questionIndex].answerHTML}</p>`;
        chatBody.appendChild(receivedMessage);
        chatBody.scrollTop = chatBody.scrollHeight;
    } else if (messages[questionIndex].projects) {
        const introMessage = document.createElement('div');
        introMessage.classList.add('received');
        introMessage.innerHTML = `<div class="tail"></div><p class="message-text">${messages[questionIndex].intro}</p>`;
        chatBody.appendChild(introMessage);
        chatBody.scrollTop = chatBody.scrollHeight;

        messages[questionIndex].projects.forEach(project => {
            const projectMessage = document.createElement('div');
            projectMessage.classList.add('received');
            projectMessage.innerHTML = `<div class="tail"></div><a class="message-text text-link" href="${project.link}">${project.title}<span class="project-img-wrap"><img class="project-img" src="${project.img}"</span></a>`;
            chatBody.appendChild(projectMessage);
            chatBody.scrollTop = chatBody.scrollHeight;
        });
    } else {
        const receivedMessage = document.createElement('div');
        receivedMessage.classList.add('received');
        receivedMessage.innerHTML = `<div class="tail"></div><p class="message-text">${messages[questionIndex].answer}</p>`;
        chatBody.appendChild(receivedMessage);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    updateSuggestedQuestions();
}