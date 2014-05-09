///<reference path="../IContext.ts"/>

module Chonmage{
    export interface ITemplateStore {
        get(name: "test_template1.tmpl"): Chonmage.Compiled<IContext>;
    }
}

(<any>window)["ChonmageTemplates"]["templates"]["test_template1.tmpl"] = new Chonmage.Compiled<IContext>(function(context){var _ = this, __b = "";__b += (+context.numberVar);__b += "\n";__b += _.esc(context.stringVar);__b += "\n";if(context.booleanVar){context.arrayVar.forEach(function(__item_0){__b += "        	";__b += _.esc(__item_0.stringVar);__b += "\n"})}; return __b;});
