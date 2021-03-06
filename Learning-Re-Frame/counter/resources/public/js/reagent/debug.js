// Compiled by ClojureScript 1.10.439 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__22155__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22155 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22156__i = 0, G__22156__a = new Array(arguments.length -  0);
while (G__22156__i < G__22156__a.length) {G__22156__a[G__22156__i] = arguments[G__22156__i + 0]; ++G__22156__i;}
  args = new cljs.core.IndexedSeq(G__22156__a,0,null);
} 
return G__22155__delegate.call(this,args);};
G__22155.cljs$lang$maxFixedArity = 0;
G__22155.cljs$lang$applyTo = (function (arglist__22157){
var args = cljs.core.seq(arglist__22157);
return G__22155__delegate(args);
});
G__22155.cljs$core$IFn$_invoke$arity$variadic = G__22155__delegate;
return G__22155;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__22158__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22158 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22159__i = 0, G__22159__a = new Array(arguments.length -  0);
while (G__22159__i < G__22159__a.length) {G__22159__a[G__22159__i] = arguments[G__22159__i + 0]; ++G__22159__i;}
  args = new cljs.core.IndexedSeq(G__22159__a,0,null);
} 
return G__22158__delegate.call(this,args);};
G__22158.cljs$lang$maxFixedArity = 0;
G__22158.cljs$lang$applyTo = (function (arglist__22160){
var args = cljs.core.seq(arglist__22160);
return G__22158__delegate(args);
});
G__22158.cljs$core$IFn$_invoke$arity$variadic = G__22158__delegate;
return G__22158;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1544375467096
