!function(e){"function"==typeof define&&define.amd?define(["jquery","datatables.net-zf","datatables.net-editor"],function(n){return e(n,window,document)}):"object"==typeof exports?module.exports=function(n,o){return n||(n=window),o&&o.fn.dataTable||(o=require("datatables.net-zf")(n,o).$),o.fn.dataTable.Editor||require("datatables.net-editor")(n,o),e(o,n,n.document)}:e(jQuery,window,document)}(function(e,n,o,t){"use strict";var d=e.fn.dataTable;d.Editor.defaults.display="foundation",e.extend(!0,e.fn.dataTable.Editor.classes,{field:{wrapper:"DTE_Field row",label:"small-4 columns inline",input:"small-8 columns",error:"error",multiValue:"panel radius multi-value",multiInfo:"small",multiRestore:"panel radius multi-restore","msg-labelInfo":"label secondary","msg-info":"label secondary","msg-message":"label secondary","msg-error":"label alert"},form:{button:"button small"}});var l;return d.Editor.display.foundation=e.extend(!0,{},d.Editor.models.displayController,{init:function(n){return l._dom.content=e('<div class="reveal reveal-modal" data-reveal />'),l._dom.close=e('<button class="close close-button">&times;</div>'),l._dom.close.click(function(){l._dte.close("icon")}),l},open:function(t,d,a){if(l._shown)return void(a&&a());l._dte=t,l._shown=!0;var r=l._dom.content;r.children().detach(),r.append(d),r.prepend(l._dom.close),e(l._dom.content).one("opened.fndtn.reveal",function(){a&&a()}).one("closed.fndtn.reveal",function(){l._shown=!1}),n.Foundation&&n.Foundation.Reveal?(l._reveal||(l._reveal=new n.Foundation.Reveal(l._dom.content,{closeOnClick:!1})),e(l._dom.content).appendTo("body"),l._reveal.open()):e(l._dom.content).foundation("reveal","open"),e(o).on("click.dte-zf","div.reveal-modal-bg, div.reveal-overlay",function(){l._dte.background()})},close:function(n,t){return l._shown?(l._reveal?l._reveal.close():e(l._dom.content).foundation("reveal","close"),e(o).off("click.dte-zf"),l._dte=n,l._shown=!1,void(t&&t())):void(t&&t())},node:function(e){return l._dom.content[0]},_shown:!1,_dte:null,_dom:{}}),l=d.Editor.display.foundation,d.Editor});