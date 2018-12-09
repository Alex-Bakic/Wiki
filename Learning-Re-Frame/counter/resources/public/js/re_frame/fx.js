// Compiled by ClojureScript 1.10.439 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__22989 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__22990 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__22990;

try{try{var seq__22991 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__22992 = null;
var count__22993 = (0);
var i__22994 = (0);
while(true){
if((i__22994 < count__22993)){
var vec__22995 = cljs.core._nth.call(null,chunk__22992,i__22994);
var effect_key = cljs.core.nth.call(null,vec__22995,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22995,(1),null);
var temp__5455__auto___23011 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23011)){
var effect_fn_23012 = temp__5455__auto___23011;
effect_fn_23012.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__23013 = seq__22991;
var G__23014 = chunk__22992;
var G__23015 = count__22993;
var G__23016 = (i__22994 + (1));
seq__22991 = G__23013;
chunk__22992 = G__23014;
count__22993 = G__23015;
i__22994 = G__23016;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__22991);
if(temp__5457__auto__){
var seq__22991__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22991__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__22991__$1);
var G__23017 = cljs.core.chunk_rest.call(null,seq__22991__$1);
var G__23018 = c__4461__auto__;
var G__23019 = cljs.core.count.call(null,c__4461__auto__);
var G__23020 = (0);
seq__22991 = G__23017;
chunk__22992 = G__23018;
count__22993 = G__23019;
i__22994 = G__23020;
continue;
} else {
var vec__22998 = cljs.core.first.call(null,seq__22991__$1);
var effect_key = cljs.core.nth.call(null,vec__22998,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22998,(1),null);
var temp__5455__auto___23021 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23021)){
var effect_fn_23022 = temp__5455__auto___23021;
effect_fn_23022.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__23023 = cljs.core.next.call(null,seq__22991__$1);
var G__23024 = null;
var G__23025 = (0);
var G__23026 = (0);
seq__22991 = G__23023;
chunk__22992 = G__23024;
count__22993 = G__23025;
i__22994 = G__23026;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__22826__auto___23027 = re_frame.interop.now.call(null);
var duration__22827__auto___23028 = (end__22826__auto___23027 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22827__auto___23028,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__22826__auto___23027);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__22989;
}} else {
var seq__23001 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23002 = null;
var count__23003 = (0);
var i__23004 = (0);
while(true){
if((i__23004 < count__23003)){
var vec__23005 = cljs.core._nth.call(null,chunk__23002,i__23004);
var effect_key = cljs.core.nth.call(null,vec__23005,(0),null);
var effect_value = cljs.core.nth.call(null,vec__23005,(1),null);
var temp__5455__auto___23029 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23029)){
var effect_fn_23030 = temp__5455__auto___23029;
effect_fn_23030.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__23031 = seq__23001;
var G__23032 = chunk__23002;
var G__23033 = count__23003;
var G__23034 = (i__23004 + (1));
seq__23001 = G__23031;
chunk__23002 = G__23032;
count__23003 = G__23033;
i__23004 = G__23034;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__23001);
if(temp__5457__auto__){
var seq__23001__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23001__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__23001__$1);
var G__23035 = cljs.core.chunk_rest.call(null,seq__23001__$1);
var G__23036 = c__4461__auto__;
var G__23037 = cljs.core.count.call(null,c__4461__auto__);
var G__23038 = (0);
seq__23001 = G__23035;
chunk__23002 = G__23036;
count__23003 = G__23037;
i__23004 = G__23038;
continue;
} else {
var vec__23008 = cljs.core.first.call(null,seq__23001__$1);
var effect_key = cljs.core.nth.call(null,vec__23008,(0),null);
var effect_value = cljs.core.nth.call(null,vec__23008,(1),null);
var temp__5455__auto___23039 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23039)){
var effect_fn_23040 = temp__5455__auto___23039;
effect_fn_23040.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__23041 = cljs.core.next.call(null,seq__23001__$1);
var G__23042 = null;
var G__23043 = (0);
var G__23044 = (0);
seq__23001 = G__23041;
chunk__23002 = G__23042;
count__23003 = G__23043;
i__23004 = G__23044;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__23045 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__23046 = null;
var count__23047 = (0);
var i__23048 = (0);
while(true){
if((i__23048 < count__23047)){
var map__23049 = cljs.core._nth.call(null,chunk__23046,i__23048);
var map__23049__$1 = (((((!((map__23049 == null))))?(((((map__23049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23049):map__23049);
var effect = map__23049__$1;
var ms = cljs.core.get.call(null,map__23049__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__23049__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__23045,chunk__23046,count__23047,i__23048,map__23049,map__23049__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__23045,chunk__23046,count__23047,i__23048,map__23049,map__23049__$1,effect,ms,dispatch))
,ms);
}


var G__23053 = seq__23045;
var G__23054 = chunk__23046;
var G__23055 = count__23047;
var G__23056 = (i__23048 + (1));
seq__23045 = G__23053;
chunk__23046 = G__23054;
count__23047 = G__23055;
i__23048 = G__23056;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__23045);
if(temp__5457__auto__){
var seq__23045__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23045__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__23045__$1);
var G__23057 = cljs.core.chunk_rest.call(null,seq__23045__$1);
var G__23058 = c__4461__auto__;
var G__23059 = cljs.core.count.call(null,c__4461__auto__);
var G__23060 = (0);
seq__23045 = G__23057;
chunk__23046 = G__23058;
count__23047 = G__23059;
i__23048 = G__23060;
continue;
} else {
var map__23051 = cljs.core.first.call(null,seq__23045__$1);
var map__23051__$1 = (((((!((map__23051 == null))))?(((((map__23051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23051):map__23051);
var effect = map__23051__$1;
var ms = cljs.core.get.call(null,map__23051__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__23051__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__23045,chunk__23046,count__23047,i__23048,map__23051,map__23051__$1,effect,ms,dispatch,seq__23045__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__23045,chunk__23046,count__23047,i__23048,map__23051,map__23051__$1,effect,ms,dispatch,seq__23045__$1,temp__5457__auto__))
,ms);
}


var G__23061 = cljs.core.next.call(null,seq__23045__$1);
var G__23062 = null;
var G__23063 = (0);
var G__23064 = (0);
seq__23045 = G__23061;
chunk__23046 = G__23062;
count__23047 = G__23063;
i__23048 = G__23064;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__23065 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__23066 = null;
var count__23067 = (0);
var i__23068 = (0);
while(true){
if((i__23068 < count__23067)){
var event = cljs.core._nth.call(null,chunk__23066,i__23068);
re_frame.router.dispatch.call(null,event);


var G__23069 = seq__23065;
var G__23070 = chunk__23066;
var G__23071 = count__23067;
var G__23072 = (i__23068 + (1));
seq__23065 = G__23069;
chunk__23066 = G__23070;
count__23067 = G__23071;
i__23068 = G__23072;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__23065);
if(temp__5457__auto__){
var seq__23065__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23065__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__23065__$1);
var G__23073 = cljs.core.chunk_rest.call(null,seq__23065__$1);
var G__23074 = c__4461__auto__;
var G__23075 = cljs.core.count.call(null,c__4461__auto__);
var G__23076 = (0);
seq__23065 = G__23073;
chunk__23066 = G__23074;
count__23067 = G__23075;
i__23068 = G__23076;
continue;
} else {
var event = cljs.core.first.call(null,seq__23065__$1);
re_frame.router.dispatch.call(null,event);


var G__23077 = cljs.core.next.call(null,seq__23065__$1);
var G__23078 = null;
var G__23079 = (0);
var G__23080 = (0);
seq__23065 = G__23077;
chunk__23066 = G__23078;
count__23067 = G__23079;
i__23068 = G__23080;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__23081 = cljs.core.seq.call(null,value);
var chunk__23082 = null;
var count__23083 = (0);
var i__23084 = (0);
while(true){
if((i__23084 < count__23083)){
var event = cljs.core._nth.call(null,chunk__23082,i__23084);
clear_event.call(null,event);


var G__23085 = seq__23081;
var G__23086 = chunk__23082;
var G__23087 = count__23083;
var G__23088 = (i__23084 + (1));
seq__23081 = G__23085;
chunk__23082 = G__23086;
count__23083 = G__23087;
i__23084 = G__23088;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__23081);
if(temp__5457__auto__){
var seq__23081__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23081__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__23081__$1);
var G__23089 = cljs.core.chunk_rest.call(null,seq__23081__$1);
var G__23090 = c__4461__auto__;
var G__23091 = cljs.core.count.call(null,c__4461__auto__);
var G__23092 = (0);
seq__23081 = G__23089;
chunk__23082 = G__23090;
count__23083 = G__23091;
i__23084 = G__23092;
continue;
} else {
var event = cljs.core.first.call(null,seq__23081__$1);
clear_event.call(null,event);


var G__23093 = cljs.core.next.call(null,seq__23081__$1);
var G__23094 = null;
var G__23095 = (0);
var G__23096 = (0);
seq__23081 = G__23093;
chunk__23082 = G__23094;
count__23083 = G__23095;
i__23084 = G__23096;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1544375470596
