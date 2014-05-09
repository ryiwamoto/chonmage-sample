(function (global) {
    if (!("process" in global)) {
        global["ChonmageTemplates"] = {
            get: function (name) {
                return this.templates[name];
            },
            templates: []
        };
    }
})((new Function('return this;')()));

var Chonmage;
(function (Chonmage) {
    var rAmp = /&/g, rLt = /</g, rGt = />/g, rApos = /\'/g, rQuot = /\"/g, hChars = /[&<>\"\']/;

    var Compiled = (function () {
        function Compiled(compiled) {
            this.compiled = compiled;
        }
        Compiled.prototype.render = function (context) {
            return this.compiled(context);
        };

        Compiled.prototype.coerceToString = function (val) {
            return String((val === null || val === undefined) ? '' : val);
        };

        Compiled.prototype.esc = function (str) {
            str = this.coerceToString(str);
            return hChars.test(str) ? str.replace(rAmp, '&amp;').replace(rLt, '&lt;').replace(rGt, '&gt;').replace(rApos, '&#39;').replace(rQuot, '&quot;') : str;
        };
        return Compiled;
    })();
    Chonmage.Compiled = Compiled;
})(Chonmage || (Chonmage = {}));
///<reference path="../IContext.ts"/>

window["ChonmageTemplates"]["templates"]["test_template1.tmpl"] = new Chonmage.Compiled(function (context) {
    var _ = this, __b = "";
    __b += (+context.numberVar);
    __b += "\n";
    __b += _.esc(context.stringVar);
    __b += "\n";
    if (context.booleanVar) {
        context.arrayVar.forEach(function (__item_0) {
            __b += "        	";
            __b += _.esc(__item_0.stringVar);
            __b += "\n";
        });
    }
    ;
    return __b;
});
///<reference path="../../lib/ChonmageTemplate.ts"/>
///<reference path="compiledTemplate/test_template1.ts"/>
var compiledTemplate = ChonmageTemplates.get('test_template1.tmpl');
var rendered = compiledTemplate.render({
    booleanVar: true,
    numberVar: 1234,
    stringVar: 'foo',
    arrayVar: [{ stringVar: 'bar' }, { stringVar: 'hoge' }]
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('rendered').textContent = rendered;
});
