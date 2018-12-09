// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__25126 = arguments.length;
switch (G__25126) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25127 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25127 = (function (f,blockable,meta25128){
this.f = f;
this.blockable = blockable;
this.meta25128 = meta25128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25129,meta25128__$1){
var self__ = this;
var _25129__$1 = this;
return (new cljs.core.async.t_cljs$core$async25127(self__.f,self__.blockable,meta25128__$1));
});

cljs.core.async.t_cljs$core$async25127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25129){
var self__ = this;
var _25129__$1 = this;
return self__.meta25128;
});

cljs.core.async.t_cljs$core$async25127.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25127.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25127.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25127.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25127.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25128","meta25128",-28303015,null)], null);
});

cljs.core.async.t_cljs$core$async25127.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25127";

cljs.core.async.t_cljs$core$async25127.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25127");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25127.
 */
cljs.core.async.__GT_t_cljs$core$async25127 = (function cljs$core$async$__GT_t_cljs$core$async25127(f__$1,blockable__$1,meta25128){
return (new cljs.core.async.t_cljs$core$async25127(f__$1,blockable__$1,meta25128));
});

}

return (new cljs.core.async.t_cljs$core$async25127(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__25133 = arguments.length;
switch (G__25133) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__25136 = arguments.length;
switch (G__25136) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__25139 = arguments.length;
switch (G__25139) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25141 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25141);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25141,ret){
return (function (){
return fn1.call(null,val_25141);
});})(val_25141,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__25143 = arguments.length;
switch (G__25143) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4518__auto___25145 = n;
var x_25146 = (0);
while(true){
if((x_25146 < n__4518__auto___25145)){
(a[x_25146] = (0));

var G__25147 = (x_25146 + (1));
x_25146 = G__25147;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__25148 = (i + (1));
i = G__25148;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25149 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25149 = (function (flag,meta25150){
this.flag = flag;
this.meta25150 = meta25150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25151,meta25150__$1){
var self__ = this;
var _25151__$1 = this;
return (new cljs.core.async.t_cljs$core$async25149(self__.flag,meta25150__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25149.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25151){
var self__ = this;
var _25151__$1 = this;
return self__.meta25150;
});})(flag))
;

cljs.core.async.t_cljs$core$async25149.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25149.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25149.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25149.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25149.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25150","meta25150",737881350,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25149.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25149.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25149";

cljs.core.async.t_cljs$core$async25149.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25149");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25149.
 */
cljs.core.async.__GT_t_cljs$core$async25149 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25149(flag__$1,meta25150){
return (new cljs.core.async.t_cljs$core$async25149(flag__$1,meta25150));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25149(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25152 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25152 = (function (flag,cb,meta25153){
this.flag = flag;
this.cb = cb;
this.meta25153 = meta25153;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25154,meta25153__$1){
var self__ = this;
var _25154__$1 = this;
return (new cljs.core.async.t_cljs$core$async25152(self__.flag,self__.cb,meta25153__$1));
});

cljs.core.async.t_cljs$core$async25152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25154){
var self__ = this;
var _25154__$1 = this;
return self__.meta25153;
});

cljs.core.async.t_cljs$core$async25152.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25152.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25152.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25152.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25152.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25153","meta25153",-1172674159,null)], null);
});

cljs.core.async.t_cljs$core$async25152.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25152.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25152";

cljs.core.async.t_cljs$core$async25152.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25152");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25152.
 */
cljs.core.async.__GT_t_cljs$core$async25152 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25152(flag__$1,cb__$1,meta25153){
return (new cljs.core.async.t_cljs$core$async25152(flag__$1,cb__$1,meta25153));
});

}

