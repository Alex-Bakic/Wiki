// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29879){
var map__29880 = p__29879;
var map__29880__$1 = (((((!((map__29880 == null))))?(((((map__29880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29880):map__29880);
var m = map__29880__$1;
var n = cljs.core.get.call(null,map__29880__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29880__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29882_29904 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29883_29905 = null;
var count__29884_29906 = (0);
var i__29885_29907 = (0);
while(true){
if((i__29885_29907 < count__29884_29906)){
var f_29908 = cljs.core._nth.call(null,chunk__29883_29905,i__29885_29907);
cljs.core.println.call(null,"  ",f_29908);


var G__29909 = seq__29882_29904;
var G__29910 = chunk__29883_29905;
var G__29911 = count__29884_29906;
var G__29912 = (i__29885_29907 + (1));
seq__29882_29904 = G__29909;
chunk__29883_29905 = G__29910;
count__29884_29906 = G__29911;
i__29885_29907 = G__29912;
continue;
} else {
var temp__5457__auto___29913 = cljs.core.seq.call(null,seq__29882_29904);
if(temp__5457__auto___29913){
var seq__29882_29914__$1 = temp__5457__auto___29913;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29882_29914__$1)){
var c__4461__auto___29915 = cljs.core.chunk_first.call(null,seq__29882_29914__$1);
var G__29916 = cljs.core.chunk_rest.call(null,seq__29882_29914__$1);
var G__29917 = c__4461__auto___29915;
var G__29918 = cljs.core.count.call(null,c__4461__auto___29915);
var G__29919 = (0);
seq__29882_29904 = G__29916;
chunk__29883_29905 = G__29917;
count__29884_29906 = G__29918;
i__29885_29907 = G__29919;
continue;
} else {
var f_29920 = cljs.core.first.call(null,seq__29882_29914__$1);
cljs.core.println.call(null,"  ",f_29920);


var G__29921 = cljs.core.next.call(null,seq__29882_29914__$1);
var G__29922 = null;
var G__29923 = (0);
var G__29924 = (0);
seq__29882_29904 = G__29921;
chunk__29883_29905 = G__29922;
count__29884_29906 = G__29923;
i__29885_29907 = G__29924;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29925 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29925);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29925)))?cljs.core.second.call(null,arglists_29925):arglists_29925));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29886_29926 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29887_29927 = null;
var count__29888_29928 = (0);
var i__29889_29929 = (0);
while(true){
if((i__29889_29929 < count__29888_29928)){
var vec__29890_29930 = cljs.core._nth.call(null,chunk__29887_29927,i__29889_29929);
var name_29931 = cljs.core.nth.call(null,vec__29890_29930,(0),null);
var map__29893_29932 = cljs.core.nth.call(null,vec__29890_29930,(1),null);
var map__29893_29933__$1 = (((((!((map__29893_29932 == null))))?(((((map__29893_29932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29893_29932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29893_29932):map__29893_29932);
var doc_29934 = cljs.core.get.call(null,map__29893_29933__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29935 = cljs.core.get.call(null,map__29893_29933__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29931);

cljs.core.println.call(null," ",arglists_29935);

if(cljs.core.truth_(doc_29934)){
cljs.core.println.call(null," ",doc_29934);
} else {
}


var G__29936 = seq__29886_29926;
var G__29937 = chunk__29887_29927;
var G__29938 = count__29888_29928;
var G__29939 = (i__29889_29929 + (1));
seq__29886_29926 = G__29936;
chunk__29887_29927 = G__29937;
count__29888_29928 = G__29938;
i__29889_29929 = G__29939;
continue;
} else {
var temp__5457__auto___29940 = cljs.core.seq.call(null,seq__29886_29926);
if(temp__5457__auto___29940){
var seq__29886_29941__$1 = temp__5457__auto___29940;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29886_29941__$1)){
var c__4461__auto___29942 = cljs.core.chunk_first.call(null,seq__29886_29941__$1);
var G__29943 = cljs.core.chunk_rest.call(null,seq__29886_29941__$1);
var G__29944 = c__4461__auto___29942;
var G__29945 = cljs.core.count.call(null,c__4461__auto___29942);
var G__29946 = (0);
seq__29886_29926 = G__29943;
chunk__29887_29927 = G__29944;
count__29888_29928 = G__29945;
i__29889_29929 = G__29946;
continue;
} else {
var vec__29895_29947 = cljs.core.first.call(null,seq__29886_29941__$1);
var name_29948 = cljs.core.nth.call(null,vec__29895_29947,(0),null);
var map__29898_29949 = cljs.core.nth.call(null,vec__29895_29947,(1),null);
var map__29898_29950__$1 = (((((!((map__29898_29949 == null))))?(((((map__29898_29949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29898_29949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29898_29949):map__29898_29949);
var doc_29951 = cljs.core.get.call(null,map__29898_29950__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29952 = cljs.core.get.call(null,map__29898_29950__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29948);

cljs.core.println.call(null," ",arglists_29952);

if(cljs.core.truth_(doc_29951)){
cljs.core.println.call(null," ",doc_29951);
} else {
}


var G__29953 = cljs.core.next.call(null,seq__29886_29941__$1);
var G__29954 = null;
var G__29955 = (0);
var G__29956 = (0);
seq__29886_29926 = G__29953;
chunk__29887_29927 = G__29954;
count__29888_29928 = G__29955;
i__29889_29929 = G__29956;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__29900 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29901 = null;
var count__29902 = (0);
var i__29903 = (0);
while(true){
if((i__29903 < count__29902)){
var role = cljs.core._nth.call(null,chunk__29901,i__29903);
var temp__5457__auto___29957__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___29957__$1)){
var spec_29958 = temp__5457__auto___29957__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29958));
} else {
}


var G__29959 = seq__29900;
var G__29960 = chunk__29901;
var G__29961 = count__29902;
var G__29962 = (i__29903 + (1));
seq__29900 = G__29959;
chunk__29901 = G__29960;
count__29902 = G__29961;
i__29903 = G__29962;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__29900);
if(temp__5457__auto____$1){
var seq__29900__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29900__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__29900__$1);
var G__29963 = cljs.core.chunk_rest.call(null,seq__29900__$1);
var G__29964 = c__4461__auto__;
var G__29965 = cljs.core.count.call(null,c__4461__auto__);
var G__29966 = (0);
seq__29900 = G__29963;
chunk__29901 = G__29964;
count__29902 = G__29965;
i__29903 = G__29966;
continue;
} else {
var role = cljs.core.first.call(null,seq__29900__$1);
var temp__5457__auto___29967__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___29967__$2)){
var spec_29968 = temp__5457__auto___29967__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29968));
} else {
}


var G__29969 = cljs.core.next.call(null,seq__29900__$1);
var G__29970 = null;
var G__29971 = (0);
var G__29972 = (0);
seq__29900 = G__29969;
chunk__29901 = G__29970;
count__29902 = G__29971;
i__29903 = G__29972;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1544375483430
