import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const e=document.querySelector(".feedback-form"),s="feedback-form-state",m=i(s);m&&(e.elements.email.value=m.email||"",e.elements.message.value=m.message||"");e.addEventListener("input",o);e.addEventListener("submit",n);function o(a){const t={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()};r("userData",t)}function n(a){if(a.preventDefault(),e.elements.email.value===""||e.elements.message.value===""){alert("Please fill in both email and message fields");return}const t={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()};console.log(t),localStorage.removeItem(s),e.reset()}function r(a,t){const l=JSON.stringify(t);localStorage.setItem(a,l)}function i(a){const t=localStorage.getItem(a);try{return JSON.parse(t)}catch{return t}}
//# sourceMappingURL=commonHelpers2.js.map
