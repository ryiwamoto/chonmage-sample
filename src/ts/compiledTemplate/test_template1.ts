///<reference path="../IContext.ts"/>

module Chonmage{
    export interface ITemplateStore {
        get(name: "test_template1.tmpl"): Chonmage.Compiled<IContext>;
    }
}

(<any>window)["ChonmageTemplates"]["templates"]["test_template1.tmpl"] = new Chonmage.Compiled<IContext>(function(context){var _ = this, __b = "";__b += "Hello ";__b += _.esc(context.hoge);__b += "!! ";__b += _.esc(context.foo);__b += "\n"; return __b;});
