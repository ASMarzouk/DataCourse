// var languages = [
//     'python', 'sql', 'sh', 'json', 'dockerfile', 'yaml', 'xml',
//     'pig', 'ruby', 'bash', 'javascript', '', 'promql', 'text',
//     'cypher', 'md', 'txt', 'java'
// ];


// // functiun to apply Ace Editor
// change_code = function(language = 'python') {
//     var regular_expression = new RegExp(/^(\t)+/);
//     var divs = document.getElementsByClassName(language);
//     for (var i = 0; i < divs.length; i++) {

//         var element = divs[i];
//         var lines = element.innerHTML.split('\n');
//         var nb_lines = lines.length;
//         text = element.innerHTML;

//         element.style.height = ((nb_lines) * 16) + 'px';
//         var editor = ace.edit(divs[i].id);
//         text = text.split('&amp;').join('&');
//         text = text.split('&gt;').join('>');
//         text = text.split('&lt;').join('<');
//         editor.setValue(text.substring(1), -1);
//         editor.setTheme("ace/theme/monokai");
//         editor.session.setMode("ace/mode/" + language);
//         // editor.session.highlight()
//         editor.setFontSize('16px');
//         // editor.session.indentRows(startRow=0, endRow=nb_lines, indentString='\t');

//         // beautify.beautify(editor.session);
//         editor.setReadOnly(true);
//     }
// }

// // function to change slides
// next_slide = function(element, number_of_images) {
//     var image_name = element.src.match('image[0-9]+\\.png')[0];
//     var new_image_number = (Number.parseInt(image_name.match('[0-9]+')) + 1) % number_of_images;
//     var new_image_path = 'image' + new_image_number + '.png';
//     element.src = element.src.replace(RegExp('image[0-9]+\\.png'), new_image_path);
//     return false;
// }

// function to hide or show_solution
// show_hide_solution = function (id_solution) {
//     var element = document.getElementById(id_solution);
//     if (element.style.display == 'none') {
//         element.style.display = '';
//     } else {
//         element.style.display = 'none';
//     }
// }

// show_hide_solution2 = function (element) {
//     var id_ = element.parentElement.nextElementSibling.nextElementSibling.id;
//     show_hide_solution(id_)
// }


// // $.getScript("https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ace.js", function() {
// for (var l = 0; l < languages.length; l++) {
//     change_code(languages[l]);
// }
// // });



// // clicking on solution buttons:
// var buttons = document.getElementsByClassName('btn-solution');
// for (var i = 0; i < buttons.length; i++) {
//     buttons[i].click()
// }

// // QCM
// display_answer = function (element, value) {
//     var response_div = element.parentElement.getElementsByClassName('response-qcm-solution')[0];



//     neighbour_divs = element.parentElement.getElementsByClassName('response-qcm');

//     for (var i = 0; i < neighbour_divs.length; i++) {
//         neighbour_divs[i].classList = ['response-qcm'];
//     }

//     if (value) {
//         response_div.classList = []
//         response_div.classList.add('response-qcm');
//         response_div.classList.add('question-success');
//         response_div.classList.add('response-qcm-solution');
//         response_div.classList.add('solution-shown');

//     } else {
//         response_div.classList = []
//         response_div.classList.add('response-qcm');
//         response_div.classList.add('question-error');
//         response_div.classList.add('response-qcm-solution');
//         response_div.classList.add('solution-shown');
//     }

//     element.classList.add('question-selected')

// }

show_hide = function (element_id) {
    element = document.getElementById(element_id);
    if (element.style.display == "none") {
        element.style.display = "block"
    } else {
        element.style.display = "none"
    }
}