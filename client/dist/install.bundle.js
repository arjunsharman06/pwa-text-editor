(()=>{const t=document.getElementById("buttonInstall");window.addEventListener("beforeinstallprompt",(e=>{e.preventDefault(),t.style.visibility="visible"})),t.addEventListener("click",(async()=>{t.setAttribute("disabled",!0),t.textContent="Installed!"})),window.addEventListener("appinstalled",(t=>{console.log("👍","appinstalled",t)}))})();