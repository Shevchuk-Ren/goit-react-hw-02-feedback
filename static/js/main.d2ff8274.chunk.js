(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a,c,r,o,i,s,d,b=n(1),l=n.n(b),j=n(5),u=n.n(j),h=(n(17),n(6)),g=n(7),O=n(8),p=n(11),x=n(10),f=n(2),v=n(3),k=v.a.section(a||(a=Object(f.a)(["\n  width: 300px;\n  padding: 10px;\n  text-align: center;\n  background-color: rgba(220, 194, 127, 0.347);\n  margin-left: auto;\n  margin-right: auto;\n"]))),w=v.a.h2(c||(c=Object(f.a)(["\n  color: rgba(64, 64, 53, 0.823);\n"]))),m=n(0),P=function(e){var t=e.title,n=e.children;return Object(m.jsxs)(k,{children:[t&&Object(m.jsx)(w,{children:t}),n]})},F=v.a.button(r||(r=Object(f.a)(["\n  padding: 10px;\n  margin-left: 5px;\n  width: 80px;\n  color: cornsilk;\n  background-color: rgba(49, 29, 29, 0.571);\n  :first-letter {\n    text-transform:capitalize;\n}\n"]))),y=function(e){var t=e.options,n=e.onLeavFeedback;return Object(m.jsx)("div",{className:"buttons__set",children:t.map((function(e){return Object(m.jsx)(F,{type:"button",onClick:function(){return n(e)},children:e},e)}))})},N=v.a.p(o||(o=Object(f.a)(["\n  color: rgba(248, 240, 240, 0.857);\n  font-weight: bold;\n"]))),_=v.a.span(i||(i=Object(f.a)(["\n  color: rgba(49, 29, 29, 0.571);\n"]))),S=v.a.p(s||(s=Object(f.a)(["\n  color: rgba(49, 29, 29, 0.714);\n  font-weight: bold;\n"]))),T=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,r=e.positivePercentage,o=e.answer;return Object(m.jsx)("div",{className:"statistics__set",children:0===t&&0===n&&0===a?Object(m.jsx)(S,{children:o}):Object(m.jsxs)("div",{children:[Object(m.jsxs)(N,{children:["Good: ",Object(m.jsx)(_,{children:t})]}),Object(m.jsxs)(N,{children:["Neutral: ",Object(m.jsx)(_,{children:n})]}),Object(m.jsxs)(N,{children:["Bad: ",Object(m.jsx)(_,{children:a})," "]}),Object(m.jsxs)(N,{children:["Total: ",Object(m.jsx)(_,{children:c})," "]}),Object(m.jsxs)(N,{children:["Positive feedback: ",Object(m.jsxs)(_,{children:[r,"%"]})]})]})})},B=v.a.div(d||(d=Object(f.a)(["\n  padding: 20px 5px;\n"]))),C=function(e){Object(p.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:e.props.good,neutral:e.props.neutral,bad:e.props.bad},e.leaveFeedback=function(t){e.setState((function(e){return console.log(e[t]),Object(h.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){var t=e.state,n=t.neutral;return t.bad+n+t.good},e.countPositiveFeedbackPercentage=function(){var t=e.state,n=t.neutral,a=t.bad,c=t.good,r=a+n+c,o=r?100*c/r:0;return Math.round(o)},e}return Object(O.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=this.leaveFeedback,r=this.countPositiveFeedbackPercentage();return Object(m.jsxs)(B,{children:[Object(m.jsx)(P,{title:"Please leave feedback",children:Object(m.jsx)(y,{options:["good","neutral","bad"],onLeavFeedback:c})}),Object(m.jsx)(P,{title:"Statistics",children:Object(m.jsx)(T,{good:t,neutral:n,bad:a,total:this.countTotalFeedback(),positivePercentage:r,answer:"No feedback given"})})]})}}]),n}(l.a.Component);C.defaultProps={good:0,neutral:0,bad:0};var J=C;u.a.render(Object(m.jsx)(l.a.StrictMode,{children:Object(m.jsx)(J,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.d2ff8274.chunk.js.map