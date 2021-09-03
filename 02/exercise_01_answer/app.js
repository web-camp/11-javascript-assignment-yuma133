var num_1 = 15;
var num_2 = 3;

var addition = num_1 + num_2;
var subtraction = num_1 - num_2;
var multiplication = num_1 * num_2;
var division = num_1 / num_2;

var addition_text = '「' + num_1 + '+' + num_2 + '=' + addition + '」';
var subtraction_text = '「' + num_1 + '-' + num_2 + '=' + subtraction + '」';
var multiplication_text = '「' + num_1 + '*' + num_2 + '=' + multiplication + '」';
var division_text = '「' + num_1 + '/' + num_2 + '=' + division + '」';

alert(num_1 + 'と' + num_2 + 'の四則演算は' + addition_text + subtraction_text + multiplication_text + division_text);
