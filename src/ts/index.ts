///<reference path="../../lib/ChonmageTemplate.ts"/>
///<reference path="compiledTemplate/test_template1.ts"/>

var rendered = ChonmageTemplates.get('test_template1.tmpl').render({
    hoge: 'World',
    foo: 'FOOOOOOO!!!!!!'
})

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('rendered').textContent = rendered;
});

