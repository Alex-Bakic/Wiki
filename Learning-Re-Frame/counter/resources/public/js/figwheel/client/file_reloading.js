// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4047__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4047__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28416_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28416_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__28417 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28418 = null;
var count__28419 = (0);
var i__28420 = (0);
while(true){
if((i__28420 < count__28419)){
var n = cljs.core._nth.call(null,chunk__28418,i__28420);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28421 = seq__28417;
var G__28422 = chunk__28418;
var G__28423 = count__28419;
var G__28424 = (i__28420 + (1));
seq__28417 = G__28421;
chunk__28418 = G__28422;
count__28419 = G__28423;
i__28420 = G__28424;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28417);
if(temp__5457__auto__){
var seq__28417__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28417__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__28417__$1);
var G__28425 = cljs.core.chunk_rest.call(null,seq__28417__$1);
var G__28426 = c__4461__auto__;
var G__28427 = cljs.core.count.call(null,c__4461__auto__);
var G__28428 = (0);
seq__28417 = G__28425;
chunk__28418 = G__28426;
count__28419 = G__28427;
i__28420 = G__28428;
continue;
} else {
var n = cljs.core.first.call(null,seq__28417__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28429 = cljs.core.next.call(null,seq__28417__$1);
var G__28430 = null;
var G__28431 = (0);
var G__28432 = (0);
seq__28417 = G__28429;
chunk__28418 = G__28430;
count__28419 = G__28431;
i__28420 = G__28432;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__28433){
var vec__28434 = p__28433;
var _ = cljs.core.nth.call(null,vec__28434,(0),null);
var v = cljs.core.nth.call(null,vec__28434,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__28437){
var vec__28438 = p__28437;
var k = cljs.core.nth.call(null,vec__28438,(0),null);
var v = cljs.core.nth.call(null,vec__28438,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28450_28458 = cljs.core.seq.call(null,deps);
var chunk__28451_28459 = null;
var count__28452_28460 = (0);
var i__28453_28461 = (0);
while(true){
if((i__28453_28461 < count__28452_28460)){
var dep_28462 = cljs.core._nth.call(null,chunk__28451_28459,i__28453_28461);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_28462;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28462));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28462,(depth + (1)),state);
} else {
}


var G__28463 = seq__28450_28458;
var G__28464 = chunk__28451_28459;
var G__28465 = count__28452_28460;
var G__28466 = (i__28453_28461 + (1));
seq__28450_28458 = G__28463;
chunk__28451_28459 = G__28464;
count__28452_28460 = G__28465;
i__28453_28461 = G__28466;
continue;
} else {
var temp__5457__auto___28467 = cljs.core.seq.call(null,seq__28450_28458);
if(temp__5457__auto___28467){
var seq__28450_28468__$1 = temp__5457__auto___28467;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28450_28468__$1)){
var c__4461__auto___28469 = cljs.core.chunk_first.call(null,seq__28450_28468__$1);
var G__28470 = cljs.core.chunk_rest.call(null,seq__28450_28468__$1);
var G__28471 = c__4461__auto___28469;
var G__28472 = cljs.core.count.call(null,c__4461__auto___28469);
var G__28473 = (0);
seq__28450_28458 = G__28470;
chunk__28451_28459 = G__28471;
count__28452_28460 = G__28472;
i__28453_28461 = G__28473;
continue;
} else {
var dep_28474 = cljs.core.first.call(null,seq__28450_28468__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_28474;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28474));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28474,(depth + (1)),state);
} else {
}


var G__28475 = cljs.core.next.call(null,seq__28450_28468__$1);
var G__28476 = null;
var G__28477 = (0);
var G__28478 = (0);
seq__28450_28458 = G__28475;
chunk__28451_28459 = G__28476;
count__28452_28460 = G__28477;
i__28453_28461 = G__28478;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28454){
var vec__28455 = p__28454;
var seq__28456 = cljs.core.seq.call(null,vec__28455);
var first__28457 = cljs.core.first.call(null,seq__28456);
var seq__28456__$1 = cljs.core.next.call(null,seq__28456);
var x = first__28457;
var xs = seq__28456__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28455,seq__28456,first__28457,seq__28456__$1,x,xs,get_deps__$1){
return (function (p1__28441_SHARP_){
return clojure.set.difference.call(null,p1__28441_SHARP_,x);
});})(vec__28455,seq__28456,first__28457,seq__28456__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28479 = cljs.core.seq.call(null,provides);
var chunk__28480 = null;
var count__28481 = (0);
var i__28482 = (0);
while(true){
if((i__28482 < count__28481)){
var prov = cljs.core._nth.call(null,chunk__28480,i__28482);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28483_28491 = cljs.core.seq.call(null,requires);
var chunk__28484_28492 = null;
var count__28485_28493 = (0);
var i__28486_28494 = (0);
while(true){
if((i__28486_28494 < count__28485_28493)){
var req_28495 = cljs.core._nth.call(null,chunk__28484_28492,i__28486_28494);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28495,prov);


var G__28496 = seq__28483_28491;
var G__28497 = chunk__28484_28492;
var G__28498 = count__28485_28493;
var G__28499 = (i__28486_28494 + (1));
seq__28483_28491 = G__28496;
chunk__28484_28492 = G__28497;
count__28485_28493 = G__28498;
i__28486_28494 = G__28499;
continue;
} else {
var temp__5457__auto___28500 = cljs.core.seq.call(null,seq__28483_28491);
if(temp__5457__auto___28500){
var seq__28483_28501__$1 = temp__5457__auto___28500;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28483_28501__$1)){
var c__4461__auto___28502 = cljs.core.chunk_first.call(null,seq__28483_28501__$1);
var G__28503 = cljs.core.chunk_rest.call(null,seq__28483_28501__$1);
var G__28504 = c__4461__auto___28502;
var G__28505 = cljs.core.count.call(null,c__4461__auto___28502);
var G__28506 = (0);
seq__28483_28491 = G__28503;
chunk__28484_28492 = G__28504;
count__28485_28493 = G__28505;
i__28486_28494 = G__28506;
continue;
} else {
var req_28507 = cljs.core.first.call(null,seq__28483_28501__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28507,prov);


var G__28508 = cljs.core.next.call(null,seq__28483_28501__$1);
var G__28509 = null;
var G__28510 = (0);
var G__28511 = (0);
seq__28483_28491 = G__28508;
chunk__28484_28492 = G__28509;
count__28485_28493 = G__28510;
i__28486_28494 = G__28511;
continue;
}
} else {
}
}
break;
}


