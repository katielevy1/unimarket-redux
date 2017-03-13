webpackJsonp([2],{37:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t,o){var l=Math.min(Math.max(t,e),o);return l/(o-t)}function a(e,t){return e*Math.PI*(t.size-t.thickness)}function r(e,t){var o=e.max,l=e.min,r=e.size,i=e.value,s=t.muiTheme.baseTheme.palette,u={root:{position:"relative",display:"inline-block",width:r,height:r},wrapper:{width:r,height:r,display:"inline-block",transition:M.default.create("transform","20s",null,"linear"),transitionTimingFunction:"linear"},svg:{width:r,height:r,position:"relative"},path:{stroke:e.color||s.primary1Color,strokeLinecap:"round",transition:M.default.create("all","1.5s",null,"ease-in-out")}};if("determinate"===e.mode){var d=n(i,l,o);u.path.transition=M.default.create("all","0.3s",null,"linear"),u.path.strokeDasharray=a(d,e)+", "+a(1,e)}return u}Object.defineProperty(t,"__esModule",{value:!0});var i=o(8),s=l(i),u=o(9),d=l(u),f=o(5),c=l(f),p=o(2),h=l(p),m=o(3),y=l(m),_=o(7),v=l(_),g=o(6),b=l(g),x=o(4),T=l(x),w=o(1),S=l(w),P=o(50),C=l(P),k=o(10),M=l(k),E=function(e){function t(){return(0,h.default)(this,t),(0,v.default)(this,(t.__proto__||(0,c.default)(t)).apply(this,arguments))}return(0,b.default)(t,e),(0,y.default)(t,[{key:"componentDidMount",value:function(){this.scalePath(this.refs.path),this.rotateWrapper(this.refs.wrapper)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.scalePathTimer),clearTimeout(this.rotateWrapperTimer)}},{key:"scalePath",value:function(e){var t=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;"indeterminate"===this.props.mode&&(o%=3,0===o?(e.style.strokeDasharray=a(0,this.props)+", "+a(1,this.props),e.style.strokeDashoffset=0,e.style.transitionDuration="0ms"):1===o?(e.style.strokeDasharray=a(.7,this.props)+", "+a(1,this.props),e.style.strokeDashoffset=a(-.3,this.props),e.style.transitionDuration="750ms"):(e.style.strokeDasharray=a(.7,this.props)+", "+a(1,this.props),e.style.strokeDashoffset=a(-1,this.props),e.style.transitionDuration="850ms"),this.scalePathTimer=setTimeout(function(){return t.scalePath(e,o+1)},o?750:250))}},{key:"rotateWrapper",value:function(e){var t=this;"indeterminate"===this.props.mode&&(C.default.set(e.style,"transform","rotate(0deg)"),C.default.set(e.style,"transitionDuration","0ms"),setTimeout(function(){C.default.set(e.style,"transform","rotate(1800deg)"),C.default.set(e.style,"transitionDuration","10s"),C.default.set(e.style,"transitionTimingFunction","linear")},50),this.rotateWrapperTimer=setTimeout(function(){return t.rotateWrapper(e)},10050))}},{key:"render",value:function(){var e=this.props,t=e.style,o=e.innerStyle,l=e.size,n=e.thickness,a=(0,d.default)(e,["style","innerStyle","size","thickness"]),i=this.context.muiTheme.prepareStyles,u=r(this.props,this.context);return S.default.createElement("div",(0,s.default)({},a,{style:i((0,T.default)(u.root,t))}),S.default.createElement("div",{ref:"wrapper",style:i((0,T.default)(u.wrapper,o))},S.default.createElement("svg",{viewBox:"0 0 "+l+" "+l,style:i(u.svg)},S.default.createElement("circle",{ref:"path",style:i(u.path),cx:l/2,cy:l/2,r:(l-n)/2,fill:"none",strokeWidth:n,strokeMiterlimit:"20"}))))}}]),t}(w.Component);E.defaultProps={mode:"indeterminate",value:0,min:0,max:100,size:40,thickness:3.5},E.contextTypes={muiTheme:w.PropTypes.object.isRequired},t.default=E},38:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(37),a=l(n);t.default=a.default},56:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.TextField=void 0;var n=o(8),a=l(n),r=o(9),i=l(r),s=o(1),u=l(s),d=o(72),f=l(d),c=function(e){var t=e.input,o=e.label,l=e.meta,n=l.touched,r=l.error,s=(0,i.default)(e,["input","label","meta"]);return u.default.createElement(f.default,(0,a.default)({hintText:o,floatingLabelText:o,errorText:n&&r},t,s))};t.TextField=c,c.propTypes={input:s.PropTypes.object,label:s.PropTypes.string,meta:s.PropTypes.object},t.default=c},57:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(56),a=l(n);t.default=a.default},67:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t,o){return{root:{position:"relative"},textarea:{height:o.height,width:"100%",resize:"none",font:"inherit",padding:0,cursor:e.disabled?"not-allowed":"initial"},shadow:{resize:"none",overflow:"hidden",visibility:"hidden",position:"absolute",height:"initial"}}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(8),r=l(a),i=o(9),s=l(i),u=o(5),d=l(u),f=o(2),c=l(f),p=o(3),h=l(p),m=o(7),y=l(m),_=o(6),v=l(_),g=o(4),b=l(g),x=o(1),T=l(x),w=o(39),S=l(w),P=24,C=function(e){function t(){var e,o,l,n;(0,c.default)(this,t);for(var a=arguments.length,r=Array(a),i=0;i<a;i++)r[i]=arguments[i];return o=l=(0,y.default)(this,(e=t.__proto__||(0,d.default)(t)).call.apply(e,[this].concat(r))),l.state={height:null},l.handleResize=function(e){l.syncHeightWithShadow(void 0,e)},l.handleChange=function(e){l.syncHeightWithShadow(e.target.value),l.props.hasOwnProperty("valueLink")&&l.props.valueLink.requestChange(e.target.value),l.props.onChange&&l.props.onChange(e)},n=o,(0,y.default)(l,n)}return(0,v.default)(t,e),(0,h.default)(t,[{key:"componentWillMount",value:function(){this.setState({height:this.props.rows*P})}},{key:"componentDidMount",value:function(){this.syncHeightWithShadow()}},{key:"componentWillReceiveProps",value:function(e){e.value!==this.props.value&&this.syncHeightWithShadow(e.value)}},{key:"getInputNode",value:function(){return this.refs.input}},{key:"setValue",value:function(e){this.getInputNode().value=e,this.syncHeightWithShadow(e)}},{key:"syncHeightWithShadow",value:function(e,t){var o=this.refs.shadow;void 0!==e&&(o.value=e);var l=o.scrollHeight;void 0!==l&&(this.props.rowsMax>=this.props.rows&&(l=Math.min(this.props.rowsMax*P,l)),l=Math.max(l,P),this.state.height!==l&&(this.setState({height:l}),this.props.onHeightChange&&this.props.onHeightChange(t,l)))}},{key:"render",value:function(){var e=this.props,t=(e.onChange,e.onHeightChange,e.rows,e.rowsMax,e.shadowStyle),o=e.style,l=e.textareaStyle,a=(e.valueLink,(0,s.default)(e,["onChange","onHeightChange","rows","rowsMax","shadowStyle","style","textareaStyle","valueLink"])),i=this.context.muiTheme.prepareStyles,u=n(this.props,this.context,this.state),d=(0,b.default)(u.root,o),f=(0,b.default)(u.textarea,l),c=(0,b.default)({},f,u.shadow,t);return this.props.hasOwnProperty("valueLink")&&(a.value=this.props.valueLink.value),T.default.createElement("div",{style:i(d)},T.default.createElement(S.default,{target:"window",onResize:this.handleResize}),T.default.createElement("textarea",{ref:"shadow",style:i(c),tabIndex:"-1",rows:this.props.rows,defaultValue:this.props.defaultValue,readOnly:!0,value:this.props.value,valueLink:this.props.valueLink}),T.default.createElement("textarea",(0,r.default)({},a,{ref:"input",rows:this.props.rows,style:i(f),onChange:this.handleChange})))}}]),t}(x.Component);C.defaultProps={rows:1},C.contextTypes={muiTheme:x.PropTypes.object.isRequired},t.default=C},68:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){return""!==e&&void 0!==e&&null!==e}Object.defineProperty(t,"__esModule",{value:!0});var a=o(8),r=l(a),i=o(9),s=l(i),u=o(5),d=l(u),f=o(2),c=l(f),p=o(3),h=l(p),m=o(7),y=l(m),_=o(6),v=l(_),g=o(4),b=l(g),x=o(1),T=l(x),w=o(18),S=l(w),P=o(34),C=l(P),k=o(26),M=o(10),E=l(M),N=o(67),L=l(N),O=o(69),D=l(O),F=o(70),j=l(F),W=o(71),z=l(W),H=o(35),I=(l(H),function(e,t,o){var l=t.muiTheme,n=l.baseTheme,a=l.textField,r=a.floatingLabelColor,i=a.focusColor,s=a.textColor,u=a.disabledTextColor,d=a.backgroundColor,f=a.hintColor,c=a.errorColor,p={root:{fontSize:16,lineHeight:"24px",width:e.fullWidth?"100%":256,height:24*(e.rows-1)+(e.floatingLabelText?72:48),display:"inline-block",position:"relative",backgroundColor:d,fontFamily:n.fontFamily,transition:E.default.easeOut("200ms","height")},error:{position:"relative",bottom:2,fontSize:12,lineHeight:"12px",color:c,transition:E.default.easeOut()},floatingLabel:{color:f,pointerEvents:"none"},input:{padding:0,position:"relative",width:"100%",border:"none",outline:"none",backgroundColor:"rgba(0,0,0,0)",color:e.disabled?u:s,cursor:e.disabled?"not-allowed":"initial",font:"inherit",appearance:"textfield",WebkitTapHighlightColor:"rgba(0,0,0,0)"},textarea:{}};return(0,b.default)(p.error,e.errorStyle),(0,b.default)(p.textarea,p.input,{marginTop:e.floatingLabelText?36:12,marginBottom:e.floatingLabelText?-36:-12,boxSizing:"border-box",font:"inherit"}),p.input.height="100%",o.hasValue&&(p.floatingLabel.color=(0,k.fade)(e.disabled?u:r,.5)),o.isFocused&&(p.floatingLabel.color=i),e.floatingLabelText&&(p.input.boxSizing="border-box",e.multiLine||(p.input.marginTop=14),o.errorText&&(p.error.bottom=e.multiLine?3:p.error.fontSize+3)),o.errorText&&o.isFocused&&(p.floatingLabel.color=p.error.color),p}),R=function(e){function t(){var e,o,l,a;(0,c.default)(this,t);for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return o=l=(0,y.default)(this,(e=t.__proto__||(0,d.default)(t)).call.apply(e,[this].concat(i))),l.state={isFocused:!1,errorText:void 0,hasValue:!1,isClean:!0},l.handleInputBlur=function(e){l.setState({isFocused:!1}),l.props.onBlur&&l.props.onBlur(e)},l.handleInputChange=function(e){l.setState({hasValue:n(e.target.value),isClean:!1}),l.props.onChange&&l.props.onChange(e,e.target.value)},l.handleInputFocus=function(e){l.props.disabled||(l.setState({isFocused:!0}),l.props.onFocus&&l.props.onFocus(e))},l.handleHeightChange=function(e,t){var o=t+24;l.props.floatingLabelText&&(o+=24),S.default.findDOMNode(l).style.height=o+"px"},a=o,(0,y.default)(l,a)}return(0,v.default)(t,e),(0,h.default)(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.children,o=e.name,l=e.hintText,a=e.floatingLabelText,r=(e.id,t?t.props:this.props);this.setState({errorText:this.props.errorText,hasValue:n(r.value)||n(r.defaultValue)});var i=o+"-"+l+"-"+a+"-"+Math.floor(65535*Math.random());this.uniqueId=i.replace(/[^A-Za-z0-9-]/gi,"")}},{key:"componentWillReceiveProps",value:function(e){if(e.errorText!==this.props.errorText&&this.setState({errorText:e.errorText}),e.children&&e.children.props&&(e=e.children.props),e.hasOwnProperty("value")){var t=n(e.value)||this.state.isClean&&n(e.defaultValue);t!==this.state.hasValue&&this.setState({hasValue:t})}}},{key:"shouldComponentUpdate",value:function(e,t,o){return!(0,C.default)(this.props,e)||!(0,C.default)(this.state,t)||!(0,C.default)(this.context,o)}},{key:"blur",value:function(){this.input&&this.getInputNode().blur()}},{key:"focus",value:function(){this.input&&this.getInputNode().focus()}},{key:"select",value:function(){this.input&&this.getInputNode().select()}},{key:"getValue",value:function(){return this.input?this.getInputNode().value:void 0}},{key:"getInputNode",value:function(){return this.props.children||this.props.multiLine?this.input.getInputNode():S.default.findDOMNode(this.input)}},{key:"_isControlled",value:function(){return this.props.hasOwnProperty("value")}},{key:"render",value:function(){var e=this,t=this.props,o=t.children,l=t.className,n=t.disabled,a=t.errorStyle,i=(t.errorText,t.floatingLabelFixed),u=(t.floatingLabelFocusStyle,t.floatingLabelStyle,t.floatingLabelText),d=(t.fullWidth,t.hintText),f=t.hintStyle,c=t.id,p=t.inputStyle,h=t.multiLine,m=(t.onBlur,t.onChange,t.onFocus,t.style),y=t.type,_=t.underlineDisabledStyle,v=t.underlineFocusStyle,g=t.underlineShow,x=t.underlineStyle,w=t.rows,S=t.rowsMax,P=t.textareaStyle,C=(0,s.default)(t,["children","className","disabled","errorStyle","errorText","floatingLabelFixed","floatingLabelFocusStyle","floatingLabelStyle","floatingLabelText","fullWidth","hintText","hintStyle","id","inputStyle","multiLine","onBlur","onChange","onFocus","style","type","underlineDisabledStyle","underlineFocusStyle","underlineShow","underlineStyle","rows","rowsMax","textareaStyle"]),k=this.context.muiTheme.prepareStyles,M=I(this.props,this.context,this.state),E=c||this.uniqueId,N=this.state.errorText&&T.default.createElement("div",{style:k(M.error)},this.state.errorText),O=u&&T.default.createElement(j.default,{muiTheme:this.context.muiTheme,style:(0,b.default)(M.floatingLabel,this.props.floatingLabelStyle),shrinkStyle:this.props.floatingLabelFocusStyle,htmlFor:E,shrink:this.state.hasValue||this.state.isFocused||i,disabled:n},u),F={id:E,ref:function(t){return e.input=t},disabled:this.props.disabled,onBlur:this.handleInputBlur,onChange:this.handleInputChange,onFocus:this.handleInputFocus},W=(0,b.default)(M.input,p),H=void 0;H=o?T.default.cloneElement(o,(0,r.default)({},F,o.props,{style:(0,b.default)(W,o.props.style)})):h?T.default.createElement(L.default,(0,r.default)({},C,F,{style:W,rows:w,rowsMax:S,onHeightChange:this.handleHeightChange,textareaStyle:(0,b.default)(M.textarea,P)})):T.default.createElement("input",(0,r.default)({},C,F,{style:k(W),type:y}));var R={};return o&&(R=C),T.default.createElement("div",(0,r.default)({},R,{className:l,style:k((0,b.default)(M.root,m))}),O,d?T.default.createElement(D.default,{muiTheme:this.context.muiTheme,show:!(this.state.hasValue||u&&!this.state.isFocused)||!this.state.hasValue&&u&&i&&!this.state.isFocused,style:f,text:d}):null,H,g?T.default.createElement(z.default,{disabled:n,disabledStyle:_,error:!!this.state.errorText,errorStyle:a,focus:this.state.isFocused,focusStyle:v,muiTheme:this.context.muiTheme,style:x}):null,N)}}]),t}(x.Component);R.defaultProps={disabled:!1,floatingLabelFixed:!1,multiLine:!1,fullWidth:!1,type:"text",underlineShow:!0,rows:1},R.contextTypes={muiTheme:x.PropTypes.object.isRequired},t.default=R},69:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.muiTheme.textField.hintColor,o=e.show;return{root:{position:"absolute",opacity:o?1:0,color:t,transition:d.default.easeOut(),bottom:12}}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(4),r=l(a),i=o(1),s=l(i),u=o(10),d=l(u),f=function(e){var t=e.muiTheme.prepareStyles,o=e.style,l=e.text,a=n(e);return s.default.createElement("div",{style:t((0,r.default)(a.root,o))},l)};f.defaultProps={show:!0},t.default=f},70:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){var t={position:"absolute",lineHeight:"22px",top:38,transition:d.default.easeOut(),zIndex:1,cursor:e.disabled?"not-allowed":"text",transform:"scale(1) translate(0, 0)",transformOrigin:"left top",pointerEvents:"auto",userSelect:"none"},o=e.shrink?(0,r.default)({transform:"scale(0.75) translate(0, -28px)",pointerEvents:"none"},e.shrinkStyle):null;return{root:(0,r.default)(t,e.style,o)}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(4),r=l(a),i=o(1),s=l(i),u=o(10),d=l(u),f=function(e){var t=e.muiTheme,o=e.className,l=e.children,a=e.htmlFor,r=e.onTouchTap,i=t.prepareStyles,u=n(e);return s.default.createElement("label",{className:o,style:i(u.root),htmlFor:a,onTouchTap:r},l)};f.defaultProps={disabled:!1,shrink:!1},t.default=f},71:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(4),a=l(n),r=o(1),i=l(r),s=o(10),u=l(s),d=({disabled:r.PropTypes.bool,disabledStyle:r.PropTypes.object,error:r.PropTypes.bool,errorStyle:r.PropTypes.object,focus:r.PropTypes.bool,focusStyle:r.PropTypes.object,muiTheme:r.PropTypes.object.isRequired,style:r.PropTypes.object},{disabled:!1,disabledStyle:{},error:!1,errorStyle:{},focus:!1,focusStyle:{},style:{}}),f=function(e){var t=e.disabled,o=e.disabledStyle,l=e.error,n=e.errorStyle,r=e.focus,s=e.focusStyle,d=e.muiTheme,f=e.style,c=n.color,p=d.prepareStyles,h=d.textField,m=h.borderColor,y=h.disabledTextColor,_=h.errorColor,v=h.focusColor,g={root:{border:"none",borderBottom:"solid 1px",borderColor:m,bottom:8,boxSizing:"content-box",margin:0,position:"absolute",width:"100%"},disabled:{borderBottom:"dotted 2px",borderColor:y,cursor:"not-allowed"},focus:{borderBottom:"solid 2px",borderColor:v,transform:"scaleX(0)",transition:u.default.easeOut()},error:{borderColor:c?c:_,transform:"scaleX(1)"}},b=(0,a.default)({},g.root,f),x=(0,a.default)({},b,g.focus,s);return t&&(b=(0,a.default)({},b,g.disabled,o)),r&&(x=(0,a.default)({},x,{transform:"scaleX(1)"})),l&&(x=(0,a.default)({},x,g.error)),i.default.createElement("div",null,i.default.createElement("hr",{style:p(b)}),i.default.createElement("hr",{style:p(x)}))};f.defaultProps=d,t.default=f},72:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(68),a=l(n);t.default=a.default},374:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a,r,i,s=o(5),u=l(s),d=o(2),f=l(d),c=o(3),p=l(c),h=o(7),m=l(h),y=o(6),_=l(y),v=o(1),g=l(v),b=o(647),x=l(b),T=o(136),w=l(T),S=o(112),P=o(57),C=l(P),k=o(452),M=l(k),E="newPost",N=function(e){var t={};return e.name||(t.name="Required"),t},L=(n=(0,S.reduxForm)({form:E,validate:N}),n((i=r=function(e){function t(){var e,o,l,n;(0,f.default)(this,t);for(var a=arguments.length,r=Array(a),i=0;i<a;i++)r[i]=arguments[i];return o=l=(0,m.default)(this,(e=t.__proto__||(0,u.default)(t)).call.apply(e,[this].concat(r))),l.state={open:l.props.open||!1},l.close=function(){l.setState({open:!1}),l.props.onRequestClose&&l.props.onRequestClose()},l.handleSubmitClick=function(e){e.preventDefault(),l.props.dispatch((0,S.submit)(E))},n=o,(0,m.default)(l,n)}return(0,_.default)(t,e),(0,p.default)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;e.open&&(this.setState({open:!0}),setTimeout(function(){t.refs&&t.refs.postNameField&&t.refs.postNameField.focus()},500))}},{key:"render",value:function(){var e=this.state,t=e.open,o=e.error,l=this.props.handleSubmit,n=[g.default.createElement(w.default,{label:"Cancel",secondary:!0,onClick:this.close}),g.default.createElement(w.default,{label:"Create",primary:!0,onClick:this.handleSubmitClick})];return g.default.createElement(x.default,{title:"New Post",modal:!1,actions:n,open:t,onRequestClose:this.close,contentClassName:M.default.container},g.default.createElement("div",{className:M.default.inputs},g.default.createElement("form",{onSubmit:l},g.default.createElement(S.Field,{name:"title",component:C.default,error:o||null,label:"Post Title"}),g.default.createElement(S.Field,{name:"description",component:C.default,error:o||null,label:"Post Description"}))))}}]),t}(v.Component),r.propTypes={open:v.PropTypes.bool,onRequestClose:v.PropTypes.func.isRequired,handleSubmit:v.PropTypes.func.isRequired,dispatch:v.PropTypes.func.isRequired},a=i))||a);t.default=L},375:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.NewPostTile=void 0;var n=o(1),a=l(n),r=o(25),i=l(r),s=o(676),u=l(s),d=o(453),f=l(d),c="6rem",p={width:c,height:c},h="#979797",m="#616161",y=t.NewPostTile=function(e){var t=e.onClick;return a.default.createElement(i.default,{className:f.default.container,onClick:t},a.default.createElement(u.default,{color:h,hoverColor:m,style:p}))};y.propTypes={onClick:n.PropTypes.func},t.default=y},376:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.PostTile=void 0;var n=o(21),a=l(n),r=o(1),i=l(r),s=o(25),u=l(s),d=o(454),f=l(d),c=t.PostTile=function(e){var t=e.post,o=e.onSelect;return i.default.createElement(u.default,{key:"Post-"+t.postKey,className:f.default.container},i.default.createElement("div",{className:f.default.top},i.default.createElement("span",{className:f.default.name,onClick:function(){return o(t)}},t.title)),i.default.createElement("span",null,t.description),i.default.createElement("span",{className:f.default.owner},"By: ",(0,a.default)(t.posterID)?t.posterID:t.owner||"No Owner"))};c.propTypes={post:r.PropTypes.object.isRequired,onSelect:r.PropTypes.func.isRequired},t.default=c},377:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a,r,i,s,u=o(5),d=l(u),f=o(2),c=l(f),p=o(3),h=l(p),m=o(7),y=l(m),_=o(6),v=l(_),g=o(108),b=l(g),x=o(1),T=l(x),w=o(43),S=o(376),P=l(S),C=o(375),k=l(C),M=o(374),E=l(M),N=o(38),L=l(N),O=o(455),D=l(O),F=o(22),j=o(41),W=j.helpers.dataToJS,z=j.helpers.pathToJS,H=j.helpers.isLoaded,I=j.helpers.isEmpty,R=(n=(0,j.firebase)(function(e){e.params,e.auth;return[{path:"posts",populates:[{child:"owner",root:"users"}]}]}),a=(0,F.connect)(function(e,t){var o=e.firebase;t.params;return{posts:W(o,"posts"),auth:z(o,"auth")}}),n(r=a((s=i=function(e){function t(){var e,o,l,n;(0,c.default)(this,t);for(var a=arguments.length,r=Array(a),i=0;i<a;i++)r[i]=arguments[i];return o=l=(0,y.default)(this,(e=t.__proto__||(0,d.default)(t)).call.apply(e,[this].concat(r))),l.state={newPostModal:!1,addPostModal:!1},l.newSubmit=function(e){var t=l.props,o=t.auth,n=t.firebase.push;o.uid&&(e.posterID=o.uid),e.category="",e.flagged=0,e.schoolId="",e.time=parseInt((new Date).getTime()),e.postKey="",n("posts",e).then(function(){return l.setState({newPostModal:!1})}).catch(function(e){console.error("error creating new post",e)})},l.deletePost=function(e){var t=e.name;return l.props.firebase.remove("posts/"+t)},l.toggleModal=function(e,t){var o={};o[e+"Modal"]=!l.state[e+"Modal"],l.setState(o)},n=o,(0,y.default)(l,n)}return(0,v.default)(t,e),(0,h.default)(t,[{key:"render",value:function(){var e=this;if(this.props.children)return this.props.children;var t=this.props.posts,o=this.state.newPostModal;return H(t)?T.default.createElement("div",{className:D.default.container},o&&T.default.createElement(E.default,{open:o,onSubmit:this.newSubmit,onRequestClose:function(){return e.toggleModal("newPost")}}),T.default.createElement("div",{className:D.default.tiles},T.default.createElement(k.default,{onClick:function(){return e.toggleModal("newPost")}}),!I(t)&&(0,b.default)(t,function(t,o){return T.default.createElement(P.default,{key:t.postkey+"-Collab-"+o,post:t,onCollabClick:e.collabClick,onSelect:function(){return e.context.router.push(w.LIST_PATH+"/"+o)},onDelete:e.deletePost})}))):T.default.createElement("div",{className:D.default.progress},T.default.createElement(L.default,null))}}]),t}(x.Component),i.contextTypes={router:T.default.PropTypes.object.isRequired},i.propTypes={account:x.PropTypes.object,posts:x.PropTypes.object,firebase:x.PropTypes.object,auth:x.PropTypes.object,children:x.PropTypes.object,params:x.PropTypes.object},r=s))||r)||r);t.default=R},452:function(e,t){e.exports={buttons:"NewPostDialog__buttons___2geS3",flex:"NewPostDialog__flex___Ak_6M","flex-column":"NewPostDialog__flex-column___3SpUO","flex-column-center":"NewPostDialog__flex-column-center___1VbHR","flex-row":"NewPostDialog__flex-row___3QTu2","flex-row-center":"NewPostDialog__flex-row-center___2nzH2",inputs:"NewPostDialog__inputs___3Qq4Z",container:"NewPostDialog__container___sKqe6"}},453:function(e,t){e.exports={container:"NewPostTile__container___16SmB",flex:"NewPostTile__flex___mrkeD","flex-column":"NewPostTile__flex-column___3Sn1T","flex-column-center":"NewPostTile__flex-column-center___2CIjr","flex-row":"NewPostTile__flex-row___LNizK","flex-row-center":"NewPostTile__flex-row-center___3x-pm"}},454:function(e,t){e.exports={collaborator:"PostTile__collaborator___2BLeF",collaborators:"PostTile__collaborators___1vK4w",container:"PostTile__container___2gP57",flex:"PostTile__flex___1AgDL","flex-column":"PostTile__flex-column___c97Nc","flex-column-center":"PostTile__flex-column-center___3jYNG","flex-row":"PostTile__flex-row___2qZj-","flex-row-center":"PostTile__flex-row-center___2-kcp",settings:"PostTile__settings___1a4fp",top:"PostTile__top___2VQVk",name:"PostTile__name___2a0Px",owner:"PostTile__owner___2n6FW",add:"PostTile__add___OM7WB"}},455:function(e,t){e.exports={container:"PostsContainer__container___29N8v",flex:"PostsContainer__flex___3elsT","flex-column":"PostsContainer__flex-column___3hYkA","flex-column-center":"PostsContainer__flex-column-center___1Afsg","flex-row":"PostsContainer__flex-row___32uKN","flex-row-center":"PostsContainer__flex-row-center___1kz_2",progress:"PostsContainer__progress___y_q0i",tiles:"PostsContainer__tiles___3_l4Z"}},646:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var o=e.autoScrollBodyContent,l=e.open,n=t.muiTheme,a=n.baseTheme,r=a.spacing,i=a.palette,s=n.dialog,u=n.zIndex,d=r.desktopGutter,f="1px solid "+i.borderColor;return{root:{position:"fixed",boxSizing:"border-box",WebkitTapHighlightColor:"rgba(0,0,0,0)",zIndex:u.dialog,top:0,left:l?0:-1e4,width:"100%",height:"100%",transition:l?N.default.easeOut("0ms","left","0ms"):N.default.easeOut("0ms","left","450ms")},content:{boxSizing:"border-box",WebkitTapHighlightColor:"rgba(0,0,0,0)",transition:N.default.easeOut(),position:"relative",width:"75%",maxWidth:12*r.desktopKeylineIncrement,margin:"0 auto",zIndex:u.dialog},actionsContainer:{boxSizing:"border-box",WebkitTapHighlightColor:"rgba(0,0,0,0)",padding:8,width:"100%",textAlign:"right",marginTop:o?-1:0,borderTop:o?f:"none"},overlay:{zIndex:u.dialogOverlay},title:{margin:0,padding:d+"px "+d+"px 20px "+d+"px",color:i.textColor,fontSize:s.titleFontSize,lineHeight:"32px",fontWeight:400,marginBottom:o?-1:0,borderBottom:o?f:"none"},body:{fontSize:s.bodyFontSize,color:s.bodyColor,padding:(e.title?0:d)+"px "+d+"px "+d+"px",boxSizing:"border-box",overflowY:o?"auto":"hidden"}}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(8),r=l(a),i=o(9),s=l(i),u=o(5),d=l(u),f=o(2),c=l(f),p=o(3),h=l(p),m=o(7),y=l(m),_=o(6),v=l(_),g=o(4),b=l(g),x=o(1),T=l(x),w=o(18),S=l(w),P=o(39),C=l(P),k=o(120),M=l(k),E=o(10),N=l(E),L=o(668),O=l(L),D=o(304),F=l(D),j=o(25),W=l(j),z=o(200),H=l(z),I=function(e){function t(){var e,o,l,n;(0,c.default)(this,t);for(var a=arguments.length,r=Array(a),i=0;i<a;i++)r[i]=arguments[i];return o=l=(0,y.default)(this,(e=t.__proto__||(0,d.default)(t)).call.apply(e,[this].concat(r))),l.state={style:{}},n=o,(0,y.default)(l,n)}return(0,v.default)(t,e),(0,h.default)(t,[{key:"componentWillUnmount",value:function(){clearTimeout(this.enterTimeout),clearTimeout(this.leaveTimeout)}},{key:"componentWillEnter",value:function(e){this.componentWillAppear(e)}},{key:"componentWillAppear",value:function(e){var t=this.context.muiTheme.baseTheme.spacing;this.setState({style:{opacity:1,transform:"translate(0, "+t.desktopKeylineIncrement+"px)"}}),this.enterTimeout=setTimeout(e,450)}},{key:"componentWillLeave",value:function(e){this.setState({style:{opacity:0,transform:"translate(0, 0)"}}),this.leaveTimeout=setTimeout(e,450)}},{key:"render",value:function(){var e=this.props,t=e.style,o=e.children,l=(0,s.default)(e,["style","children"]),n=this.context.muiTheme.prepareStyles;return T.default.createElement("div",(0,r.default)({},l,{style:n((0,b.default)({},this.state.style,t))}),o)}}]),t}(x.Component);I.contextTypes={muiTheme:x.PropTypes.object.isRequired};var R=function(e){function t(){var e,o,l,n;(0,c.default)(this,t);for(var a=arguments.length,r=Array(a),i=0;i<a;i++)r[i]=arguments[i];return o=l=(0,y.default)(this,(e=t.__proto__||(0,d.default)(t)).call.apply(e,[this].concat(r))),l.handleTouchTapOverlay=function(){l.requestClose(!1)},l.handleKeyUp=function(e){"esc"===(0,M.default)(e)&&l.requestClose(!1)},l.handleResize=function(){l.positionDialog()},n=o,(0,y.default)(l,n)}return(0,v.default)(t,e),(0,h.default)(t,[{key:"componentDidMount",value:function(){this.positionDialog()}},{key:"componentDidUpdate",value:function(){this.positionDialog()}},{key:"positionDialog",value:function(){var e=this.props,t=e.actions,o=e.autoDetectWindowHeight,l=e.autoScrollBodyContent,a=e.bodyStyle,r=e.open,i=e.repositionOnUpdate,s=e.title;if(r){var u=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,d=S.default.findDOMNode(this),f=S.default.findDOMNode(this.refs.dialogWindow),c=S.default.findDOMNode(this.refs.dialogContent),p=16;f.style.height="",c.style.height="";var h=f.offsetHeight,m=(u-h)/2-64;if(m<p&&(m=p),!i&&d.style.paddingTop||(d.style.paddingTop=m+"px"),o||l){var y=n(this.props,this.context);y.body=(0,b.default)(y.body,a);var _=u-128;s&&(_-=c.previousSibling.offsetHeight),T.default.Children.count(t)&&(_-=c.nextSibling.offsetHeight),c.style.maxHeight=_+"px"}}}},{key:"requestClose",value:function(e){!e&&this.props.modal||this.props.onRequestClose&&this.props.onRequestClose(!!e)}},{key:"render",value:function(){var e=this.props,t=e.actions,o=e.actionsContainerClassName,l=e.actionsContainerStyle,a=e.bodyClassName,r=e.bodyStyle,i=e.children,s=e.className,u=e.contentClassName,d=e.contentStyle,f=e.overlayClassName,c=e.overlayStyle,p=e.open,h=e.titleClassName,m=e.titleStyle,y=e.title,_=e.style,v=this.context.muiTheme.prepareStyles,g=n(this.props,this.context);g.root=(0,b.default)(g.root,_),g.content=(0,b.default)(g.content,d),g.body=(0,b.default)(g.body,r),g.actionsContainer=(0,b.default)(g.actionsContainer,l),g.overlay=(0,b.default)(g.overlay,c),g.title=(0,b.default)(g.title,m);var x=T.default.Children.count(t)>0&&T.default.createElement("div",{className:o,style:v(g.actionsContainer)},T.default.Children.toArray(t)),w=y;return T.default.isValidElement(y)?w=T.default.cloneElement(y,{className:y.props.className||h,style:v((0,b.default)(g.title,y.props.style))}):"string"==typeof y&&(w=T.default.createElement("h3",{className:h,style:v(g.title)},y)),T.default.createElement("div",{className:s,style:v(g.root)},p&&T.default.createElement(C.default,{target:"window",onKeyUp:this.handleKeyUp,onResize:this.handleResize}),T.default.createElement(H.default,{component:"div",ref:"dialogWindow",transitionAppear:!0,transitionAppearTimeout:450,transitionEnter:!0,transitionEnterTimeout:450},p&&T.default.createElement(I,{className:u,style:g.content},T.default.createElement(W.default,{zDepth:4},w,T.default.createElement("div",{ref:"dialogContent",className:a,style:v(g.body)},i),x))),T.default.createElement(O.default,{show:p,className:f,style:g.overlay,onTouchTap:this.handleTouchTapOverlay}))}}]),t}(x.Component);R.contextTypes={muiTheme:x.PropTypes.object.isRequired};var q=function(e){function t(){var e,o,l,n;(0,c.default)(this,t);for(var a=arguments.length,r=Array(a),i=0;i<a;i++)r[i]=arguments[i];return o=l=(0,y.default)(this,(e=t.__proto__||(0,d.default)(t)).call.apply(e,[this].concat(r))),l.renderLayer=function(){return T.default.createElement(R,l.props)},n=o,(0,y.default)(l,n)}return(0,v.default)(t,e),(0,h.default)(t,[{key:"render",value:function(){return T.default.createElement(F.default,{render:this.renderLayer,open:!0,useLayerForClickAway:!1})}}]),t}(x.Component);q.contextTypes={muiTheme:x.PropTypes.object.isRequired},q.defaultProps={autoDetectWindowHeight:!0,autoScrollBodyContent:!1,modal:!1,repositionOnUpdate:!0},t.default=q},647:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(646),a=l(n);t.default=a.default},665:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(5),a=l(n),r=o(2),i=l(r),s=o(3),u=l(s),d=o(7),f=l(d),c=o(6),p=l(c),h=o(1),m=null,y=0,_=function(e){function t(){var e,o,l,n;(0,i.default)(this,t);for(var r=arguments.length,s=Array(r),u=0;u<r;u++)s[u]=arguments[u];return o=l=(0,f.default)(this,(e=t.__proto__||(0,a.default)(t)).call.apply(e,[this].concat(s))),l.locked=!1,n=o,(0,f.default)(l,n)}return(0,p.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this.props.lock===!0&&this.preventScrolling()}},{key:"componentWillReceiveProps",value:function(e){this.props.lock!==e.lock&&(e.lock?this.preventScrolling():this.allowScrolling())}},{key:"componentWillUnmount",value:function(){
this.allowScrolling()}},{key:"preventScrolling",value:function(){if(this.locked!==!0&&(y+=1,this.locked=!0,1===y)){var e=document.getElementsByTagName("body")[0];m=e.style.overflow,e.style.overflow="hidden"}}},{key:"allowScrolling",value:function(){if(this.locked===!0&&(y-=1,this.locked=!1),0===y&&null!==m){var e=document.getElementsByTagName("body")[0];e.style.overflow=m||"",m=null}}},{key:"render",value:function(){return null}}]),t}(h.Component);t.default=_},668:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var o=t.muiTheme.overlay,l={root:{position:"fixed",height:"100%",width:"100%",top:0,left:"-100%",opacity:0,backgroundColor:o.backgroundColor,WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",willChange:"opacity",transform:"translateZ(0)",transition:e.transitionEnabled&&S.default.easeOut("0ms","left","400ms")+", "+S.default.easeOut("400ms","opacity")}};return e.show&&(0,b.default)(l.root,{left:0,opacity:1,transition:S.default.easeOut("0ms","left")+", "+S.default.easeOut("400ms","opacity")}),l}Object.defineProperty(t,"__esModule",{value:!0});var a=o(8),r=l(a),i=o(9),s=l(i),u=o(5),d=l(u),f=o(2),c=l(f),p=o(3),h=l(p),m=o(7),y=l(m),_=o(6),v=l(_),g=o(4),b=l(g),x=o(1),T=l(x),w=o(10),S=l(w),P=o(665),C=l(P),k=function(e){function t(){return(0,c.default)(this,t),(0,y.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,h.default)(t,[{key:"setOpacity",value:function(e){this.refs.overlay.style.opacity=e}},{key:"render",value:function(){var e=this.props,t=e.autoLockScrolling,o=e.show,l=e.style,a=(e.transitionEnabled,(0,s.default)(e,["autoLockScrolling","show","style","transitionEnabled"])),i=this.context.muiTheme.prepareStyles,u=n(this.props,this.context);return T.default.createElement("div",(0,r.default)({},a,{ref:"overlay",style:i((0,b.default)(u.root,l))}),t&&T.default.createElement(C.default,{lock:o}))}}]),t}(x.Component);k.defaultProps={autoLockScrolling:!0,style:{},transitionEnabled:!0},k.contextTypes={muiTheme:x.PropTypes.object.isRequired},t.default=k},676:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(1),a=l(n),r=o(54),i=l(r),s=o(49),u=l(s),d=function(e){return a.default.createElement(u.default,e,a.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}))};d=(0,i.default)(d),d.displayName="ContentAddCircle",d.muiName="SvgIcon",t.default=d}});