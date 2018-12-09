// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.17";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e30167){if((e30167 instanceof Error)){
var e = e30167;
return "Error: Unable to stringify";
} else {
throw e30167;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30170 = arguments.length;
switch (G__30170) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30168_SHARP_){
if(typeof p1__30168_SHARP_ === 'string'){
return p1__30168_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30168_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___30173 = arguments.length;
var i__4642__auto___30174 = (0);
while(true){
if((i__4642__auto___30174 < len__4641__auto___30173)){
args__4647__auto__.push((arguments[i__4642__auto___30174]));

var G__30175 = (i__4642__auto___30174 + (1));
i__4642__auto___30174 = G__30175;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30172){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30172));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___30177 = arguments.length;
var i__4642__auto___30178 = (0);
while(true){
if((i__4642__auto___30178 < len__4641__auto___30177)){
args__4647__auto__.push((arguments[i__4642__auto___30178]));

var G__30179 = (i__4642__auto___30178 + (1));
i__4642__auto___30178 = G__30179;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30176){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30176));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30180){
var map__30181 = p__30180;
var map__30181__$1 = (((((!((map__30181 == null))))?(((((map__30181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30181):map__30181);
var message = cljs.core.get.call(null,map__30181__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30181__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4047__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4036__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4036__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4036__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__25066__auto___30260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25066__auto___30260,ch){
return (function (){
var f__25067__auto__ = (function (){var switch__24971__auto__ = ((function (c__25066__auto___30260,ch){
return (function (state_30232){
var state_val_30233 = (state_30232[(1)]);
if((state_val_30233 === (7))){
var inst_30228 = (state_30232[(2)]);
var state_30232__$1 = state_30232;
var statearr_30234_30261 = state_30232__$1;
(statearr_30234_30261[(2)] = inst_30228);

(statearr_30234_30261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30233 === (1))){
var state_30232__$1 = state_30232;
var statearr_30235_30262 = state_30232__$1;
(statearr_30235_30262[(2)] = null);

(statearr_30235_30262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30233 === (4))){
var inst_30185 = (state_30232[(7)]);
var inst_30185__$1 = (state_30232[(2)]);
var state_30232__$1 = (function (){var statearr_30236 = state_30232;
(statearr_30236[(7)] = inst_30185__$1);

return statearr_30236;
})();
if(cljs.core.truth_(inst_30185__$1)){
var statearr_30237_30263 = state_30232__$1;
(statearr_30237_30263[(1)] = (5));

} else {
var statearr_30238_30264 = state_30232__$1;
(statearr_30238_30264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30233 === (15))){
var inst_30192 = (state_30232[(8)]);
var inst_30207 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30192);
var inst_30208 = cljs.core.first.call(null,inst_30207);
var inst_30209 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30208);
var inst_30210 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30209)].join('');
var inst_30211 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30210);
var state_30232__$1 = state_30232;
var statearr_30239_30265 = state_30232__$1;
(statearr_30239_30265[(2)] = inst_30211);

(statearr_30239_30265[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30233 === (13))){
var inst_30216 = (state_30232[(2)]);
var state_30232__$1 = state_30232;
var statearr_30240_30266 = state_30232__$1;
(statearr_30240_30266[(2)] = inst_30216);

(statearr_30240_30266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30233 === (6))){
var state_30232__$1 = state_30232;
var statearr_30241_30267 = state_30232__$1;
(statearr_30241_30267[(2)] = null);

(statearr_30241_30267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30233 === (17))){
var inst_30214 = (state_30232[(2)]);
var state_30232__$1 = state_30232;
var statearr_30242_30268 = state_30232__$1;
(statearr_30242_30268[(2)] = inst_30214);

(statearr_30242_30268[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30233 === (3))){
var inst_30230 = (state_30232[(2)]);
var state_30232__$1 = state_30232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30232__$1,inst_30230);
} else {
if((state_val_30233 === (12))){
var inst_30191 = (state_30232[(9)]);
var inst_30205 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30191,opts);
var state_30232__$1 = state_30232;
if(inst_30205){
var statearr_30243_30269 = state_30232__$1;
(statearr_30243_30269[(1)] = (15));

} else {
var statearr_30244_30270 = state_30232__$1;
(statearr_30244_30270[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30233 === (2))){
var state_30232__$1 = state_30232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30232__$1,(4),ch);
} else {
if((state_val_30233 === (11))){
var inst_30192 = (state_30232[(8)]);
var inst_30197 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30198 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30192);
var inst_30199 = cljs.core.async.timeout.call(null,(1000));
var inst_30200 = [inst_30198,inst_30199];
var inst_30201 = (new cljs.core.PersistentVector(null,2,(5),inst_30197,inst_30200,null));
var state_30232__$1 = state_30232;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30232__$1,(14),inst_30201);
} else {
if((state_val_30233 === (9))){
var inst_30192 = (state_30232[(8)]);
var inst_30218 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30219 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30192);
var inst_30220 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30219);
var inst_30221 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30220)].join('');
var inst_30222 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30221);
var state_30232__$1 = (function (){var statearr_30245 = state_30232;
(statearr_30245[(10)] = inst_30218);

return statearr_30245;
})();
var statearr_30246_30271 = state_30232__$1;
(statearr_30246_30271[(2)] = inst_30222);

(statearr_30246_30271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30233 === (5))){
var inst_30185 = (state_30232[(7)]);
var inst_30187 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30188 = (new cljs.core.PersistentArrayMap(null,2,inst_30187,null));
var inst_30189 = (new cljs.core.PersistentHashSet(null,inst_30188,null));
var inst_30190 = figwheel.client.focus_msgs.call(null,inst_30189,inst_30185);
var inst_30191 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30190);
var inst_30192 = cljs.core.first.call(null,inst_30190);
var inst_30193 = figwheel.client.autoload_QMARK_.call(null);
var state_30232__$1 = (function (){var statearr_30247 = state_30232;
(statearr_30247[(8)] = inst_30192);

(statearr_30247[(9)] = inst_30191);

return statearr_30247;
})();
if(cljs.core.truth_(inst_30193)){
var statearr_30248_30272 = state_30232__$1;
(statearr_30248_30272[(1)] = (8));

} else {
var statearr_30249_30273 = state_30232__$1;
(statearr_30249_30273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30233 === (14))){
var inst_30203 = (state_30232[(2)]);
var state_30232__$1 = state_30232;
var statearr_30250_30274 = state_30232__$1;
(statearr_30250_30274[(2)] = inst_30203);

(statearr_30250_30274[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30233 === (16))){
var state_30232__$1 = state_30232;
var statearr_30251_30275 = state_30232__$1;
(statearr_30251_30275[(2)] = null);

(statearr_30251_30275[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30233 === (10))){
var inst_30224 = (state_30232[(2)]);
var state_30232__$1 = (function (){var statearr_30252 = state_30232;
(statearr_30252[(11)] = inst_30224);

return statearr_30252;
})();
var statearr_30253_30276 = state_30232__$1;
(statearr_30253_30276[(2)] = null);

(statearr_30253_30276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30233 === (8))){
var inst_30191 = (state_30232[(9)]);
var inst_30195 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30191,opts);
var state_30232__$1 = state_30232;
if(cljs.core.truth_(inst_30195)){
var statearr_30254_30277 = state_30232__$1;
(statearr_30254_30277[(1)] = (11));

} else {
var statearr_30255_30278 = state_30232__$1;
(statearr_30255_30278[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25066__auto___30260,ch))
;
return ((function (switch__24971__auto__,c__25066__auto___30260,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24972__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24972__auto____0 = (function (){
var statearr_30256 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30256[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24972__auto__);

(statearr_30256[(1)] = (1));

return statearr_30256;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24972__auto____1 = (function (state_30232){
while(true){
var ret_value__24973__auto__ = (function (){try{while(true){
var result__24974__auto__ = switch__24971__auto__.call(null,state_30232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24974__auto__;
}
break;
}
}catch (e30257){if((e30257 instanceof Object)){
var ex__24975__auto__ = e30257;
var statearr_30258_30279 = state_30232;
(statearr_30258_30279[(5)] = ex__24975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30280 = state_30232;
state_30232 = G__30280;
continue;
} else {
return ret_value__24973__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24972__auto__ = function(state_30232){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24972__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24972__auto____1.call(this,state_30232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24972__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24972__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24972__auto__;
})()
;})(switch__24971__auto__,c__25066__auto___30260,ch))
})();
var state__25068__auto__ = (function (){var statearr_30259 = f__25067__auto__.call(null);
(statearr_30259[(6)] = c__25066__auto___30260);

return statearr_30259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25068__auto__);
});})(c__25066__auto___30260,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30281_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30281_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30287 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30287){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30283 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30284 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30285 = true;
var _STAR_print_fn_STAR__temp_val__30286 = ((function (_STAR_print_newline_STAR__orig_val__30283,_STAR_print_fn_STAR__orig_val__30284,_STAR_print_newline_STAR__temp_val__30285,sb,base_path_30287){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__30283,_STAR_print_fn_STAR__orig_val__30284,_STAR_print_newline_STAR__temp_val__30285,sb,base_path_30287))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30285;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30286;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30284;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30283;
}}catch (e30282){if((e30282 instanceof Error)){
var e = e30282;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30287], null));
} else {
var e = e30282;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30287))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30288){
var map__30289 = p__30288;
var map__30289__$1 = (((((!((map__30289 == null))))?(((((map__30289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30289):map__30289);
var opts = map__30289__$1;
var build_id = cljs.core.get.call(null,map__30289__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30289,map__30289__$1,opts,build_id){
return (function (p__30291){
var vec__30292 = p__30291;
var seq__30293 = cljs.core.seq.call(null,vec__30292);
var first__30294 = cljs.core.first.call(null,seq__30293);
var seq__30293__$1 = cljs.core.next.call(null,seq__30293);
var map__30295 = first__30294;
var map__30295__$1 = (((((!((map__30295 == null))))?(((((map__30295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30295):map__30295);
var msg = map__30295__$1;
var msg_name = cljs.core.get.call(null,map__30295__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30293__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30292,seq__30293,first__30294,seq__30293__$1,map__30295,map__30295__$1,msg,msg_name,_,map__30289,map__30289__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30292,seq__30293,first__30294,seq__30293__$1,map__30295,map__30295__$1,msg,msg_name,_,map__30289,map__30289__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30289,map__30289__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30297){
var vec__30298 = p__30297;
var seq__30299 = cljs.core.seq.call(null,vec__30298);
var first__30300 = cljs.core.first.call(null,seq__30299);
var seq__30299__$1 = cljs.core.next.call(null,seq__30299);
var map__30301 = first__30300;
var map__30301__$1 = (((((!((map__30301 == null))))?(((((map__30301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30301):map__30301);
var msg = map__30301__$1;
var msg_name = cljs.core.get.call(null,map__30301__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30299__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30303){
var map__30304 = p__30303;
var map__30304__$1 = (((((!((map__30304 == null))))?(((((map__30304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30304):map__30304);
var on_compile_warning = cljs.core.get.call(null,map__30304__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30304__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30304,map__30304__$1,on_compile_warning,on_compile_fail){
return (function (p__30306){
var vec__30307 = p__30306;
var seq__30308 = cljs.core.seq.call(null,vec__30307);
var first__30309 = cljs.core.first.call(null,seq__30308);
var seq__30308__$1 = cljs.core.next.call(null,seq__30308);
var map__30310 = first__30309;
var map__30310__$1 = (((((!((map__30310 == null))))?(((((map__30310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30310):map__30310);
var msg = map__30310__$1;
var msg_name = cljs.core.get.call(null,map__30310__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30308__$1;
var pred__30312 = cljs.core._EQ_;
var expr__30313 = msg_name;
if(cljs.core.truth_(pred__30312.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30313))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30312.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30313))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30304,map__30304__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__25066__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25066__auto__,msg_hist,msg_names,msg){
return (function (){
var f__25067__auto__ = (function (){var switch__24971__auto__ = ((function (c__25066__auto__,msg_hist,msg_names,msg){
return (function (state_30402){
var state_val_30403 = (state_30402[(1)]);
if((state_val_30403 === (7))){
var inst_30322 = (state_30402[(2)]);
var state_30402__$1 = state_30402;
if(cljs.core.truth_(inst_30322)){
var statearr_30404_30451 = state_30402__$1;
(statearr_30404_30451[(1)] = (8));

} else {
var statearr_30405_30452 = state_30402__$1;
(statearr_30405_30452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (20))){
var inst_30396 = (state_30402[(2)]);
var state_30402__$1 = state_30402;
var statearr_30406_30453 = state_30402__$1;
(statearr_30406_30453[(2)] = inst_30396);

(statearr_30406_30453[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (27))){
var inst_30392 = (state_30402[(2)]);
var state_30402__$1 = state_30402;
var statearr_30407_30454 = state_30402__$1;
(statearr_30407_30454[(2)] = inst_30392);

(statearr_30407_30454[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (1))){
var inst_30315 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30402__$1 = state_30402;
if(cljs.core.truth_(inst_30315)){
var statearr_30408_30455 = state_30402__$1;
(statearr_30408_30455[(1)] = (2));

} else {
var statearr_30409_30456 = state_30402__$1;
(statearr_30409_30456[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (24))){
var inst_30394 = (state_30402[(2)]);
var state_30402__$1 = state_30402;
var statearr_30410_30457 = state_30402__$1;
(statearr_30410_30457[(2)] = inst_30394);

(statearr_30410_30457[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (4))){
var inst_30400 = (state_30402[(2)]);
var state_30402__$1 = state_30402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30402__$1,inst_30400);
} else {
if((state_val_30403 === (15))){
var inst_30398 = (state_30402[(2)]);
var state_30402__$1 = state_30402;
var statearr_30411_30458 = state_30402__$1;
(statearr_30411_30458[(2)] = inst_30398);

(statearr_30411_30458[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (21))){
var inst_30351 = (state_30402[(2)]);
var inst_30352 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30353 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30352);
var state_30402__$1 = (function (){var statearr_30412 = state_30402;
(statearr_30412[(7)] = inst_30351);

return statearr_30412;
})();
var statearr_30413_30459 = state_30402__$1;
(statearr_30413_30459[(2)] = inst_30353);

(statearr_30413_30459[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (31))){
var inst_30381 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30402__$1 = state_30402;
if(inst_30381){
var statearr_30414_30460 = state_30402__$1;
(statearr_30414_30460[(1)] = (34));

} else {
var statearr_30415_30461 = state_30402__$1;
(statearr_30415_30461[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (32))){
var inst_30390 = (state_30402[(2)]);
var state_30402__$1 = state_30402;
var statearr_30416_30462 = state_30402__$1;
(statearr_30416_30462[(2)] = inst_30390);

(statearr_30416_30462[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (33))){
var inst_30377 = (state_30402[(2)]);
var inst_30378 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30379 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30378);
var state_30402__$1 = (function (){var statearr_30417 = state_30402;
(statearr_30417[(8)] = inst_30377);

return statearr_30417;
})();
var statearr_30418_30463 = state_30402__$1;
(statearr_30418_30463[(2)] = inst_30379);

(statearr_30418_30463[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (13))){
var inst_30336 = figwheel.client.heads_up.clear.call(null);
var state_30402__$1 = state_30402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30402__$1,(16),inst_30336);
} else {
if((state_val_30403 === (22))){
var inst_30357 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30358 = figwheel.client.heads_up.append_warning_message.call(null,inst_30357);
var state_30402__$1 = state_30402;
var statearr_30419_30464 = state_30402__$1;
(statearr_30419_30464[(2)] = inst_30358);

(statearr_30419_30464[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (36))){
var inst_30388 = (state_30402[(2)]);
var state_30402__$1 = state_30402;
var statearr_30420_30465 = state_30402__$1;
(statearr_30420_30465[(2)] = inst_30388);

(statearr_30420_30465[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (29))){
var inst_30368 = (state_30402[(2)]);
var inst_30369 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30370 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30369);
var state_30402__$1 = (function (){var statearr_30421 = state_30402;
(statearr_30421[(9)] = inst_30368);

return statearr_30421;
})();
var statearr_30422_30466 = state_30402__$1;
(statearr_30422_30466[(2)] = inst_30370);

(statearr_30422_30466[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (6))){
var inst_30317 = (state_30402[(10)]);
var state_30402__$1 = state_30402;
var statearr_30423_30467 = state_30402__$1;
(statearr_30423_30467[(2)] = inst_30317);

(statearr_30423_30467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (28))){
var inst_30364 = (state_30402[(2)]);
var inst_30365 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30366 = figwheel.client.heads_up.display_warning.call(null,inst_30365);
var state_30402__$1 = (function (){var statearr_30424 = state_30402;
(statearr_30424[(11)] = inst_30364);

return statearr_30424;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30402__$1,(29),inst_30366);
} else {
if((state_val_30403 === (25))){
var inst_30362 = figwheel.client.heads_up.clear.call(null);
var state_30402__$1 = state_30402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30402__$1,(28),inst_30362);
} else {
if((state_val_30403 === (34))){
var inst_30383 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30402__$1 = state_30402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30402__$1,(37),inst_30383);
} else {
if((state_val_30403 === (17))){
var inst_30342 = (state_30402[(2)]);
var inst_30343 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30344 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30343);
var state_30402__$1 = (function (){var statearr_30425 = state_30402;
(statearr_30425[(12)] = inst_30342);

return statearr_30425;
})();
var statearr_30426_30468 = state_30402__$1;
(statearr_30426_30468[(2)] = inst_30344);

(statearr_30426_30468[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (3))){
var inst_30334 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30402__$1 = state_30402;
if(inst_30334){
var statearr_30427_30469 = state_30402__$1;
(statearr_30427_30469[(1)] = (13));

} else {
var statearr_30428_30470 = state_30402__$1;
(statearr_30428_30470[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (12))){
var inst_30330 = (state_30402[(2)]);
var state_30402__$1 = state_30402;
var statearr_30429_30471 = state_30402__$1;
(statearr_30429_30471[(2)] = inst_30330);

(statearr_30429_30471[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (2))){
var inst_30317 = (state_30402[(10)]);
var inst_30317__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30402__$1 = (function (){var statearr_30430 = state_30402;
(statearr_30430[(10)] = inst_30317__$1);

return statearr_30430;
})();
if(cljs.core.truth_(inst_30317__$1)){
var statearr_30431_30472 = state_30402__$1;
(statearr_30431_30472[(1)] = (5));

} else {
var statearr_30432_30473 = state_30402__$1;
(statearr_30432_30473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (23))){
var inst_30360 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30402__$1 = state_30402;
if(inst_30360){
var statearr_30433_30474 = state_30402__$1;
(statearr_30433_30474[(1)] = (25));

} else {
var statearr_30434_30475 = state_30402__$1;
(statearr_30434_30475[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (35))){
var state_30402__$1 = state_30402;
var statearr_30435_30476 = state_30402__$1;
(statearr_30435_30476[(2)] = null);

(statearr_30435_30476[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (19))){
var inst_30355 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30402__$1 = state_30402;
if(inst_30355){
var statearr_30436_30477 = state_30402__$1;
(statearr_30436_30477[(1)] = (22));

} else {
var statearr_30437_30478 = state_30402__$1;
(statearr_30437_30478[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (11))){
var inst_30326 = (state_30402[(2)]);
var state_30402__$1 = state_30402;
var statearr_30438_30479 = state_30402__$1;
(statearr_30438_30479[(2)] = inst_30326);

(statearr_30438_30479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (9))){
var inst_30328 = figwheel.client.heads_up.clear.call(null);
var state_30402__$1 = state_30402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30402__$1,(12),inst_30328);
} else {
if((state_val_30403 === (5))){
var inst_30319 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30402__$1 = state_30402;
var statearr_30439_30480 = state_30402__$1;
(statearr_30439_30480[(2)] = inst_30319);

(statearr_30439_30480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (14))){
var inst_30346 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30402__$1 = state_30402;
if(inst_30346){
var statearr_30440_30481 = state_30402__$1;
(statearr_30440_30481[(1)] = (18));

} else {
var statearr_30441_30482 = state_30402__$1;
(statearr_30441_30482[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (26))){
var inst_30372 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30402__$1 = state_30402;
if(inst_30372){
var statearr_30442_30483 = state_30402__$1;
(statearr_30442_30483[(1)] = (30));

} else {
var statearr_30443_30484 = state_30402__$1;
(statearr_30443_30484[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (16))){
var inst_30338 = (state_30402[(2)]);
var inst_30339 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30340 = figwheel.client.heads_up.display_exception.call(null,inst_30339);
var state_30402__$1 = (function (){var statearr_30444 = state_30402;
(statearr_30444[(13)] = inst_30338);

return statearr_30444;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30402__$1,(17),inst_30340);
} else {
if((state_val_30403 === (30))){
var inst_30374 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30375 = figwheel.client.heads_up.display_warning.call(null,inst_30374);
var state_30402__$1 = state_30402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30402__$1,(33),inst_30375);
} else {
if((state_val_30403 === (10))){
var inst_30332 = (state_30402[(2)]);
var state_30402__$1 = state_30402;
var statearr_30445_30485 = state_30402__$1;
(statearr_30445_30485[(2)] = inst_30332);

(statearr_30445_30485[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (18))){
var inst_30348 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30349 = figwheel.client.heads_up.display_exception.call(null,inst_30348);
var state_30402__$1 = state_30402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30402__$1,(21),inst_30349);
} else {
if((state_val_30403 === (37))){
var inst_30385 = (state_30402[(2)]);
var state_30402__$1 = state_30402;
var statearr_30446_30486 = state_30402__$1;
(statearr_30446_30486[(2)] = inst_30385);

(statearr_30446_30486[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (8))){
var inst_30324 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30402__$1 = state_30402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30402__$1,(11),inst_30324);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25066__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24971__auto__,c__25066__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24972__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24972__auto____0 = (function (){
var statearr_30447 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30447[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24972__auto__);

(statearr_30447[(1)] = (1));

return statearr_30447;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24972__auto____1 = (function (state_30402){
while(true){
var ret_value__24973__auto__ = (function (){try{while(true){
var result__24974__auto__ = switch__24971__auto__.call(null,state_30402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24974__auto__;
}
break;
}
}catch (e30448){if((e30448 instanceof Object)){
var ex__24975__auto__ = e30448;
var statearr_30449_30487 = state_30402;
(statearr_30449_30487[(5)] = ex__24975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30488 = state_30402;
state_30402 = G__30488;
continue;
} else {
return ret_value__24973__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24972__auto__ = function(state_30402){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24972__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24972__auto____1.call(this,state_30402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24972__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24972__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24972__auto__;
})()
;})(switch__24971__auto__,c__25066__auto__,msg_hist,msg_names,msg))
})();
var state__25068__auto__ = (function (){var statearr_30450 = f__25067__auto__.call(null);
(statearr_30450[(6)] = c__25066__auto__);

return statearr_30450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25068__auto__);
});})(c__25066__auto__,msg_hist,msg_names,msg))
);

return c__25066__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25066__auto___30517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25066__auto___30517,ch){
return (function (){
var f__25067__auto__ = (function (){var switch__24971__auto__ = ((function (c__25066__auto___30517,ch){
return (function (state_30503){
var state_val_30504 = (state_30503[(1)]);
if((state_val_30504 === (1))){
var state_30503__$1 = state_30503;
var statearr_30505_30518 = state_30503__$1;
(statearr_30505_30518[(2)] = null);

(statearr_30505_30518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (2))){
var state_30503__$1 = state_30503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30503__$1,(4),ch);
} else {
if((state_val_30504 === (3))){
var inst_30501 = (state_30503[(2)]);
var state_30503__$1 = state_30503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30503__$1,inst_30501);
} else {
if((state_val_30504 === (4))){
var inst_30491 = (state_30503[(7)]);
var inst_30491__$1 = (state_30503[(2)]);
var state_30503__$1 = (function (){var statearr_30506 = state_30503;
(statearr_30506[(7)] = inst_30491__$1);

return statearr_30506;
})();
if(cljs.core.truth_(inst_30491__$1)){
var statearr_30507_30519 = state_30503__$1;
(statearr_30507_30519[(1)] = (5));

} else {
var statearr_30508_30520 = state_30503__$1;
(statearr_30508_30520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (5))){
var inst_30491 = (state_30503[(7)]);
var inst_30493 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30491);
var state_30503__$1 = state_30503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30503__$1,(8),inst_30493);
} else {
if((state_val_30504 === (6))){
var state_30503__$1 = state_30503;
var statearr_30509_30521 = state_30503__$1;
(statearr_30509_30521[(2)] = null);

(statearr_30509_30521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (7))){
var inst_30499 = (state_30503[(2)]);
var state_30503__$1 = state_30503;
var statearr_30510_30522 = state_30503__$1;
(statearr_30510_30522[(2)] = inst_30499);

(statearr_30510_30522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (8))){
var inst_30495 = (state_30503[(2)]);
var state_30503__$1 = (function (){var statearr_30511 = state_30503;
(statearr_30511[(8)] = inst_30495);

return statearr_30511;
})();
var statearr_30512_30523 = state_30503__$1;
(statearr_30512_30523[(2)] = null);

(statearr_30512_30523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__25066__auto___30517,ch))
;
return ((function (switch__24971__auto__,c__25066__auto___30517,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24972__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24972__auto____0 = (function (){
var statearr_30513 = [null,null,null,null,null,null,null,null,null];
(statearr_30513[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24972__auto__);

(statearr_30513[(1)] = (1));

return statearr_30513;
});
var figwheel$client$heads_up_plugin_$_state_machine__24972__auto____1 = (function (state_30503){
while(true){
var ret_value__24973__auto__ = (function (){try{while(true){
var result__24974__auto__ = switch__24971__auto__.call(null,state_30503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24974__auto__;
}
break;
}
}catch (e30514){if((e30514 instanceof Object)){
var ex__24975__auto__ = e30514;
var statearr_30515_30524 = state_30503;
(statearr_30515_30524[(5)] = ex__24975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30525 = state_30503;
state_30503 = G__30525;
continue;
} else {
return ret_value__24973__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24972__auto__ = function(state_30503){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24972__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24972__auto____1.call(this,state_30503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24972__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24972__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24972__auto__;
})()
;})(switch__24971__auto__,c__25066__auto___30517,ch))
})();
var state__25068__auto__ = (function (){var statearr_30516 = f__25067__auto__.call(null);
(statearr_30516[(6)] = c__25066__auto___30517);

return statearr_30516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25068__auto__);
});})(c__25066__auto___30517,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25066__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25066__auto__){
return (function (){
var f__25067__auto__ = (function (){var switch__24971__auto__ = ((function (c__25066__auto__){
return (function (state_30531){
var state_val_30532 = (state_30531[(1)]);
if((state_val_30532 === (1))){
var inst_30526 = cljs.core.async.timeout.call(null,(3000));
var state_30531__$1 = state_30531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30531__$1,(2),inst_30526);
} else {
if((state_val_30532 === (2))){
var inst_30528 = (state_30531[(2)]);
var inst_30529 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30531__$1 = (function (){var statearr_30533 = state_30531;
(statearr_30533[(7)] = inst_30528);

return statearr_30533;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30531__$1,inst_30529);
} else {
return null;
}
}
});})(c__25066__auto__))
;
return ((function (switch__24971__auto__,c__25066__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24972__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24972__auto____0 = (function (){
var statearr_30534 = [null,null,null,null,null,null,null,null];
(statearr_30534[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24972__auto__);

(statearr_30534[(1)] = (1));

return statearr_30534;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24972__auto____1 = (function (state_30531){
while(true){
var ret_value__24973__auto__ = (function (){try{while(true){
var result__24974__auto__ = switch__24971__auto__.call(null,state_30531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24974__auto__;
}
break;
}
}catch (e30535){if((e30535 instanceof Object)){
var ex__24975__auto__ = e30535;
var statearr_30536_30538 = state_30531;
(statearr_30536_30538[(5)] = ex__24975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30539 = state_30531;
state_30531 = G__30539;
continue;
} else {
return ret_value__24973__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24972__auto__ = function(state_30531){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24972__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24972__auto____1.call(this,state_30531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24972__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24972__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24972__auto__;
})()
;})(switch__24971__auto__,c__25066__auto__))
})();
var state__25068__auto__ = (function (){var statearr_30537 = f__25067__auto__.call(null);
(statearr_30537[(6)] = c__25066__auto__);

return statearr_30537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25068__auto__);
});})(c__25066__auto__))
);

return c__25066__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25066__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25066__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__25067__auto__ = (function (){var switch__24971__auto__ = ((function (c__25066__auto__,figwheel_version,temp__5457__auto__){
return (function (state_30546){
var state_val_30547 = (state_30546[(1)]);
if((state_val_30547 === (1))){
var inst_30540 = cljs.core.async.timeout.call(null,(2000));
var state_30546__$1 = state_30546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30546__$1,(2),inst_30540);
} else {
if((state_val_30547 === (2))){
var inst_30542 = (state_30546[(2)]);
var inst_30543 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30544 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30543);
var state_30546__$1 = (function (){var statearr_30548 = state_30546;
(statearr_30548[(7)] = inst_30542);

return statearr_30548;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30546__$1,inst_30544);
} else {
return null;
}
}
});})(c__25066__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__24971__auto__,c__25066__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24972__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24972__auto____0 = (function (){
var statearr_30549 = [null,null,null,null,null,null,null,null];
(statearr_30549[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24972__auto__);

(statearr_30549[(1)] = (1));

return statearr_30549;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24972__auto____1 = (function (state_30546){
while(true){
var ret_value__24973__auto__ = (function (){try{while(true){
var result__24974__auto__ = switch__24971__auto__.call(null,state_30546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24974__auto__;
}
break;
}
}catch (e30550){if((e30550 instanceof Object)){
var ex__24975__auto__ = e30550;
var statearr_30551_30553 = state_30546;
(statearr_30551_30553[(5)] = ex__24975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30554 = state_30546;
state_30546 = G__30554;
continue;
} else {
return ret_value__24973__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24972__auto__ = function(state_30546){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24972__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24972__auto____1.call(this,state_30546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24972__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24972__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24972__auto__;
})()
;})(switch__24971__auto__,c__25066__auto__,figwheel_version,temp__5457__auto__))
})();
var state__25068__auto__ = (function (){var statearr_30552 = f__25067__auto__.call(null);
(statearr_30552[(6)] = c__25066__auto__);

return statearr_30552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25068__auto__);
});})(c__25066__auto__,figwheel_version,temp__5457__auto__))
);

return c__25066__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30555){
var map__30556 = p__30555;
var map__30556__$1 = (((((!((map__30556 == null))))?(((((map__30556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30556):map__30556);
var file = cljs.core.get.call(null,map__30556__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30556__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30556__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30558 = "";
var G__30558__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30558),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30558);
var G__30558__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30558__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30558__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30558__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30558__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30559){
var map__30560 = p__30559;
var map__30560__$1 = (((((!((map__30560 == null))))?(((((map__30560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30560):map__30560);
var ed = map__30560__$1;
var formatted_exception = cljs.core.get.call(null,map__30560__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30560__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30560__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30562_30566 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30563_30567 = null;
var count__30564_30568 = (0);
var i__30565_30569 = (0);
while(true){
if((i__30565_30569 < count__30564_30568)){
var msg_30570 = cljs.core._nth.call(null,chunk__30563_30567,i__30565_30569);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30570);


var G__30571 = seq__30562_30566;
var G__30572 = chunk__30563_30567;
var G__30573 = count__30564_30568;
var G__30574 = (i__30565_30569 + (1));
seq__30562_30566 = G__30571;
chunk__30563_30567 = G__30572;
count__30564_30568 = G__30573;
i__30565_30569 = G__30574;
continue;
} else {
var temp__5457__auto___30575 = cljs.core.seq.call(null,seq__30562_30566);
if(temp__5457__auto___30575){
var seq__30562_30576__$1 = temp__5457__auto___30575;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30562_30576__$1)){
var c__4461__auto___30577 = cljs.core.chunk_first.call(null,seq__30562_30576__$1);
var G__30578 = cljs.core.chunk_rest.call(null,seq__30562_30576__$1);
var G__30579 = c__4461__auto___30577;
var G__30580 = cljs.core.count.call(null,c__4461__auto___30577);
var G__30581 = (0);
seq__30562_30566 = G__30578;
chunk__30563_30567 = G__30579;
count__30564_30568 = G__30580;
i__30565_30569 = G__30581;
continue;
} else {
var msg_30582 = cljs.core.first.call(null,seq__30562_30576__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30582);


var G__30583 = cljs.core.next.call(null,seq__30562_30576__$1);
var G__30584 = null;
var G__30585 = (0);
var G__30586 = (0);
seq__30562_30566 = G__30583;
chunk__30563_30567 = G__30584;
count__30564_30568 = G__30585;
i__30565_30569 = G__30586;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30587){
var map__30588 = p__30587;
var map__30588__$1 = (((((!((map__30588 == null))))?(((((map__30588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30588):map__30588);
var w = map__30588__$1;
var message = cljs.core.get.call(null,map__30588__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/figwheel/client.cljs",33,1,364,364,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/figwheel/client.cljs",30,1,356,356,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4036__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4036__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30590 = cljs.core.seq.call(null,plugins);
var chunk__30591 = null;
var count__30592 = (0);
var i__30593 = (0);
while(true){
if((i__30593 < count__30592)){
var vec__30594 = cljs.core._nth.call(null,chunk__30591,i__30593);
var k = cljs.core.nth.call(null,vec__30594,(0),null);
var plugin = cljs.core.nth.call(null,vec__30594,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30600 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30590,chunk__30591,count__30592,i__30593,pl_30600,vec__30594,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30600.call(null,msg_hist);
});})(seq__30590,chunk__30591,count__30592,i__30593,pl_30600,vec__30594,k,plugin))
);
} else {
}


var G__30601 = seq__30590;
var G__30602 = chunk__30591;
var G__30603 = count__30592;
var G__30604 = (i__30593 + (1));
seq__30590 = G__30601;
chunk__30591 = G__30602;
count__30592 = G__30603;
i__30593 = G__30604;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__30590);
if(temp__5457__auto__){
var seq__30590__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30590__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__30590__$1);
var G__30605 = cljs.core.chunk_rest.call(null,seq__30590__$1);
var G__30606 = c__4461__auto__;
var G__30607 = cljs.core.count.call(null,c__4461__auto__);
var G__30608 = (0);
seq__30590 = G__30605;
chunk__30591 = G__30606;
count__30592 = G__30607;
i__30593 = G__30608;
continue;
} else {
var vec__30597 = cljs.core.first.call(null,seq__30590__$1);
var k = cljs.core.nth.call(null,vec__30597,(0),null);
var plugin = cljs.core.nth.call(null,vec__30597,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30609 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30590,chunk__30591,count__30592,i__30593,pl_30609,vec__30597,k,plugin,seq__30590__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30609.call(null,msg_hist);
});})(seq__30590,chunk__30591,count__30592,i__30593,pl_30609,vec__30597,k,plugin,seq__30590__$1,temp__5457__auto__))
);
} else {
}


var G__30610 = cljs.core.next.call(null,seq__30590__$1);
var G__30611 = null;
var G__30612 = (0);
var G__30613 = (0);
seq__30590 = G__30610;
chunk__30591 = G__30611;
count__30592 = G__30612;
i__30593 = G__30613;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__30615 = arguments.length;
switch (G__30615) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__30616_30621 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30617_30622 = null;
var count__30618_30623 = (0);
var i__30619_30624 = (0);
while(true){
if((i__30619_30624 < count__30618_30623)){
var msg_30625 = cljs.core._nth.call(null,chunk__30617_30622,i__30619_30624);
figwheel.client.socket.handle_incoming_message.call(null,msg_30625);


var G__30626 = seq__30616_30621;
var G__30627 = chunk__30617_30622;
var G__30628 = count__30618_30623;
var G__30629 = (i__30619_30624 + (1));
seq__30616_30621 = G__30626;
chunk__30617_30622 = G__30627;
count__30618_30623 = G__30628;
i__30619_30624 = G__30629;
continue;
} else {
var temp__5457__auto___30630 = cljs.core.seq.call(null,seq__30616_30621);
if(temp__5457__auto___30630){
var seq__30616_30631__$1 = temp__5457__auto___30630;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30616_30631__$1)){
var c__4461__auto___30632 = cljs.core.chunk_first.call(null,seq__30616_30631__$1);
var G__30633 = cljs.core.chunk_rest.call(null,seq__30616_30631__$1);
var G__30634 = c__4461__auto___30632;
var G__30635 = cljs.core.count.call(null,c__4461__auto___30632);
var G__30636 = (0);
seq__30616_30621 = G__30633;
chunk__30617_30622 = G__30634;
count__30618_30623 = G__30635;
i__30619_30624 = G__30636;
continue;
} else {
var msg_30637 = cljs.core.first.call(null,seq__30616_30631__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30637);


var G__30638 = cljs.core.next.call(null,seq__30616_30631__$1);
var G__30639 = null;
var G__30640 = (0);
var G__30641 = (0);
seq__30616_30621 = G__30638;
chunk__30617_30622 = G__30639;
count__30618_30623 = G__30640;
i__30619_30624 = G__30641;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4647__auto__ = [];
var len__4641__auto___30646 = arguments.length;
var i__4642__auto___30647 = (0);
while(true){
if((i__4642__auto___30647 < len__4641__auto___30646)){
args__4647__auto__.push((arguments[i__4642__auto___30647]));

var G__30648 = (i__4642__auto___30647 + (1));
i__4642__auto___30647 = G__30648;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30643){
var map__30644 = p__30643;
var map__30644__$1 = (((((!((map__30644 == null))))?(((((map__30644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30644):map__30644);
var opts = map__30644__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30642){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30642));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30649){if((e30649 instanceof Error)){
var e = e30649;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30649;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__30650){
var map__30651 = p__30650;
var map__30651__$1 = (((((!((map__30651 == null))))?(((((map__30651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30651):map__30651);
var msg_name = cljs.core.get.call(null,map__30651__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1544375484364
