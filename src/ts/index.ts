///<reference path="../../lib/ChonmageTemplate.ts"/>
///<reference path="compiledTemplate/test_template1.ts"/>

var compiledTemplate = ChonmageTemplates.get('test_template1.tmpl');
var rendered = compiledTemplate.render({
    booleanVar: true,
    numberVar: 1234,
    stringVar: 'foo',
    arrayVar: [{stringVar: 'bar'}, {stringVar: 'hoge'}]
});

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('rendered').textContent = rendered;
});