var G__28512 = seq__28479;
var G__28513 = chunk__28480;
var G__28514 = count__28481;
var G__28515 = (i__28482 + (1));
seq__28479 = G__28512;
chunk__28480 = G__28513;
count__28481 = G__28514;
i__28482 = G__28515;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28479);
if(temp__5457__auto__){
var seq__28479__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28479__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__28479__$1);
var G__28516 = cljs.core.chunk_rest.call(null,seq__28479__$1);
var G__28517 = c__4461__auto__;
var G__28518 = cljs.core.count.call(null,c__4461__auto__);
var G__28519 = (0);
seq__28479 = G__28516;
chunk__28480 = G__28517;
count__28481 = G__28518;
i__28482 = G__28519;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28479__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28487_28520 = cljs.core.seq.call(null,requires);
var chunk__28488_28521 = null;
var count__28489_28522 = (0);
var i__28490_28523 = (0);
while(true){
if((i__28490_28523 < count__28489_28522)){
var req_28524 = cljs.core._nth.call(null,chunk__28488_28521,i__28490_28523);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28524,prov);


var G__28525 = seq__28487_28520;
var G__28526 = chunk__28488_28521;
var G__28527 = count__28489_28522;
var G__28528 = (i__28490_28523 + (1));
seq__28487_28520 = G__28525;
chunk__28488_28521 = G__28526;
count__28489_28522 = G__28527;
i__28490_28523 = G__28528;
continue;
} else {
var temp__5457__auto___28529__$1 = cljs.core.seq.call(null,seq__28487_28520);
if(temp__5457__auto___28529__$1){
var seq__28487_28530__$1 = temp__5457__auto___28529__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28487_28530__$1)){
var c__4461__auto___28531 = cljs.core.chunk_first.call(null,seq__28487_28530__$1);
var G__28532 = cljs.core.chunk_rest.call(null,seq__28487_28530__$1);
var G__28533 = c__4461__auto___28531;
var G__28534 = cljs.core.count.call(null,c__4461__auto___28531);
var G__28535 = (0);
seq__28487_28520 = G__28532;
chunk__28488_28521 = G__28533;
count__28489_28522 = G__28534;
i__28490_28523 = G__28535;
continue;
} else {
var req_28536 = cljs.core.first.call(null,seq__28487_28530__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28536,prov);


var G__28537 = cljs.core.next.call(null,seq__28487_28530__$1);
var G__28538 = null;
var G__28539 = (0);
var G__28540 = (0);
seq__28487_28520 = G__28537;
chunk__28488_28521 = G__28538;
count__28489_28522 = G__28539;
i__28490_28523 = G__28540;
continue;
}
} else {
}
}
break;
}


