function compile() {
  var html = document.getElementById("htmlEditor");
  var css = document.getElementById("cssEditor");
  var js = document.getElementById("jsEditor");
  var code = document.getElementById("outputCode").contentWindow.document;

  document.body.onkeyup = function() {
    code.open();
    code.writeln(html.value + '<style>' + css.value + '</style>' + '<script>' + js.value + '</script>');
    code.close();
  };
}

compile();

var htmlEditor = CodeMirror.fromTextArea(document.getElementById("htmlEditor"), {
    mode: 'text/html',
    autoCloseTags: true,
    lineNumbers: true,
    styleActiveLine: true,
    matchBrackets: true,
    theme: 'material',
});

var cssEditor = CodeMirror.fromTextArea(document.getElementById("cssEditor"), {
	mode: 'text/css',
	autoCloseBrackets: true,
	lineNumbers: true,
    styleActiveLine: true,
    matchBrackets: true,
    theme: 'material',
});

var jsEditor = CodeMirror.fromTextArea(document.getElementById("jsEditor"), {
	mode: 'text/javascript',
	autoCloseBrackets: true,
	lineNumbers: true,
    styleActiveLine: true,
    matchBrackets: true,
    theme: 'material',
});


$(document).ready(function () {
    htmlEditor.on('change', function () {
        $('#htmlEditor').val(htmlEditor.getValue());
    });
    cssEditor.on('change', function () {
        $('#cssEditor').val(cssEditor.getValue());
    });
    jsEditor.on('change', function () {
        $('#jsEditor').val(jsEditor.getValue());
    });
});