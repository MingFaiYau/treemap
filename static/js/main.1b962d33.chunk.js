(this.webpackJsonptreemap=this.webpackJsonptreemap||[]).push([[0],{25:function(e,n,t){"use strict";t.r(n);var r,c,i,a,o,l,u,d,s,b,j,f,x,p,m,O,h,g,v,w,k,C,y,T,M,R=t(2),I=t(1),z=t.n(I),S=t(13),N=t.n(S),F=t(3),P="768px",V=Object(F.b)(r||(r=Object(R.a)(["\n  padding: 0px;\n  margin: 0px;\n  display: flex;\n  ",";\n  ",";\n"])),(function(e){return e.flexCenter&&"justify-content:center"}),(function(e){return e.flexCenter&&"align-items:center"})),W=F.c.div(c||(c=Object(R.a)(["\n  ","\n  flex-direction: ",";\n"])),V,(function(e){return e.type&&"col"!==e.type?"row":"column"})),B=F.c.div(i||(i=Object(R.a)(["\n  ","\n  flex-direction: row;\n  @media only screen and (max-width: ",") {\n    width: 100%;\n    flex-direction: ",";\n  }\n"])),V,P,(function(e){return e.mobileToCol?"column":"row"})),E=F.c.div(a||(a=Object(R.a)(["\n  ","\n  flex-direction: column;\n"])),V),J=t(17),$=t(4),q=t(0),A=z.a.createContext(void 0),D=function(){return z.a.useContext(A)},G=function(e){var n=e.children,t=z.a.useState([]),r=Object($.a)(t,2),c=r[0],i=r[1],a=z.a.useState(1),o=Object($.a)(a,2),l=o[0],u=o[1];z.a.useEffect((function(){c.length<l&&1!==l&&u(c.length)}),[c,l]);var d=z.a.useCallback((function(){u((function(e){return e+1>c.length?e:e+1}))}),[c]),s=z.a.useCallback((function(){u((function(e){return e-1<1?e:e-1}))}),[]),b=z.a.useCallback((function(e){i((function(n){return[].concat(Object(J.a)(n),[e])}))}),[]),j=z.a.useCallback((function(e){i((function(n){return n.filter((function(n){return n.id!==e}))}))}),[]),f=z.a.useMemo((function(){return{rows:l,addRows:d,reduceRows:s,treeMaps:c,insertTreeMap:b,removeTreeMap:j}}),[l,d,s,c,b,j]);return Object(q.jsx)(A.Provider,{value:f,children:n})},H=F.c.div(o||(o=Object(R.a)(["\n  padding: 0;\n  margin: 0;\n  color: black;\n"]))),K=Object(F.c)(H)(l||(l=Object(R.a)(["\n  font-size: 2rem;\n  font-weight: bolder;\n  margin-bottom: 10px;\n  border-bottom: 2px solid black;\n  @media only screen and (max-width: ",") {\n    text-align: center;\n  }\n"])),P),L=Object(F.c)(H)(u||(u=Object(R.a)(["\n  font-size: 1rem;\n  width: 70px;\n  text-align: right;\n  margin-right: 5px;\n"]))),Q="antiquewhite",U="red",X="#d3d3d3",Y="black",Z="limegreen",_="orangered",ee=function(e){return!!e.match(/^-?\d+$/g)},ne=function(e,n){var t=Math.pow(10,n),r=e<0,c=re(e*t),i=Object($.a)(c,2),a=i[0],o=i[1],l=(parseInt(a,10)+(o&&"0"!==o?r?-1:1:0))/t;return parseFloat(te(l,n))},te=function(e,n){var t=re(e),r=Object($.a)(t,2),c=r[0],i=r[1];return!i||n<=0?c:i.length<n?"".concat(c,".").concat(i):"".concat(c,".").concat(i.slice(0,n))},re=function(e){var n=e.toString();return[n.split(".")[0],n.split(".")[1]]},ce=Object(F.c)(W)(d||(d=Object(R.a)(["\n  grid-column-start: ",";\n  background: ",";\n  border: 2px solid ",";\n  border-radius: 10px;\n"])),(function(e){return"span ".concat(e.weight)}),(function(e){return e.value>0?Z:_}),Y),ie=Object(F.c)(H)(s||(s=Object(R.a)(["\n  font-size: 1rem;\n  font-weight: bolder;\n  word-break: break-all;\n  padding: 5px;\n"]))),ae=function(e){var n,t=e.data;return Object(q.jsxs)(ce,{weight:t.weight,value:t.value,flexCenter:!0,children:[Object(q.jsx)(ie,{children:t.name}),Object(q.jsx)(ie,{children:(n=t.value,"".concat(ne(100*n,2),"%"))})]})},oe=z.a.memo(ae),le=F.c.div(b||(b=Object(R.a)(["\n  display: grid;\n  grid-auto-flow: column dense;\n  grid-template-rows: ",";\n  background-color: ",";\n  border-radius: 10px;\n  padding: 3px;\n  grid-gap: 3px;\n"])),(function(e){return"repeat(".concat(e.rows,",minmax(5rem,auto))")}),X),ue=function(e){var n=e.rows,t=e.treeMap;return Object(q.jsx)(le,{rows:n,children:t.map((function(e){return Object(q.jsx)(oe,{data:e},e.id)}))})},de=z.a.memo(ue),se=Object(F.c)(W)(j||(j=Object(R.a)(["\n  flex: 1;\n  padding: 15px;\n  width: 100%;\n"]))),be=function(){var e,n=D(),t=n.treeMaps,r=n.rows;return Object(q.jsxs)(se,{children:[Object(q.jsx)(K,{children:"Result"}),Object(q.jsx)(de,{rows:r,treeMap:(e=t,e.sort((function(e,n){return n.weight-e.weight})))})]})},je=z.a.memo(be),fe=t(5),xe=t(7),pe=Object(F.b)(f||(f=Object(R.a)(["\n  padding: 10px 10px;\n  border-radius: 10px;\n  cursor: pointer;\n  text-align: center;\n  border: 1px solid;\n  :focus {\n    outline: none;\n  }\n"]))),me=F.c.input(x||(x=Object(R.a)(["\n  ","\n"])),pe),Oe=function(e){var n=e.text,t=e.type,r=void 0===t?"button":t,c=Object(xe.a)(e,["text","type"]);return Object(q.jsx)(me,Object(fe.a)(Object(fe.a)({type:r},c),{},{value:n}))},he=Object(F.b)(p||(p=Object(R.a)(["\n  border: 1px solid;\n  border-radius: 10px;\n  padding: 10px;\n  :focus {\n    outline: none;\n  }\n"]))),ge=F.c.input(m||(m=Object(R.a)(["\n  flex: 1;\n  ",";\n"])),he),ve=(F.c.textarea(O||(O=Object(R.a)(["\n  ","\n  resize: vertical;\n"])),he),z.a.forwardRef((function(e,n){var t=e.title,r=e.mobileToCol,c=Object(xe.a)(e,["title","mobileToCol"]);return Object(q.jsxs)(B,{mobileToCol:r,flexCenter:!0,style:{marginBottom:15},children:[Object(q.jsx)(L,{children:"".concat(t," :")}),Object(q.jsx)(ge,Object(fe.a)({mobileToFull:!0,ref:n},c))]})}))),we=Object(F.c)(B)(h||(h=Object(R.a)(["\n  margin-top: 15px;\n"]))),ke=Object(F.c)(Oe)(g||(g=Object(R.a)(["\n  width: 37px;\n  ",";\n  ",";\n"])),(function(e){return e.right&&"margin-left:15px"}),(function(e){return e.left&&"margin-right:15px"})),Ce=function(){var e=D(),n=e.rows,t=e.treeMaps,r=e.addRows,c=e.reduceRows,i=n<t.length,a=n>1;return Object(q.jsxs)(we,{flexCenter:!0,children:[Object(q.jsx)(L,{children:"Rows:"}),Object(q.jsx)(ke,{text:"-",left:!0,onClick:c,disabled:!a}),Object(q.jsx)(ge,{value:n,disabled:!0}),Object(q.jsx)(ke,{text:"+",right:!0,onClick:r,disabled:!i})]})},ye=z.a.memo(Ce),Te=Object(F.b)(v||(v=Object(R.a)(["\n  border-style: solid;\n  border-width: 0 0 1px 1px;\n  border-color: black;\n  word-break: break-all;\n  padding: 3px;\n"]))),Me=Object(F.c)(W).attrs((function(e){return{flexCenter:!0}}))(w||(w=Object(R.a)(["\n  font-size: ",";\n  ",";\n  ","\n"])),(function(e){return e.isTitle?"1rem":".8rem"}),(function(e){return e.isTitle&&"font-weight:bolder"}),Te),Re=Object(F.c)(Oe)(k||(k=Object(R.a)(["\n  background: ",";\n  ","\n  border-radius: 0;\n  font-weight: bolder;\n"])),U,Te),Ie=function(e){var n=e.idx,t=e.name,r=e.value,c=e.weight,i=e.action,a="string"===typeof i,o="string"===typeof i?Object(q.jsx)(Me,{isTitle:a,children:i}):Object(q.jsx)(Re,{text:"Remove",onClick:i});return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(Me,{isTitle:a,children:"string"===typeof n?n:n+1}),Object(q.jsx)(Me,{isTitle:a,children:t}),Object(q.jsx)(Me,{isTitle:a,children:r}),Object(q.jsx)(Me,{isTitle:a,children:c}),o]})},ze=z.a.memo(Ie),Se=F.c.div(C||(C=Object(R.a)(["\n  width: 100%;\n  margin-top: 15px;\n  overflow: hidden;\n  display: grid;\n  grid-template-columns: 40px 2fr 1fr 1fr 1fr;\n  grid-auto-rows: minmax(2rem, auto);\n  border-style: solid;\n  border-width: 1px 1px 0 0;\n"]))),Ne=function(){var e=D(),n=e.treeMaps,t=e.removeTreeMap;return Object(q.jsxs)(Se,{children:[Object(q.jsx)(ze,{idx:"No.",name:"Name",value:"Value",weight:"Weight",action:"Action"}),n.map((function(e,n){return Object(q.jsx)(ze,{idx:n,name:e.name,value:e.value.toString(),weight:e.weight.toString(),action:function(){t(e.id)}},e.id)}))]})},Fe=z.a.memo(Ne),Pe=Object(F.c)(E)(y||(y=Object(R.a)(["\n  width: 400px;\n  padding: 15px;\n  @media only screen and (max-width: ",") {\n    width: 100%;\n  }\n"])),P),Ve=function(){var e=D(),n=e.insertTreeMap,t=e.treeMaps,r=z.a.createRef(),c=z.a.createRef(),i=z.a.createRef(),a=z.a.useCallback((function(){if(r.current&&c.current&&i.current){var e,t,a,o,l,u,d,s,b,j,f=r.current.value,x=c.current.value,p=i.current.value;if(!f)return alert("Please input the name"),void(null===(e=r.current)||void 0===e||e.focus());if(!((o=f)&&o.length<=50))return alert("Name format invalid ( must <= 50 words )"),null===(t=r.current)||void 0===t||t.focus(),void(null===(a=r.current)||void 0===a||a.select());if(!x)return alert("Please input the value"),void(null===(l=c.current)||void 0===l||l.focus());if(!function(e){return!!e.match(/^-?\d+\.?\d*$/g)}(x))return alert("Invalid value ( must be a number )"),null===(u=c.current)||void 0===u||u.focus(),void(null===(d=c.current)||void 0===d||d.select());if(!p)return alert("Please input the weight"),void(null===(s=i.current)||void 0===s||s.focus());if(!function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return ee(e)&&parseInt(e,10)>(n?-1:0)}(p))return alert("Invalid weight ( must be a non-zero positive integer )"),null===(b=i.current)||void 0===b||b.focus(),void(null===(j=i.current)||void 0===j||j.select());var m={id:(new Date).getTime(),name:f,weight:parseInt(p,10),value:parseFloat(x)};n(m),r.current.value=i.current.value=c.current.value="",r.current.focus()}}),[r,c,i,n]);return Object(q.jsxs)(Pe,{children:[Object(q.jsx)(K,{children:"Input"}),Object(q.jsx)(ve,{title:"Name",placeholder:"Name ( <= 50 words )",ref:r}),Object(q.jsx)(ve,{title:"Value",placeholder:"Value ( number )",ref:c}),Object(q.jsx)(ve,{title:"Weight",placeholder:"Weight ( non-zero positive integer )",ref:i}),Object(q.jsx)(Oe,{text:"Insert",onClick:a,disabled:t.length>=50}),Object(q.jsx)(ye,{}),Object(q.jsx)(Fe,{})]})},We=z.a.memo(Ve),Be=Object(F.c)(B)(T||(T=Object(R.a)(["\n  height: 100vh;\n"]))),Ee=function(){return Object(q.jsx)(G,{children:Object(q.jsxs)(Be,{mobileToCol:!0,children:[Object(q.jsx)(We,{}),Object(q.jsx)(je,{})]})})},Je=z.a.memo(Ee),$e=Object(F.a)(M||(M=Object(R.a)(["\n  body {\n    padding:0;\n    margin: 0;\n    min-height:100vh;\n    background: ",";\n  }\n"])),Q);N.a.render(Object(q.jsxs)(z.a.StrictMode,{children:[Object(q.jsx)($e,{}),Object(q.jsx)(Je,{})]}),document.getElementById("root"))}},[[25,1,2]]]);