!function(e){function t(t){for(var r,a,i=t[0],d=t[1],l=t[2],u=0,p=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);for(c&&c(t);p.length;)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var d=n[i];0!==o[d]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={0:0},s=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window.webpackJsonp=window.webpackJsonp||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=d;s.push([31,1]),n()}({30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),s=n(7),a=n(6),i=n(8),d={addressBooks:[],addressBooksFiltered:[],selectedAddressBookIndex:null},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;return"ADD_ADDRESS_BOOK"===t.type?Object.assign({},e,{addressBooks:e.addressBooks.concat(t.payload)}):"SET_SELECTED_ADDRESS_BOOK_INDEX"===t.type?Object.assign({},e,{selectedAddressBookIndex:t.payload}):"SET_ADDRESS_BOOK_FILTERED"===t.type?Object.assign({},e,{addressBooksFiltered:[].concat(t.payload)}):"SET_SEARCH_QUERY"===t.type?Object.assign({},e,{setSearchQuery:t.payload}):e},c=Object(i.b)(l),u=n(13),p=n.n(u),h=n(16),f=n.n(h),m=n(1),v=n.n(m),y=n(2),k=n.n(y),E=n(3),g=n.n(E),B=n(4),b=n.n(B),S=n(5),O=n.n(S),x=function(e){return{type:"SET_SELECTED_ADDRESS_BOOK_INDEX",payload:e}},A=function(e){return{type:"SET_ADDRESS_BOOK_FILTERED",payload:e}},_="https://randomuser.me/api",D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=new URL("".concat(_).concat(e));return null!=n&&Object.keys(n).forEach((function(e){return r.searchParams.append(e,n[e])})),fetch(r,t).then((function(e){return e.ok?e.json():Promise.reject({status:e.status,statusText:e.statusText})})).catch((function(e){return console.log("Fetch exception",e)}))},j=function(e){function t(){return v()(this,t),g()(this,b()(t).apply(this,arguments))}return O()(t,e),k()(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"app-title"},o.a.createElement("h1",null,"Address Book App"))}}]),t}(r.Component),C=function(e){function t(){return v()(this,t),g()(this,b()(t).apply(this,arguments))}return O()(t,e),k()(t,[{key:"handleFocus",value:function(){this.props.setSelectedAddressBookIndex(this.props.index)}},{key:"render",value:function(){var e,t,n,r,s,a,i,d,l=this,c=this.props.item,u=this.props.selectedAddressBookIndex===this.props.index&&"active";return o.a.createElement("li",{tabIndex:"0",className:"address-item ".concat(u),onFocus:function(){return l.handleFocus()}},o.a.createElement("img",{src:null===(e=c.picture)||void 0===e?void 0:e.thumbnail,width:"82",alt:"".concat(null===(t=c.name)||void 0===t?void 0:t.first," ").concat(null===(n=c.name)||void 0===n?void 0:n.last)}),o.a.createElement("div",null,o.a.createElement("p",{className:"name"},o.a.createElement("strong",null,"".concat(null===(r=c.name)||void 0===r?void 0:r.first," ").concat(null===(s=c.name)||void 0===s?void 0:s.last))),o.a.createElement("p",null,"".concat(null===(a=c.location)||void 0===a?void 0:a.city,", ").concat(null===(i=c.location)||void 0===i?void 0:i.state,", ").concat(null===(d=c.location)||void 0===d?void 0:d.country))))}}]),t}(r.Component),F=Object(a.b)((function(e){return{selectedAddressBookIndex:e.selectedAddressBookIndex}}),(function(e){return{setSelectedAddressBookIndex:function(t){return e(x(t))}}}))(C),I=n(10),w=n.n(I),N=function(e){function t(e){var n;return v()(this,t),(n=g()(this,b()(t).call(this,e))).state={searchQuery:"",isFilterName:!0},n.handleChange=n.handleChange.bind(w()(n)),n}return O()(t,e),k()(t,[{key:"handleChange",value:function(e){var t=this,n=e.target.value;this.props.setSelectedAddressBookIndex(null),this.setState({searchQuery:n});var r=this.props.addressBooks.filter((function(e){var r,o,s=new RegExp(n,"gi"),a=!1;t.state.isFilterName&&(a=s.test("".concat(null===(r=e.name)||void 0===r?void 0:r.first," ").concat(null===(o=e.name)||void 0===o?void 0:o.last)));if(a)return e}));this.props.setAddressBookFiltered(r)}},{key:"render",value:function(){return o.a.createElement("div",{className:"address-search"},o.a.createElement("input",{type:"text",placeholder:"Search",value:this.state.searchQuery,onChange:this.handleChange}))}}]),t}(r.Component),T=Object(a.b)((function(e){return{addressBooks:e.addressBooks}}),(function(e){return{setSelectedAddressBookIndex:function(t){return e(x(t))},setAddressBookFiltered:function(t){return e(A(t))}}}))(N),L=function(e){function t(){return v()(this,t),g()(this,b()(t).apply(this,arguments))}return O()(t,e),k()(t,[{key:"addressBooksComponent",value:function(){return this.props.addressBooksFiltered.map((function(e,t){return o.a.createElement(F,{key:e.email,item:e,index:t})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"address-sidebar"},o.a.createElement(T,null),o.a.createElement("ul",{className:"address-list",tabIndex:"0"},this.props.isLoading?"Loading":this.addressBooksComponent()))}}]),t}(r.Component),R=Object(a.b)((function(e){return{addressBooksFiltered:e.addressBooksFiltered}}))(L),P=function(e){function t(){return v()(this,t),g()(this,b()(t).apply(this,arguments))}return O()(t,e),k()(t,[{key:"emptyStateComponent",value:function(){return o.a.createElement("div",{className:"empty-state"},o.a.createElement("img",{src:"../images/empty-address-book.svg",width:"200",alt:"empty state address book detail"}),o.a.createElement("p",null,"Please select a contact"))}},{key:"addressBookComponent",value:function(){null===(e=this.props.addressBook.location)||void 0===e||null===(t=e.coordinates)||void 0===t||t.latitude,null===(n=this.props.addressBook.location)||void 0===n||null===(r=n.coordinates)||void 0===r||r.longitude;var e,t,n,r,s,a,i,d="".concat(null===(s=this.props.addressBook.name)||void 0===s?void 0:s.first," ").concat(null===(a=this.props.addressBook.name)||void 0===a?void 0:a.last),l=null===(i=this.props.addressBook.picture)||void 0===i?void 0:i.large;return o.a.createElement("div",{className:"profile"},o.a.createElement("div",{className:"profile-head"},o.a.createElement("img",{src:l,alt:d,width:"128"}),o.a.createElement("h3",null,d)))}},{key:"render",value:function(){var e=this.props.addressBook?this.addressBookComponent():this.emptyStateComponent();return o.a.createElement("div",{className:"address-detail"},e)}}]),t}(r.Component),K=Object(a.b)((function(e){return{addressBook:null!==e.selectedAddressBookIndex?e.addressBooksFiltered[e.selectedAddressBookIndex]:null}}))(P),M=function(e){function t(e){var n;return v()(this,t),(n=g()(this,b()(t).call(this,e))).state={isLoading:!1,page:1},n}var n;return O()(t,e),k()(t,[{key:"componentDidMount",value:function(){this.handleGetData()}},{key:"handleGetData",value:(n=f()(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={page:this.state.page,results:50,seed:"yop",exc:"gender,login,dob,registered,phone,nat"},this.setState({isLoading:!0}),e.next=4,D("",{},t);case 4:n=e.sent,this.setState({isLoading:!1}),this.props.addAddressBook((null==n?void 0:n.results)||[]),this.props.setAddressBookFiltered((null==n?void 0:n.results)||[]);case 8:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){return o.a.createElement("main",{className:"container"},o.a.createElement(j,null),o.a.createElement(R,{isLoading:this.state.isLoading}),o.a.createElement(K,null))}}]),t}(r.Component),Q=Object(a.b)(null,(function(e){return{addAddressBook:function(t){return e({type:"ADD_ADDRESS_BOOK",payload:t})},setAddressBookFiltered:function(t){return e(A(t))}}}))(M),G=(n(30),document.getElementById("app"));G&&Object(s.render)(o.a.createElement(a.a,{store:c},o.a.createElement(Q,null)),G)}});