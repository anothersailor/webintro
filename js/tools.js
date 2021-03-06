//////////
var show_html = require('./show-html');

exports.one_column = show_html.one_column;
exports.two_columns = show_html.two_columns;
exports.iframe_html_css = show_html.iframe_html_css;

//////////
var inject_css = require('./inject-css');

//////////
var run_all = require('./run-all');

function init() {
    let css = inject_css.read_style('../css/in-out.css');
    css += inject_css.read_style('../css/show-html.css');
    let button = run_all.run_all_button();
    $$.html(css + button);
}
exports.init = init;