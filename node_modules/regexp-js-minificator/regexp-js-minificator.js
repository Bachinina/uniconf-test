// Simple, fast, minimal java-script minificator
// Version: 0.0.2
// Author: Yoda49

function jsm (text)
{
	text = text.replace(/\/\/.*\n/gi,""); // delete comment
	text = text.replace(/\/\/.*\r/gi,""); // delete comment
	text = text.replace(/\/\*([\s\S]*)\*\//gi,""); // delete comment /* */
	text = text.replace(/if\s*/gi,"if");
	text = text.replace(/\s*else/gi,"else");
	text = text.replace(/\s*\(\s*/gi,"(");
	text = text.replace(/\s*\)\s*/gi,")");
	text = text.replace(/\s*\{\s*/gi,"{");
	text = text.replace(/\s*\}\s*/gi,"}");
	text = text.replace(/\s*\+\s*/gi,"+");
	text = text.replace(/\s*-\s*/gi,"-");
	text = text.replace(/\s*\/\s*/gi,"/");
	text = text.replace(/\s*\*\s*/gi,"*");
	text = text.replace(/\s*>\s*/gi,">");
	text = text.replace(/\s*<\s*/gi,"<");
	text = text.replace(/\s*:\s*/gi,":");
	text = text.replace(/\s*,\s*/gi,",");
	text = text.replace(/\s*'\s*/gi,"'");
	text = text.replace(/\s*"\s*/gi,'"');
	text = text.replace(/\s*=\s*/gi,'=');
	text = text.replace(/\s*==\s*/gi,'==');
	text = text.replace(/\s*===\s*/gi,'===');
	text = text.replace(/\s*\|\|\s*/gi,'||');
	text = text.replace(/\s*&&\s*/gi,'&&');
	text = text.replace(/\s*!=\s*/gi,'!=');
	text = text.replace(/\s*>=\s*/gi,'>=');
	text = text.replace(/\s*<=\s*/gi,'<=');
	text = text.replace(/\s*;\s*/gi,';');
	text = text.replace(/\t/gi,""); // delete tab
	text = text.replace(/\n/gi,"");
	text = text.replace(/\r/gi,"");
	return text;
}

module.exports = jsm;