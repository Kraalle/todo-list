(()=>{"use strict";const t=class{constructor(t,e,o,i){this._title=t,this._description=e,this._dueDate=o,this._priority=i,this._completed=!1}get title(){return this._title}get description(){return this._description}get dueDate(){return this._dueDate}get priority(){return this._priority}get completed(){return this._completed}set title(t){this._title=t}set description(t){this._description=t}set dueDate(t){this._dueDate=t}set priority(t){this._priority=t}},e=function(t){const e=document.querySelector(".table-body").insertRow(0),o=e.insertCell(0),i=e.insertCell(1),r=e.insertCell(2),n=e.insertCell(3),s=e.insertCell(4);o.textContent=t.title,i.textContent=t.description,r.textContent=t.dueDate,n.textContent=t.priority,s.textContent=t.completed},o=new t("Walking","Going outside for a walk","02/04/2024","High",["eat","sleep","program","repeat"]),i=new t("Walking","Going outside for a walk","02/04/2024","High",["eat","sleep","program","repeat"]),r=new t("Walking","Going outside for a walk","02/04/2024","High",["eat","sleep","program","repeat"]);console.log(o),console.log(i),console.log(r),console.log("testing"),e(o),e(i),e(r),document.querySelector(".add-todo-button").addEventListener("click",(()=>function(t){const e=document.querySelector("#todoForm");e.style.display="block",e.style.display="flex",e.style.flexDirection="column"}())),document.querySelector("#submit-todo").addEventListener("click",(()=>{document.querySelector("#todoForm").style.display="none"}))})();