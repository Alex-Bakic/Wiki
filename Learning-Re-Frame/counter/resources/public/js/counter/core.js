// Compiled by ClojureScript 1.10.439 {}
goog.provide('counter.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialise","initialise",1962682894),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(0)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-counter","update-counter",-70438766),(function (db,p__23312){
var vec__23313 = p__23312;
var _ = cljs.core.nth.call(null,vec__23313,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__23313,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.inc);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"count","count",2139924085),(function (db,_){
return new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(db);
}));
counter.core.current_count = (function counter$core$current_count(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null)))], null)], null);
});
});
counter.core.add_count_btn = (function counter$core$add_count_btn(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-counter","update-counter",-70438766)], null));
})], null),"increment"], null)], null);
});
});
counter.core.ui = (function counter$core$ui(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter.core.current_count], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter.core.add_count_btn], null)], null);
});
});
counter.core.start = (function counter$core$start(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialise","initialise",1962682894)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter.core.ui], null),document.getElementById("root"));
});
goog.exportSymbol('counter.core.start', counter.core.start);

//# sourceMappingURL=core.js.map?rel=1544375471319