var G__28541 = cljs.core.next.call(null,seq__28479__$1);
var G__28542 = null;
var G__28543 = (0);
var G__28544 = (0);
seq__28479 = G__28541;
chunk__28480 = G__28542;
count__28481 = G__28543;
i__28482 = G__28544;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28545_28549 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28546_28550 = null;
var count__28547_28551 = (0);
var i__28548_28552 = (0);
while(true){
if((i__28548_28552 < count__28547_28551)){
var ns_28553 = cljs.core._nth.call(null,chunk__28546_28550,i__28548_28552);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28553);


var G__28554 = seq__28545_28549;
var G__28555 = chunk__28546_28550;
var G__28556 = count__28547_28551;
var G__28557 = (i__28548_28552 + (1));
seq__28545_28549 = G__28554;
chunk__28546_28550 = G__28555;
count__28547_28551 = G__28556;
i__28548_28552 = G__28557;
continue;
} else {
var temp__5457__auto___28558 = cljs.core.seq.call(null,seq__28545_28549);
if(temp__5457__auto___28558){
var seq__28545_28559__$1 = temp__5457__auto___28558;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28545_28559__$1)){
var c__4461__auto___28560 = cljs.core.chunk_first.call(null,seq__28545_28559__$1);
var G__28561 = cljs.core.chunk_rest.call(null,seq__28545_28559__$1);
var G__28562 = c__4461__auto___28560;
var G__28563 = cljs.core.count.call(null,c__4461__auto___28560);
var G__28564 = (0);
seq__28545_28549 = G__28561;
chunk__28546_28550 = G__28562;
count__28547_28551 = G__28563;
i__28548_28552 = G__28564;
continue;
} else {
var ns_28565 = cljs.core.first.call(null,seq__28545_28559__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28565);


var G__28566 = cljs.core.next.call(null,seq__28545_28559__$1);
var G__28567 = null;
var G__28568 = (0);
var G__28569 = (0);
seq__28545_28549 = G__28566;
chunk__28546_28550 = G__28567;
count__28547_28551 = G__28568;
i__28548_28552 = G__28569;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4047__auto__ = goog.require__;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28570__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28570 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28571__i = 0, G__28571__a = new Array(arguments.length -  0);
while (G__28571__i < G__28571__a.length) {G__28571__a[G__28571__i] = arguments[G__28571__i + 0]; ++G__28571__i;}
  args = new cljs.core.IndexedSeq(G__28571__a,0,null);
} 
return G__28570__delegate.call(this,args);};
G__28570.cljs$lang$maxFixedArity = 0;
G__28570.cljs$lang$applyTo = (function (arglist__28572){
var args = cljs.core.seq(arglist__28572);
return G__28570__delegate(args);
});
G__28570.cljs$core$IFn$_invoke$arity$variadic = G__28570__delegate;
return G__28570;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28573_SHARP_,p2__28574_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28573_SHARP_)),p2__28574_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28575_SHARP_,p2__28576_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28575_SHARP_),p2__28576_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28577 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28577.addCallback(((function (G__28577){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__28577))
);

G__28577.addErrback(((function (G__28577){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__28577))
);

return G__28577;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28578){if((e28578 instanceof Error)){
var e = e28578;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28578;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28579){if((e28579 instanceof Error)){
var e = e28579;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28579;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28580 = cljs.core._EQ_;
var expr__28581 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28580.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28581))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28580.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28581))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28580.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28581))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__28580,expr__28581){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28580,expr__28581))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28583,callback){
var map__28584 = p__28583;
var map__28584__$1 = (((((!((map__28584 == null))))?(((((map__28584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28584):map__28584);
var file_msg = map__28584__$1;
var request_url = cljs.core.get.call(null,map__28584__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__28584,map__28584__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28584,map__28584__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__25066__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25066__auto__){
return (function (){
var f__25067__auto__ = (function (){var switch__24971__auto__ = ((function (c__25066__auto__){
return (function (state_28622){
var state_val_28623 = (state_28622[(1)]);
if((state_val_28623 === (7))){
var inst_28618 = (state_28622[(2)]);
var state_28622__$1 = state_28622;
var statearr_28624_28650 = state_28622__$1;
(statearr_28624_28650[(2)] = inst_28618);

(statearr_28624_28650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (1))){
var state_28622__$1 = state_28622;
var statearr_28625_28651 = state_28622__$1;
(statearr_28625_28651[(2)] = null);

(statearr_28625_28651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (4))){
var inst_28588 = (state_28622[(7)]);
var inst_28588__$1 = (state_28622[(2)]);
var state_28622__$1 = (function (){var statearr_28626 = state_28622;
(statearr_28626[(7)] = inst_28588__$1);

return statearr_28626;
})();
if(cljs.core.truth_(inst_28588__$1)){
var statearr_28627_28652 = state_28622__$1;
(statearr_28627_28652[(1)] = (5));

} else {
var statearr_28628_28653 = state_28622__$1;
(statearr_28628_28653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (15))){
var inst_28603 = (state_28622[(8)]);
var inst_28601 = (state_28622[(9)]);
var inst_28605 = inst_28603.call(null,inst_28601);
var state_28622__$1 = state_28622;
var statearr_28629_28654 = state_28622__$1;
(statearr_28629_28654[(2)] = inst_28605);

(statearr_28629_28654[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (13))){
var inst_28612 = (state_28622[(2)]);
var state_28622__$1 = state_28622;
var statearr_28630_28655 = state_28622__$1;
(statearr_28630_28655[(2)] = inst_28612);

(statearr_28630_28655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (6))){
var state_28622__$1 = state_28622;
var statearr_28631_28656 = state_28622__$1;
(statearr_28631_28656[(2)] = null);

(statearr_28631_28656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (17))){
var inst_28609 = (state_28622[(2)]);
var state_28622__$1 = state_28622;
var statearr_28632_28657 = state_28622__$1;
(statearr_28632_28657[(2)] = inst_28609);

(statearr_28632_28657[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (3))){
var inst_28620 = (state_28622[(2)]);
var state_28622__$1 = state_28622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28622__$1,inst_28620);
} else {
if((state_val_28623 === (12))){
var state_28622__$1 = state_28622;
var statearr_28633_28658 = state_28622__$1;
(statearr_28633_28658[(2)] = null);

(statearr_28633_28658[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (2))){
var state_28622__$1 = state_28622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28622__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28623 === (11))){
var inst_28593 = (state_28622[(10)]);
var inst_28599 = figwheel.client.file_reloading.blocking_load.call(null,inst_28593);
var state_28622__$1 = state_28622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28622__$1,(14),inst_28599);
} else {
if((state_val_28623 === (9))){
var inst_28593 = (state_28622[(10)]);
var state_28622__$1 = state_28622;
if(cljs.core.truth_(inst_28593)){
var statearr_28634_28659 = state_28622__$1;
(statearr_28634_28659[(1)] = (11));

} else {
var statearr_28635_28660 = state_28622__$1;
(statearr_28635_28660[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (5))){
var inst_28588 = (state_28622[(7)]);
var inst_28594 = (state_28622[(11)]);
var inst_28593 = cljs.core.nth.call(null,inst_28588,(0),null);
var inst_28594__$1 = cljs.core.nth.call(null,inst_28588,(1),null);
var state_28622__$1 = (function (){var statearr_28636 = state_28622;
(statearr_28636[(10)] = inst_28593);

(statearr_28636[(11)] = inst_28594__$1);

return statearr_28636;
})();
if(cljs.core.truth_(inst_28594__$1)){
var statearr_28637_28661 = state_28622__$1;
(statearr_28637_28661[(1)] = (8));

} else {
var statearr_28638_28662 = state_28622__$1;
(statearr_28638_28662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (14))){
var inst_28603 = (state_28622[(8)]);
var inst_28593 = (state_28622[(10)]);
var inst_28601 = (state_28622[(2)]);
var inst_28602 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28603__$1 = cljs.core.get.call(null,inst_28602,inst_28593);
var state_28622__$1 = (function (){var statearr_28639 = state_28622;
(statearr_28639[(8)] = inst_28603__$1);

(statearr_28639[(9)] = inst_28601);

return statearr_28639;
})();
if(cljs.core.truth_(inst_28603__$1)){
var statearr_28640_28663 = state_28622__$1;
(statearr_28640_28663[(1)] = (15));

} else {
var statearr_28641_28664 = state_28622__$1;
(statearr_28641_28664[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (16))){
var inst_28601 = (state_28622[(9)]);
var inst_28607 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28601);
var state_28622__$1 = state_28622;
var statearr_28642_28665 = state_28622__$1;
(statearr_28642_28665[(2)] = inst_28607);

(statearr_28642_28665[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (10))){
var inst_28614 = (state_28622[(2)]);
var state_28622__$1 = (function (){var statearr_28643 = state_28622;
(statearr_28643[(12)] = inst_28614);

return statearr_28643;
})();
var statearr_28644_28666 = state_28622__$1;
(statearr_28644_28666[(2)] = null);

(statearr_28644_28666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (8))){
var inst_28594 = (state_28622[(11)]);
var inst_28596 = eval(inst_28594);
var state_28622__$1 = state_28622;
var statearr_28645_28667 = state_28622__$1;
(statearr_28645_28667[(2)] = inst_28596);

(statearr_28645_28667[(1)] = (10));


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
});})(c__25066__auto__))
;
return ((function (switch__24971__auto__,c__25066__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24972__auto__ = null;
var figwheel$client$file_reloading$state_machine__24972__auto____0 = (function (){
var statearr_28646 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28646[(0)] = figwheel$client$file_reloading$state_machine__24972__auto__);

(statearr_28646[(1)] = (1));

return statearr_28646;
});
var figwheel$client$file_reloading$state_machine__24972__auto____1 = (function (state_28622){
while(true){
var ret_value__24973__auto__ = (function (){try{while(true){
var result__24974__auto__ = switch__24971__auto__.call(null,state_28622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24974__auto__;
}
break;
}
}catch (e28647){if((e28647 instanceof Object)){
var ex__24975__auto__ = e28647;
var statearr_28648_28668 = state_28622;
(statearr_28648_28668[(5)] = ex__24975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28669 = state_28622;
state_28622 = G__28669;
continue;
} else {
return ret_value__24973__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24972__auto__ = function(state_28622){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24972__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24972__auto____1.call(this,state_28622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24972__auto____0;
figwheel$client$file_reloading$state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24972__auto____1;
return figwheel$client$file_reloading$state_machine__24972__auto__;
})()
;})(switch__24971__auto__,c__25066__auto__))
})();
var state__25068__auto__ = (function (){var statearr_28649 = f__25067__auto__.call(null);
(statearr_28649[(6)] = c__25066__auto__);

return statearr_28649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25068__auto__);
});})(c__25066__auto__))
);

return c__25066__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28671 = arguments.length;
switch (G__28671) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28673,callback){
var map__28674 = p__28673;
var map__28674__$1 = (((((!((map__28674 == null))))?(((((map__28674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28674):map__28674);
var file_msg = map__28674__$1;
var namespace = cljs.core.get.call(null,map__28674__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28674,map__28674__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28674,map__28674__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28676){
var map__28677 = p__28676;
var map__28677__$1 = (((((!((map__28677 == null))))?(((((map__28677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28677):map__28677);
var file_msg = map__28677__$1;
var namespace = cljs.core.get.call(null,map__28677__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28679){
var map__28680 = p__28679;
var map__28680__$1 = (((((!((map__28680 == null))))?(((((map__28680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28680):map__28680);
var file_msg = map__28680__$1;
var namespace = cljs.core.get.call(null,map__28680__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4036__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4036__auto__){
var or__4047__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
var or__4047__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4047__auto____$2)){
return or__4047__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4036__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28682,callback){
var map__28683 = p__28682;
var map__28683__$1 = (((((!((map__28683 == null))))?(((((map__28683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28683):map__28683);
var file_msg = map__28683__$1;
var request_url = cljs.core.get.call(null,map__28683__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28683__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__25066__auto___28733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25066__auto___28733,out){
return (function (){
var f__25067__auto__ = (function (){var switch__24971__auto__ = ((function (c__25066__auto___28733,out){
return (function (state_28718){
var state_val_28719 = (state_28718[(1)]);
if((state_val_28719 === (1))){
var inst_28692 = cljs.core.seq.call(null,files);
var inst_28693 = cljs.core.first.call(null,inst_28692);
var inst_28694 = cljs.core.next.call(null,inst_28692);
var inst_28695 = files;
var state_28718__$1 = (function (){var statearr_28720 = state_28718;
(statearr_28720[(7)] = inst_28694);

(statearr_28720[(8)] = inst_28695);

(statearr_28720[(9)] = inst_28693);

return statearr_28720;
})();
var statearr_28721_28734 = state_28718__$1;
(statearr_28721_28734[(2)] = null);

(statearr_28721_28734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28719 === (2))){
var inst_28695 = (state_28718[(8)]);
var inst_28701 = (state_28718[(10)]);
var inst_28700 = cljs.core.seq.call(null,inst_28695);
var inst_28701__$1 = cljs.core.first.call(null,inst_28700);
var inst_28702 = cljs.core.next.call(null,inst_28700);
var inst_28703 = (inst_28701__$1 == null);
var inst_28704 = cljs.core.not.call(null,inst_28703);
var state_28718__$1 = (function (){var statearr_28722 = state_28718;
(statearr_28722[(11)] = inst_28702);

(statearr_28722[(10)] = inst_28701__$1);

return statearr_28722;
})();
if(inst_28704){
var statearr_28723_28735 = state_28718__$1;
(statearr_28723_28735[(1)] = (4));

} else {
var statearr_28724_28736 = state_28718__$1;
(statearr_28724_28736[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28719 === (3))){
var inst_28716 = (state_28718[(2)]);
var state_28718__$1 = state_28718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28718__$1,inst_28716);
} else {
if((state_val_28719 === (4))){
var inst_28701 = (state_28718[(10)]);
var inst_28706 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28701);
var state_28718__$1 = state_28718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28718__$1,(7),inst_28706);
} else {
if((state_val_28719 === (5))){
var inst_28712 = cljs.core.async.close_BANG_.call(null,out);
var state_28718__$1 = state_28718;
var statearr_28725_28737 = state_28718__$1;
(statearr_28725_28737[(2)] = inst_28712);

(statearr_28725_28737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28719 === (6))){
var inst_28714 = (state_28718[(2)]);
var state_28718__$1 = state_28718;
var statearr_28726_28738 = state_28718__$1;
(statearr_28726_28738[(2)] = inst_28714);

(statearr_28726_28738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28719 === (7))){
var inst_28702 = (state_28718[(11)]);
var inst_28708 = (state_28718[(2)]);
var inst_28709 = cljs.core.async.put_BANG_.call(null,out,inst_28708);
var inst_28695 = inst_28702;
var state_28718__$1 = (function (){var statearr_28727 = state_28718;
(statearr_28727[(12)] = inst_28709);

(statearr_28727[(8)] = inst_28695);

return statearr_28727;
})();
var statearr_28728_28739 = state_28718__$1;
(statearr_28728_28739[(2)] = null);

(statearr_28728_28739[(1)] = (2));


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
});})(c__25066__auto___28733,out))
;
return ((function (switch__24971__auto__,c__25066__auto___28733,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24972__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24972__auto____0 = (function (){
var statearr_28729 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28729[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24972__auto__);

(statearr_28729[(1)] = (1));

return statearr_28729;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24972__auto____1 = (function (state_28718){
while(true){
var ret_value__24973__auto__ = (function (){try{while(true){
var result__24974__auto__ = switch__24971__auto__.call(null,state_28718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24974__auto__;
}
break;
}
}catch (e28730){if((e28730 instanceof Object)){
var ex__24975__auto__ = e28730;
var statearr_28731_28740 = state_28718;
(statearr_28731_28740[(5)] = ex__24975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28741 = state_28718;
state_28718 = G__28741;
continue;
} else {
return ret_value__24973__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24972__auto__ = function(state_28718){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24972__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24972__auto____1.call(this,state_28718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24972__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24972__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24972__auto__;
})()
;})(switch__24971__auto__,c__25066__auto___28733,out))
})();
var state__25068__auto__ = (function (){var statearr_28732 = f__25067__auto__.call(null);
(statearr_28732[(6)] = c__25066__auto___28733);

return statearr_28732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25068__auto__);
});})(c__25066__auto___28733,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28742,opts){
var map__28743 = p__28742;
var map__28743__$1 = (((((!((map__28743 == null))))?(((((map__28743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28743):map__28743);
var eval_body = cljs.core.get.call(null,map__28743__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28743__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4036__auto__ = eval_body;
if(cljs.core.truth_(and__4036__auto__)){
return typeof eval_body === 'string';
} else {
return and__4036__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28745){var e = e28745;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28746_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28746_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28747){
var vec__28748 = p__28747;
var k = cljs.core.nth.call(null,vec__28748,(0),null);
var v = cljs.core.nth.call(null,vec__28748,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28751){
var vec__28752 = p__28751;
var k = cljs.core.nth.call(null,vec__28752,(0),null);
var v = cljs.core.nth.call(null,vec__28752,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28758,p__28759){
var map__28760 = p__28758;
var map__28760__$1 = (((((!((map__28760 == null))))?(((((map__28760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28760):map__28760);
var opts = map__28760__$1;
var before_jsload = cljs.core.get.call(null,map__28760__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28760__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28760__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28761 = p__28759;
var map__28761__$1 = (((((!((map__28761 == null))))?(((((map__28761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28761):map__28761);
var msg = map__28761__$1;
var files = cljs.core.get.call(null,map__28761__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28761__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28761__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__25066__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25066__auto__,map__28760,map__28760__$1,opts,before_jsload,on_jsload,reload_dependents,map__28761,map__28761__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__25067__auto__ = (function (){var switch__24971__auto__ = ((function (c__25066__auto__,map__28760,map__28760__$1,opts,before_jsload,on_jsload,reload_dependents,map__28761,map__28761__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28915){
var state_val_28916 = (state_28915[(1)]);
if((state_val_28916 === (7))){
var inst_28775 = (state_28915[(7)]);
var inst_28776 = (state_28915[(8)]);
var inst_28777 = (state_28915[(9)]);
var inst_28778 = (state_28915[(10)]);
var inst_28783 = cljs.core._nth.call(null,inst_28776,inst_28778);
var inst_28784 = figwheel.client.file_reloading.eval_body.call(null,inst_28783,opts);
var inst_28785 = (inst_28778 + (1));
var tmp28917 = inst_28775;
var tmp28918 = inst_28776;
var tmp28919 = inst_28777;
var inst_28775__$1 = tmp28917;
var inst_28776__$1 = tmp28918;
var inst_28777__$1 = tmp28919;
var inst_28778__$1 = inst_28785;
var state_28915__$1 = (function (){var statearr_28920 = state_28915;
(statearr_28920[(7)] = inst_28775__$1);

(statearr_28920[(11)] = inst_28784);

(statearr_28920[(8)] = inst_28776__$1);

(statearr_28920[(9)] = inst_28777__$1);

(statearr_28920[(10)] = inst_28778__$1);

return statearr_28920;
})();
var statearr_28921_29004 = state_28915__$1;
(statearr_28921_29004[(2)] = null);

(statearr_28921_29004[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (20))){
var inst_28818 = (state_28915[(12)]);
var inst_28826 = figwheel.client.file_reloading.sort_files.call(null,inst_28818);
var state_28915__$1 = state_28915;
var statearr_28922_29005 = state_28915__$1;
(statearr_28922_29005[(2)] = inst_28826);

(statearr_28922_29005[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (27))){
var state_28915__$1 = state_28915;
var statearr_28923_29006 = state_28915__$1;
(statearr_28923_29006[(2)] = null);

(statearr_28923_29006[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (1))){
var inst_28767 = (state_28915[(13)]);
var inst_28764 = before_jsload.call(null,files);
var inst_28765 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28766 = (function (){return ((function (inst_28767,inst_28764,inst_28765,state_val_28916,c__25066__auto__,map__28760,map__28760__$1,opts,before_jsload,on_jsload,reload_dependents,map__28761,map__28761__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28755_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28755_SHARP_);
});
;})(inst_28767,inst_28764,inst_28765,state_val_28916,c__25066__auto__,map__28760,map__28760__$1,opts,before_jsload,on_jsload,reload_dependents,map__28761,map__28761__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28767__$1 = cljs.core.filter.call(null,inst_28766,files);
var inst_28768 = cljs.core.not_empty.call(null,inst_28767__$1);
var state_28915__$1 = (function (){var statearr_28924 = state_28915;
(statearr_28924[(14)] = inst_28764);

(statearr_28924[(15)] = inst_28765);

(statearr_28924[(13)] = inst_28767__$1);

return statearr_28924;
})();
if(cljs.core.truth_(inst_28768)){
var statearr_28925_29007 = state_28915__$1;
(statearr_28925_29007[(1)] = (2));

} else {
var statearr_28926_29008 = state_28915__$1;
(statearr_28926_29008[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (24))){
var state_28915__$1 = state_28915;
var statearr_28927_29009 = state_28915__$1;
(statearr_28927_29009[(2)] = null);

(statearr_28927_29009[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (39))){
var inst_28868 = (state_28915[(16)]);
var state_28915__$1 = state_28915;
var statearr_28928_29010 = state_28915__$1;
(statearr_28928_29010[(2)] = inst_28868);

(statearr_28928_29010[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (46))){
var inst_28910 = (state_28915[(2)]);
var state_28915__$1 = state_28915;
var statearr_28929_29011 = state_28915__$1;
(statearr_28929_29011[(2)] = inst_28910);

(statearr_28929_29011[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (4))){
var inst_28812 = (state_28915[(2)]);
var inst_28813 = cljs.core.List.EMPTY;
var inst_28814 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28813);
var inst_28815 = (function (){return ((function (inst_28812,inst_28813,inst_28814,state_val_28916,c__25066__auto__,map__28760,map__28760__$1,opts,before_jsload,on_jsload,reload_dependents,map__28761,map__28761__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28756_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28756_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28756_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28756_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_28812,inst_28813,inst_28814,state_val_28916,c__25066__auto__,map__28760,map__28760__$1,opts,before_jsload,on_jsload,reload_dependents,map__28761,map__28761__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28816 = cljs.core.filter.call(null,inst_28815,files);
var inst_28817 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28818 = cljs.core.concat.call(null,inst_28816,inst_28817);
var state_28915__$1 = (function (){var statearr_28930 = state_28915;
(statearr_28930[(17)] = inst_28812);

(statearr_28930[(12)] = inst_28818);

(statearr_28930[(18)] = inst_28814);

return statearr_28930;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28931_29012 = state_28915__$1;
(statearr_28931_29012[(1)] = (16));

} else {
var statearr_28932_29013 = state_28915__$1;
(statearr_28932_29013[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (15))){
var inst_28802 = (state_28915[(2)]);
var state_28915__$1 = state_28915;
var statearr_28933_29014 = state_28915__$1;
(statearr_28933_29014[(2)] = inst_28802);

(statearr_28933_29014[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (21))){
var inst_28828 = (state_28915[(19)]);
var inst_28828__$1 = (state_28915[(2)]);
var inst_28829 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28828__$1);
var state_28915__$1 = (function (){var statearr_28934 = state_28915;
(statearr_28934[(19)] = inst_28828__$1);

return statearr_28934;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28915__$1,(22),inst_28829);
} else {
if((state_val_28916 === (31))){
var inst_28913 = (state_28915[(2)]);
var state_28915__$1 = state_28915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28915__$1,inst_28913);
} else {
if((state_val_28916 === (32))){
var inst_28868 = (state_28915[(16)]);
var inst_28873 = inst_28868.cljs$lang$protocol_mask$partition0$;
var inst_28874 = (inst_28873 & (64));
var inst_28875 = inst_28868.cljs$core$ISeq$;
var inst_28876 = (cljs.core.PROTOCOL_SENTINEL === inst_28875);
var inst_28877 = ((inst_28874) || (inst_28876));
var state_28915__$1 = state_28915;
if(cljs.core.truth_(inst_28877)){
var statearr_28935_29015 = state_28915__$1;
(statearr_28935_29015[(1)] = (35));

} else {
var statearr_28936_29016 = state_28915__$1;
(statearr_28936_29016[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (40))){
var inst_28890 = (state_28915[(20)]);
var inst_28889 = (state_28915[(2)]);
var inst_28890__$1 = cljs.core.get.call(null,inst_28889,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28891 = cljs.core.get.call(null,inst_28889,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28892 = cljs.core.not_empty.call(null,inst_28890__$1);
var state_28915__$1 = (function (){var statearr_28937 = state_28915;
(statearr_28937[(20)] = inst_28890__$1);

(statearr_28937[(21)] = inst_28891);

return statearr_28937;
})();
if(cljs.core.truth_(inst_28892)){
var statearr_28938_29017 = state_28915__$1;
(statearr_28938_29017[(1)] = (41));

} else {
var statearr_28939_29018 = state_28915__$1;
(statearr_28939_29018[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (33))){
var state_28915__$1 = state_28915;
var statearr_28940_29019 = state_28915__$1;
(statearr_28940_29019[(2)] = false);

(statearr_28940_29019[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (13))){
var inst_28788 = (state_28915[(22)]);
var inst_28792 = cljs.core.chunk_first.call(null,inst_28788);
var inst_28793 = cljs.core.chunk_rest.call(null,inst_28788);
var inst_28794 = cljs.core.count.call(null,inst_28792);
var inst_28775 = inst_28793;
var inst_28776 = inst_28792;
var inst_28777 = inst_28794;
var inst_28778 = (0);
var state_28915__$1 = (function (){var statearr_28941 = state_28915;
(statearr_28941[(7)] = inst_28775);

(statearr_28941[(8)] = inst_28776);

(statearr_28941[(9)] = inst_28777);

(statearr_28941[(10)] = inst_28778);

return statearr_28941;
})();
var statearr_28942_29020 = state_28915__$1;
(statearr_28942_29020[(2)] = null);

(statearr_28942_29020[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (22))){
var inst_28831 = (state_28915[(23)]);
var inst_28836 = (state_28915[(24)]);
var inst_28828 = (state_28915[(19)]);
var inst_28832 = (state_28915[(25)]);
var inst_28831__$1 = (state_28915[(2)]);
var inst_28832__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28831__$1);
var inst_28833 = (function (){var all_files = inst_28828;
var res_SINGLEQUOTE_ = inst_28831__$1;
var res = inst_28832__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28831,inst_28836,inst_28828,inst_28832,inst_28831__$1,inst_28832__$1,state_val_28916,c__25066__auto__,map__28760,map__28760__$1,opts,before_jsload,on_jsload,reload_dependents,map__28761,map__28761__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28757_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28757_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28831,inst_28836,inst_28828,inst_28832,inst_28831__$1,inst_28832__$1,state_val_28916,c__25066__auto__,map__28760,map__28760__$1,opts,before_jsload,on_jsload,reload_dependents,map__28761,map__28761__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28834 = cljs.core.filter.call(null,inst_28833,inst_28831__$1);
var inst_28835 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28836__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28835);
var inst_28837 = cljs.core.not_empty.call(null,inst_28836__$1);
var state_28915__$1 = (function (){var statearr_28943 = state_28915;
(statearr_28943[(23)] = inst_28831__$1);

(statearr_28943[(24)] = inst_28836__$1);

(statearr_28943[(26)] = inst_28834);

(statearr_28943[(25)] = inst_28832__$1);

return statearr_28943;
})();
if(cljs.core.truth_(inst_28837)){
var statearr_28944_29021 = state_28915__$1;
(statearr_28944_29021[(1)] = (23));

} else {
var statearr_28945_29022 = state_28915__$1;
(statearr_28945_29022[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (36))){
var state_28915__$1 = state_28915;
var statearr_28946_29023 = state_28915__$1;
(statearr_28946_29023[(2)] = false);

(statearr_28946_29023[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (41))){
var inst_28890 = (state_28915[(20)]);
var inst_28894 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28895 = cljs.core.map.call(null,inst_28894,inst_28890);
var inst_28896 = cljs.core.pr_str.call(null,inst_28895);
var inst_28897 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28896)].join('');
var inst_28898 = figwheel.client.utils.log.call(null,inst_28897);
var state_28915__$1 = state_28915;
var statearr_28947_29024 = state_28915__$1;
(statearr_28947_29024[(2)] = inst_28898);

(statearr_28947_29024[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (43))){
var inst_28891 = (state_28915[(21)]);
var inst_28901 = (state_28915[(2)]);
var inst_28902 = cljs.core.not_empty.call(null,inst_28891);
var state_28915__$1 = (function (){var statearr_28948 = state_28915;
(statearr_28948[(27)] = inst_28901);

return statearr_28948;
})();
if(cljs.core.truth_(inst_28902)){
var statearr_28949_29025 = state_28915__$1;
(statearr_28949_29025[(1)] = (44));

} else {
var statearr_28950_29026 = state_28915__$1;
(statearr_28950_29026[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (29))){
var inst_28831 = (state_28915[(23)]);
var inst_28836 = (state_28915[(24)]);
var inst_28828 = (state_28915[(19)]);
var inst_28834 = (state_28915[(26)]);
var inst_28832 = (state_28915[(25)]);
var inst_28868 = (state_28915[(16)]);
var inst_28864 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28867 = (function (){var all_files = inst_28828;
var res_SINGLEQUOTE_ = inst_28831;
var res = inst_28832;
var files_not_loaded = inst_28834;
var dependencies_that_loaded = inst_28836;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28831,inst_28836,inst_28828,inst_28834,inst_28832,inst_28868,inst_28864,state_val_28916,c__25066__auto__,map__28760,map__28760__$1,opts,before_jsload,on_jsload,reload_dependents,map__28761,map__28761__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28866){
var map__28951 = p__28866;
var map__28951__$1 = (((((!((map__28951 == null))))?(((((map__28951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28951):map__28951);
var namespace = cljs.core.get.call(null,map__28951__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28831,inst_28836,inst_28828,inst_28834,inst_28832,inst_28868,inst_28864,state_val_28916,c__25066__auto__,map__28760,map__28760__$1,opts,before_jsload,on_jsload,reload_dependents,map__28761,map__28761__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28868__$1 = cljs.core.group_by.call(null,inst_28867,inst_28834);
var inst_28870 = (inst_28868__$1 == null);
var inst_28871 = cljs.core.not.call(null,inst_28870);
var state_28915__$1 = (function (){var statearr_28953 = state_28915;
(statearr_28953[(28)] = inst_28864);

(statearr_28953[(16)] = inst_28868__$1);

return statearr_28953;
})();
if(inst_28871){
var statearr_28954_29027 = state_28915__$1;
(statearr_28954_29027[(1)] = (32));

} else {
var statearr_28955_29028 = state_28915__$1;
(statearr_28955_29028[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (44))){
var inst_28891 = (state_28915[(21)]);
var inst_28904 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28891);
var inst_28905 = cljs.core.pr_str.call(null,inst_28904);
var inst_28906 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28905)].join('');
var inst_28907 = figwheel.client.utils.log.call(null,inst_28906);
var state_28915__$1 = state_28915;
var statearr_28956_29029 = state_28915__$1;
(statearr_28956_29029[(2)] = inst_28907);

(statearr_28956_29029[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (6))){
var inst_28809 = (state_28915[(2)]);
var state_28915__$1 = state_28915;
var statearr_28957_29030 = state_28915__$1;
(statearr_28957_29030[(2)] = inst_28809);

(statearr_28957_29030[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (28))){
var inst_28834 = (state_28915[(26)]);
var inst_28861 = (state_28915[(2)]);
var inst_28862 = cljs.core.not_empty.call(null,inst_28834);
var state_28915__$1 = (function (){var statearr_28958 = state_28915;
(statearr_28958[(29)] = inst_28861);

return statearr_28958;
})();
if(cljs.core.truth_(inst_28862)){
var statearr_28959_29031 = state_28915__$1;
(statearr_28959_29031[(1)] = (29));

} else {
var statearr_28960_29032 = state_28915__$1;
(statearr_28960_29032[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (25))){
var inst_28832 = (state_28915[(25)]);
var inst_28848 = (state_28915[(2)]);
var inst_28849 = cljs.core.not_empty.call(null,inst_28832);
var state_28915__$1 = (function (){var statearr_28961 = state_28915;
(statearr_28961[(30)] = inst_28848);

return statearr_28961;
})();
if(cljs.core.truth_(inst_28849)){
var statearr_28962_29033 = state_28915__$1;
(statearr_28962_29033[(1)] = (26));

} else {
var statearr_28963_29034 = state_28915__$1;
(statearr_28963_29034[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (34))){
var inst_28884 = (state_28915[(2)]);
var state_28915__$1 = state_28915;
if(cljs.core.truth_(inst_28884)){
var statearr_28964_29035 = state_28915__$1;
(statearr_28964_29035[(1)] = (38));

} else {
var statearr_28965_29036 = state_28915__$1;
(statearr_28965_29036[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (17))){
var state_28915__$1 = state_28915;
var statearr_28966_29037 = state_28915__$1;
(statearr_28966_29037[(2)] = recompile_dependents);

(statearr_28966_29037[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (3))){
var state_28915__$1 = state_28915;
var statearr_28967_29038 = state_28915__$1;
(statearr_28967_29038[(2)] = null);

(statearr_28967_29038[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (12))){
var inst_28805 = (state_28915[(2)]);
var state_28915__$1 = state_28915;
var statearr_28968_29039 = state_28915__$1;
(statearr_28968_29039[(2)] = inst_28805);

(statearr_28968_29039[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (2))){
var inst_28767 = (state_28915[(13)]);
var inst_28774 = cljs.core.seq.call(null,inst_28767);
var inst_28775 = inst_28774;
var inst_28776 = null;
var inst_28777 = (0);
var inst_28778 = (0);
var state_28915__$1 = (function (){var statearr_28969 = state_28915;
(statearr_28969[(7)] = inst_28775);

(statearr_28969[(8)] = inst_28776);

(statearr_28969[(9)] = inst_28777);

(statearr_28969[(10)] = inst_28778);

return statearr_28969;
})();
var statearr_28970_29040 = state_28915__$1;
(statearr_28970_29040[(2)] = null);

(statearr_28970_29040[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (23))){
var inst_28831 = (state_28915[(23)]);
var inst_28836 = (state_28915[(24)]);
var inst_28828 = (state_28915[(19)]);
var inst_28834 = (state_28915[(26)]);
var inst_28832 = (state_28915[(25)]);
var inst_28839 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28841 = (function (){var all_files = inst_28828;
var res_SINGLEQUOTE_ = inst_28831;
var res = inst_28832;
var files_not_loaded = inst_28834;
var dependencies_that_loaded = inst_28836;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28831,inst_28836,inst_28828,inst_28834,inst_28832,inst_28839,state_val_28916,c__25066__auto__,map__28760,map__28760__$1,opts,before_jsload,on_jsload,reload_dependents,map__28761,map__28761__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28840){
var map__28971 = p__28840;
var map__28971__$1 = (((((!((map__28971 == null))))?(((((map__28971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28971):map__28971);
var request_url = cljs.core.get.call(null,map__28971__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28831,inst_28836,inst_28828,inst_28834,inst_28832,inst_28839,state_val_28916,c__25066__auto__,map__28760,map__28760__$1,opts,before_jsload,on_jsload,reload_dependents,map__28761,map__28761__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28842 = cljs.core.reverse.call(null,inst_28836);
var inst_28843 = cljs.core.map.call(null,inst_28841,inst_28842);
var inst_28844 = cljs.core.pr_str.call(null,inst_28843);
var inst_28845 = figwheel.client.utils.log.call(null,inst_28844);
var state_28915__$1 = (function (){var statearr_28973 = state_28915;
(statearr_28973[(31)] = inst_28839);

return statearr_28973;
})();
var statearr_28974_29041 = state_28915__$1;
(statearr_28974_29041[(2)] = inst_28845);

(statearr_28974_29041[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (35))){
var state_28915__$1 = state_28915;
var statearr_28975_29042 = state_28915__$1;
(statearr_28975_29042[(2)] = true);

(statearr_28975_29042[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (19))){
var inst_28818 = (state_28915[(12)]);
var inst_28824 = figwheel.client.file_reloading.expand_files.call(null,inst_28818);
var state_28915__$1 = state_28915;
var statearr_28976_29043 = state_28915__$1;
(statearr_28976_29043[(2)] = inst_28824);

(statearr_28976_29043[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (11))){
var state_28915__$1 = state_28915;
var statearr_28977_29044 = state_28915__$1;
(statearr_28977_29044[(2)] = null);

(statearr_28977_29044[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (9))){
var inst_28807 = (state_28915[(2)]);
var state_28915__$1 = state_28915;
var statearr_28978_29045 = state_28915__$1;
(statearr_28978_29045[(2)] = inst_28807);

(statearr_28978_29045[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (5))){
var inst_28777 = (state_28915[(9)]);
var inst_28778 = (state_28915[(10)]);
var inst_28780 = (inst_28778 < inst_28777);
var inst_28781 = inst_28780;
var state_28915__$1 = state_28915;
if(cljs.core.truth_(inst_28781)){
var statearr_28979_29046 = state_28915__$1;
(statearr_28979_29046[(1)] = (7));

} else {
var statearr_28980_29047 = state_28915__$1;
(statearr_28980_29047[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (14))){
var inst_28788 = (state_28915[(22)]);
var inst_28797 = cljs.core.first.call(null,inst_28788);
var inst_28798 = figwheel.client.file_reloading.eval_body.call(null,inst_28797,opts);
var inst_28799 = cljs.core.next.call(null,inst_28788);
var inst_28775 = inst_28799;
var inst_28776 = null;
var inst_28777 = (0);
var inst_28778 = (0);
var state_28915__$1 = (function (){var statearr_28981 = state_28915;
(statearr_28981[(7)] = inst_28775);

(statearr_28981[(8)] = inst_28776);

(statearr_28981[(9)] = inst_28777);

(statearr_28981[(10)] = inst_28778);

(statearr_28981[(32)] = inst_28798);

return statearr_28981;
})();
var statearr_28982_29048 = state_28915__$1;
(statearr_28982_29048[(2)] = null);

(statearr_28982_29048[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (45))){
var state_28915__$1 = state_28915;
var statearr_28983_29049 = state_28915__$1;
(statearr_28983_29049[(2)] = null);

(statearr_28983_29049[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (26))){
var inst_28831 = (state_28915[(23)]);
var inst_28836 = (state_28915[(24)]);
var inst_28828 = (state_28915[(19)]);
var inst_28834 = (state_28915[(26)]);
var inst_28832 = (state_28915[(25)]);
var inst_28851 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28853 = (function (){var all_files = inst_28828;
var res_SINGLEQUOTE_ = inst_28831;
var res = inst_28832;
var files_not_loaded = inst_28834;
var dependencies_that_loaded = inst_28836;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28831,inst_28836,inst_28828,inst_28834,inst_28832,inst_28851,state_val_28916,c__25066__auto__,map__28760,map__28760__$1,opts,before_jsload,on_jsload,reload_dependents,map__28761,map__28761__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28852){
var map__28984 = p__28852;
var map__28984__$1 = (((((!((map__28984 == null))))?(((((map__28984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28984):map__28984);
var namespace = cljs.core.get.call(null,map__28984__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28984__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28831,inst_28836,inst_28828,inst_28834,inst_28832,inst_28851,state_val_28916,c__25066__auto__,map__28760,map__28760__$1,opts,before_jsload,on_jsload,reload_dependents,map__28761,map__28761__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28854 = cljs.core.map.call(null,inst_28853,inst_28832);
var inst_28855 = cljs.core.pr_str.call(null,inst_28854);
var inst_28856 = figwheel.client.utils.log.call(null,inst_28855);
var inst_28857 = (function (){var all_files = inst_28828;
var res_SINGLEQUOTE_ = inst_28831;
var res = inst_28832;
var files_not_loaded = inst_28834;
var dependencies_that_loaded = inst_28836;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28831,inst_28836,inst_28828,inst_28834,inst_28832,inst_28851,inst_28853,inst_28854,inst_28855,inst_28856,state_val_28916,c__25066__auto__,map__28760,map__28760__$1,opts,before_jsload,on_jsload,reload_dependents,map__28761,map__28761__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28831,inst_28836,inst_28828,inst_28834,inst_28832,inst_28851,inst_28853,inst_28854,inst_28855,inst_28856,state_val_28916,c__25066__auto__,map__28760,map__28760__$1,opts,before_jsload,on_jsload,reload_dependents,map__28761,map__28761__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28858 = setTimeout(inst_28857,(10));
var state_28915__$1 = (function (){var statearr_28986 = state_28915;
(statearr_28986[(33)] = inst_28856);

(statearr_28986[(34)] = inst_28851);

return statearr_28986;
})();
var statearr_28987_29050 = state_28915__$1;
(statearr_28987_29050[(2)] = inst_28858);

(statearr_28987_29050[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (16))){
var state_28915__$1 = state_28915;
var statearr_28988_29051 = state_28915__$1;
(statearr_28988_29051[(2)] = reload_dependents);

(statearr_28988_29051[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (38))){
var inst_28868 = (state_28915[(16)]);
var inst_28886 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28868);
var state_28915__$1 = state_28915;
var statearr_28989_29052 = state_28915__$1;
(statearr_28989_29052[(2)] = inst_28886);

(statearr_28989_29052[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (30))){
var state_28915__$1 = state_28915;
var statearr_28990_29053 = state_28915__$1;
(statearr_28990_29053[(2)] = null);

(statearr_28990_29053[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (10))){
var inst_28788 = (state_28915[(22)]);
var inst_28790 = cljs.core.chunked_seq_QMARK_.call(null,inst_28788);
var state_28915__$1 = state_28915;
if(inst_28790){
var statearr_28991_29054 = state_28915__$1;
(statearr_28991_29054[(1)] = (13));

} else {
var statearr_28992_29055 = state_28915__$1;
(statearr_28992_29055[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (18))){
var inst_28822 = (state_28915[(2)]);
var state_28915__$1 = state_28915;
if(cljs.core.truth_(inst_28822)){
var statearr_28993_29056 = state_28915__$1;
(statearr_28993_29056[(1)] = (19));

} else {
var statearr_28994_29057 = state_28915__$1;
(statearr_28994_29057[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (42))){
var state_28915__$1 = state_28915;
var statearr_28995_29058 = state_28915__$1;
(statearr_28995_29058[(2)] = null);

(statearr_28995_29058[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (37))){
var inst_28881 = (state_28915[(2)]);
var state_28915__$1 = state_28915;
var statearr_28996_29059 = state_28915__$1;
(statearr_28996_29059[(2)] = inst_28881);

(statearr_28996_29059[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (8))){
var inst_28775 = (state_28915[(7)]);
var inst_28788 = (state_28915[(22)]);
var inst_28788__$1 = cljs.core.seq.call(null,inst_28775);
var state_28915__$1 = (function (){var statearr_28997 = state_28915;
(statearr_28997[(22)] = inst_28788__$1);

return statearr_28997;
})();
if(inst_28788__$1){
var statearr_28998_29060 = state_28915__$1;
(statearr_28998_29060[(1)] = (10));

} else {
var statearr_28999_29061 = state_28915__$1;
(statearr_28999_29061[(1)] = (11));

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
});})(c__25066__auto__,map__28760,map__28760__$1,opts,before_jsload,on_jsload,reload_dependents,map__28761,map__28761__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24971__auto__,c__25066__auto__,map__28760,map__28760__$1,opts,before_jsload,on_jsload,reload_dependents,map__28761,map__28761__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24972__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24972__auto____0 = (function (){
var statearr_29000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29000[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24972__auto__);

(statearr_29000[(1)] = (1));

return statearr_29000;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24972__auto____1 = (function (state_28915){
while(true){
var ret_value__24973__auto__ = (function (){try{while(true){
var result__24974__auto__ = switch__24971__auto__.call(null,state_28915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24974__auto__;
}
break;
}
}catch (e29001){if((e29001 instanceof Object)){
var ex__24975__auto__ = e29001;
var statearr_29002_29062 = state_28915;
(statearr_29002_29062[(5)] = ex__24975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29063 = state_28915;
state_28915 = G__29063;
continue;
} else {
return ret_value__24973__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24972__auto__ = function(state_28915){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24972__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24972__auto____1.call(this,state_28915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24972__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24972__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24972__auto__;
})()
;})(switch__24971__auto__,c__25066__auto__,map__28760,map__28760__$1,opts,before_jsload,on_jsload,reload_dependents,map__28761,map__28761__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__25068__auto__ = (function (){var statearr_29003 = f__25067__auto__.call(null);
(statearr_29003[(6)] = c__25066__auto__);

return statearr_29003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25068__auto__);
});})(c__25066__auto__,map__28760,map__28760__$1,opts,before_jsload,on_jsload,reload_dependents,map__28761,map__28761__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__25066__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29066,link){
var map__29067 = p__29066;
var map__29067__$1 = (((((!((map__29067 == null))))?(((((map__29067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29067):map__29067);
var file = cljs.core.get.call(null,map__29067__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__29067,map__29067__$1,file){
return (function (p1__29064_SHARP_,p2__29065_SHARP_){
if(cljs.core._EQ_.call(null,p1__29064_SHARP_,p2__29065_SHARP_)){
return p1__29064_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__29067,map__29067__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29070){
var map__29071 = p__29070;
var map__29071__$1 = (((((!((map__29071 == null))))?(((((map__29071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29071):map__29071);
var match_length = cljs.core.get.call(null,map__29071__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29071__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29069_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29069_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29073_SHARP_,p2__29074_SHARP_){
return cljs.core.assoc.call(null,p1__29073_SHARP_,cljs.core.get.call(null,p2__29074_SHARP_,key),p2__29074_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_29075 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29075);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29075);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29076,p__29077){
var map__29078 = p__29076;
var map__29078__$1 = (((((!((map__29078 == null))))?(((((map__29078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29078):map__29078);
var on_cssload = cljs.core.get.call(null,map__29078__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29079 = p__29077;
var map__29079__$1 = (((((!((map__29079 == null))))?(((((map__29079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29079):map__29079);
var files_msg = map__29079__$1;
var files = cljs.core.get.call(null,map__29079__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1544375480786
