import{S as z,i as p,s as g,k as C,q,l as w,m as P,r as S,h as f,n as _,Q as c,b as B,C as D,D as o,u as E,B as b,O as M,o as N,R as r,N as O}from"./index-cfef3dd3.js";function Q(t){let e,s,n,h;return{c(){e=C("p"),s=q(t[0]),this.h()},l(i){e=w(i,"P",{class:!0,"data-size":!0});var l=P(e);s=S(l,t[0]),l.forEach(f),this.h()},h(){_(e,"class","chip svelte-7z0o8b"),_(e,"data-size",t[3]),c(e,"chip-active",t[1]),c(e,"chip-hoverable",t[2])},m(i,l){B(i,e,l),D(e,s),t[9](e),n||(h=[o(e,"click",t[5]),o(e,"keydown",t[6]),o(e,"keypress",t[7]),o(e,"keyup",t[8])],n=!0)},p(i,[l]){l&1&&E(s,i[0]),l&8&&_(e,"data-size",i[3]),l&2&&c(e,"chip-active",i[1]),l&4&&c(e,"chip-hoverable",i[2])},i:b,o:b,d(i){i&&f(e),t[9](null),n=!1,M(h)}}}function R(t,e,s){let n,{label:h=""}=e,{active:i=!1}=e,{hoverable:l=!0}=e,{size:u="auto"}=e;N(()=>{n.style.setProperty("--size",u)});function d(a){r.call(this,t,a)}function v(a){r.call(this,t,a)}function m(a){r.call(this,t,a)}function k(a){r.call(this,t,a)}function y(a){O[a?"unshift":"push"](()=>{n=a,s(4,n)})}return t.$$set=a=>{"label"in a&&s(0,h=a.label),"active"in a&&s(1,i=a.active),"hoverable"in a&&s(2,l=a.hoverable),"size"in a&&s(3,u=a.size)},[h,i,l,u,n,d,v,m,k,y]}class A extends z{constructor(e){super(),p(this,e,R,Q,g,{label:0,active:1,hoverable:2,size:3})}}export{A as C};