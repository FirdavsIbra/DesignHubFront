"use strict";(self.webpackChunkQuizApplication=self.webpackChunkQuizApplication||[]).push([[115],{6115:(_,m,s)=>{s.r(m),s.d(m,{AuthModule:()=>c});var h=s(6895),p=s(6773),n=s(433),t=s(8256);class u{constructor(o){this.router=o}register(o,e){const r=new f;r.email=o,r.password=e,console.log(r);const i=JSON.parse(localStorage.getItem("users")||"[]");if(console.log(i),i.some(d=>d.email===r.email))return console.log("User with this email already exists"),void alert("User with this email already exists");i.push(r),localStorage.setItem("users",JSON.stringify(i)),this.router.navigateByUrl("/main")}login(o,e){JSON.parse(localStorage.getItem("users")||"[]").some(i=>i.email===o)?this.router.navigateByUrl("/main"):alert("User not found!")}logout(){this.router.navigateByUrl("/auth-page/auth")}}u.\u0275fac=function(o){return new(o||u)(t.LFG(p.F0))},u.\u0275prov=t.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"});class f{}class g{constructor(o,e){this.authService=o,this.formBuilder=e}ngOnInit(){this.initLoginForm()}initLoginForm(){this.loginForm=new n.cw({email:new n.NI("",[n.kI.required]),password:new n.NI("",[n.kI.required])}),this.registerForm=new n.cw({name:new n.NI("",[n.kI.required]),email:new n.NI("",[n.kI.required]),password:new n.NI("",[n.kI.required]),confirmPassword:new n.NI("",[n.kI.required])})}switchForm(o,e){e.preventDefault();const r=document.querySelectorAll("form"),i=document.querySelector(`form.${o}`);r.forEach(d=>{d.classList.remove("active")}),i.classList.add("active")}onRegister(){this.authService.register(this.registerForm.controls.email.value,this.registerForm.controls.password.value)}onLogin(){this.authService.login(this.loginForm.controls.email.value,this.loginForm.controls.password.value)}}g.\u0275fac=function(o){return new(o||g)(t.Y36(u),t.Y36(n.qu))},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-auth-page"]],decls:56,vars:2,consts:[[1,"body"],[1,"container"],[1,"login","active",3,"formGroup","submit"],[1,"title"],[1,"form-group"],["for","email"],[1,"input-group"],["type","email","placeholder","Email address","formControlName","email"],[1,"bx","bx-envelope"],["for","password"],["type","password","pattern",".{8,}","formControlName","password","placeholder","Your password"],[1,"bx","bx-lock-alt"],[1,"help-text"],["type","submit",1,"btn-submit"],["href","#",3,"click"],[1,"register",3,"formGroup","submit"],["for","name"],["type","text","placeholder","Name","formControlName","name"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"form",2),t.NdJ("submit",function(){return e.onLogin()}),t.TgZ(3,"h2",3),t._uU(4,"Login with your account"),t.qZA(),t.TgZ(5,"div",4)(6,"label",5),t._uU(7,"Email"),t.qZA(),t.TgZ(8,"div",6),t._UZ(9,"input",7)(10,"i",8),t.qZA()(),t.TgZ(11,"div",4)(12,"label",9),t._uU(13,"Password"),t.qZA(),t.TgZ(14,"div",6),t._UZ(15,"input",10)(16,"i",11),t.qZA(),t.TgZ(17,"span",12),t._uU(18,"At least 8 characters"),t.qZA()(),t.TgZ(19,"button",13),t._uU(20,"Login"),t.qZA(),t.TgZ(21,"a"),t._uU(22,"Forgot password?"),t.qZA(),t.TgZ(23,"p"),t._uU(24,"I don't have an account. "),t.TgZ(25,"a",14),t.NdJ("click",function(i){return e.switchForm("register",i)}),t._uU(26,"Register"),t.qZA()()(),t.TgZ(27,"form",15),t.NdJ("submit",function(){return e.onRegister()}),t.TgZ(28,"h2",3),t._uU(29,"Register your account"),t.qZA(),t.TgZ(30,"div",4)(31,"label",16),t._uU(32,"Name"),t.qZA(),t.TgZ(33,"div",6),t._UZ(34,"input",17)(35,"i",8),t.qZA()(),t.TgZ(36,"div",4)(37,"label",5),t._uU(38,"Email"),t.qZA(),t.TgZ(39,"div",6),t._UZ(40,"input",7)(41,"i",8),t.qZA()(),t.TgZ(42,"div",4)(43,"label",9),t._uU(44,"Password"),t.qZA(),t.TgZ(45,"div",6),t._UZ(46,"input",10)(47,"i",11),t.qZA(),t.TgZ(48,"span",12),t._uU(49,"At least 8 characters"),t.qZA()(),t.TgZ(50,"button",13),t._uU(51,"Register"),t.qZA(),t.TgZ(52,"p"),t._uU(53,"I already have an account. "),t.TgZ(54,"a",14),t.NdJ("click",function(i){return e.switchForm("login",i)}),t._uU(55,"Login"),t.qZA()()()()()),2&o&&(t.xp6(2),t.Q6J("formGroup",e.loginForm),t.xp6(25),t.Q6J("formGroup",e.registerForm))},dependencies:[n._Y,n.Fj,n.JJ,n.JL,n.c5,n.sg,n.u],styles:["*[_ngcontent-%COMP%]{--grey: #F4F2FF;--dark-grey: #B7B7B7;--green: #23AE00;--light-green: #BDFFAC;--red: #FE2727;--light-red: #FFD2D2;--blue: #277FFE;--light-blue: #B6C6FF;--dark-blue: #1368E3;--bs: #AECFFF;--text: #9B9B9B}a[_ngcontent-%COMP%]{color:var(--blue);transition:all .3s ease;text-decoration:none}a[_ngcontent-%COMP%]:hover{color:var(--dark-blue)}.body[_ngcontent-%COMP%]{background:var(--light-blue);display:flex;justify-content:center;align-items:center;min-height:100vh;padding:0 16px}.container[_ngcontent-%COMP%]{max-width:500px;width:100%;position:relative}form[_ngcontent-%COMP%]{width:100%;padding:28px;border-radius:12px;background:#fff;position:absolute;top:50%;transform:translateY(-50%) scale(.8);opacity:0;z-index:100;transition:all .3s ease;transition-delay:0s}form.active[_ngcontent-%COMP%]{transform:translateY(-50%);opacity:1;z-index:200;transition-delay:.3s}.title[_ngcontent-%COMP%]{font-size:24px;font-weight:600;margin-bottom:20px}.form-group[_ngcontent-%COMP%]{margin-bottom:14px}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:inline-block;margin-bottom:4px}.input-group[_ngcontent-%COMP%]{width:100%;position:relative}.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:12px 40px 12px 20px;outline:none;border-radius:6px;border:1px solid var(--dark-grey);width:100%;transition:all .3s ease}.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown){border-color:var(--blue);background:var(--grey)}.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + i[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) + i[_ngcontent-%COMP%]{color:var(--blue)}.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus:valid{box-shadow:0 0 0 4px var(--light-green)}.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid:not(:placeholder-shown){border-color:var(--green)}.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid:not(:placeholder-shown) + i[_ngcontent-%COMP%]{color:var(--green)}.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:invalid:not(:placeholder-shown){border-color:var(--red)}.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:invalid:not(:placeholder-shown) + i[_ngcontent-%COMP%]{color:var(--red)}.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus:invalid{box-shadow:0 0 0 4px var(--light-red)}.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus:placeholder-shown{box-shadow:0 0 0 4px var(--bs)}.input-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);right:20px;color:var(--text);pointer-events:none;transition:all .3s ease}.form-group[_ngcontent-%COMP%]   .help-text[_ngcontent-%COMP%]{font-size:12px;color:var(--text)}.btn-submit[_ngcontent-%COMP%]{padding:12px 0;display:block;width:100%;color:#fff;border-radius:6px;cursor:pointer;transition:all .3s ease;border:none;font-weight:500;background:var(--blue);margin-bottom:20px}.btn-submit[_ngcontent-%COMP%]:hover{background:var(--dark-blue)}"]});const v=[{path:"",component:g}];class l{}l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[p.Bz.forChild(v),p.Bz]});class c{}c.\u0275fac=function(o){return new(o||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[h.ez,l,n.u5,n.UX]})}}]);