function compile() {
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("js");
    var code = document.getElementById("code").contentWindow.document;
  
    document.body.onkeyup = function() {
      code.open();
      code.writeln(
        html.value +
          "<style>" +
          css.value +
          "</style>" +
          "<script>" +
          js.value +
          "</script>"
      );
      code.close();
    };
  }

  compile();

window.onbeforeunload = function() {
  return "Do you want to leave?";
};

document.getElementById('html').addEventListener('keydown', function(e) {
  if (e.key == 'Tab') {
    e.preventDefault();
    var start = this.selectionStart;
    var end = this.selectionEnd;

    // set textarea value to: text before caret + tab + text after caret
    this.value = this.value.substring(0, start) +
      "\t" + this.value.substring(end);

    // put caret at right position again
    this.selectionStart =
      this.selectionEnd = start + 1;
  }
});

document.getElementById('css').addEventListener('keydown', function(e) {
  if (e.key == 'Tab') {
    e.preventDefault();
    var start = this.selectionStart;
    var end = this.selectionEnd;

    // set textarea value to: text before caret + tab + text after caret
    this.value = this.value.substring(0, start) +
      "\t" + this.value.substring(end);

    // put caret at right position again
    this.selectionStart =
      this.selectionEnd = start + 1;
  }
});

document.getElementById('js').addEventListener('keydown', function(e) {
  if (e.key == 'Tab') {
    e.preventDefault();
    var start = this.selectionStart;
    var end = this.selectionEnd;

    // set textarea value to: text before caret + tab + text after caret
    this.value = this.value.substring(0, start) +
      "\t" + this.value.substring(end);

    // put caret at right position again
    this.selectionStart =
      this.selectionEnd = start + 1;
  }
});