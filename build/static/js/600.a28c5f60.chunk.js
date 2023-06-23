"use strict";(self.webpackChunkemilus=self.webpackChunkemilus||[]).push([[600],{8470:function(e,a,n){var t=n(1413),s=n(4236).Z.div((function(e){var a=e.justifyContent,n=e.alignItems,s=e.flexDirection,i=e.gap,r=e.padding,l=e.margin,m={display:"flex",justifyContent:a,alignItems:n,gap:"number"===typeof i?"".concat(i,"px"):i};return s&&(m.flexDirection=s),r&&(m.padding=r),l&&(m.margin=l),(0,t.Z)({},m)}));a.Z=s},9600:function(e,a,n){n.r(a),n.d(a,{EditProfile:function(){return N},EditProfileFetch:function(){return w}});var t=n(5671),s=n(3144),i=n(136),r=n(9388),l=n(2791),m=n(6988),u=n(2962),o=n(5518),c=n(7354),d=n(7615),p=n(6106),h=n(914),x=n(376),f=n(9529),Z=n(6443),j=n(8470),v=n(7689),g=n(364),b=(n(8937),n(9305)),y=n(184),w=function(){var e=(0,g.v9)((function(e){return e.customers})).data,a=(0,v.TH)(),n=(0,v.s0)(),t=a.pathname.split("/").at(-1),s=e.filter((function(e){return String(e.id)===t}));return(0,y.jsx)(N,{navigate:n,newData:s})},N=function(e){(0,i.Z)(n,e);var a=(0,r.Z)(n);function n(){var e;(0,t.Z)(this,n);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(e=a.call.apply(a,[this].concat(i))).avatarEndpoint="https://www.mocky.io/v2/5cc8019d300000980a055e76",e.state={avatarUrl:"/img/avatars/thumb-6.jpg",name:e.props.newData[0].name,email:e.props.newData[0].email,userName:e.props.newData[0].username,phoneNumber:e.props.newData[0].phone,website:e.props.newData[0].website,status:!1},e}return(0,s.Z)(n,[{key:"getBase64",value:function(e,a){var n=new FileReader;n.addEventListener("load",(function(){return a(n.result)})),n.readAsDataURL(e)}},{key:"componentDidUpdate",value:function(e,a,n){!0===this.state.status&&this.props.navigate("".concat(b.sH,"/customers/list"))}},{key:"render",value:function(){var e=this,a=this.state,n=a.name,t=a.email,s=a.userName,i=a.phoneNumber,r=a.website,l=a.avatarUrl;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(j.Z,{alignItems:"center",mobileFlex:!1,className:"text-center text-md-left",children:[(0,y.jsx)(u.C,{size:90,src:l,icon:(0,y.jsx)(f.Z,{})}),(0,y.jsxs)("div",{className:"ml-3 mt-md-0 mt-3",children:[(0,y.jsx)(o.Z,{onChange:function(a){var n="updatable";"uploading"!==a.file.status?"done"===a.file.status&&(e.getBase64(a.file.originFileObj,(function(a){return e.setState({avatarUrl:a})})),m.ZP.success({content:"Uploaded!",key:n,duration:1.5})):m.ZP.loading({content:"Uploading...",key:n,duration:1e3})},showUploadList:!1,action:this.avatarEndpoint,children:(0,y.jsx)(c.ZP,{type:"primary",children:"Change Avatar"})}),(0,y.jsx)(c.ZP,{className:"ml-2",onClick:function(){e.setState({avatarUrl:""})},children:"Remove"})]})]}),(0,y.jsx)("div",{className:"mt-4",children:(0,y.jsx)(d.Z,{name:"basicInformation",layout:"vertical",initialValues:{name:n,email:t,username:s,phoneNumber:i,website:r},onFinish:function(a){var n="updatable";m.ZP.loading({content:"Updating...",key:n}),setTimeout((function(){e.setState({name:a.name,email:a.email,userName:a.userName,phoneNumber:a.phoneNumber,website:a.website,status:!0}),m.ZP.success({content:"Done!",key:n,duration:2})}),1500)},onFinishFailed:function(e){console.log("Failed:",e)},children:(0,y.jsx)(p.Z,{children:(0,y.jsxs)(h.Z,{xs:24,sm:24,md:24,lg:16,children:[(0,y.jsxs)(p.Z,{gutter:Z.KP,children:[(0,y.jsx)(h.Z,{xs:24,sm:24,md:12,children:(0,y.jsx)(d.Z.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your name!"}],children:(0,y.jsx)(x.Z,{})})}),(0,y.jsx)(h.Z,{xs:24,sm:24,md:12,children:(0,y.jsx)(d.Z.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:(0,y.jsx)(x.Z,{})})}),(0,y.jsx)(h.Z,{xs:24,sm:24,md:12,children:(0,y.jsx)(d.Z.Item,{label:"Email",name:"email",rules:[{required:!0,type:"email",message:"Please enter a valid email!"}],children:(0,y.jsx)(x.Z,{})})}),(0,y.jsx)(h.Z,{xs:24,sm:24,md:12,children:(0,y.jsx)(d.Z.Item,{label:"Phone Number",name:"phoneNumber",children:(0,y.jsx)(x.Z,{})})}),(0,y.jsx)(h.Z,{xs:24,sm:24,md:12,children:(0,y.jsx)(d.Z.Item,{label:"Website",name:"website",children:(0,y.jsx)(x.Z,{})})})]}),(0,y.jsx)(c.ZP,{type:"primary",htmlType:"submit",children:"Save Change"})]})})})})]})}}]),n}(l.Component);a.default=w}}]);
//# sourceMappingURL=600.a28c5f60.chunk.js.map