return (new cljs.core.async.t_cljs$core$async25152(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25155_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25155_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25156_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25156_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25157 = (i + (1));
i = G__25157;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__4036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___25163 = arguments.length;
var i__4642__auto___25164 = (0);
while(true){
if((i__4642__auto___25164 < len__4641__auto___25163)){
args__4647__auto__.push((arguments[i__4642__auto___25164]));

var G__25165 = (i__4642__auto___25164 + (1));
i__4642__auto___25164 = G__25165;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25160){
var map__25161 = p__25160;
var map__25161__$1 = (((((!((map__25161 == null))))?(((((map__25161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25161):map__25161);
var opts = map__25161__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25158){
var G__25159 = cljs.core.first.call(null,seq25158);
var seq25158__$1 = cljs.core.next.call(null,seq25158);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25159,seq25158__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__25167 = arguments.length;
switch (G__25167) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25066__auto___25213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25066__auto___25213){
return (function (){
var f__25067__auto__ = (function (){var switch__24971__auto__ = ((function (c__25066__auto___25213){
return (function (state_25191){
var state_val_25192 = (state_25191[(1)]);
if((state_val_25192 === (7))){
var inst_25187 = (state_25191[(2)]);
var state_25191__$1 = state_25191;
var statearr_25193_25214 = state_25191__$1;
(statearr_25193_25214[(2)] = inst_25187);

(statearr_25193_25214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25192 === (1))){
var state_25191__$1 = state_25191;
var statearr_25194_25215 = state_25191__$1;
(statearr_25194_25215[(2)] = null);

(statearr_25194_25215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25192 === (4))){
var inst_25170 = (state_25191[(7)]);
var inst_25170__$1 = (state_25191[(2)]);
var inst_25171 = (inst_25170__$1 == null);
var state_25191__$1 = (function (){var statearr_25195 = state_25191;
(statearr_25195[(7)] = inst_25170__$1);

return statearr_25195;
})();
if(cljs.core.truth_(inst_25171)){
var statearr_25196_25216 = state_25191__$1;
(statearr_25196_25216[(1)] = (5));

} else {
var statearr_25197_25217 = state_25191__$1;
(statearr_25197_25217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25192 === (13))){
var state_25191__$1 = state_25191;
var statearr_25198_25218 = state_25191__$1;
(statearr_25198_25218[(2)] = null);

(statearr_25198_25218[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25192 === (6))){
var inst_25170 = (state_25191[(7)]);
var state_25191__$1 = state_25191;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25191__$1,(11),to,inst_25170);
} else {
if((state_val_25192 === (3))){
var inst_25189 = (state_25191[(2)]);
var state_25191__$1 = state_25191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25191__$1,inst_25189);
} else {
if((state_val_25192 === (12))){
var state_25191__$1 = state_25191;
var statearr_25199_25219 = state_25191__$1;
(statearr_25199_25219[(2)] = null);

(statearr_25199_25219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25192 === (2))){
var state_25191__$1 = state_25191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25191__$1,(4),from);
} else {
if((state_val_25192 === (11))){
var inst_25180 = (state_25191[(2)]);
var state_25191__$1 = state_25191;
if(cljs.core.truth_(inst_25180)){
var statearr_25200_25220 = state_25191__$1;
(statearr_25200_25220[(1)] = (12));

} else {
var statearr_25201_25221 = state_25191__$1;
(statearr_25201_25221[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25192 === (9))){
var state_25191__$1 = state_25191;
var statearr_25202_25222 = state_25191__$1;
(statearr_25202_25222[(2)] = null);

(statearr_25202_25222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25192 === (5))){
var state_25191__$1 = state_25191;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25203_25223 = state_25191__$1;
(statearr_25203_25223[(1)] = (8));

} else {
var statearr_25204_25224 = state_25191__$1;
(statearr_25204_25224[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25192 === (14))){
var inst_25185 = (state_25191[(2)]);
var state_25191__$1 = state_25191;
var statearr_25205_25225 = state_25191__$1;
(statearr_25205_25225[(2)] = inst_25185);

(statearr_25205_25225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25192 === (10))){
var inst_25177 = (state_25191[(2)]);
var state_25191__$1 = state_25191;
var statearr_25206_25226 = state_25191__$1;
(statearr_25206_25226[(2)] = inst_25177);

(statearr_25206_25226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25192 === (8))){
var inst_25174 = cljs.core.async.close_BANG_.call(null,to);
var state_25191__$1 = state_25191;
var statearr_25207_25227 = state_25191__$1;
(statearr_25207_25227[(2)] = inst_25174);

(statearr_25207_25227[(1)] = (10));


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
});})(c__25066__auto___25213))
;
return ((function (switch__24971__auto__,c__25066__auto___25213){
return (function() {
var cljs$core$async$state_machine__24972__auto__ = null;
var cljs$core$async$state_machine__24972__auto____0 = (function (){
var statearr_25208 = [null,null,null,null,null,null,null,null];
(statearr_25208[(0)] = cljs$core$async$state_machine__24972__auto__);

(statearr_25208[(1)] = (1));

return statearr_25208;
});
var cljs$core$async$state_machine__24972__auto____1 = (function (state_25191){
while(true){
var ret_value__24973__auto__ = (function (){try{while(true){
var result__24974__auto__ = switch__24971__auto__.call(null,state_25191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24974__auto__;
}
break;
}
}catch (e25209){if((e25209 instanceof Object)){
var ex__24975__auto__ = e25209;
var statearr_25210_25228 = state_25191;
(statearr_25210_25228[(5)] = ex__24975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25229 = state_25191;
state_25191 = G__25229;
continue;
} else {
return ret_value__24973__auto__;
}
break;
}
});
cljs$core$async$state_machine__24972__auto__ = function(state_25191){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24972__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24972__auto____1.call(this,state_25191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24972__auto____0;
cljs$core$async$state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24972__auto____1;
return cljs$core$async$state_machine__24972__auto__;
})()
;})(switch__24971__auto__,c__25066__auto___25213))
})();
var state__25068__auto__ = (function (){var statearr_25211 = f__25067__auto__.call(null);
(statearr_25211[(6)] = c__25066__auto___25213);

return statearr_25211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25068__auto__);
});})(c__25066__auto___25213))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__25230){
var vec__25231 = p__25230;
var v = cljs.core.nth.call(null,vec__25231,(0),null);
var p = cljs.core.nth.call(null,vec__25231,(1),null);
var job = vec__25231;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25066__auto___25402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25066__auto___25402,res,vec__25231,v,p,job,jobs,results){
return (function (){
var f__25067__auto__ = (function (){var switch__24971__auto__ = ((function (c__25066__auto___25402,res,vec__25231,v,p,job,jobs,results){
return (function (state_25238){
var state_val_25239 = (state_25238[(1)]);
if((state_val_25239 === (1))){
var state_25238__$1 = state_25238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25238__$1,(2),res,v);
} else {
if((state_val_25239 === (2))){
var inst_25235 = (state_25238[(2)]);
var inst_25236 = cljs.core.async.close_BANG_.call(null,res);
var state_25238__$1 = (function (){var statearr_25240 = state_25238;
(statearr_25240[(7)] = inst_25235);

return statearr_25240;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25238__$1,inst_25236);
} else {
return null;
}
}
});})(c__25066__auto___25402,res,vec__25231,v,p,job,jobs,results))
;
return ((function (switch__24971__auto__,c__25066__auto___25402,res,vec__25231,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24972__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24972__auto____0 = (function (){
var statearr_25241 = [null,null,null,null,null,null,null,null];
(statearr_25241[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24972__auto__);

(statearr_25241[(1)] = (1));

return statearr_25241;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24972__auto____1 = (function (state_25238){
while(true){
var ret_value__24973__auto__ = (function (){try{while(true){
var result__24974__auto__ = switch__24971__auto__.call(null,state_25238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24974__auto__;
}
break;
}
}catch (e25242){if((e25242 instanceof Object)){
var ex__24975__auto__ = e25242;
var statearr_25243_25403 = state_25238;
(statearr_25243_25403[(5)] = ex__24975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25404 = state_25238;
state_25238 = G__25404;
continue;
} else {
return ret_value__24973__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24972__auto__ = function(state_25238){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24972__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24972__auto____1.call(this,state_25238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24972__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24972__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24972__auto__;
})()
;})(switch__24971__auto__,c__25066__auto___25402,res,vec__25231,v,p,job,jobs,results))
})();
var state__25068__auto__ = (function (){var statearr_25244 = f__25067__auto__.call(null);
(statearr_25244[(6)] = c__25066__auto___25402);

return statearr_25244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25068__auto__);
});})(c__25066__auto___25402,res,vec__25231,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25245){
var vec__25246 = p__25245;
var v = cljs.core.nth.call(null,vec__25246,(0),null);
var p = cljs.core.nth.call(null,vec__25246,(1),null);
var job = vec__25246;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___25405 = n;
var __25406 = (0);
while(true){
if((__25406 < n__4518__auto___25405)){
var G__25249_25407 = type;
var G__25249_25408__$1 = (((G__25249_25407 instanceof cljs.core.Keyword))?G__25249_25407.fqn:null);
switch (G__25249_25408__$1) {
case "compute":
var c__25066__auto___25410 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25406,c__25066__auto___25410,G__25249_25407,G__25249_25408__$1,n__4518__auto___25405,jobs,results,process,async){
return (function (){
var f__25067__auto__ = (function (){var switch__24971__auto__ = ((function (__25406,c__25066__auto___25410,G__25249_25407,G__25249_25408__$1,n__4518__auto___25405,jobs,results,process,async){
return (function (state_25262){
var state_val_25263 = (state_25262[(1)]);
if((state_val_25263 === (1))){
var state_25262__$1 = state_25262;
var statearr_25264_25411 = state_25262__$1;
(statearr_25264_25411[(2)] = null);

(statearr_25264_25411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (2))){
var state_25262__$1 = state_25262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25262__$1,(4),jobs);
} else {
if((state_val_25263 === (3))){
var inst_25260 = (state_25262[(2)]);
var state_25262__$1 = state_25262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25262__$1,inst_25260);
} else {
if((state_val_25263 === (4))){
var inst_25252 = (state_25262[(2)]);
var inst_25253 = process.call(null,inst_25252);
var state_25262__$1 = state_25262;
if(cljs.core.truth_(inst_25253)){
var statearr_25265_25412 = state_25262__$1;
(statearr_25265_25412[(1)] = (5));

} else {
var statearr_25266_25413 = state_25262__$1;
(statearr_25266_25413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (5))){
var state_25262__$1 = state_25262;
var statearr_25267_25414 = state_25262__$1;
(statearr_25267_25414[(2)] = null);

(statearr_25267_25414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (6))){
var state_25262__$1 = state_25262;
var statearr_25268_25415 = state_25262__$1;
(statearr_25268_25415[(2)] = null);

(statearr_25268_25415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (7))){
var inst_25258 = (state_25262[(2)]);
var state_25262__$1 = state_25262;
var statearr_25269_25416 = state_25262__$1;
(statearr_25269_25416[(2)] = inst_25258);

(statearr_25269_25416[(1)] = (3));


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
});})(__25406,c__25066__auto___25410,G__25249_25407,G__25249_25408__$1,n__4518__auto___25405,jobs,results,process,async))
;
return ((function (__25406,switch__24971__auto__,c__25066__auto___25410,G__25249_25407,G__25249_25408__$1,n__4518__auto___25405,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24972__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24972__auto____0 = (function (){
var statearr_25270 = [null,null,null,null,null,null,null];
(statearr_25270[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24972__auto__);

(statearr_25270[(1)] = (1));

return statearr_25270;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24972__auto____1 = (function (state_25262){
while(true){
var ret_value__24973__auto__ = (function (){try{while(true){
var result__24974__auto__ = switch__24971__auto__.call(null,state_25262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24974__auto__;
}
break;
}
}catch (e25271){if((e25271 instanceof Object)){
var ex__24975__auto__ = e25271;
var statearr_25272_25417 = state_25262;
(statearr_25272_25417[(5)] = ex__24975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25418 = state_25262;
state_25262 = G__25418;
continue;
} else {
return ret_value__24973__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24972__auto__ = function(state_25262){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24972__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24972__auto____1.call(this,state_25262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24972__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24972__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24972__auto__;
})()
;})(__25406,switch__24971__auto__,c__25066__auto___25410,G__25249_25407,G__25249_25408__$1,n__4518__auto___25405,jobs,results,process,async))
})();
var state__25068__auto__ = (function (){var statearr_25273 = f__25067__auto__.call(null);
(statearr_25273[(6)] = c__25066__auto___25410);

return statearr_25273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25068__auto__);
});})(__25406,c__25066__auto___25410,G__25249_25407,G__25249_25408__$1,n__4518__auto___25405,jobs,results,process,async))
);


break;
case "async":
var c__25066__auto___25419 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25406,c__25066__auto___25419,G__25249_25407,G__25249_25408__$1,n__4518__auto___25405,jobs,results,process,async){
return (function (){
var f__25067__auto__ = (function (){var switch__24971__auto__ = ((function (__25406,c__25066__auto___25419,G__25249_25407,G__25249_25408__$1,n__4518__auto___25405,jobs,results,process,async){
return (function (state_25286){
var state_val_25287 = (state_25286[(1)]);
if((state_val_25287 === (1))){
var state_25286__$1 = state_25286;
var statearr_25288_25420 = state_25286__$1;
(statearr_25288_25420[(2)] = null);

(statearr_25288_25420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25287 === (2))){
var state_25286__$1 = state_25286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25286__$1,(4),jobs);
} else {
if((state_val_25287 === (3))){
var inst_25284 = (state_25286[(2)]);
var state_25286__$1 = state_25286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25286__$1,inst_25284);
} else {
if((state_val_25287 === (4))){
var inst_25276 = (state_25286[(2)]);
var inst_25277 = async.call(null,inst_25276);
var state_25286__$1 = state_25286;
if(cljs.core.truth_(inst_25277)){
var statearr_25289_25421 = state_25286__$1;
(statearr_25289_25421[(1)] = (5));

} else {
var statearr_25290_25422 = state_25286__$1;
(statearr_25290_25422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25287 === (5))){
var state_25286__$1 = state_25286;
var statearr_25291_25423 = state_25286__$1;
(statearr_25291_25423[(2)] = null);

(statearr_25291_25423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25287 === (6))){
var state_25286__$1 = state_25286;
var statearr_25292_25424 = state_25286__$1;
(statearr_25292_25424[(2)] = null);

(statearr_25292_25424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25287 === (7))){
var inst_25282 = (state_25286[(2)]);
var state_25286__$1 = state_25286;
var statearr_25293_25425 = state_25286__$1;
(statearr_25293_25425[(2)] = inst_25282);

(statearr_25293_25425[(1)] = (3));


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
});})(__25406,c__25066__auto___25419,G__25249_25407,G__25249_25408__$1,n__4518__auto___25405,jobs,results,process,async))
;
return ((function (__25406,switch__24971__auto__,c__25066__auto___25419,G__25249_25407,G__25249_25408__$1,n__4518__auto___25405,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24972__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24972__auto____0 = (function (){
var statearr_25294 = [null,null,null,null,null,null,null];
(statearr_25294[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24972__auto__);

(statearr_25294[(1)] = (1));

return statearr_25294;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24972__auto____1 = (function (state_25286){
while(true){
var ret_value__24973__auto__ = (function (){try{while(true){
var result__24974__auto__ = switch__24971__auto__.call(null,state_25286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24974__auto__;
}
break;
}
}catch (e25295){if((e25295 instanceof Object)){
var ex__24975__auto__ = e25295;
var statearr_25296_25426 = state_25286;
(statearr_25296_25426[(5)] = ex__24975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25427 = state_25286;
state_25286 = G__25427;
continue;
} else {
return ret_value__24973__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24972__auto__ = function(state_25286){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24972__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24972__auto____1.call(this,state_25286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24972__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24972__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24972__auto__;
})()
;})(__25406,switch__24971__auto__,c__25066__auto___25419,G__25249_25407,G__25249_25408__$1,n__4518__auto___25405,jobs,results,process,async))
})();
var state__25068__auto__ = (function (){var statearr_25297 = f__25067__auto__.call(null);
(statearr_25297[(6)] = c__25066__auto___25419);

return statearr_25297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25068__auto__);
});})(__25406,c__25066__auto___25419,G__25249_25407,G__25249_25408__$1,n__4518__auto___25405,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25249_25408__$1)].join('')));

}

var G__25428 = (__25406 + (1));
__25406 = G__25428;
continue;
} else {
}
break;
}

var c__25066__auto___25429 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25066__auto___25429,jobs,results,process,async){
return (function (){
var f__25067__auto__ = (function (){var switch__24971__auto__ = ((function (c__25066__auto___25429,jobs,results,process,async){
return (function (state_25319){
var state_val_25320 = (state_25319[(1)]);
if((state_val_25320 === (1))){
var state_25319__$1 = state_25319;
var statearr_25321_25430 = state_25319__$1;
(statearr_25321_25430[(2)] = null);

(statearr_25321_25430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25320 === (2))){
var state_25319__$1 = state_25319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25319__$1,(4),from);
} else {
if((state_val_25320 === (3))){
var inst_25317 = (state_25319[(2)]);
var state_25319__$1 = state_25319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25319__$1,inst_25317);
} else {
if((state_val_25320 === (4))){
var inst_25300 = (state_25319[(7)]);
var inst_25300__$1 = (state_25319[(2)]);
var inst_25301 = (inst_25300__$1 == null);
var state_25319__$1 = (function (){var statearr_25322 = state_25319;
(statearr_25322[(7)] = inst_25300__$1);

return statearr_25322;
})();
if(cljs.core.truth_(inst_25301)){
var statearr_25323_25431 = state_25319__$1;
(statearr_25323_25431[(1)] = (5));

} else {
var statearr_25324_25432 = state_25319__$1;
(statearr_25324_25432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25320 === (5))){
var inst_25303 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25319__$1 = state_25319;
var statearr_25325_25433 = state_25319__$1;
(statearr_25325_25433[(2)] = inst_25303);

(statearr_25325_25433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25320 === (6))){
var inst_25300 = (state_25319[(7)]);
var inst_25305 = (state_25319[(8)]);
var inst_25305__$1 = cljs.core.async.chan.call(null,(1));
var inst_25306 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25307 = [inst_25300,inst_25305__$1];
var inst_25308 = (new cljs.core.PersistentVector(null,2,(5),inst_25306,inst_25307,null));
var state_25319__$1 = (function (){var statearr_25326 = state_25319;
(statearr_25326[(8)] = inst_25305__$1);

return statearr_25326;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25319__$1,(8),jobs,inst_25308);
} else {
if((state_val_25320 === (7))){
var inst_25315 = (state_25319[(2)]);
var state_25319__$1 = state_25319;
var statearr_25327_25434 = state_25319__$1;
(statearr_25327_25434[(2)] = inst_25315);

(statearr_25327_25434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25320 === (8))){
var inst_25305 = (state_25319[(8)]);
var inst_25310 = (state_25319[(2)]);
var state_25319__$1 = (function (){var statearr_25328 = state_25319;
(statearr_25328[(9)] = inst_25310);

return statearr_25328;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25319__$1,(9),results,inst_25305);
} else {
if((state_val_25320 === (9))){
var inst_25312 = (state_25319[(2)]);
var state_25319__$1 = (function (){var statearr_25329 = state_25319;
(statearr_25329[(10)] = inst_25312);

return statearr_25329;
})();
var statearr_25330_25435 = state_25319__$1;
(statearr_25330_25435[(2)] = null);

(statearr_25330_25435[(1)] = (2));


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
});})(c__25066__auto___25429,jobs,results,process,async))
;
return ((function (switch__24971__auto__,c__25066__auto___25429,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24972__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24972__auto____0 = (function (){
var statearr_25331 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25331[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24972__auto__);

(statearr_25331[(1)] = (1));

return statearr_25331;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24972__auto____1 = (function (state_25319){
while(true){
var ret_value__24973__auto__ = (function (){try{while(true){
var result__24974__auto__ = switch__24971__auto__.call(null,state_25319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24974__auto__;
}
break;
}
}catch (e25332){if((e25332 instanceof Object)){
var ex__24975__auto__ = e25332;
var statearr_25333_25436 = state_25319;
(statearr_25333_25436[(5)] = ex__24975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25437 = state_25319;
state_25319 = G__25437;
continue;
} else {
return ret_value__24973__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24972__auto__ = function(state_25319){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24972__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24972__auto____1.call(this,state_25319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24972__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24972__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24972__auto__;
})()
;})(switch__24971__auto__,c__25066__auto___25429,jobs,results,process,async))
})();
var state__25068__auto__ = (function (){var statearr_25334 = f__25067__auto__.call(null);
(statearr_25334[(6)] = c__25066__auto___25429);

return statearr_25334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25068__auto__);
});})(c__25066__auto___25429,jobs,results,process,async))
);


var c__25066__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25066__auto__,jobs,results,process,async){
return (function (){
var f__25067__auto__ = (function (){var switch__24971__auto__ = ((function (c__25066__auto__,jobs,results,process,async){
return (function (state_25372){
var state_val_25373 = (state_25372[(1)]);
if((state_val_25373 === (7))){
var inst_25368 = (state_25372[(2)]);
var state_25372__$1 = state_25372;
var statearr_25374_25438 = state_25372__$1;
(statearr_25374_25438[(2)] = inst_25368);

(statearr_25374_25438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (20))){
var state_25372__$1 = state_25372;
var statearr_25375_25439 = state_25372__$1;
(statearr_25375_25439[(2)] = null);

(statearr_25375_25439[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (1))){
var state_25372__$1 = state_25372;
var statearr_25376_25440 = state_25372__$1;
(statearr_25376_25440[(2)] = null);

(statearr_25376_25440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (4))){
var inst_25337 = (state_25372[(7)]);
var inst_25337__$1 = (state_25372[(2)]);
var inst_25338 = (inst_25337__$1 == null);
var state_25372__$1 = (function (){var statearr_25377 = state_25372;
(statearr_25377[(7)] = inst_25337__$1);

return statearr_25377;
})();
if(cljs.core.truth_(inst_25338)){
var statearr_25378_25441 = state_25372__$1;
(statearr_25378_25441[(1)] = (5));

} else {
var statearr_25379_25442 = state_25372__$1;
(statearr_25379_25442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (15))){
var inst_25350 = (state_25372[(8)]);
var state_25372__$1 = state_25372;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25372__$1,(18),to,inst_25350);
} else {
if((state_val_25373 === (21))){
var inst_25363 = (state_25372[(2)]);
var state_25372__$1 = state_25372;
var statearr_25380_25443 = state_25372__$1;
(statearr_25380_25443[(2)] = inst_25363);

(statearr_25380_25443[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (13))){
var inst_25365 = (state_25372[(2)]);
var state_25372__$1 = (function (){var statearr_25381 = state_25372;
(statearr_25381[(9)] = inst_25365);

return statearr_25381;
})();
var statearr_25382_25444 = state_25372__$1;
(statearr_25382_25444[(2)] = null);

(statearr_25382_25444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (6))){
var inst_25337 = (state_25372[(7)]);
var state_25372__$1 = state_25372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25372__$1,(11),inst_25337);
} else {
if((state_val_25373 === (17))){
var inst_25358 = (state_25372[(2)]);
var state_25372__$1 = state_25372;
if(cljs.core.truth_(inst_25358)){
var statearr_25383_25445 = state_25372__$1;
(statearr_25383_25445[(1)] = (19));

} else {
var statearr_25384_25446 = state_25372__$1;
(statearr_25384_25446[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (3))){
var inst_25370 = (state_25372[(2)]);
var state_25372__$1 = state_25372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25372__$1,inst_25370);
} else {
if((state_val_25373 === (12))){
var inst_25347 = (state_25372[(10)]);
var state_25372__$1 = state_25372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25372__$1,(14),inst_25347);
} else {
if((state_val_25373 === (2))){
var state_25372__$1 = state_25372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25372__$1,(4),results);
} else {
if((state_val_25373 === (19))){
var state_25372__$1 = state_25372;
var statearr_25385_25447 = state_25372__$1;
(statearr_25385_25447[(2)] = null);

(statearr_25385_25447[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (11))){
var inst_25347 = (state_25372[(2)]);
var state_25372__$1 = (function (){var statearr_25386 = state_25372;
(statearr_25386[(10)] = inst_25347);

return statearr_25386;
})();
var statearr_25387_25448 = state_25372__$1;
(statearr_25387_25448[(2)] = null);

(statearr_25387_25448[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (9))){
var state_25372__$1 = state_25372;
var statearr_25388_25449 = state_25372__$1;
(statearr_25388_25449[(2)] = null);

(statearr_25388_25449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (5))){
var state_25372__$1 = state_25372;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25389_25450 = state_25372__$1;
(statearr_25389_25450[(1)] = (8));

} else {
var statearr_25390_25451 = state_25372__$1;
(statearr_25390_25451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (14))){
var inst_25350 = (state_25372[(8)]);
var inst_25352 = (state_25372[(11)]);
var inst_25350__$1 = (state_25372[(2)]);
var inst_25351 = (inst_25350__$1 == null);
var inst_25352__$1 = cljs.core.not.call(null,inst_25351);
var state_25372__$1 = (function (){var statearr_25391 = state_25372;
(statearr_25391[(8)] = inst_25350__$1);

(statearr_25391[(11)] = inst_25352__$1);

return statearr_25391;
})();
if(inst_25352__$1){
var statearr_25392_25452 = state_25372__$1;
(statearr_25392_25452[(1)] = (15));

} else {
var statearr_25393_25453 = state_25372__$1;
(statearr_25393_25453[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (16))){
var inst_25352 = (state_25372[(11)]);
var state_25372__$1 = state_25372;
var statearr_25394_25454 = state_25372__$1;
(statearr_25394_25454[(2)] = inst_25352);

(statearr_25394_25454[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (10))){
var inst_25344 = (state_25372[(2)]);
var state_25372__$1 = state_25372;
var statearr_25395_25455 = state_25372__$1;
(statearr_25395_25455[(2)] = inst_25344);

(statearr_25395_25455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (18))){
var inst_25355 = (state_25372[(2)]);
var state_25372__$1 = state_25372;
var statearr_25396_25456 = state_25372__$1;
(statearr_25396_25456[(2)] = inst_25355);

(statearr_25396_25456[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (8))){
var inst_25341 = cljs.core.async.close_BANG_.call(null,to);
var state_25372__$1 = state_25372;
var statearr_25397_25457 = state_25372__$1;
(statearr_25397_25457[(2)] = inst_25341);

(statearr_25397_25457[(1)] = (10));


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
});})(c__25066__auto__,jobs,results,process,async))
;
return ((function (switch__24971__auto__,c__25066__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24972__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24972__auto____0 = (function (){
var statearr_25398 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25398[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24972__auto__);

(statearr_25398[(1)] = (1));

return statearr_25398;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24972__auto____1 = (function (state_25372){
while(true){
var ret_value__24973__auto__ = (function (){try{while(true){
var result__24974__auto__ = switch__24971__auto__.call(null,state_25372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24974__auto__;
}
break;
}
}catch (e25399){if((e25399 instanceof Object)){
var ex__24975__auto__ = e25399;
var statearr_25400_25458 = state_25372;
(statearr_25400_25458[(5)] = ex__24975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25459 = state_25372;
state_25372 = G__25459;
continue;
} else {
return ret_value__24973__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24972__auto__ = function(state_25372){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24972__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24972__auto____1.call(this,state_25372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24972__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24972__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24972__auto__;
})()
;})(switch__24971__auto__,c__25066__auto__,jobs,results,process,async))
})();
var state__25068__auto__ = (function (){var statearr_25401 = f__25067__auto__.call(null);
(statearr_25401[(6)] = c__25066__auto__);

return statearr_25401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25068__auto__);
});})(c__25066__auto__,jobs,results,process,async))
);

return c__25066__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__25461 = arguments.length;
switch (G__25461) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__25464 = arguments.length;
switch (G__25464) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__25467 = arguments.length;
switch (G__25467) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25066__auto___25516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25066__auto___25516,tc,fc){
return (function (){
var f__25067__auto__ = (function (){var switch__24971__auto__ = ((function (c__25066__auto___25516,tc,fc){
return (function (state_25493){
var state_val_25494 = (state_25493[(1)]);
if((state_val_25494 === (7))){
var inst_25489 = (state_25493[(2)]);
var state_25493__$1 = state_25493;
var statearr_25495_25517 = state_25493__$1;
(statearr_25495_25517[(2)] = inst_25489);

(statearr_25495_25517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25494 === (1))){
var state_25493__$1 = state_25493;
var statearr_25496_25518 = state_25493__$1;
(statearr_25496_25518[(2)] = null);

(statearr_25496_25518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25494 === (4))){
var inst_25470 = (state_25493[(7)]);
var inst_25470__$1 = (state_25493[(2)]);
var inst_25471 = (inst_25470__$1 == null);
var state_25493__$1 = (function (){var statearr_25497 = state_25493;
(statearr_25497[(7)] = inst_25470__$1);

return statearr_25497;
})();
if(cljs.core.truth_(inst_25471)){
var statearr_25498_25519 = state_25493__$1;
(statearr_25498_25519[(1)] = (5));

} else {
var statearr_25499_25520 = state_25493__$1;
(statearr_25499_25520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25494 === (13))){
var state_25493__$1 = state_25493;
var statearr_25500_25521 = state_25493__$1;
(statearr_25500_25521[(2)] = null);

(statearr_25500_25521[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25494 === (6))){
var inst_25470 = (state_25493[(7)]);
var inst_25476 = p.call(null,inst_25470);
var state_25493__$1 = state_25493;
if(cljs.core.truth_(inst_25476)){
var statearr_25501_25522 = state_25493__$1;
(statearr_25501_25522[(1)] = (9));

} else {
var statearr_25502_25523 = state_25493__$1;
(statearr_25502_25523[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25494 === (3))){
var inst_25491 = (state_25493[(2)]);
var state_25493__$1 = state_25493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25493__$1,inst_25491);
} else {
if((state_val_25494 === (12))){
var state_25493__$1 = state_25493;
var statearr_25503_25524 = state_25493__$1;
(statearr_25503_25524[(2)] = null);

(statearr_25503_25524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25494 === (2))){
var state_25493__$1 = state_25493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25493__$1,(4),ch);
} else {
if((state_val_25494 === (11))){
var inst_25470 = (state_25493[(7)]);
var inst_25480 = (state_25493[(2)]);
var state_25493__$1 = state_25493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25493__$1,(8),inst_25480,inst_25470);
} else {
if((state_val_25494 === (9))){
var state_25493__$1 = state_25493;
var statearr_25504_25525 = state_25493__$1;
(statearr_25504_25525[(2)] = tc);

(statearr_25504_25525[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25494 === (5))){
var inst_25473 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25474 = cljs.core.async.close_BANG_.call(null,fc);
var state_25493__$1 = (function (){var statearr_25505 = state_25493;
(statearr_25505[(8)] = inst_25473);

return statearr_25505;
})();
var statearr_25506_25526 = state_25493__$1;
(statearr_25506_25526[(2)] = inst_25474);

(statearr_25506_25526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25494 === (14))){
var inst_25487 = (state_25493[(2)]);
var state_25493__$1 = state_25493;
var statearr_25507_25527 = state_25493__$1;
(statearr_25507_25527[(2)] = inst_25487);

(statearr_25507_25527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25494 === (10))){
var state_25493__$1 = state_25493;
var statearr_25508_25528 = state_25493__$1;
(statearr_25508_25528[(2)] = fc);

(statearr_25508_25528[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25494 === (8))){
var inst_25482 = (state_25493[(2)]);
var state_25493__$1 = state_25493;
if(cljs.core.truth_(inst_25482)){
var statearr_25509_25529 = state_25493__$1;
(statearr_25509_25529[(1)] = (12));

} else {
var statearr_25510_25530 = state_25493__$1;
(statearr_25510_25530[(1)] = (13));

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
});})(c__25066__auto___25516,tc,fc))
;
return ((function (switch__24971__auto__,c__25066__auto___25516,tc,fc){
return (function() {
var cljs$core$async$state_machine__24972__auto__ = null;
var cljs$core$async$state_machine__24972__auto____0 = (function (){
var statearr_25511 = [null,null,null,null,null,null,null,null,null];
(statearr_25511[(0)] = cljs$core$async$state_machine__24972__auto__);

(statearr_25511[(1)] = (1));

return statearr_25511;
});
var cljs$core$async$state_machine__24972__auto____1 = (function (state_25493){
while(true){
var ret_value__24973__auto__ = (function (){try{while(true){
var result__24974__auto__ = switch__24971__auto__.call(null,state_25493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24974__auto__;
}
break;
}
}catch (e25512){if((e25512 instanceof Object)){
var ex__24975__auto__ = e25512;
var statearr_25513_25531 = state_25493;
(statearr_25513_25531[(5)] = ex__24975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25532 = state_25493;
state_25493 = G__25532;
continue;
} else {
return ret_value__24973__auto__;
}
break;
}
});
cljs$core$async$state_machine__24972__auto__ = function(state_25493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24972__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24972__auto____1.call(this,state_25493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24972__auto____0;
cljs$core$async$state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24972__auto____1;
return cljs$core$async$state_machine__24972__auto__;
})()
;})(switch__24971__auto__,c__25066__auto___25516,tc,fc))
})();
var state__25068__auto__ = (function (){var statearr_25514 = f__25067__auto__.call(null);
(statearr_25514[(6)] = c__25066__auto___25516);

return statearr_25514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25068__auto__);
});})(c__25066__auto___25516,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__25066__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25066__auto__){
return (function (){
var f__25067__auto__ = (function (){var switch__24971__auto__ = ((function (c__25066__auto__){
return (function (state_25553){
var state_val_25554 = (state_25553[(1)]);
if((state_val_25554 === (7))){
var inst_25549 = (state_25553[(2)]);
var state_25553__$1 = state_25553;
var statearr_25555_25573 = state_25553__$1;
(statearr_25555_25573[(2)] = inst_25549);

(statearr_25555_25573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25554 === (1))){
var inst_25533 = init;
var state_25553__$1 = (function (){var statearr_25556 = state_25553;
(statearr_25556[(7)] = inst_25533);

return statearr_25556;
})();
var statearr_25557_25574 = state_25553__$1;
(statearr_25557_25574[(2)] = null);

(statearr_25557_25574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25554 === (4))){
var inst_25536 = (state_25553[(8)]);
var inst_25536__$1 = (state_25553[(2)]);
var inst_25537 = (inst_25536__$1 == null);
var state_25553__$1 = (function (){var statearr_25558 = state_25553;
(statearr_25558[(8)] = inst_25536__$1);

return statearr_25558;
})();
if(cljs.core.truth_(inst_25537)){
var statearr_25559_25575 = state_25553__$1;
(statearr_25559_25575[(1)] = (5));

} else {
var statearr_25560_25576 = state_25553__$1;
(statearr_25560_25576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25554 === (6))){
var inst_25533 = (state_25553[(7)]);
var inst_25540 = (state_25553[(9)]);
var inst_25536 = (state_25553[(8)]);
var inst_25540__$1 = f.call(null,inst_25533,inst_25536);
var inst_25541 = cljs.core.reduced_QMARK_.call(null,inst_25540__$1);
var state_25553__$1 = (function (){var statearr_25561 = state_25553;
(statearr_25561[(9)] = inst_25540__$1);

return statearr_25561;
})();
if(inst_25541){
var statearr_25562_25577 = state_25553__$1;
(statearr_25562_25577[(1)] = (8));

} else {
var statearr_25563_25578 = state_25553__$1;
(statearr_25563_25578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25554 === (3))){
var inst_25551 = (state_25553[(2)]);
var state_25553__$1 = state_25553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25553__$1,inst_25551);
} else {
if((state_val_25554 === (2))){
var state_25553__$1 = state_25553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25553__$1,(4),ch);
} else {
if((state_val_25554 === (9))){
var inst_25540 = (state_25553[(9)]);
var inst_25533 = inst_25540;
var state_25553__$1 = (function (){var statearr_25564 = state_25553;
(statearr_25564[(7)] = inst_25533);

return statearr_25564;
})();
var statearr_25565_25579 = state_25553__$1;
(statearr_25565_25579[(2)] = null);

(statearr_25565_25579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25554 === (5))){
var inst_25533 = (state_25553[(7)]);
var state_25553__$1 = state_25553;
var statearr_25566_25580 = state_25553__$1;
(statearr_25566_25580[(2)] = inst_25533);

(statearr_25566_25580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25554 === (10))){
var inst_25547 = (state_25553[(2)]);
var state_25553__$1 = state_25553;
var statearr_25567_25581 = state_25553__$1;
(statearr_25567_25581[(2)] = inst_25547);

(statearr_25567_25581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25554 === (8))){
var inst_25540 = (state_25553[(9)]);
var inst_25543 = cljs.core.deref.call(null,inst_25540);
var state_25553__$1 = state_25553;
var statearr_25568_25582 = state_25553__$1;
(statearr_25568_25582[(2)] = inst_25543);

(statearr_25568_25582[(1)] = (10));


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
});})(c__25066__auto__))
;
return ((function (switch__24971__auto__,c__25066__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24972__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24972__auto____0 = (function (){
var statearr_25569 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25569[(0)] = cljs$core$async$reduce_$_state_machine__24972__auto__);

(statearr_25569[(1)] = (1));

return statearr_25569;
});
var cljs$core$async$reduce_$_state_machine__24972__auto____1 = (function (state_25553){
while(true){
var ret_value__24973__auto__ = (function (){try{while(true){
var result__24974__auto__ = switch__24971__auto__.call(null,state_25553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24974__auto__;
}
break;
}
}catch (e25570){if((e25570 instanceof Object)){
var ex__24975__auto__ = e25570;
var statearr_25571_25583 = state_25553;
(statearr_25571_25583[(5)] = ex__24975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25584 = state_25553;
state_25553 = G__25584;
continue;
} else {
return ret_value__24973__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24972__auto__ = function(state_25553){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24972__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24972__auto____1.call(this,state_25553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24972__auto____0;
cljs$core$async$reduce_$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24972__auto____1;
return cljs$core$async$reduce_$_state_machine__24972__auto__;
})()
;})(switch__24971__auto__,c__25066__auto__))
})();
var state__25068__auto__ = (function (){var statearr_25572 = f__25067__auto__.call(null);
(statearr_25572[(6)] = c__25066__auto__);

return statearr_25572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25068__auto__);
});})(c__25066__auto__))
);

return c__25066__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__25066__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25066__auto__,f__$1){
return (function (){
var f__25067__auto__ = (function (){var switch__24971__auto__ = ((function (c__25066__auto__,f__$1){
return (function (state_25590){
var state_val_25591 = (state_25590[(1)]);
if((state_val_25591 === (1))){
var inst_25585 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_25590__$1 = state_25590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25590__$1,(2),inst_25585);
} else {
if((state_val_25591 === (2))){
var inst_25587 = (state_25590[(2)]);
var inst_25588 = f__$1.call(null,inst_25587);
var state_25590__$1 = state_25590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25590__$1,inst_25588);
} else {
return null;
}
}
});})(c__25066__auto__,f__$1))
;
return ((function (switch__24971__auto__,c__25066__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24972__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24972__auto____0 = (function (){
var statearr_25592 = [null,null,null,null,null,null,null];
(statearr_25592[(0)] = cljs$core$async$transduce_$_state_machine__24972__auto__);

(statearr_25592[(1)] = (1));

return statearr_25592;
});
var cljs$core$async$transduce_$_state_machine__24972__auto____1 = (function (state_25590){
while(true){
var ret_value__24973__auto__ = (function (){try{while(true){
var result__24974__auto__ = switch__24971__auto__.call(null,state_25590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24974__auto__;
}
break;
}
}catch (e25593){if((e25593 instanceof Object)){
var ex__24975__auto__ = e25593;
var statearr_25594_25596 = state_25590;
(statearr_25594_25596[(5)] = ex__24975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25597 = state_25590;
state_25590 = G__25597;
continue;
} else {
return ret_value__24973__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24972__auto__ = function(state_25590){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24972__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24972__auto____1.call(this,state_25590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24972__auto____0;
cljs$core$async$transduce_$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24972__auto____1;
return cljs$core$async$transduce_$_state_machine__24972__auto__;
})()
;})(switch__24971__auto__,c__25066__auto__,f__$1))
})();
var state__25068__auto__ = (function (){var statearr_25595 = f__25067__auto__.call(null);
(statearr_25595[(6)] = c__25066__auto__);

return statearr_25595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25068__auto__);
});})(c__25066__auto__,f__$1))
);

return c__25066__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__25599 = arguments.length;
switch (G__25599) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25066__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25066__auto__){
return (function (){
var f__25067__auto__ = (function (){var switch__24971__auto__ = ((function (c__25066__auto__){
return (function (state_25624){
var state_val_25625 = (state_25624[(1)]);
if((state_val_25625 === (7))){
var inst_25606 = (state_25624[(2)]);
var state_25624__$1 = state_25624;
var statearr_25626_25647 = state_25624__$1;
(statearr_25626_25647[(2)] = inst_25606);

(statearr_25626_25647[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25625 === (1))){
var inst_25600 = cljs.core.seq.call(null,coll);
var inst_25601 = inst_25600;
var state_25624__$1 = (function (){var statearr_25627 = state_25624;
(statearr_25627[(7)] = inst_25601);

return statearr_25627;
})();
var statearr_25628_25648 = state_25624__$1;
(statearr_25628_25648[(2)] = null);

(statearr_25628_25648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25625 === (4))){
var inst_25601 = (state_25624[(7)]);
var inst_25604 = cljs.core.first.call(null,inst_25601);
var state_25624__$1 = state_25624;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25624__$1,(7),ch,inst_25604);
} else {
if((state_val_25625 === (13))){
var inst_25618 = (state_25624[(2)]);
var state_25624__$1 = state_25624;
var statearr_25629_25649 = state_25624__$1;
(statearr_25629_25649[(2)] = inst_25618);

(statearr_25629_25649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25625 === (6))){
var inst_25609 = (state_25624[(2)]);
var state_25624__$1 = state_25624;
if(cljs.core.truth_(inst_25609)){
var statearr_25630_25650 = state_25624__$1;
(statearr_25630_25650[(1)] = (8));

} else {
var statearr_25631_25651 = state_25624__$1;
(statearr_25631_25651[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25625 === (3))){
var inst_25622 = (state_25624[(2)]);
var state_25624__$1 = state_25624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25624__$1,inst_25622);
} else {
if((state_val_25625 === (12))){
var state_25624__$1 = state_25624;
var statearr_25632_25652 = state_25624__$1;
(statearr_25632_25652[(2)] = null);

(statearr_25632_25652[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25625 === (2))){
var inst_25601 = (state_25624[(7)]);
var state_25624__$1 = state_25624;
if(cljs.core.truth_(inst_25601)){
var statearr_25633_25653 = state_25624__$1;
(statearr_25633_25653[(1)] = (4));

} else {
var statearr_25634_25654 = state_25624__$1;
(statearr_25634_25654[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25625 === (11))){
var inst_25615 = cljs.core.async.close_BANG_.call(null,ch);
var state_25624__$1 = state_25624;
var statearr_25635_25655 = state_25624__$1;
(statearr_25635_25655[(2)] = inst_25615);

(statearr_25635_25655[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25625 === (9))){
var state_25624__$1 = state_25624;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25636_25656 = state_25624__$1;
(statearr_25636_25656[(1)] = (11));

} else {
var statearr_25637_25657 = state_25624__$1;
(statearr_25637_25657[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25625 === (5))){
var inst_25601 = (state_25624[(7)]);
var state_25624__$1 = state_25624;
var statearr_25638_25658 = state_25624__$1;
(statearr_25638_25658[(2)] = inst_25601);

(statearr_25638_25658[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25625 === (10))){
var inst_25620 = (state_25624[(2)]);
var state_25624__$1 = state_25624;
var statearr_25639_25659 = state_25624__$1;
(statearr_25639_25659[(2)] = inst_25620);

(statearr_25639_25659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25625 === (8))){
var inst_25601 = (state_25624[(7)]);
var inst_25611 = cljs.core.next.call(null,inst_25601);
var inst_25601__$1 = inst_25611;
var state_25624__$1 = (function (){var statearr_25640 = state_25624;
(statearr_25640[(7)] = inst_25601__$1);

return statearr_25640;
})();
var statearr_25641_25660 = state_25624__$1;
(statearr_25641_25660[(2)] = null);

(statearr_25641_25660[(1)] = (2));


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
});})(c__25066__auto__))
;
return ((function (switch__24971__auto__,c__25066__auto__){
return (function() {
var cljs$core$async$state_machine__24972__auto__ = null;
var cljs$core$async$state_machine__24972__auto____0 = (function (){
var statearr_25642 = [null,null,null,null,null,null,null,null];
(statearr_25642[(0)] = cljs$core$async$state_machine__24972__auto__);

(statearr_25642[(1)] = (1));

return statearr_25642;
});
var cljs$core$async$state_machine__24972__auto____1 = (function (state_25624){
while(true){
var ret_value__24973__auto__ = (function (){try{while(true){
var result__24974__auto__ = switch__24971__auto__.call(null,state_25624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24974__auto__;
}
break;
}
}catch (e25643){if((e25643 instanceof Object)){
var ex__24975__auto__ = e25643;
var statearr_25644_25661 = state_25624;
(statearr_25644_25661[(5)] = ex__24975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25662 = state_25624;
state_25624 = G__25662;
continue;
} else {
return ret_value__24973__auto__;
}
break;
}
});
cljs$core$async$state_machine__24972__auto__ = function(state_25624){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24972__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24972__auto____1.call(this,state_25624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24972__auto____0;
cljs$core$async$state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24972__auto____1;
return cljs$core$async$state_machine__24972__auto__;
})()
;})(switch__24971__auto__,c__25066__auto__))
})();
var state__25068__auto__ = (function (){var statearr_25645 = f__25067__auto__.call(null);
(statearr_25645[(6)] = c__25066__auto__);

return statearr_25645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25068__auto__);
});})(c__25066__auto__))
);

return c__25066__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_);
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25663 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25663 = (function (ch,cs,meta25664){
this.ch = ch;
this.cs = cs;
this.meta25664 = meta25664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25665,meta25664__$1){
var self__ = this;
var _25665__$1 = this;
return (new cljs.core.async.t_cljs$core$async25663(self__.ch,self__.cs,meta25664__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25663.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25665){
var self__ = this;
var _25665__$1 = this;
return self__.meta25664;
});})(cs))
;

cljs.core.async.t_cljs$core$async25663.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25663.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25663.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25663.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25663.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25663.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25663.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25664","meta25664",-415122536,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25663.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25663.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25663";

cljs.core.async.t_cljs$core$async25663.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25663");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25663.
 */
cljs.core.async.__GT_t_cljs$core$async25663 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25663(ch__$1,cs__$1,meta25664){
return (new cljs.core.async.t_cljs$core$async25663(ch__$1,cs__$1,meta25664));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25663(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__25066__auto___25885 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25066__auto___25885,cs,m,dchan,dctr,done){
return (function (){
var f__25067__auto__ = (function (){var switch__24971__auto__ = ((function (c__25066__auto___25885,cs,m,dchan,dctr,done){
return (function (state_25800){
var state_val_25801 = (state_25800[(1)]);
if((state_val_25801 === (7))){
var inst_25796 = (state_25800[(2)]);
var state_25800__$1 = state_25800;
var statearr_25802_25886 = state_25800__$1;
(statearr_25802_25886[(2)] = inst_25796);

(statearr_25802_25886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (20))){
var inst_25699 = (state_25800[(7)]);
var inst_25711 = cljs.core.first.call(null,inst_25699);
var inst_25712 = cljs.core.nth.call(null,inst_25711,(0),null);
var inst_25713 = cljs.core.nth.call(null,inst_25711,(1),null);
var state_25800__$1 = (function (){var statearr_25803 = state_25800;
(statearr_25803[(8)] = inst_25712);

return statearr_25803;
})();
if(cljs.core.truth_(inst_25713)){
var statearr_25804_25887 = state_25800__$1;
(statearr_25804_25887[(1)] = (22));

} else {
var statearr_25805_25888 = state_25800__$1;
(statearr_25805_25888[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (27))){
var inst_25743 = (state_25800[(9)]);
var inst_25748 = (state_25800[(10)]);
var inst_25668 = (state_25800[(11)]);
var inst_25741 = (state_25800[(12)]);
var inst_25748__$1 = cljs.core._nth.call(null,inst_25741,inst_25743);
var inst_25749 = cljs.core.async.put_BANG_.call(null,inst_25748__$1,inst_25668,done);
var state_25800__$1 = (function (){var statearr_25806 = state_25800;
(statearr_25806[(10)] = inst_25748__$1);

return statearr_25806;
})();
if(cljs.core.truth_(inst_25749)){
var statearr_25807_25889 = state_25800__$1;
(statearr_25807_25889[(1)] = (30));

} else {
var statearr_25808_25890 = state_25800__$1;
(statearr_25808_25890[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (1))){
var state_25800__$1 = state_25800;
var statearr_25809_25891 = state_25800__$1;
(statearr_25809_25891[(2)] = null);

(statearr_25809_25891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (24))){
var inst_25699 = (state_25800[(7)]);
var inst_25718 = (state_25800[(2)]);
var inst_25719 = cljs.core.next.call(null,inst_25699);
var inst_25677 = inst_25719;
var inst_25678 = null;
var inst_25679 = (0);
var inst_25680 = (0);
var state_25800__$1 = (function (){var statearr_25810 = state_25800;
(statearr_25810[(13)] = inst_25680);

(statearr_25810[(14)] = inst_25677);

(statearr_25810[(15)] = inst_25718);

(statearr_25810[(16)] = inst_25679);

(statearr_25810[(17)] = inst_25678);

return statearr_25810;
})();
var statearr_25811_25892 = state_25800__$1;
(statearr_25811_25892[(2)] = null);

(statearr_25811_25892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (39))){
var state_25800__$1 = state_25800;
var statearr_25815_25893 = state_25800__$1;
(statearr_25815_25893[(2)] = null);

(statearr_25815_25893[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (4))){
var inst_25668 = (state_25800[(11)]);
var inst_25668__$1 = (state_25800[(2)]);
var inst_25669 = (inst_25668__$1 == null);
var state_25800__$1 = (function (){var statearr_25816 = state_25800;
(statearr_25816[(11)] = inst_25668__$1);

return statearr_25816;
})();
if(cljs.core.truth_(inst_25669)){
var statearr_25817_25894 = state_25800__$1;
(statearr_25817_25894[(1)] = (5));

} else {
var statearr_25818_25895 = state_25800__$1;
(statearr_25818_25895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (15))){
var inst_25680 = (state_25800[(13)]);
var inst_25677 = (state_25800[(14)]);
var inst_25679 = (state_25800[(16)]);
var inst_25678 = (state_25800[(17)]);
var inst_25695 = (state_25800[(2)]);
var inst_25696 = (inst_25680 + (1));
var tmp25812 = inst_25677;
var tmp25813 = inst_25679;
var tmp25814 = inst_25678;
var inst_25677__$1 = tmp25812;
var inst_25678__$1 = tmp25814;
var inst_25679__$1 = tmp25813;
var inst_25680__$1 = inst_25696;
var state_25800__$1 = (function (){var statearr_25819 = state_25800;
(statearr_25819[(13)] = inst_25680__$1);

(statearr_25819[(14)] = inst_25677__$1);

(statearr_25819[(16)] = inst_25679__$1);

(statearr_25819[(17)] = inst_25678__$1);

(statearr_25819[(18)] = inst_25695);

return statearr_25819;
})();
var statearr_25820_25896 = state_25800__$1;
(statearr_25820_25896[(2)] = null);

(statearr_25820_25896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (21))){
var inst_25722 = (state_25800[(2)]);
var state_25800__$1 = state_25800;
var statearr_25824_25897 = state_25800__$1;
(statearr_25824_25897[(2)] = inst_25722);

(statearr_25824_25897[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (31))){
var inst_25748 = (state_25800[(10)]);
var inst_25752 = done.call(null,null);
var inst_25753 = cljs.core.async.untap_STAR_.call(null,m,inst_25748);
var state_25800__$1 = (function (){var statearr_25825 = state_25800;
(statearr_25825[(19)] = inst_25752);

return statearr_25825;
})();
var statearr_25826_25898 = state_25800__$1;
(statearr_25826_25898[(2)] = inst_25753);

(statearr_25826_25898[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (32))){
var inst_25743 = (state_25800[(9)]);
var inst_25740 = (state_25800[(20)]);
var inst_25741 = (state_25800[(12)]);
var inst_25742 = (state_25800[(21)]);
var inst_25755 = (state_25800[(2)]);
var inst_25756 = (inst_25743 + (1));
var tmp25821 = inst_25740;
var tmp25822 = inst_25741;
var tmp25823 = inst_25742;
var inst_25740__$1 = tmp25821;
var inst_25741__$1 = tmp25822;
var inst_25742__$1 = tmp25823;
var inst_25743__$1 = inst_25756;
var state_25800__$1 = (function (){var statearr_25827 = state_25800;
(statearr_25827[(9)] = inst_25743__$1);

(statearr_25827[(20)] = inst_25740__$1);

(statearr_25827[(22)] = inst_25755);

(statearr_25827[(12)] = inst_25741__$1);

(statearr_25827[(21)] = inst_25742__$1);

return statearr_25827;
})();
var statearr_25828_25899 = state_25800__$1;
(statearr_25828_25899[(2)] = null);

(statearr_25828_25899[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (40))){
var inst_25768 = (state_25800[(23)]);
var inst_25772 = done.call(null,null);
var inst_25773 = cljs.core.async.untap_STAR_.call(null,m,inst_25768);
var state_25800__$1 = (function (){var statearr_25829 = state_25800;
(statearr_25829[(24)] = inst_25772);

return statearr_25829;
})();
var statearr_25830_25900 = state_25800__$1;
(statearr_25830_25900[(2)] = inst_25773);

(statearr_25830_25900[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (33))){
var inst_25759 = (state_25800[(25)]);
var inst_25761 = cljs.core.chunked_seq_QMARK_.call(null,inst_25759);
var state_25800__$1 = state_25800;
if(inst_25761){
var statearr_25831_25901 = state_25800__$1;
(statearr_25831_25901[(1)] = (36));

} else {
var statearr_25832_25902 = state_25800__$1;
(statearr_25832_25902[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (13))){
var inst_25689 = (state_25800[(26)]);
var inst_25692 = cljs.core.async.close_BANG_.call(null,inst_25689);
var state_25800__$1 = state_25800;
var statearr_25833_25903 = state_25800__$1;
(statearr_25833_25903[(2)] = inst_25692);

(statearr_25833_25903[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (22))){
var inst_25712 = (state_25800[(8)]);
var inst_25715 = cljs.core.async.close_BANG_.call(null,inst_25712);
var state_25800__$1 = state_25800;
var statearr_25834_25904 = state_25800__$1;
(statearr_25834_25904[(2)] = inst_25715);

(statearr_25834_25904[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (36))){
var inst_25759 = (state_25800[(25)]);
var inst_25763 = cljs.core.chunk_first.call(null,inst_25759);
var inst_25764 = cljs.core.chunk_rest.call(null,inst_25759);
var inst_25765 = cljs.core.count.call(null,inst_25763);
var inst_25740 = inst_25764;
var inst_25741 = inst_25763;
var inst_25742 = inst_25765;
var inst_25743 = (0);
var state_25800__$1 = (function (){var statearr_25835 = state_25800;
(statearr_25835[(9)] = inst_25743);

(statearr_25835[(20)] = inst_25740);

(statearr_25835[(12)] = inst_25741);

(statearr_25835[(21)] = inst_25742);

return statearr_25835;
})();
var statearr_25836_25905 = state_25800__$1;
(statearr_25836_25905[(2)] = null);

(statearr_25836_25905[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (41))){
var inst_25759 = (state_25800[(25)]);
var inst_25775 = (state_25800[(2)]);
var inst_25776 = cljs.core.next.call(null,inst_25759);
var inst_25740 = inst_25776;
var inst_25741 = null;
var inst_25742 = (0);
var inst_25743 = (0);
var state_25800__$1 = (function (){var statearr_25837 = state_25800;
(statearr_25837[(9)] = inst_25743);

(statearr_25837[(20)] = inst_25740);

(statearr_25837[(12)] = inst_25741);

(statearr_25837[(27)] = inst_25775);

(statearr_25837[(21)] = inst_25742);

return statearr_25837;
})();
var statearr_25838_25906 = state_25800__$1;
(statearr_25838_25906[(2)] = null);

(statearr_25838_25906[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (43))){
var state_25800__$1 = state_25800;
var statearr_25839_25907 = state_25800__$1;
(statearr_25839_25907[(2)] = null);

(statearr_25839_25907[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (29))){
var inst_25784 = (state_25800[(2)]);
var state_25800__$1 = state_25800;
var statearr_25840_25908 = state_25800__$1;
(statearr_25840_25908[(2)] = inst_25784);

(statearr_25840_25908[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (44))){
var inst_25793 = (state_25800[(2)]);
var state_25800__$1 = (function (){var statearr_25841 = state_25800;
(statearr_25841[(28)] = inst_25793);

return statearr_25841;
})();
var statearr_25842_25909 = state_25800__$1;
(statearr_25842_25909[(2)] = null);

(statearr_25842_25909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (6))){
var inst_25732 = (state_25800[(29)]);
var inst_25731 = cljs.core.deref.call(null,cs);
var inst_25732__$1 = cljs.core.keys.call(null,inst_25731);
var inst_25733 = cljs.core.count.call(null,inst_25732__$1);
var inst_25734 = cljs.core.reset_BANG_.call(null,dctr,inst_25733);
var inst_25739 = cljs.core.seq.call(null,inst_25732__$1);
var inst_25740 = inst_25739;
var inst_25741 = null;
var inst_25742 = (0);
var inst_25743 = (0);
var state_25800__$1 = (function (){var statearr_25843 = state_25800;
(statearr_25843[(9)] = inst_25743);

(statearr_25843[(20)] = inst_25740);

(statearr_25843[(30)] = inst_25734);

(statearr_25843[(12)] = inst_25741);

(statearr_25843[(29)] = inst_25732__$1);

(statearr_25843[(21)] = inst_25742);

return statearr_25843;
})();
var statearr_25844_25910 = state_25800__$1;
(statearr_25844_25910[(2)] = null);

(statearr_25844_25910[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (28))){
var inst_25740 = (state_25800[(20)]);
var inst_25759 = (state_25800[(25)]);
var inst_25759__$1 = cljs.core.seq.call(null,inst_25740);
var state_25800__$1 = (function (){var statearr_25845 = state_25800;
(statearr_25845[(25)] = inst_25759__$1);

return statearr_25845;
})();
if(inst_25759__$1){
var statearr_25846_25911 = state_25800__$1;
(statearr_25846_25911[(1)] = (33));

} else {
var statearr_25847_25912 = state_25800__$1;
(statearr_25847_25912[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (25))){
var inst_25743 = (state_25800[(9)]);
var inst_25742 = (state_25800[(21)]);
var inst_25745 = (inst_25743 < inst_25742);
var inst_25746 = inst_25745;
var state_25800__$1 = state_25800;
if(cljs.core.truth_(inst_25746)){
var statearr_25848_25913 = state_25800__$1;
(statearr_25848_25913[(1)] = (27));

} else {
var statearr_25849_25914 = state_25800__$1;
(statearr_25849_25914[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (34))){
var state_25800__$1 = state_25800;
var statearr_25850_25915 = state_25800__$1;
(statearr_25850_25915[(2)] = null);

(statearr_25850_25915[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (17))){
var state_25800__$1 = state_25800;
var statearr_25851_25916 = state_25800__$1;
(statearr_25851_25916[(2)] = null);

(statearr_25851_25916[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (3))){
var inst_25798 = (state_25800[(2)]);
var state_25800__$1 = state_25800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25800__$1,inst_25798);
} else {
if((state_val_25801 === (12))){
var inst_25727 = (state_25800[(2)]);
var state_25800__$1 = state_25800;
var statearr_25852_25917 = state_25800__$1;
(statearr_25852_25917[(2)] = inst_25727);

(statearr_25852_25917[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (2))){
var state_25800__$1 = state_25800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25800__$1,(4),ch);
} else {
if((state_val_25801 === (23))){
var state_25800__$1 = state_25800;
var statearr_25853_25918 = state_25800__$1;
(statearr_25853_25918[(2)] = null);

(statearr_25853_25918[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (35))){
var inst_25782 = (state_25800[(2)]);
var state_25800__$1 = state_25800;
var statearr_25854_25919 = state_25800__$1;
(statearr_25854_25919[(2)] = inst_25782);

(statearr_25854_25919[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (19))){
var inst_25699 = (state_25800[(7)]);
var inst_25703 = cljs.core.chunk_first.call(null,inst_25699);
var inst_25704 = cljs.core.chunk_rest.call(null,inst_25699);
var inst_25705 = cljs.core.count.call(null,inst_25703);
var inst_25677 = inst_25704;
var inst_25678 = inst_25703;
var inst_25679 = inst_25705;
var inst_25680 = (0);
var state_25800__$1 = (function (){var statearr_25855 = state_25800;
(statearr_25855[(13)] = inst_25680);

(statearr_25855[(14)] = inst_25677);

(statearr_25855[(16)] = inst_25679);

(statearr_25855[(17)] = inst_25678);

return statearr_25855;
})();
var statearr_25856_25920 = state_25800__$1;
(statearr_25856_25920[(2)] = null);

(statearr_25856_25920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (11))){
var inst_25677 = (state_25800[(14)]);
var inst_25699 = (state_25800[(7)]);
var inst_25699__$1 = cljs.core.seq.call(null,inst_25677);
var state_25800__$1 = (function (){var statearr_25857 = state_25800;
(statearr_25857[(7)] = inst_25699__$1);

return statearr_25857;
})();
if(inst_25699__$1){
var statearr_25858_25921 = state_25800__$1;
(statearr_25858_25921[(1)] = (16));

} else {
var statearr_25859_25922 = state_25800__$1;
(statearr_25859_25922[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (9))){
var inst_25729 = (state_25800[(2)]);
var state_25800__$1 = state_25800;
var statearr_25860_25923 = state_25800__$1;
(statearr_25860_25923[(2)] = inst_25729);

(statearr_25860_25923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (5))){
var inst_25675 = cljs.core.deref.call(null,cs);
var inst_25676 = cljs.core.seq.call(null,inst_25675);
var inst_25677 = inst_25676;
var inst_25678 = null;
var inst_25679 = (0);
var inst_25680 = (0);
var state_25800__$1 = (function (){var statearr_25861 = state_25800;
(statearr_25861[(13)] = inst_25680);

(statearr_25861[(14)] = inst_25677);

(statearr_25861[(16)] = inst_25679);

(statearr_25861[(17)] = inst_25678);

return statearr_25861;
})();
var statearr_25862_25924 = state_25800__$1;
(statearr_25862_25924[(2)] = null);

(statearr_25862_25924[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (14))){
var state_25800__$1 = state_25800;
var statearr_25863_25925 = state_25800__$1;
(statearr_25863_25925[(2)] = null);

(statearr_25863_25925[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (45))){
var inst_25790 = (state_25800[(2)]);
var state_25800__$1 = state_25800;
var statearr_25864_25926 = state_25800__$1;
(statearr_25864_25926[(2)] = inst_25790);

(statearr_25864_25926[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (26))){
var inst_25732 = (state_25800[(29)]);
var inst_25786 = (state_25800[(2)]);
var inst_25787 = cljs.core.seq.call(null,inst_25732);
var state_25800__$1 = (function (){var statearr_25865 = state_25800;
(statearr_25865[(31)] = inst_25786);

return statearr_25865;
})();
if(inst_25787){
var statearr_25866_25927 = state_25800__$1;
(statearr_25866_25927[(1)] = (42));

} else {
var statearr_25867_25928 = state_25800__$1;
(statearr_25867_25928[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (16))){
var inst_25699 = (state_25800[(7)]);
var inst_25701 = cljs.core.chunked_seq_QMARK_.call(null,inst_25699);
var state_25800__$1 = state_25800;
if(inst_25701){
var statearr_25868_25929 = state_25800__$1;
(statearr_25868_25929[(1)] = (19));

} else {
var statearr_25869_25930 = state_25800__$1;
(statearr_25869_25930[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (38))){
var inst_25779 = (state_25800[(2)]);
var state_25800__$1 = state_25800;
var statearr_25870_25931 = state_25800__$1;
(statearr_25870_25931[(2)] = inst_25779);

(statearr_25870_25931[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (30))){
var state_25800__$1 = state_25800;
var statearr_25871_25932 = state_25800__$1;
(statearr_25871_25932[(2)] = null);

(statearr_25871_25932[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (10))){
var inst_25680 = (state_25800[(13)]);
var inst_25678 = (state_25800[(17)]);
var inst_25688 = cljs.core._nth.call(null,inst_25678,inst_25680);
var inst_25689 = cljs.core.nth.call(null,inst_25688,(0),null);
var inst_25690 = cljs.core.nth.call(null,inst_25688,(1),null);
var state_25800__$1 = (function (){var statearr_25872 = state_25800;
(statearr_25872[(26)] = inst_25689);

return statearr_25872;
})();
if(cljs.core.truth_(inst_25690)){
var statearr_25873_25933 = state_25800__$1;
(statearr_25873_25933[(1)] = (13));

} else {
var statearr_25874_25934 = state_25800__$1;
(statearr_25874_25934[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (18))){
var inst_25725 = (state_25800[(2)]);
var state_25800__$1 = state_25800;
var statearr_25875_25935 = state_25800__$1;
(statearr_25875_25935[(2)] = inst_25725);

(statearr_25875_25935[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (42))){
var state_25800__$1 = state_25800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25800__$1,(45),dchan);
} else {
if((state_val_25801 === (37))){
var inst_25768 = (state_25800[(23)]);
var inst_25668 = (state_25800[(11)]);
var inst_25759 = (state_25800[(25)]);
var inst_25768__$1 = cljs.core.first.call(null,inst_25759);
var inst_25769 = cljs.core.async.put_BANG_.call(null,inst_25768__$1,inst_25668,done);
var state_25800__$1 = (function (){var statearr_25876 = state_25800;
(statearr_25876[(23)] = inst_25768__$1);

return statearr_25876;
})();
if(cljs.core.truth_(inst_25769)){
var statearr_25877_25936 = state_25800__$1;
(statearr_25877_25936[(1)] = (39));

} else {
var statearr_25878_25937 = state_25800__$1;
(statearr_25878_25937[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25801 === (8))){
var inst_25680 = (state_25800[(13)]);
var inst_25679 = (state_25800[(16)]);
var inst_25682 = (inst_25680 < inst_25679);
var inst_25683 = inst_25682;
var state_25800__$1 = state_25800;
if(cljs.core.truth_(inst_25683)){
var statearr_25879_25938 = state_25800__$1;
(statearr_25879_25938[(1)] = (10));

} else {
var statearr_25880_25939 = state_25800__$1;
(statearr_25880_25939[(1)] = (11));

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
});})(c__25066__auto___25885,cs,m,dchan,dctr,done))
;
return ((function (switch__24971__auto__,c__25066__auto___25885,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24972__auto__ = null;
var cljs$core$async$mult_$_state_machine__24972__auto____0 = (function (){
var statearr_25881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25881[(0)] = cljs$core$async$mult_$_state_machine__24972__auto__);

(statearr_25881[(1)] = (1));

return statearr_25881;
});
var cljs$core$async$mult_$_state_machine__24972__auto____1 = (function (state_25800){
while(true){
var ret_value__24973__auto__ = (function (){try{while(true){
var result__24974__auto__ = switch__24971__auto__.call(null,state_25800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24974__auto__;
}
break;
}
}catch (e25882){if((e25882 instanceof Object)){
var ex__24975__auto__ = e25882;
var statearr_25883_25940 = state_25800;
(statearr_25883_25940[(5)] = ex__24975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25941 = state_25800;
state_25800 = G__25941;
continue;
} else {
return ret_value__24973__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24972__auto__ = function(state_25800){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24972__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24972__auto____1.call(this,state_25800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24972__auto____0;
cljs$core$async$mult_$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24972__auto____1;
return cljs$core$async$mult_$_state_machine__24972__auto__;
})()
;})(switch__24971__auto__,c__25066__auto___25885,cs,m,dchan,dctr,done))
})();
var state__25068__auto__ = (function (){var statearr_25884 = f__25067__auto__.call(null);
(statearr_25884[(6)] = c__25066__auto___25885);

return statearr_25884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25068__auto__);
});})(c__25066__auto___25885,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__25943 = arguments.length;
switch (G__25943) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,state_map);
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,mode);
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___25955 = arguments.length;
var i__4642__auto___25956 = (0);
while(true){
if((i__4642__auto___25956 < len__4641__auto___25955)){
args__4647__auto__.push((arguments[i__4642__auto___25956]));

var G__25957 = (i__4642__auto___25956 + (1));
i__4642__auto___25956 = G__25957;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25949){
var map__25950 = p__25949;
var map__25950__$1 = (((((!((map__25950 == null))))?(((((map__25950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25950):map__25950);
var opts = map__25950__$1;
var statearr_25952_25958 = state;
(statearr_25952_25958[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__25950,map__25950__$1,opts){
return (function (val){
var statearr_25953_25959 = state;
(statearr_25953_25959[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25950,map__25950__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_25954_25960 = state;
(statearr_25954_25960[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25945){
var G__25946 = cljs.core.first.call(null,seq25945);
var seq25945__$1 = cljs.core.next.call(null,seq25945);
var G__25947 = cljs.core.first.call(null,seq25945__$1);
var seq25945__$2 = cljs.core.next.call(null,seq25945__$1);
var G__25948 = cljs.core.first.call(null,seq25945__$2);
var seq25945__$3 = cljs.core.next.call(null,seq25945__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25946,G__25947,G__25948,seq25945__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25961 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25961 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta25962){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta25962 = meta25962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25963,meta25962__$1){
var self__ = this;
var _25963__$1 = this;
return (new cljs.core.async.t_cljs$core$async25961(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta25962__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25961.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25963){
var self__ = this;
var _25963__$1 = this;
return self__.meta25962;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25961.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25961.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25961.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25961.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25961.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25961.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25961.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25961.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25961.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta25962","meta25962",-680021417,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25961.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25961.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25961";

cljs.core.async.t_cljs$core$async25961.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25961");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25961.
 */
cljs.core.async.__GT_t_cljs$core$async25961 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25961(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25962){
return (new cljs.core.async.t_cljs$core$async25961(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25962));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25961(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25066__auto___26125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25066__auto___26125,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25067__auto__ = (function (){var switch__24971__auto__ = ((function (c__25066__auto___26125,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26065){
var state_val_26066 = (state_26065[(1)]);
if((state_val_26066 === (7))){
var inst_25980 = (state_26065[(2)]);
var state_26065__$1 = state_26065;
var statearr_26067_26126 = state_26065__$1;
(statearr_26067_26126[(2)] = inst_25980);

(statearr_26067_26126[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (20))){
var inst_25992 = (state_26065[(7)]);
var state_26065__$1 = state_26065;
var statearr_26068_26127 = state_26065__$1;
(statearr_26068_26127[(2)] = inst_25992);

(statearr_26068_26127[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (27))){
var state_26065__$1 = state_26065;
var statearr_26069_26128 = state_26065__$1;
(statearr_26069_26128[(2)] = null);

(statearr_26069_26128[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (1))){
var inst_25967 = (state_26065[(8)]);
var inst_25967__$1 = calc_state.call(null);
var inst_25969 = (inst_25967__$1 == null);
var inst_25970 = cljs.core.not.call(null,inst_25969);
var state_26065__$1 = (function (){var statearr_26070 = state_26065;
(statearr_26070[(8)] = inst_25967__$1);

return statearr_26070;
})();
if(inst_25970){
var statearr_26071_26129 = state_26065__$1;
(statearr_26071_26129[(1)] = (2));

} else {
var statearr_26072_26130 = state_26065__$1;
(statearr_26072_26130[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (24))){
var inst_26025 = (state_26065[(9)]);
var inst_26039 = (state_26065[(10)]);
var inst_26016 = (state_26065[(11)]);
var inst_26039__$1 = inst_26016.call(null,inst_26025);
var state_26065__$1 = (function (){var statearr_26073 = state_26065;
(statearr_26073[(10)] = inst_26039__$1);

return statearr_26073;
})();
if(cljs.core.truth_(inst_26039__$1)){
var statearr_26074_26131 = state_26065__$1;
(statearr_26074_26131[(1)] = (29));

} else {
var statearr_26075_26132 = state_26065__$1;
(statearr_26075_26132[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (4))){
var inst_25983 = (state_26065[(2)]);
var state_26065__$1 = state_26065;
if(cljs.core.truth_(inst_25983)){
var statearr_26076_26133 = state_26065__$1;
(statearr_26076_26133[(1)] = (8));

} else {
var statearr_26077_26134 = state_26065__$1;
(statearr_26077_26134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (15))){
var inst_26010 = (state_26065[(2)]);
var state_26065__$1 = state_26065;
if(cljs.core.truth_(inst_26010)){
var statearr_26078_26135 = state_26065__$1;
(statearr_26078_26135[(1)] = (19));

} else {
var statearr_26079_26136 = state_26065__$1;
(statearr_26079_26136[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (21))){
var inst_26015 = (state_26065[(12)]);
var inst_26015__$1 = (state_26065[(2)]);
var inst_26016 = cljs.core.get.call(null,inst_26015__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26017 = cljs.core.get.call(null,inst_26015__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26018 = cljs.core.get.call(null,inst_26015__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26065__$1 = (function (){var statearr_26080 = state_26065;
(statearr_26080[(13)] = inst_26017);

(statearr_26080[(12)] = inst_26015__$1);

(statearr_26080[(11)] = inst_26016);

return statearr_26080;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26065__$1,(22),inst_26018);
} else {
if((state_val_26066 === (31))){
var inst_26047 = (state_26065[(2)]);
var state_26065__$1 = state_26065;
if(cljs.core.truth_(inst_26047)){
var statearr_26081_26137 = state_26065__$1;
(statearr_26081_26137[(1)] = (32));

} else {
var statearr_26082_26138 = state_26065__$1;
(statearr_26082_26138[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (32))){
var inst_26024 = (state_26065[(14)]);
var state_26065__$1 = state_26065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26065__$1,(35),out,inst_26024);
} else {
if((state_val_26066 === (33))){
var inst_26015 = (state_26065[(12)]);
var inst_25992 = inst_26015;
var state_26065__$1 = (function (){var statearr_26083 = state_26065;
(statearr_26083[(7)] = inst_25992);

return statearr_26083;
})();
var statearr_26084_26139 = state_26065__$1;
(statearr_26084_26139[(2)] = null);

(statearr_26084_26139[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (13))){
var inst_25992 = (state_26065[(7)]);
var inst_25999 = inst_25992.cljs$lang$protocol_mask$partition0$;
var inst_26000 = (inst_25999 & (64));
var inst_26001 = inst_25992.cljs$core$ISeq$;
var inst_26002 = (cljs.core.PROTOCOL_SENTINEL === inst_26001);
var inst_26003 = ((inst_26000) || (inst_26002));
var state_26065__$1 = state_26065;
if(cljs.core.truth_(inst_26003)){
var statearr_26085_26140 = state_26065__$1;
(statearr_26085_26140[(1)] = (16));

} else {
var statearr_26086_26141 = state_26065__$1;
(statearr_26086_26141[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (22))){
var inst_26025 = (state_26065[(9)]);
var inst_26024 = (state_26065[(14)]);
var inst_26023 = (state_26065[(2)]);
var inst_26024__$1 = cljs.core.nth.call(null,inst_26023,(0),null);
var inst_26025__$1 = cljs.core.nth.call(null,inst_26023,(1),null);
var inst_26026 = (inst_26024__$1 == null);
var inst_26027 = cljs.core._EQ_.call(null,inst_26025__$1,change);
var inst_26028 = ((inst_26026) || (inst_26027));
var state_26065__$1 = (function (){var statearr_26087 = state_26065;
(statearr_26087[(9)] = inst_26025__$1);

(statearr_26087[(14)] = inst_26024__$1);

return statearr_26087;
})();
if(cljs.core.truth_(inst_26028)){
var statearr_26088_26142 = state_26065__$1;
(statearr_26088_26142[(1)] = (23));

} else {
var statearr_26089_26143 = state_26065__$1;
(statearr_26089_26143[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (36))){
var inst_26015 = (state_26065[(12)]);
var inst_25992 = inst_26015;
var state_26065__$1 = (function (){var statearr_26090 = state_26065;
(statearr_26090[(7)] = inst_25992);

return statearr_26090;
})();
var statearr_26091_26144 = state_26065__$1;
(statearr_26091_26144[(2)] = null);

(statearr_26091_26144[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (29))){
var inst_26039 = (state_26065[(10)]);
var state_26065__$1 = state_26065;
var statearr_26092_26145 = state_26065__$1;
(statearr_26092_26145[(2)] = inst_26039);

(statearr_26092_26145[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (6))){
var state_26065__$1 = state_26065;
var statearr_26093_26146 = state_26065__$1;
(statearr_26093_26146[(2)] = false);

(statearr_26093_26146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (28))){
var inst_26035 = (state_26065[(2)]);
var inst_26036 = calc_state.call(null);
var inst_25992 = inst_26036;
var state_26065__$1 = (function (){var statearr_26094 = state_26065;
(statearr_26094[(7)] = inst_25992);

(statearr_26094[(15)] = inst_26035);

return statearr_26094;
})();
var statearr_26095_26147 = state_26065__$1;
(statearr_26095_26147[(2)] = null);

(statearr_26095_26147[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (25))){
var inst_26061 = (state_26065[(2)]);
var state_26065__$1 = state_26065;
var statearr_26096_26148 = state_26065__$1;
(statearr_26096_26148[(2)] = inst_26061);

(statearr_26096_26148[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (34))){
var inst_26059 = (state_26065[(2)]);
var state_26065__$1 = state_26065;
var statearr_26097_26149 = state_26065__$1;
(statearr_26097_26149[(2)] = inst_26059);

(statearr_26097_26149[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (17))){
var state_26065__$1 = state_26065;
var statearr_26098_26150 = state_26065__$1;
(statearr_26098_26150[(2)] = false);

(statearr_26098_26150[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (3))){
var state_26065__$1 = state_26065;
var statearr_26099_26151 = state_26065__$1;
(statearr_26099_26151[(2)] = false);

(statearr_26099_26151[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (12))){
var inst_26063 = (state_26065[(2)]);
var state_26065__$1 = state_26065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26065__$1,inst_26063);
} else {
if((state_val_26066 === (2))){
var inst_25967 = (state_26065[(8)]);
var inst_25972 = inst_25967.cljs$lang$protocol_mask$partition0$;
var inst_25973 = (inst_25972 & (64));
var inst_25974 = inst_25967.cljs$core$ISeq$;
var inst_25975 = (cljs.core.PROTOCOL_SENTINEL === inst_25974);
var inst_25976 = ((inst_25973) || (inst_25975));
var state_26065__$1 = state_26065;
if(cljs.core.truth_(inst_25976)){
var statearr_26100_26152 = state_26065__$1;
(statearr_26100_26152[(1)] = (5));

} else {
var statearr_26101_26153 = state_26065__$1;
(statearr_26101_26153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (23))){
var inst_26024 = (state_26065[(14)]);
var inst_26030 = (inst_26024 == null);
var state_26065__$1 = state_26065;
if(cljs.core.truth_(inst_26030)){
var statearr_26102_26154 = state_26065__$1;
(statearr_26102_26154[(1)] = (26));

} else {
var statearr_26103_26155 = state_26065__$1;
(statearr_26103_26155[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (35))){
var inst_26050 = (state_26065[(2)]);
var state_26065__$1 = state_26065;
if(cljs.core.truth_(inst_26050)){
var statearr_26104_26156 = state_26065__$1;
(statearr_26104_26156[(1)] = (36));

} else {
var statearr_26105_26157 = state_26065__$1;
(statearr_26105_26157[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (19))){
var inst_25992 = (state_26065[(7)]);
var inst_26012 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25992);
var state_26065__$1 = state_26065;
var statearr_26106_26158 = state_26065__$1;
(statearr_26106_26158[(2)] = inst_26012);

(statearr_26106_26158[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (11))){
var inst_25992 = (state_26065[(7)]);
var inst_25996 = (inst_25992 == null);
var inst_25997 = cljs.core.not.call(null,inst_25996);
var state_26065__$1 = state_26065;
if(inst_25997){
var statearr_26107_26159 = state_26065__$1;
(statearr_26107_26159[(1)] = (13));

} else {
var statearr_26108_26160 = state_26065__$1;
(statearr_26108_26160[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (9))){
var inst_25967 = (state_26065[(8)]);
var state_26065__$1 = state_26065;
var statearr_26109_26161 = state_26065__$1;
(statearr_26109_26161[(2)] = inst_25967);

(statearr_26109_26161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (5))){
var state_26065__$1 = state_26065;
var statearr_26110_26162 = state_26065__$1;
(statearr_26110_26162[(2)] = true);

(statearr_26110_26162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (14))){
var state_26065__$1 = state_26065;
var statearr_26111_26163 = state_26065__$1;
(statearr_26111_26163[(2)] = false);

(statearr_26111_26163[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (26))){
var inst_26025 = (state_26065[(9)]);
var inst_26032 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26025);
var state_26065__$1 = state_26065;
var statearr_26112_26164 = state_26065__$1;
(statearr_26112_26164[(2)] = inst_26032);

(statearr_26112_26164[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (16))){
var state_26065__$1 = state_26065;
var statearr_26113_26165 = state_26065__$1;
(statearr_26113_26165[(2)] = true);

(statearr_26113_26165[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (38))){
var inst_26055 = (state_26065[(2)]);
var state_26065__$1 = state_26065;
var statearr_26114_26166 = state_26065__$1;
(statearr_26114_26166[(2)] = inst_26055);

(statearr_26114_26166[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (30))){
var inst_26025 = (state_26065[(9)]);
var inst_26017 = (state_26065[(13)]);
var inst_26016 = (state_26065[(11)]);
var inst_26042 = cljs.core.empty_QMARK_.call(null,inst_26016);
var inst_26043 = inst_26017.call(null,inst_26025);
var inst_26044 = cljs.core.not.call(null,inst_26043);
var inst_26045 = ((inst_26042) && (inst_26044));
var state_26065__$1 = state_26065;
var statearr_26115_26167 = state_26065__$1;
(statearr_26115_26167[(2)] = inst_26045);

(statearr_26115_26167[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (10))){
var inst_25967 = (state_26065[(8)]);
var inst_25988 = (state_26065[(2)]);
var inst_25989 = cljs.core.get.call(null,inst_25988,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25990 = cljs.core.get.call(null,inst_25988,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25991 = cljs.core.get.call(null,inst_25988,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25992 = inst_25967;
var state_26065__$1 = (function (){var statearr_26116 = state_26065;
(statearr_26116[(7)] = inst_25992);

(statearr_26116[(16)] = inst_25991);

(statearr_26116[(17)] = inst_25990);

(statearr_26116[(18)] = inst_25989);

return statearr_26116;
})();
var statearr_26117_26168 = state_26065__$1;
(statearr_26117_26168[(2)] = null);

(statearr_26117_26168[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (18))){
var inst_26007 = (state_26065[(2)]);
var state_26065__$1 = state_26065;
var statearr_26118_26169 = state_26065__$1;
(statearr_26118_26169[(2)] = inst_26007);

(statearr_26118_26169[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (37))){
var state_26065__$1 = state_26065;
var statearr_26119_26170 = state_26065__$1;
(statearr_26119_26170[(2)] = null);

(statearr_26119_26170[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (8))){
var inst_25967 = (state_26065[(8)]);
var inst_25985 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25967);
var state_26065__$1 = state_26065;
var statearr_26120_26171 = state_26065__$1;
(statearr_26120_26171[(2)] = inst_25985);

(statearr_26120_26171[(1)] = (10));


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
});})(c__25066__auto___26125,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24971__auto__,c__25066__auto___26125,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24972__auto__ = null;
var cljs$core$async$mix_$_state_machine__24972__auto____0 = (function (){
var statearr_26121 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26121[(0)] = cljs$core$async$mix_$_state_machine__24972__auto__);

(statearr_26121[(1)] = (1));

return statearr_26121;
});
var cljs$core$async$mix_$_state_machine__24972__auto____1 = (function (state_26065){
while(true){
var ret_value__24973__auto__ = (function (){try{while(true){
var result__24974__auto__ = switch__24971__auto__.call(null,state_26065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24974__auto__;
}
break;
}
}catch (e26122){if((e26122 instanceof Object)){
var ex__24975__auto__ = e26122;
var statearr_26123_26172 = state_26065;
(statearr_26123_26172[(5)] = ex__24975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26173 = state_26065;
state_26065 = G__26173;
continue;
} else {
return ret_value__24973__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24972__auto__ = function(state_26065){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24972__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24972__auto____1.call(this,state_26065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24972__auto____0;
cljs$core$async$mix_$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24972__auto____1;
return cljs$core$async$mix_$_state_machine__24972__auto__;
})()
;})(switch__24971__auto__,c__25066__auto___26125,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25068__auto__ = (function (){var statearr_26124 = f__25067__auto__.call(null);
(statearr_26124[(6)] = c__25066__auto___26125);

return statearr_26124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25068__auto__);
});})(c__25066__auto___26125,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__26175 = arguments.length;
switch (G__26175) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__26179 = arguments.length;
switch (G__26179) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4047__auto__,mults){
return (function (p1__26177_SHARP_){
if(cljs.core.truth_(p1__26177_SHARP_.call(null,topic))){
return p1__26177_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26177_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26180 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26180 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26181){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26181 = meta26181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26182,meta26181__$1){
var self__ = this;
var _26182__$1 = this;
return (new cljs.core.async.t_cljs$core$async26180(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26181__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26180.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26182){
var self__ = this;
var _26182__$1 = this;
return self__.meta26181;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26180.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26180.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26180.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26180.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26180.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26180.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26180.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26180.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26181","meta26181",882372435,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26180.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26180.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26180";

cljs.core.async.t_cljs$core$async26180.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26180");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26180.
 */
cljs.core.async.__GT_t_cljs$core$async26180 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26180(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26181){
return (new cljs.core.async.t_cljs$core$async26180(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26181));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26180(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25066__auto___26300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25066__auto___26300,mults,ensure_mult,p){
return (function (){
var f__25067__auto__ = (function (){var switch__24971__auto__ = ((function (c__25066__auto___26300,mults,ensure_mult,p){
return (function (state_26254){
var state_val_26255 = (state_26254[(1)]);
if((state_val_26255 === (7))){
var inst_26250 = (state_26254[(2)]);
var state_26254__$1 = state_26254;
var statearr_26256_26301 = state_26254__$1;
(statearr_26256_26301[(2)] = inst_26250);

(statearr_26256_26301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26255 === (20))){
var state_26254__$1 = state_26254;
var statearr_26257_26302 = state_26254__$1;
(statearr_26257_26302[(2)] = null);

(statearr_26257_26302[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26255 === (1))){
var state_26254__$1 = state_26254;
var statearr_26258_26303 = state_26254__$1;
(statearr_26258_26303[(2)] = null);

(statearr_26258_26303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26255 === (24))){
var inst_26233 = (state_26254[(7)]);
var inst_26242 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26233);
var state_26254__$1 = state_26254;
var statearr_26259_26304 = state_26254__$1;
(statearr_26259_26304[(2)] = inst_26242);

(statearr_26259_26304[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26255 === (4))){
var inst_26185 = (state_26254[(8)]);
var inst_26185__$1 = (state_26254[(2)]);
var inst_26186 = (inst_26185__$1 == null);
var state_26254__$1 = (function (){var statearr_26260 = state_26254;
(statearr_26260[(8)] = inst_26185__$1);

return statearr_26260;
})();
if(cljs.core.truth_(inst_26186)){
var statearr_26261_26305 = state_26254__$1;
(statearr_26261_26305[(1)] = (5));

} else {
var statearr_26262_26306 = state_26254__$1;
(statearr_26262_26306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26255 === (15))){
var inst_26227 = (state_26254[(2)]);
var state_26254__$1 = state_26254;
var statearr_26263_26307 = state_26254__$1;
(statearr_26263_26307[(2)] = inst_26227);

(statearr_26263_26307[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26255 === (21))){
var inst_26247 = (state_26254[(2)]);
var state_26254__$1 = (function (){var statearr_26264 = state_26254;
(statearr_26264[(9)] = inst_26247);

return statearr_26264;
})();
var statearr_26265_26308 = state_26254__$1;
(statearr_26265_26308[(2)] = null);

(statearr_26265_26308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26255 === (13))){
var inst_26209 = (state_26254[(10)]);
var inst_26211 = cljs.core.chunked_seq_QMARK_.call(null,inst_26209);
var state_26254__$1 = state_26254;
if(inst_26211){
var statearr_26266_26309 = state_26254__$1;
(statearr_26266_26309[(1)] = (16));

} else {
var statearr_26267_26310 = state_26254__$1;
(statearr_26267_26310[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26255 === (22))){
var inst_26239 = (state_26254[(2)]);
var state_26254__$1 = state_26254;
if(cljs.core.truth_(inst_26239)){
var statearr_26268_26311 = state_26254__$1;
(statearr_26268_26311[(1)] = (23));

} else {
var statearr_26269_26312 = state_26254__$1;
(statearr_26269_26312[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26255 === (6))){
var inst_26185 = (state_26254[(8)]);
var inst_26235 = (state_26254[(11)]);
var inst_26233 = (state_26254[(7)]);
var inst_26233__$1 = topic_fn.call(null,inst_26185);
var inst_26234 = cljs.core.deref.call(null,mults);
var inst_26235__$1 = cljs.core.get.call(null,inst_26234,inst_26233__$1);
var state_26254__$1 = (function (){var statearr_26270 = state_26254;
(statearr_26270[(11)] = inst_26235__$1);

(statearr_26270[(7)] = inst_26233__$1);

return statearr_26270;
})();
if(cljs.core.truth_(inst_26235__$1)){
var statearr_26271_26313 = state_26254__$1;
(statearr_26271_26313[(1)] = (19));

} else {
var statearr_26272_26314 = state_26254__$1;
(statearr_26272_26314[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26255 === (25))){
var inst_26244 = (state_26254[(2)]);
var state_26254__$1 = state_26254;
var statearr_26273_26315 = state_26254__$1;
(statearr_26273_26315[(2)] = inst_26244);

(statearr_26273_26315[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26255 === (17))){
var inst_26209 = (state_26254[(10)]);
var inst_26218 = cljs.core.first.call(null,inst_26209);
var inst_26219 = cljs.core.async.muxch_STAR_.call(null,inst_26218);
var inst_26220 = cljs.core.async.close_BANG_.call(null,inst_26219);
var inst_26221 = cljs.core.next.call(null,inst_26209);
var inst_26195 = inst_26221;
var inst_26196 = null;
var inst_26197 = (0);
var inst_26198 = (0);
var state_26254__$1 = (function (){var statearr_26274 = state_26254;
(statearr_26274[(12)] = inst_26198);

(statearr_26274[(13)] = inst_26195);

(statearr_26274[(14)] = inst_26197);

(statearr_26274[(15)] = inst_26220);

(statearr_26274[(16)] = inst_26196);

return statearr_26274;
})();
var statearr_26275_26316 = state_26254__$1;
(statearr_26275_26316[(2)] = null);

(statearr_26275_26316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26255 === (3))){
var inst_26252 = (state_26254[(2)]);
var state_26254__$1 = state_26254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26254__$1,inst_26252);
} else {
if((state_val_26255 === (12))){
var inst_26229 = (state_26254[(2)]);
var state_26254__$1 = state_26254;
var statearr_26276_26317 = state_26254__$1;
(statearr_26276_26317[(2)] = inst_26229);

(statearr_26276_26317[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26255 === (2))){
var state_26254__$1 = state_26254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26254__$1,(4),ch);
} else {
if((state_val_26255 === (23))){
var state_26254__$1 = state_26254;
var statearr_26277_26318 = state_26254__$1;
(statearr_26277_26318[(2)] = null);

(statearr_26277_26318[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26255 === (19))){
var inst_26185 = (state_26254[(8)]);
var inst_26235 = (state_26254[(11)]);
var inst_26237 = cljs.core.async.muxch_STAR_.call(null,inst_26235);
var state_26254__$1 = state_26254;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26254__$1,(22),inst_26237,inst_26185);
} else {
if((state_val_26255 === (11))){
var inst_26195 = (state_26254[(13)]);
var inst_26209 = (state_26254[(10)]);
var inst_26209__$1 = cljs.core.seq.call(null,inst_26195);
var state_26254__$1 = (function (){var statearr_26278 = state_26254;
(statearr_26278[(10)] = inst_26209__$1);

return statearr_26278;
})();
if(inst_26209__$1){
var statearr_26279_26319 = state_26254__$1;
(statearr_26279_26319[(1)] = (13));

} else {
var statearr_26280_26320 = state_26254__$1;
(statearr_26280_26320[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26255 === (9))){
var inst_26231 = (state_26254[(2)]);
var state_26254__$1 = state_26254;
var statearr_26281_26321 = state_26254__$1;
(statearr_26281_26321[(2)] = inst_26231);

(statearr_26281_26321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26255 === (5))){
var inst_26192 = cljs.core.deref.call(null,mults);
var inst_26193 = cljs.core.vals.call(null,inst_26192);
var inst_26194 = cljs.core.seq.call(null,inst_26193);
var inst_26195 = inst_26194;
var inst_26196 = null;
var inst_26197 = (0);
var inst_26198 = (0);
var state_26254__$1 = (function (){var statearr_26282 = state_26254;
(statearr_26282[(12)] = inst_26198);

(statearr_26282[(13)] = inst_26195);

(statearr_26282[(14)] = inst_26197);

(statearr_26282[(16)] = inst_26196);

return statearr_26282;
})();
var statearr_26283_26322 = state_26254__$1;
(statearr_26283_26322[(2)] = null);

(statearr_26283_26322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26255 === (14))){
var state_26254__$1 = state_26254;
var statearr_26287_26323 = state_26254__$1;
(statearr_26287_26323[(2)] = null);

(statearr_26287_26323[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26255 === (16))){
var inst_26209 = (state_26254[(10)]);
var inst_26213 = cljs.core.chunk_first.call(null,inst_26209);
var inst_26214 = cljs.core.chunk_rest.call(null,inst_26209);
var inst_26215 = cljs.core.count.call(null,inst_26213);
var inst_26195 = inst_26214;
var inst_26196 = inst_26213;
var inst_26197 = inst_26215;
var inst_26198 = (0);
var state_26254__$1 = (function (){var statearr_26288 = state_26254;
(statearr_26288[(12)] = inst_26198);

(statearr_26288[(13)] = inst_26195);

(statearr_26288[(14)] = inst_26197);

(statearr_26288[(16)] = inst_26196);

return statearr_26288;
})();
var statearr_26289_26324 = state_26254__$1;
(statearr_26289_26324[(2)] = null);

(statearr_26289_26324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26255 === (10))){
var inst_26198 = (state_26254[(12)]);
var inst_26195 = (state_26254[(13)]);
var inst_26197 = (state_26254[(14)]);
var inst_26196 = (state_26254[(16)]);
var inst_26203 = cljs.core._nth.call(null,inst_26196,inst_26198);
var inst_26204 = cljs.core.async.muxch_STAR_.call(null,inst_26203);
var inst_26205 = cljs.core.async.close_BANG_.call(null,inst_26204);
var inst_26206 = (inst_26198 + (1));
var tmp26284 = inst_26195;
var tmp26285 = inst_26197;
var tmp26286 = inst_26196;
var inst_26195__$1 = tmp26284;
var inst_26196__$1 = tmp26286;
var inst_26197__$1 = tmp26285;
var inst_26198__$1 = inst_26206;
var state_26254__$1 = (function (){var statearr_26290 = state_26254;
(statearr_26290[(12)] = inst_26198__$1);

(statearr_26290[(13)] = inst_26195__$1);

(statearr_26290[(17)] = inst_26205);

(statearr_26290[(14)] = inst_26197__$1);

(statearr_26290[(16)] = inst_26196__$1);

return statearr_26290;
})();
var statearr_26291_26325 = state_26254__$1;
(statearr_26291_26325[(2)] = null);

(statearr_26291_26325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26255 === (18))){
var inst_26224 = (state_26254[(2)]);
var state_26254__$1 = state_26254;
var statearr_26292_26326 = state_26254__$1;
(statearr_26292_26326[(2)] = inst_26224);

(statearr_26292_26326[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26255 === (8))){
var inst_26198 = (state_26254[(12)]);
var inst_26197 = (state_26254[(14)]);
var inst_26200 = (inst_26198 < inst_26197);
var inst_26201 = inst_26200;
var state_26254__$1 = state_26254;
if(cljs.core.truth_(inst_26201)){
var statearr_26293_26327 = state_26254__$1;
(statearr_26293_26327[(1)] = (10));

} else {
var statearr_26294_26328 = state_26254__$1;
(statearr_26294_26328[(1)] = (11));

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
});})(c__25066__auto___26300,mults,ensure_mult,p))
;
return ((function (switch__24971__auto__,c__25066__auto___26300,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24972__auto__ = null;
var cljs$core$async$state_machine__24972__auto____0 = (function (){
var statearr_26295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26295[(0)] = cljs$core$async$state_machine__24972__auto__);

(statearr_26295[(1)] = (1));

return statearr_26295;
});
var cljs$core$async$state_machine__24972__auto____1 = (function (state_26254){
while(true){
var ret_value__24973__auto__ = (function (){try{while(true){
var result__24974__auto__ = switch__24971__auto__.call(null,state_26254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24974__auto__;
}
break;
}
}catch (e26296){if((e26296 instanceof Object)){
var ex__24975__auto__ = e26296;
var statearr_26297_26329 = state_26254;
(statearr_26297_26329[(5)] = ex__24975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26330 = state_26254;
state_26254 = G__26330;
continue;
} else {
return ret_value__24973__auto__;
}
break;
}
});
cljs$core$async$state_machine__24972__auto__ = function(state_26254){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24972__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24972__auto____1.call(this,state_26254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24972__auto____0;
cljs$core$async$state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24972__auto____1;
return cljs$core$async$state_machine__24972__auto__;
})()
;})(switch__24971__auto__,c__25066__auto___26300,mults,ensure_mult,p))
})();
var state__25068__auto__ = (function (){var statearr_26298 = f__25067__auto__.call(null);
(statearr_26298[(6)] = c__25066__auto___26300);

return statearr_26298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25068__auto__);
});})(c__25066__auto___26300,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__26332 = arguments.length;
switch (G__26332) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__26335 = arguments.length;
switch (G__26335) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__26338 = arguments.length;
switch (G__26338) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__25066__auto___26405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25066__auto___26405,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25067__auto__ = (function (){var switch__24971__auto__ = ((function (c__25066__auto___26405,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26377){
var state_val_26378 = (state_26377[(1)]);
if((state_val_26378 === (7))){
var state_26377__$1 = state_26377;
var statearr_26379_26406 = state_26377__$1;
(statearr_26379_26406[(2)] = null);

(statearr_26379_26406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (1))){
var state_26377__$1 = state_26377;
var statearr_26380_26407 = state_26377__$1;
(statearr_26380_26407[(2)] = null);

(statearr_26380_26407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (4))){
var inst_26341 = (state_26377[(7)]);
var inst_26343 = (inst_26341 < cnt);
var state_26377__$1 = state_26377;
if(cljs.core.truth_(inst_26343)){
var statearr_26381_26408 = state_26377__$1;
(statearr_26381_26408[(1)] = (6));

} else {
var statearr_26382_26409 = state_26377__$1;
(statearr_26382_26409[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (15))){
var inst_26373 = (state_26377[(2)]);
var state_26377__$1 = state_26377;
var statearr_26383_26410 = state_26377__$1;
(statearr_26383_26410[(2)] = inst_26373);

(statearr_26383_26410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (13))){
var inst_26366 = cljs.core.async.close_BANG_.call(null,out);
var state_26377__$1 = state_26377;
var statearr_26384_26411 = state_26377__$1;
(statearr_26384_26411[(2)] = inst_26366);

(statearr_26384_26411[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (6))){
var state_26377__$1 = state_26377;
var statearr_26385_26412 = state_26377__$1;
(statearr_26385_26412[(2)] = null);

(statearr_26385_26412[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (3))){
var inst_26375 = (state_26377[(2)]);
var state_26377__$1 = state_26377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26377__$1,inst_26375);
} else {
if((state_val_26378 === (12))){
var inst_26363 = (state_26377[(8)]);
var inst_26363__$1 = (state_26377[(2)]);
var inst_26364 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26363__$1);
var state_26377__$1 = (function (){var statearr_26386 = state_26377;
(statearr_26386[(8)] = inst_26363__$1);

return statearr_26386;
})();
if(cljs.core.truth_(inst_26364)){
var statearr_26387_26413 = state_26377__$1;
(statearr_26387_26413[(1)] = (13));

} else {
var statearr_26388_26414 = state_26377__$1;
(statearr_26388_26414[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (2))){
var inst_26340 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26341 = (0);
var state_26377__$1 = (function (){var statearr_26389 = state_26377;
(statearr_26389[(7)] = inst_26341);

(statearr_26389[(9)] = inst_26340);

return statearr_26389;
})();
var statearr_26390_26415 = state_26377__$1;
(statearr_26390_26415[(2)] = null);

(statearr_26390_26415[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (11))){
var inst_26341 = (state_26377[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26377,(10),Object,null,(9));
var inst_26350 = chs__$1.call(null,inst_26341);
var inst_26351 = done.call(null,inst_26341);
var inst_26352 = cljs.core.async.take_BANG_.call(null,inst_26350,inst_26351);
var state_26377__$1 = state_26377;
var statearr_26391_26416 = state_26377__$1;
(statearr_26391_26416[(2)] = inst_26352);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26377__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (9))){
var inst_26341 = (state_26377[(7)]);
var inst_26354 = (state_26377[(2)]);
var inst_26355 = (inst_26341 + (1));
var inst_26341__$1 = inst_26355;
var state_26377__$1 = (function (){var statearr_26392 = state_26377;
(statearr_26392[(10)] = inst_26354);

(statearr_26392[(7)] = inst_26341__$1);

return statearr_26392;
})();
var statearr_26393_26417 = state_26377__$1;
(statearr_26393_26417[(2)] = null);

(statearr_26393_26417[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (5))){
var inst_26361 = (state_26377[(2)]);
var state_26377__$1 = (function (){var statearr_26394 = state_26377;
(statearr_26394[(11)] = inst_26361);

return statearr_26394;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26377__$1,(12),dchan);
} else {
if((state_val_26378 === (14))){
var inst_26363 = (state_26377[(8)]);
var inst_26368 = cljs.core.apply.call(null,f,inst_26363);
var state_26377__$1 = state_26377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26377__$1,(16),out,inst_26368);
} else {
if((state_val_26378 === (16))){
var inst_26370 = (state_26377[(2)]);
var state_26377__$1 = (function (){var statearr_26395 = state_26377;
(statearr_26395[(12)] = inst_26370);

return statearr_26395;
})();
var statearr_26396_26418 = state_26377__$1;
(statearr_26396_26418[(2)] = null);

(statearr_26396_26418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (10))){
var inst_26345 = (state_26377[(2)]);
var inst_26346 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26377__$1 = (function (){var statearr_26397 = state_26377;
(statearr_26397[(13)] = inst_26345);

return statearr_26397;
})();
var statearr_26398_26419 = state_26377__$1;
(statearr_26398_26419[(2)] = inst_26346);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26377__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (8))){
var inst_26359 = (state_26377[(2)]);
var state_26377__$1 = state_26377;
var statearr_26399_26420 = state_26377__$1;
(statearr_26399_26420[(2)] = inst_26359);

(statearr_26399_26420[(1)] = (5));


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
});})(c__25066__auto___26405,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24971__auto__,c__25066__auto___26405,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24972__auto__ = null;
var cljs$core$async$state_machine__24972__auto____0 = (function (){
var statearr_26400 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26400[(0)] = cljs$core$async$state_machine__24972__auto__);

(statearr_26400[(1)] = (1));

return statearr_26400;
});
var cljs$core$async$state_machine__24972__auto____1 = (function (state_26377){
while(true){
var ret_value__24973__auto__ = (function (){try{while(true){
var result__24974__auto__ = switch__24971__auto__.call(null,state_26377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24974__auto__;
}
break;
}
}catch (e26401){if((e26401 instanceof Object)){
var ex__24975__auto__ = e26401;
var statearr_26402_26421 = state_26377;
(statearr_26402_26421[(5)] = ex__24975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26422 = state_26377;
state_26377 = G__26422;
continue;
} else {
return ret_value__24973__auto__;
}
break;
}
});
cljs$core$async$state_machine__24972__auto__ = function(state_26377){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24972__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24972__auto____1.call(this,state_26377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24972__auto____0;
cljs$core$async$state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24972__auto____1;
return cljs$core$async$state_machine__24972__auto__;
})()
;})(switch__24971__auto__,c__25066__auto___26405,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25068__auto__ = (function (){var statearr_26403 = f__25067__auto__.call(null);
(statearr_26403[(6)] = c__25066__auto___26405);

return statearr_26403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25068__auto__);
});})(c__25066__auto___26405,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__26425 = arguments.length;
switch (G__26425) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25066__auto___26479 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25066__auto___26479,out){
return (function (){
var f__25067__auto__ = (function (){var switch__24971__auto__ = ((function (c__25066__auto___26479,out){
return (function (state_26457){
var state_val_26458 = (state_26457[(1)]);
if((state_val_26458 === (7))){
var inst_26437 = (state_26457[(7)]);
var inst_26436 = (state_26457[(8)]);
var inst_26436__$1 = (state_26457[(2)]);
var inst_26437__$1 = cljs.core.nth.call(null,inst_26436__$1,(0),null);
var inst_26438 = cljs.core.nth.call(null,inst_26436__$1,(1),null);
var inst_26439 = (inst_26437__$1 == null);
var state_26457__$1 = (function (){var statearr_26459 = state_26457;
(statearr_26459[(7)] = inst_26437__$1);

(statearr_26459[(9)] = inst_26438);

(statearr_26459[(8)] = inst_26436__$1);

return statearr_26459;
})();
if(cljs.core.truth_(inst_26439)){
var statearr_26460_26480 = state_26457__$1;
(statearr_26460_26480[(1)] = (8));

} else {
var statearr_26461_26481 = state_26457__$1;
(statearr_26461_26481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (1))){
var inst_26426 = cljs.core.vec.call(null,chs);
var inst_26427 = inst_26426;
var state_26457__$1 = (function (){var statearr_26462 = state_26457;
(statearr_26462[(10)] = inst_26427);

return statearr_26462;
})();
var statearr_26463_26482 = state_26457__$1;
(statearr_26463_26482[(2)] = null);

(statearr_26463_26482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (4))){
var inst_26427 = (state_26457[(10)]);
var state_26457__$1 = state_26457;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26457__$1,(7),inst_26427);
} else {
if((state_val_26458 === (6))){
var inst_26453 = (state_26457[(2)]);
var state_26457__$1 = state_26457;
var statearr_26464_26483 = state_26457__$1;
(statearr_26464_26483[(2)] = inst_26453);

(statearr_26464_26483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (3))){
var inst_26455 = (state_26457[(2)]);
var state_26457__$1 = state_26457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26457__$1,inst_26455);
} else {
if((state_val_26458 === (2))){
var inst_26427 = (state_26457[(10)]);
var inst_26429 = cljs.core.count.call(null,inst_26427);
var inst_26430 = (inst_26429 > (0));
var state_26457__$1 = state_26457;
if(cljs.core.truth_(inst_26430)){
var statearr_26466_26484 = state_26457__$1;
(statearr_26466_26484[(1)] = (4));

} else {
var statearr_26467_26485 = state_26457__$1;
(statearr_26467_26485[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (11))){
var inst_26427 = (state_26457[(10)]);
var inst_26446 = (state_26457[(2)]);
var tmp26465 = inst_26427;
var inst_26427__$1 = tmp26465;
var state_26457__$1 = (function (){var statearr_26468 = state_26457;
(statearr_26468[(10)] = inst_26427__$1);

(statearr_26468[(11)] = inst_26446);

return statearr_26468;
})();
var statearr_26469_26486 = state_26457__$1;
(statearr_26469_26486[(2)] = null);

(statearr_26469_26486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (9))){
var inst_26437 = (state_26457[(7)]);
var state_26457__$1 = state_26457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26457__$1,(11),out,inst_26437);
} else {
if((state_val_26458 === (5))){
var inst_26451 = cljs.core.async.close_BANG_.call(null,out);
var state_26457__$1 = state_26457;
var statearr_26470_26487 = state_26457__$1;
(statearr_26470_26487[(2)] = inst_26451);

(statearr_26470_26487[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (10))){
var inst_26449 = (state_26457[(2)]);
var state_26457__$1 = state_26457;
var statearr_26471_26488 = state_26457__$1;
(statearr_26471_26488[(2)] = inst_26449);

(statearr_26471_26488[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (8))){
var inst_26437 = (state_26457[(7)]);
var inst_26438 = (state_26457[(9)]);
var inst_26427 = (state_26457[(10)]);
var inst_26436 = (state_26457[(8)]);
var inst_26441 = (function (){var cs = inst_26427;
var vec__26432 = inst_26436;
var v = inst_26437;
var c = inst_26438;
return ((function (cs,vec__26432,v,c,inst_26437,inst_26438,inst_26427,inst_26436,state_val_26458,c__25066__auto___26479,out){
return (function (p1__26423_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26423_SHARP_);
});
;})(cs,vec__26432,v,c,inst_26437,inst_26438,inst_26427,inst_26436,state_val_26458,c__25066__auto___26479,out))
})();
var inst_26442 = cljs.core.filterv.call(null,inst_26441,inst_26427);
var inst_26427__$1 = inst_26442;
var state_26457__$1 = (function (){var statearr_26472 = state_26457;
(statearr_26472[(10)] = inst_26427__$1);

return statearr_26472;
})();
var statearr_26473_26489 = state_26457__$1;
(statearr_26473_26489[(2)] = null);

(statearr_26473_26489[(1)] = (2));


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
});})(c__25066__auto___26479,out))
;
return ((function (switch__24971__auto__,c__25066__auto___26479,out){
return (function() {
var cljs$core$async$state_machine__24972__auto__ = null;
var cljs$core$async$state_machine__24972__auto____0 = (function (){
var statearr_26474 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26474[(0)] = cljs$core$async$state_machine__24972__auto__);

(statearr_26474[(1)] = (1));

return statearr_26474;
});
var cljs$core$async$state_machine__24972__auto____1 = (function (state_26457){
while(true){
var ret_value__24973__auto__ = (function (){try{while(true){
var result__24974__auto__ = switch__24971__auto__.call(null,state_26457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24974__auto__;
}
break;
}
}catch (e26475){if((e26475 instanceof Object)){
var ex__24975__auto__ = e26475;
var statearr_26476_26490 = state_26457;
(statearr_26476_26490[(5)] = ex__24975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26491 = state_26457;
state_26457 = G__26491;
continue;
} else {
return ret_value__24973__auto__;
}
break;
}
});
cljs$core$async$state_machine__24972__auto__ = function(state_26457){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24972__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24972__auto____1.call(this,state_26457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24972__auto____0;
cljs$core$async$state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24972__auto____1;
return cljs$core$async$state_machine__24972__auto__;
})()
;})(switch__24971__auto__,c__25066__auto___26479,out))
})();
var state__25068__auto__ = (function (){var statearr_26477 = f__25067__auto__.call(null);
(statearr_26477[(6)] = c__25066__auto___26479);

return statearr_26477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25068__auto__);
});})(c__25066__auto___26479,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__26493 = arguments.length;
switch (G__26493) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25066__auto___26538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25066__auto___26538,out){
return (function (){
var f__25067__auto__ = (function (){var switch__24971__auto__ = ((function (c__25066__auto___26538,out){
return (function (state_26517){
var state_val_26518 = (state_26517[(1)]);
if((state_val_26518 === (7))){
var inst_26499 = (state_26517[(7)]);
var inst_26499__$1 = (state_26517[(2)]);
var inst_26500 = (inst_26499__$1 == null);
var inst_26501 = cljs.core.not.call(null,inst_26500);
var state_26517__$1 = (function (){var statearr_26519 = state_26517;
(statearr_26519[(7)] = inst_26499__$1);

return statearr_26519;
})();
if(inst_26501){
var statearr_26520_26539 = state_26517__$1;
(statearr_26520_26539[(1)] = (8));

} else {
var statearr_26521_26540 = state_26517__$1;
(statearr_26521_26540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (1))){
var inst_26494 = (0);
var state_26517__$1 = (function (){var statearr_26522 = state_26517;
(statearr_26522[(8)] = inst_26494);

return statearr_26522;
})();
var statearr_26523_26541 = state_26517__$1;
(statearr_26523_26541[(2)] = null);

(statearr_26523_26541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (4))){
var state_26517__$1 = state_26517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26517__$1,(7),ch);
} else {
if((state_val_26518 === (6))){
var inst_26512 = (state_26517[(2)]);
var state_26517__$1 = state_26517;
var statearr_26524_26542 = state_26517__$1;
(statearr_26524_26542[(2)] = inst_26512);

(statearr_26524_26542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (3))){
var inst_26514 = (state_26517[(2)]);
var inst_26515 = cljs.core.async.close_BANG_.call(null,out);
var state_26517__$1 = (function (){var statearr_26525 = state_26517;
(statearr_26525[(9)] = inst_26514);

return statearr_26525;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26517__$1,inst_26515);
} else {
if((state_val_26518 === (2))){
var inst_26494 = (state_26517[(8)]);
var inst_26496 = (inst_26494 < n);
var state_26517__$1 = state_26517;
if(cljs.core.truth_(inst_26496)){
var statearr_26526_26543 = state_26517__$1;
(statearr_26526_26543[(1)] = (4));

} else {
var statearr_26527_26544 = state_26517__$1;
(statearr_26527_26544[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (11))){
var inst_26494 = (state_26517[(8)]);
var inst_26504 = (state_26517[(2)]);
var inst_26505 = (inst_26494 + (1));
var inst_26494__$1 = inst_26505;
var state_26517__$1 = (function (){var statearr_26528 = state_26517;
(statearr_26528[(10)] = inst_26504);

(statearr_26528[(8)] = inst_26494__$1);

return statearr_26528;
})();
var statearr_26529_26545 = state_26517__$1;
(statearr_26529_26545[(2)] = null);

(statearr_26529_26545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (9))){
var state_26517__$1 = state_26517;
var statearr_26530_26546 = state_26517__$1;
(statearr_26530_26546[(2)] = null);

(statearr_26530_26546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (5))){
var state_26517__$1 = state_26517;
var statearr_26531_26547 = state_26517__$1;
(statearr_26531_26547[(2)] = null);

(statearr_26531_26547[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (10))){
var inst_26509 = (state_26517[(2)]);
var state_26517__$1 = state_26517;
var statearr_26532_26548 = state_26517__$1;
(statearr_26532_26548[(2)] = inst_26509);

(statearr_26532_26548[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (8))){
var inst_26499 = (state_26517[(7)]);
var state_26517__$1 = state_26517;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26517__$1,(11),out,inst_26499);
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
});})(c__25066__auto___26538,out))
;
return ((function (switch__24971__auto__,c__25066__auto___26538,out){
return (function() {
var cljs$core$async$state_machine__24972__auto__ = null;
var cljs$core$async$state_machine__24972__auto____0 = (function (){
var statearr_26533 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26533[(0)] = cljs$core$async$state_machine__24972__auto__);

(statearr_26533[(1)] = (1));

return statearr_26533;
});
var cljs$core$async$state_machine__24972__auto____1 = (function (state_26517){
while(true){
var ret_value__24973__auto__ = (function (){try{while(true){
var result__24974__auto__ = switch__24971__auto__.call(null,state_26517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24974__auto__;
}
break;
}
}catch (e26534){if((e26534 instanceof Object)){
var ex__24975__auto__ = e26534;
var statearr_26535_26549 = state_26517;
(statearr_26535_26549[(5)] = ex__24975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26550 = state_26517;
state_26517 = G__26550;
continue;
} else {
return ret_value__24973__auto__;
}
break;
}
});
cljs$core$async$state_machine__24972__auto__ = function(state_26517){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24972__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24972__auto____1.call(this,state_26517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24972__auto____0;
cljs$core$async$state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24972__auto____1;
return cljs$core$async$state_machine__24972__auto__;
})()
;})(switch__24971__auto__,c__25066__auto___26538,out))
})();
var state__25068__auto__ = (function (){var statearr_26536 = f__25067__auto__.call(null);
(statearr_26536[(6)] = c__25066__auto___26538);

return statearr_26536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25068__auto__);
});})(c__25066__auto___26538,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26552 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26552 = (function (f,ch,meta26553){
this.f = f;
this.ch = ch;
this.meta26553 = meta26553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26554,meta26553__$1){
var self__ = this;
var _26554__$1 = this;
return (new cljs.core.async.t_cljs$core$async26552(self__.f,self__.ch,meta26553__$1));
});

cljs.core.async.t_cljs$core$async26552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26554){
var self__ = this;
var _26554__$1 = this;
return self__.meta26553;
});

cljs.core.async.t_cljs$core$async26552.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26552.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26552.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26552.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26552.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26555 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26555 = (function (f,ch,meta26553,_,fn1,meta26556){
this.f = f;
this.ch = ch;
this.meta26553 = meta26553;
this._ = _;
this.fn1 = fn1;
this.meta26556 = meta26556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26557,meta26556__$1){
var self__ = this;
var _26557__$1 = this;
return (new cljs.core.async.t_cljs$core$async26555(self__.f,self__.ch,self__.meta26553,self__._,self__.fn1,meta26556__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26555.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26557){
var self__ = this;
var _26557__$1 = this;
return self__.meta26556;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26555.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26555.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26555.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26555.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26551_SHARP_){
return f1.call(null,(((p1__26551_SHARP_ == null))?null:self__.f.call(null,p1__26551_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26555.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26553","meta26553",1863630871,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26552","cljs.core.async/t_cljs$core$async26552",1393217803,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26556","meta26556",-1754332794,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26555.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26555.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26555";

cljs.core.async.t_cljs$core$async26555.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26555");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26555.
 */
cljs.core.async.__GT_t_cljs$core$async26555 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26555(f__$1,ch__$1,meta26553__$1,___$2,fn1__$1,meta26556){
return (new cljs.core.async.t_cljs$core$async26555(f__$1,ch__$1,meta26553__$1,___$2,fn1__$1,meta26556));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26555(self__.f,self__.ch,self__.meta26553,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26552.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26552.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26552.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26553","meta26553",1863630871,null)], null);
});

cljs.core.async.t_cljs$core$async26552.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26552";

cljs.core.async.t_cljs$core$async26552.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26552");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26552.
 */
cljs.core.async.__GT_t_cljs$core$async26552 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26552(f__$1,ch__$1,meta26553){
return (new cljs.core.async.t_cljs$core$async26552(f__$1,ch__$1,meta26553));
});

}

return (new cljs.core.async.t_cljs$core$async26552(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26558 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26558 = (function (f,ch,meta26559){
this.f = f;
this.ch = ch;
this.meta26559 = meta26559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26560,meta26559__$1){
var self__ = this;
var _26560__$1 = this;
return (new cljs.core.async.t_cljs$core$async26558(self__.f,self__.ch,meta26559__$1));
});

cljs.core.async.t_cljs$core$async26558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26560){
var self__ = this;
var _26560__$1 = this;
return self__.meta26559;
});

cljs.core.async.t_cljs$core$async26558.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26558.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26558.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26558.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26558.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26558.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26558.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26559","meta26559",-1436061787,null)], null);
});

cljs.core.async.t_cljs$core$async26558.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26558.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26558";

cljs.core.async.t_cljs$core$async26558.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26558");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26558.
 */
cljs.core.async.__GT_t_cljs$core$async26558 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26558(f__$1,ch__$1,meta26559){
return (new cljs.core.async.t_cljs$core$async26558(f__$1,ch__$1,meta26559));
});

}

return (new cljs.core.async.t_cljs$core$async26558(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26561 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26561 = (function (p,ch,meta26562){
this.p = p;
this.ch = ch;
this.meta26562 = meta26562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26563,meta26562__$1){
var self__ = this;
var _26563__$1 = this;
return (new cljs.core.async.t_cljs$core$async26561(self__.p,self__.ch,meta26562__$1));
});

cljs.core.async.t_cljs$core$async26561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26563){
var self__ = this;
var _26563__$1 = this;
return self__.meta26562;
});

cljs.core.async.t_cljs$core$async26561.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26561.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26561.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26561.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26561.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26561.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26561.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26561.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26562","meta26562",2143889613,null)], null);
});

cljs.core.async.t_cljs$core$async26561.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26561";

cljs.core.async.t_cljs$core$async26561.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26561");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26561.
 */
cljs.core.async.__GT_t_cljs$core$async26561 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26561(p__$1,ch__$1,meta26562){
return (new cljs.core.async.t_cljs$core$async26561(p__$1,ch__$1,meta26562));
});

}

return (new cljs.core.async.t_cljs$core$async26561(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__26565 = arguments.length;
switch (G__26565) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25066__auto___26605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25066__auto___26605,out){
return (function (){
var f__25067__auto__ = (function (){var switch__24971__auto__ = ((function (c__25066__auto___26605,out){
return (function (state_26586){
var state_val_26587 = (state_26586[(1)]);
if((state_val_26587 === (7))){
var inst_26582 = (state_26586[(2)]);
var state_26586__$1 = state_26586;
var statearr_26588_26606 = state_26586__$1;
(statearr_26588_26606[(2)] = inst_26582);

(statearr_26588_26606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (1))){
var state_26586__$1 = state_26586;
var statearr_26589_26607 = state_26586__$1;
(statearr_26589_26607[(2)] = null);

(statearr_26589_26607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (4))){
var inst_26568 = (state_26586[(7)]);
var inst_26568__$1 = (state_26586[(2)]);
var inst_26569 = (inst_26568__$1 == null);
var state_26586__$1 = (function (){var statearr_26590 = state_26586;
(statearr_26590[(7)] = inst_26568__$1);

return statearr_26590;
})();
if(cljs.core.truth_(inst_26569)){
var statearr_26591_26608 = state_26586__$1;
(statearr_26591_26608[(1)] = (5));

} else {
var statearr_26592_26609 = state_26586__$1;
(statearr_26592_26609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (6))){
var inst_26568 = (state_26586[(7)]);
var inst_26573 = p.call(null,inst_26568);
var state_26586__$1 = state_26586;
if(cljs.core.truth_(inst_26573)){
var statearr_26593_26610 = state_26586__$1;
(statearr_26593_26610[(1)] = (8));

} else {
var statearr_26594_26611 = state_26586__$1;
(statearr_26594_26611[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (3))){
var inst_26584 = (state_26586[(2)]);
var state_26586__$1 = state_26586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26586__$1,inst_26584);
} else {
if((state_val_26587 === (2))){
var state_26586__$1 = state_26586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26586__$1,(4),ch);
} else {
if((state_val_26587 === (11))){
var inst_26576 = (state_26586[(2)]);
var state_26586__$1 = state_26586;
var statearr_26595_26612 = state_26586__$1;
(statearr_26595_26612[(2)] = inst_26576);

(statearr_26595_26612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (9))){
var state_26586__$1 = state_26586;
var statearr_26596_26613 = state_26586__$1;
(statearr_26596_26613[(2)] = null);

(statearr_26596_26613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (5))){
var inst_26571 = cljs.core.async.close_BANG_.call(null,out);
var state_26586__$1 = state_26586;
var statearr_26597_26614 = state_26586__$1;
(statearr_26597_26614[(2)] = inst_26571);

(statearr_26597_26614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (10))){
var inst_26579 = (state_26586[(2)]);
var state_26586__$1 = (function (){var statearr_26598 = state_26586;
(statearr_26598[(8)] = inst_26579);

return statearr_26598;
})();
var statearr_26599_26615 = state_26586__$1;
(statearr_26599_26615[(2)] = null);

(statearr_26599_26615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (8))){
var inst_26568 = (state_26586[(7)]);
var state_26586__$1 = state_26586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26586__$1,(11),out,inst_26568);
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
});})(c__25066__auto___26605,out))
;
return ((function (switch__24971__auto__,c__25066__auto___26605,out){
return (function() {
var cljs$core$async$state_machine__24972__auto__ = null;
var cljs$core$async$state_machine__24972__auto____0 = (function (){
var statearr_26600 = [null,null,null,null,null,null,null,null,null];
(statearr_26600[(0)] = cljs$core$async$state_machine__24972__auto__);

(statearr_26600[(1)] = (1));

return statearr_26600;
});
var cljs$core$async$state_machine__24972__auto____1 = (function (state_26586){
while(true){
var ret_value__24973__auto__ = (function (){try{while(true){
var result__24974__auto__ = switch__24971__auto__.call(null,state_26586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24974__auto__;
}
break;
}
}catch (e26601){if((e26601 instanceof Object)){
var ex__24975__auto__ = e26601;
var statearr_26602_26616 = state_26586;
(statearr_26602_26616[(5)] = ex__24975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26617 = state_26586;
state_26586 = G__26617;
continue;
} else {
return ret_value__24973__auto__;
}
break;
}
});
cljs$core$async$state_machine__24972__auto__ = function(state_26586){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24972__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24972__auto____1.call(this,state_26586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24972__auto____0;
cljs$core$async$state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24972__auto____1;
return cljs$core$async$state_machine__24972__auto__;
})()
;})(switch__24971__auto__,c__25066__auto___26605,out))
})();
var state__25068__auto__ = (function (){var statearr_26603 = f__25067__auto__.call(null);
(statearr_26603[(6)] = c__25066__auto___26605);

return statearr_26603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25068__auto__);
});})(c__25066__auto___26605,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26619 = arguments.length;
switch (G__26619) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__25066__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25066__auto__){
return (function (){
var f__25067__auto__ = (function (){var switch__24971__auto__ = ((function (c__25066__auto__){
return (function (state_26682){
var state_val_26683 = (state_26682[(1)]);
if((state_val_26683 === (7))){
var inst_26678 = (state_26682[(2)]);
var state_26682__$1 = state_26682;
var statearr_26684_26722 = state_26682__$1;
(statearr_26684_26722[(2)] = inst_26678);

(statearr_26684_26722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (20))){
var inst_26648 = (state_26682[(7)]);
var inst_26659 = (state_26682[(2)]);
var inst_26660 = cljs.core.next.call(null,inst_26648);
var inst_26634 = inst_26660;
var inst_26635 = null;
var inst_26636 = (0);
var inst_26637 = (0);
var state_26682__$1 = (function (){var statearr_26685 = state_26682;
(statearr_26685[(8)] = inst_26637);

(statearr_26685[(9)] = inst_26659);

(statearr_26685[(10)] = inst_26636);

(statearr_26685[(11)] = inst_26635);

(statearr_26685[(12)] = inst_26634);

return statearr_26685;
})();
var statearr_26686_26723 = state_26682__$1;
(statearr_26686_26723[(2)] = null);

(statearr_26686_26723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (1))){
var state_26682__$1 = state_26682;
var statearr_26687_26724 = state_26682__$1;
(statearr_26687_26724[(2)] = null);

(statearr_26687_26724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (4))){
var inst_26623 = (state_26682[(13)]);
var inst_26623__$1 = (state_26682[(2)]);
var inst_26624 = (inst_26623__$1 == null);
var state_26682__$1 = (function (){var statearr_26688 = state_26682;
(statearr_26688[(13)] = inst_26623__$1);

return statearr_26688;
})();
if(cljs.core.truth_(inst_26624)){
var statearr_26689_26725 = state_26682__$1;
(statearr_26689_26725[(1)] = (5));

} else {
var statearr_26690_26726 = state_26682__$1;
(statearr_26690_26726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (15))){
var state_26682__$1 = state_26682;
var statearr_26694_26727 = state_26682__$1;
(statearr_26694_26727[(2)] = null);

(statearr_26694_26727[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (21))){
var state_26682__$1 = state_26682;
var statearr_26695_26728 = state_26682__$1;
(statearr_26695_26728[(2)] = null);

(statearr_26695_26728[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (13))){
var inst_26637 = (state_26682[(8)]);
var inst_26636 = (state_26682[(10)]);
var inst_26635 = (state_26682[(11)]);
var inst_26634 = (state_26682[(12)]);
var inst_26644 = (state_26682[(2)]);
var inst_26645 = (inst_26637 + (1));
var tmp26691 = inst_26636;
var tmp26692 = inst_26635;
var tmp26693 = inst_26634;
var inst_26634__$1 = tmp26693;
var inst_26635__$1 = tmp26692;
var inst_26636__$1 = tmp26691;
var inst_26637__$1 = inst_26645;
var state_26682__$1 = (function (){var statearr_26696 = state_26682;
(statearr_26696[(8)] = inst_26637__$1);

(statearr_26696[(14)] = inst_26644);

(statearr_26696[(10)] = inst_26636__$1);

(statearr_26696[(11)] = inst_26635__$1);

(statearr_26696[(12)] = inst_26634__$1);

return statearr_26696;
})();
var statearr_26697_26729 = state_26682__$1;
(statearr_26697_26729[(2)] = null);

(statearr_26697_26729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (22))){
var state_26682__$1 = state_26682;
var statearr_26698_26730 = state_26682__$1;
(statearr_26698_26730[(2)] = null);

(statearr_26698_26730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (6))){
var inst_26623 = (state_26682[(13)]);
var inst_26632 = f.call(null,inst_26623);
var inst_26633 = cljs.core.seq.call(null,inst_26632);
var inst_26634 = inst_26633;
var inst_26635 = null;
var inst_26636 = (0);
var inst_26637 = (0);
var state_26682__$1 = (function (){var statearr_26699 = state_26682;
(statearr_26699[(8)] = inst_26637);

(statearr_26699[(10)] = inst_26636);

(statearr_26699[(11)] = inst_26635);

(statearr_26699[(12)] = inst_26634);

return statearr_26699;
})();
var statearr_26700_26731 = state_26682__$1;
(statearr_26700_26731[(2)] = null);

(statearr_26700_26731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (17))){
var inst_26648 = (state_26682[(7)]);
var inst_26652 = cljs.core.chunk_first.call(null,inst_26648);
var inst_26653 = cljs.core.chunk_rest.call(null,inst_26648);
var inst_26654 = cljs.core.count.call(null,inst_26652);
var inst_26634 = inst_26653;
var inst_26635 = inst_26652;
var inst_26636 = inst_26654;
var inst_26637 = (0);
var state_26682__$1 = (function (){var statearr_26701 = state_26682;
(statearr_26701[(8)] = inst_26637);

(statearr_26701[(10)] = inst_26636);

(statearr_26701[(11)] = inst_26635);

(statearr_26701[(12)] = inst_26634);

return statearr_26701;
})();
var statearr_26702_26732 = state_26682__$1;
(statearr_26702_26732[(2)] = null);

(statearr_26702_26732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (3))){
var inst_26680 = (state_26682[(2)]);
var state_26682__$1 = state_26682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26682__$1,inst_26680);
} else {
if((state_val_26683 === (12))){
var inst_26668 = (state_26682[(2)]);
var state_26682__$1 = state_26682;
var statearr_26703_26733 = state_26682__$1;
(statearr_26703_26733[(2)] = inst_26668);

(statearr_26703_26733[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (2))){
var state_26682__$1 = state_26682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26682__$1,(4),in$);
} else {
if((state_val_26683 === (23))){
var inst_26676 = (state_26682[(2)]);
var state_26682__$1 = state_26682;
var statearr_26704_26734 = state_26682__$1;
(statearr_26704_26734[(2)] = inst_26676);

(statearr_26704_26734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (19))){
var inst_26663 = (state_26682[(2)]);
var state_26682__$1 = state_26682;
var statearr_26705_26735 = state_26682__$1;
(statearr_26705_26735[(2)] = inst_26663);

(statearr_26705_26735[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (11))){
var inst_26648 = (state_26682[(7)]);
var inst_26634 = (state_26682[(12)]);
var inst_26648__$1 = cljs.core.seq.call(null,inst_26634);
var state_26682__$1 = (function (){var statearr_26706 = state_26682;
(statearr_26706[(7)] = inst_26648__$1);

return statearr_26706;
})();
if(inst_26648__$1){
var statearr_26707_26736 = state_26682__$1;
(statearr_26707_26736[(1)] = (14));

} else {
var statearr_26708_26737 = state_26682__$1;
(statearr_26708_26737[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (9))){
var inst_26670 = (state_26682[(2)]);
var inst_26671 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26682__$1 = (function (){var statearr_26709 = state_26682;
(statearr_26709[(15)] = inst_26670);

return statearr_26709;
})();
if(cljs.core.truth_(inst_26671)){
var statearr_26710_26738 = state_26682__$1;
(statearr_26710_26738[(1)] = (21));

} else {
var statearr_26711_26739 = state_26682__$1;
(statearr_26711_26739[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (5))){
var inst_26626 = cljs.core.async.close_BANG_.call(null,out);
var state_26682__$1 = state_26682;
var statearr_26712_26740 = state_26682__$1;
(statearr_26712_26740[(2)] = inst_26626);

(statearr_26712_26740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (14))){
var inst_26648 = (state_26682[(7)]);
var inst_26650 = cljs.core.chunked_seq_QMARK_.call(null,inst_26648);
var state_26682__$1 = state_26682;
if(inst_26650){
var statearr_26713_26741 = state_26682__$1;
(statearr_26713_26741[(1)] = (17));

} else {
var statearr_26714_26742 = state_26682__$1;
(statearr_26714_26742[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (16))){
var inst_26666 = (state_26682[(2)]);
var state_26682__$1 = state_26682;
var statearr_26715_26743 = state_26682__$1;
(statearr_26715_26743[(2)] = inst_26666);

(statearr_26715_26743[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26683 === (10))){
var inst_26637 = (state_26682[(8)]);
var inst_26635 = (state_26682[(11)]);
var inst_26642 = cljs.core._nth.call(null,inst_26635,inst_26637);
var state_26682__$1 = state_26682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26682__$1,(13),out,inst_26642);
} else {
if((state_val_26683 === (18))){
var inst_26648 = (state_26682[(7)]);
var inst_26657 = cljs.core.first.call(null,inst_26648);
var state_26682__$1 = state_26682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26682__$1,(20),out,inst_26657);
} else {
if((state_val_26683 === (8))){
var inst_26637 = (state_26682[(8)]);
var inst_26636 = (state_26682[(10)]);
var inst_26639 = (inst_26637 < inst_26636);
var inst_26640 = inst_26639;
var state_26682__$1 = state_26682;
if(cljs.core.truth_(inst_26640)){
var statearr_26716_26744 = state_26682__$1;
(statearr_26716_26744[(1)] = (10));

} else {
var statearr_26717_26745 = state_26682__$1;
(statearr_26717_26745[(1)] = (11));

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
});})(c__25066__auto__))
;
return ((function (switch__24971__auto__,c__25066__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24972__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24972__auto____0 = (function (){
var statearr_26718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26718[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24972__auto__);

(statearr_26718[(1)] = (1));

return statearr_26718;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24972__auto____1 = (function (state_26682){
while(true){
var ret_value__24973__auto__ = (function (){try{while(true){
var result__24974__auto__ = switch__24971__auto__.call(null,state_26682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24974__auto__;
}
break;
}
}catch (e26719){if((e26719 instanceof Object)){
var ex__24975__auto__ = e26719;
var statearr_26720_26746 = state_26682;
(statearr_26720_26746[(5)] = ex__24975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26747 = state_26682;
state_26682 = G__26747;
continue;
} else {
return ret_value__24973__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24972__auto__ = function(state_26682){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24972__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24972__auto____1.call(this,state_26682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24972__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24972__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24972__auto__;
})()
;})(switch__24971__auto__,c__25066__auto__))
})();
var state__25068__auto__ = (function (){var statearr_26721 = f__25067__auto__.call(null);
(statearr_26721[(6)] = c__25066__auto__);

return statearr_26721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25068__auto__);
});})(c__25066__auto__))
);

return c__25066__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26749 = arguments.length;
switch (G__26749) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__26752 = arguments.length;
switch (G__26752) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__26755 = arguments.length;
switch (G__26755) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25066__auto___26802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25066__auto___26802,out){
return (function (){
var f__25067__auto__ = (function (){var switch__24971__auto__ = ((function (c__25066__auto___26802,out){
return (function (state_26779){
var state_val_26780 = (state_26779[(1)]);
if((state_val_26780 === (7))){
var inst_26774 = (state_26779[(2)]);
var state_26779__$1 = state_26779;
var statearr_26781_26803 = state_26779__$1;
(statearr_26781_26803[(2)] = inst_26774);

(statearr_26781_26803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (1))){
var inst_26756 = null;
var state_26779__$1 = (function (){var statearr_26782 = state_26779;
(statearr_26782[(7)] = inst_26756);

return statearr_26782;
})();
var statearr_26783_26804 = state_26779__$1;
(statearr_26783_26804[(2)] = null);

(statearr_26783_26804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (4))){
var inst_26759 = (state_26779[(8)]);
var inst_26759__$1 = (state_26779[(2)]);
var inst_26760 = (inst_26759__$1 == null);
var inst_26761 = cljs.core.not.call(null,inst_26760);
var state_26779__$1 = (function (){var statearr_26784 = state_26779;
(statearr_26784[(8)] = inst_26759__$1);

return statearr_26784;
})();
if(inst_26761){
var statearr_26785_26805 = state_26779__$1;
(statearr_26785_26805[(1)] = (5));

} else {
var statearr_26786_26806 = state_26779__$1;
(statearr_26786_26806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (6))){
var state_26779__$1 = state_26779;
var statearr_26787_26807 = state_26779__$1;
(statearr_26787_26807[(2)] = null);

(statearr_26787_26807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (3))){
var inst_26776 = (state_26779[(2)]);
var inst_26777 = cljs.core.async.close_BANG_.call(null,out);
var state_26779__$1 = (function (){var statearr_26788 = state_26779;
(statearr_26788[(9)] = inst_26776);

return statearr_26788;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26779__$1,inst_26777);
} else {
if((state_val_26780 === (2))){
var state_26779__$1 = state_26779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26779__$1,(4),ch);
} else {
if((state_val_26780 === (11))){
var inst_26759 = (state_26779[(8)]);
var inst_26768 = (state_26779[(2)]);
var inst_26756 = inst_26759;
var state_26779__$1 = (function (){var statearr_26789 = state_26779;
(statearr_26789[(10)] = inst_26768);

(statearr_26789[(7)] = inst_26756);

return statearr_26789;
})();
var statearr_26790_26808 = state_26779__$1;
(statearr_26790_26808[(2)] = null);

(statearr_26790_26808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (9))){
var inst_26759 = (state_26779[(8)]);
var state_26779__$1 = state_26779;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26779__$1,(11),out,inst_26759);
} else {
if((state_val_26780 === (5))){
var inst_26759 = (state_26779[(8)]);
var inst_26756 = (state_26779[(7)]);
var inst_26763 = cljs.core._EQ_.call(null,inst_26759,inst_26756);
var state_26779__$1 = state_26779;
if(inst_26763){
var statearr_26792_26809 = state_26779__$1;
(statearr_26792_26809[(1)] = (8));

} else {
var statearr_26793_26810 = state_26779__$1;
(statearr_26793_26810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (10))){
var inst_26771 = (state_26779[(2)]);
var state_26779__$1 = state_26779;
var statearr_26794_26811 = state_26779__$1;
(statearr_26794_26811[(2)] = inst_26771);

(statearr_26794_26811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (8))){
var inst_26756 = (state_26779[(7)]);
var tmp26791 = inst_26756;
var inst_26756__$1 = tmp26791;
var state_26779__$1 = (function (){var statearr_26795 = state_26779;
(statearr_26795[(7)] = inst_26756__$1);

return statearr_26795;
})();
var statearr_26796_26812 = state_26779__$1;
(statearr_26796_26812[(2)] = null);

(statearr_26796_26812[(1)] = (2));


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
});})(c__25066__auto___26802,out))
;
return ((function (switch__24971__auto__,c__25066__auto___26802,out){
return (function() {
var cljs$core$async$state_machine__24972__auto__ = null;
var cljs$core$async$state_machine__24972__auto____0 = (function (){
var statearr_26797 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26797[(0)] = cljs$core$async$state_machine__24972__auto__);

(statearr_26797[(1)] = (1));

return statearr_26797;
});
var cljs$core$async$state_machine__24972__auto____1 = (function (state_26779){
while(true){
var ret_value__24973__auto__ = (function (){try{while(true){
var result__24974__auto__ = switch__24971__auto__.call(null,state_26779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24974__auto__;
}
break;
}
}catch (e26798){if((e26798 instanceof Object)){
var ex__24975__auto__ = e26798;
var statearr_26799_26813 = state_26779;
(statearr_26799_26813[(5)] = ex__24975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26814 = state_26779;
state_26779 = G__26814;
continue;
} else {
return ret_value__24973__auto__;
}
break;
}
});
cljs$core$async$state_machine__24972__auto__ = function(state_26779){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24972__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24972__auto____1.call(this,state_26779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24972__auto____0;
cljs$core$async$state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24972__auto____1;
return cljs$core$async$state_machine__24972__auto__;
})()
;})(switch__24971__auto__,c__25066__auto___26802,out))
})();
var state__25068__auto__ = (function (){var statearr_26800 = f__25067__auto__.call(null);
(statearr_26800[(6)] = c__25066__auto___26802);

return statearr_26800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25068__auto__);
});})(c__25066__auto___26802,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26816 = arguments.length;
switch (G__26816) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25066__auto___26882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25066__auto___26882,out){
return (function (){
var f__25067__auto__ = (function (){var switch__24971__auto__ = ((function (c__25066__auto___26882,out){
return (function (state_26854){
var state_val_26855 = (state_26854[(1)]);
if((state_val_26855 === (7))){
var inst_26850 = (state_26854[(2)]);
var state_26854__$1 = state_26854;
var statearr_26856_26883 = state_26854__$1;
(statearr_26856_26883[(2)] = inst_26850);

(statearr_26856_26883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (1))){
var inst_26817 = (new Array(n));
var inst_26818 = inst_26817;
var inst_26819 = (0);
var state_26854__$1 = (function (){var statearr_26857 = state_26854;
(statearr_26857[(7)] = inst_26818);

(statearr_26857[(8)] = inst_26819);

return statearr_26857;
})();
var statearr_26858_26884 = state_26854__$1;
(statearr_26858_26884[(2)] = null);

(statearr_26858_26884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (4))){
var inst_26822 = (state_26854[(9)]);
var inst_26822__$1 = (state_26854[(2)]);
var inst_26823 = (inst_26822__$1 == null);
var inst_26824 = cljs.core.not.call(null,inst_26823);
var state_26854__$1 = (function (){var statearr_26859 = state_26854;
(statearr_26859[(9)] = inst_26822__$1);

return statearr_26859;
})();
if(inst_26824){
var statearr_26860_26885 = state_26854__$1;
(statearr_26860_26885[(1)] = (5));

} else {
var statearr_26861_26886 = state_26854__$1;
(statearr_26861_26886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (15))){
var inst_26844 = (state_26854[(2)]);
var state_26854__$1 = state_26854;
var statearr_26862_26887 = state_26854__$1;
(statearr_26862_26887[(2)] = inst_26844);

(statearr_26862_26887[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (13))){
var state_26854__$1 = state_26854;
var statearr_26863_26888 = state_26854__$1;
(statearr_26863_26888[(2)] = null);

(statearr_26863_26888[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (6))){
var inst_26819 = (state_26854[(8)]);
var inst_26840 = (inst_26819 > (0));
var state_26854__$1 = state_26854;
if(cljs.core.truth_(inst_26840)){
var statearr_26864_26889 = state_26854__$1;
(statearr_26864_26889[(1)] = (12));

} else {
var statearr_26865_26890 = state_26854__$1;
(statearr_26865_26890[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (3))){
var inst_26852 = (state_26854[(2)]);
var state_26854__$1 = state_26854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26854__$1,inst_26852);
} else {
if((state_val_26855 === (12))){
var inst_26818 = (state_26854[(7)]);
var inst_26842 = cljs.core.vec.call(null,inst_26818);
var state_26854__$1 = state_26854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26854__$1,(15),out,inst_26842);
} else {
if((state_val_26855 === (2))){
var state_26854__$1 = state_26854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26854__$1,(4),ch);
} else {
if((state_val_26855 === (11))){
var inst_26834 = (state_26854[(2)]);
var inst_26835 = (new Array(n));
var inst_26818 = inst_26835;
var inst_26819 = (0);
var state_26854__$1 = (function (){var statearr_26866 = state_26854;
(statearr_26866[(7)] = inst_26818);

(statearr_26866[(10)] = inst_26834);

(statearr_26866[(8)] = inst_26819);

return statearr_26866;
})();
var statearr_26867_26891 = state_26854__$1;
(statearr_26867_26891[(2)] = null);

(statearr_26867_26891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (9))){
var inst_26818 = (state_26854[(7)]);
var inst_26832 = cljs.core.vec.call(null,inst_26818);
var state_26854__$1 = state_26854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26854__$1,(11),out,inst_26832);
} else {
if((state_val_26855 === (5))){
var inst_26818 = (state_26854[(7)]);
var inst_26827 = (state_26854[(11)]);
var inst_26822 = (state_26854[(9)]);
var inst_26819 = (state_26854[(8)]);
var inst_26826 = (inst_26818[inst_26819] = inst_26822);
var inst_26827__$1 = (inst_26819 + (1));
var inst_26828 = (inst_26827__$1 < n);
var state_26854__$1 = (function (){var statearr_26868 = state_26854;
(statearr_26868[(11)] = inst_26827__$1);

(statearr_26868[(12)] = inst_26826);

return statearr_26868;
})();
if(cljs.core.truth_(inst_26828)){
var statearr_26869_26892 = state_26854__$1;
(statearr_26869_26892[(1)] = (8));

} else {
var statearr_26870_26893 = state_26854__$1;
(statearr_26870_26893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (14))){
var inst_26847 = (state_26854[(2)]);
var inst_26848 = cljs.core.async.close_BANG_.call(null,out);
var state_26854__$1 = (function (){var statearr_26872 = state_26854;
(statearr_26872[(13)] = inst_26847);

return statearr_26872;
})();
var statearr_26873_26894 = state_26854__$1;
(statearr_26873_26894[(2)] = inst_26848);

(statearr_26873_26894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (10))){
var inst_26838 = (state_26854[(2)]);
var state_26854__$1 = state_26854;
var statearr_26874_26895 = state_26854__$1;
(statearr_26874_26895[(2)] = inst_26838);

(statearr_26874_26895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (8))){
var inst_26818 = (state_26854[(7)]);
var inst_26827 = (state_26854[(11)]);
var tmp26871 = inst_26818;
var inst_26818__$1 = tmp26871;
var inst_26819 = inst_26827;
var state_26854__$1 = (function (){var statearr_26875 = state_26854;
(statearr_26875[(7)] = inst_26818__$1);

(statearr_26875[(8)] = inst_26819);

return statearr_26875;
})();
var statearr_26876_26896 = state_26854__$1;
(statearr_26876_26896[(2)] = null);

(statearr_26876_26896[(1)] = (2));


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
});})(c__25066__auto___26882,out))
;
return ((function (switch__24971__auto__,c__25066__auto___26882,out){
return (function() {
var cljs$core$async$state_machine__24972__auto__ = null;
var cljs$core$async$state_machine__24972__auto____0 = (function (){
var statearr_26877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26877[(0)] = cljs$core$async$state_machine__24972__auto__);

(statearr_26877[(1)] = (1));

return statearr_26877;
});
var cljs$core$async$state_machine__24972__auto____1 = (function (state_26854){
while(true){
var ret_value__24973__auto__ = (function (){try{while(true){
var result__24974__auto__ = switch__24971__auto__.call(null,state_26854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24974__auto__;
}
break;
}
}catch (e26878){if((e26878 instanceof Object)){
var ex__24975__auto__ = e26878;
var statearr_26879_26897 = state_26854;
(statearr_26879_26897[(5)] = ex__24975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26898 = state_26854;
state_26854 = G__26898;
continue;
} else {
return ret_value__24973__auto__;
}
break;
}
});
cljs$core$async$state_machine__24972__auto__ = function(state_26854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24972__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24972__auto____1.call(this,state_26854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24972__auto____0;
cljs$core$async$state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24972__auto____1;
return cljs$core$async$state_machine__24972__auto__;
})()
;})(switch__24971__auto__,c__25066__auto___26882,out))
})();
var state__25068__auto__ = (function (){var statearr_26880 = f__25067__auto__.call(null);
(statearr_26880[(6)] = c__25066__auto___26882);

return statearr_26880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25068__auto__);
});})(c__25066__auto___26882,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26900 = arguments.length;
switch (G__26900) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25066__auto___26970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25066__auto___26970,out){
return (function (){
var f__25067__auto__ = (function (){var switch__24971__auto__ = ((function (c__25066__auto___26970,out){
return (function (state_26942){
var state_val_26943 = (state_26942[(1)]);
if((state_val_26943 === (7))){
var inst_26938 = (state_26942[(2)]);
var state_26942__$1 = state_26942;
var statearr_26944_26971 = state_26942__$1;
(statearr_26944_26971[(2)] = inst_26938);

(statearr_26944_26971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26943 === (1))){
var inst_26901 = [];
var inst_26902 = inst_26901;
var inst_26903 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26942__$1 = (function (){var statearr_26945 = state_26942;
(statearr_26945[(7)] = inst_26903);

(statearr_26945[(8)] = inst_26902);

return statearr_26945;
})();
var statearr_26946_26972 = state_26942__$1;
(statearr_26946_26972[(2)] = null);

(statearr_26946_26972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26943 === (4))){
var inst_26906 = (state_26942[(9)]);
var inst_26906__$1 = (state_26942[(2)]);
var inst_26907 = (inst_26906__$1 == null);
var inst_26908 = cljs.core.not.call(null,inst_26907);
var state_26942__$1 = (function (){var statearr_26947 = state_26942;
(statearr_26947[(9)] = inst_26906__$1);

return statearr_26947;
})();
if(inst_26908){
var statearr_26948_26973 = state_26942__$1;
(statearr_26948_26973[(1)] = (5));

} else {
var statearr_26949_26974 = state_26942__$1;
(statearr_26949_26974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26943 === (15))){
var inst_26932 = (state_26942[(2)]);
var state_26942__$1 = state_26942;
var statearr_26950_26975 = state_26942__$1;
(statearr_26950_26975[(2)] = inst_26932);

(statearr_26950_26975[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26943 === (13))){
var state_26942__$1 = state_26942;
var statearr_26951_26976 = state_26942__$1;
(statearr_26951_26976[(2)] = null);

(statearr_26951_26976[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26943 === (6))){
var inst_26902 = (state_26942[(8)]);
var inst_26927 = inst_26902.length;
var inst_26928 = (inst_26927 > (0));
var state_26942__$1 = state_26942;
if(cljs.core.truth_(inst_26928)){
var statearr_26952_26977 = state_26942__$1;
(statearr_26952_26977[(1)] = (12));

} else {
var statearr_26953_26978 = state_26942__$1;
(statearr_26953_26978[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26943 === (3))){
var inst_26940 = (state_26942[(2)]);
var state_26942__$1 = state_26942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26942__$1,inst_26940);
} else {
if((state_val_26943 === (12))){
var inst_26902 = (state_26942[(8)]);
var inst_26930 = cljs.core.vec.call(null,inst_26902);
var state_26942__$1 = state_26942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26942__$1,(15),out,inst_26930);
} else {
if((state_val_26943 === (2))){
var state_26942__$1 = state_26942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26942__$1,(4),ch);
} else {
if((state_val_26943 === (11))){
var inst_26910 = (state_26942[(10)]);
var inst_26906 = (state_26942[(9)]);
var inst_26920 = (state_26942[(2)]);
var inst_26921 = [];
var inst_26922 = inst_26921.push(inst_26906);
var inst_26902 = inst_26921;
var inst_26903 = inst_26910;
var state_26942__$1 = (function (){var statearr_26954 = state_26942;
(statearr_26954[(11)] = inst_26920);

(statearr_26954[(7)] = inst_26903);

(statearr_26954[(8)] = inst_26902);

(statearr_26954[(12)] = inst_26922);

return statearr_26954;
})();
var statearr_26955_26979 = state_26942__$1;
(statearr_26955_26979[(2)] = null);

(statearr_26955_26979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26943 === (9))){
var inst_26902 = (state_26942[(8)]);
var inst_26918 = cljs.core.vec.call(null,inst_26902);
var state_26942__$1 = state_26942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26942__$1,(11),out,inst_26918);
} else {
if((state_val_26943 === (5))){
var inst_26910 = (state_26942[(10)]);
var inst_26903 = (state_26942[(7)]);
var inst_26906 = (state_26942[(9)]);
var inst_26910__$1 = f.call(null,inst_26906);
var inst_26911 = cljs.core._EQ_.call(null,inst_26910__$1,inst_26903);
var inst_26912 = cljs.core.keyword_identical_QMARK_.call(null,inst_26903,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26913 = ((inst_26911) || (inst_26912));
var state_26942__$1 = (function (){var statearr_26956 = state_26942;
(statearr_26956[(10)] = inst_26910__$1);

return statearr_26956;
})();
if(cljs.core.truth_(inst_26913)){
var statearr_26957_26980 = state_26942__$1;
(statearr_26957_26980[(1)] = (8));

} else {
var statearr_26958_26981 = state_26942__$1;
(statearr_26958_26981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26943 === (14))){
var inst_26935 = (state_26942[(2)]);
var inst_26936 = cljs.core.async.close_BANG_.call(null,out);
var state_26942__$1 = (function (){var statearr_26960 = state_26942;
(statearr_26960[(13)] = inst_26935);

return statearr_26960;
})();
var statearr_26961_26982 = state_26942__$1;
(statearr_26961_26982[(2)] = inst_26936);

(statearr_26961_26982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26943 === (10))){
var inst_26925 = (state_26942[(2)]);
var state_26942__$1 = state_26942;
var statearr_26962_26983 = state_26942__$1;
(statearr_26962_26983[(2)] = inst_26925);

(statearr_26962_26983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26943 === (8))){
var inst_26910 = (state_26942[(10)]);
var inst_26902 = (state_26942[(8)]);
var inst_26906 = (state_26942[(9)]);
var inst_26915 = inst_26902.push(inst_26906);
var tmp26959 = inst_26902;
var inst_26902__$1 = tmp26959;
var inst_26903 = inst_26910;
var state_26942__$1 = (function (){var statearr_26963 = state_26942;
(statearr_26963[(7)] = inst_26903);

(statearr_26963[(8)] = inst_26902__$1);

(statearr_26963[(14)] = inst_26915);

return statearr_26963;
})();
var statearr_26964_26984 = state_26942__$1;
(statearr_26964_26984[(2)] = null);

(statearr_26964_26984[(1)] = (2));


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
});})(c__25066__auto___26970,out))
;
return ((function (switch__24971__auto__,c__25066__auto___26970,out){
return (function() {
var cljs$core$async$state_machine__24972__auto__ = null;
var cljs$core$async$state_machine__24972__auto____0 = (function (){
var statearr_26965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26965[(0)] = cljs$core$async$state_machine__24972__auto__);

(statearr_26965[(1)] = (1));

return statearr_26965;
});
var cljs$core$async$state_machine__24972__auto____1 = (function (state_26942){
while(true){
var ret_value__24973__auto__ = (function (){try{while(true){
var result__24974__auto__ = switch__24971__auto__.call(null,state_26942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24974__auto__;
}
break;
}
}catch (e26966){if((e26966 instanceof Object)){
var ex__24975__auto__ = e26966;
var statearr_26967_26985 = state_26942;
(statearr_26967_26985[(5)] = ex__24975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26986 = state_26942;
state_26942 = G__26986;
continue;
} else {
return ret_value__24973__auto__;
}
break;
}
});
cljs$core$async$state_machine__24972__auto__ = function(state_26942){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24972__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24972__auto____1.call(this,state_26942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24972__auto____0;
cljs$core$async$state_machine__24972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24972__auto____1;
return cljs$core$async$state_machine__24972__auto__;
})()
;})(switch__24971__auto__,c__25066__auto___26970,out))
})();
var state__25068__auto__ = (function (){var statearr_26968 = f__25067__auto__.call(null);
(statearr_26968[(6)] = c__25066__auto___26970);

return statearr_26968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25068__auto__);
});})(c__25066__auto___26970,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1544375476366
