document.addEventListener("DOMContentLoaded", (event) => {
  const contextMenu = document.createElement("div");
  contextMenu.id = "customContextMenu";
  contextMenu.style.position = "absolute";
  contextMenu.style.display = "none";
  contextMenu.style.backgroundColor = "var(--navbar, #111);";
  contextMenu.style.boxShadow = "var(--txtcolor);";
  contextMenu.style.zIndex = "1000";

  const aboutBlank = document.createElement("div");
  aboutBlank.innerHTML = '<i class="fa-solid fa-eye-slash"></i> History Hider';
  aboutBlank.style.padding = "8px";
  aboutBlank.style.cursor = "pointer";
  aboutBlank.style.color = "var(--txtcolor)";
  aboutBlank.onclick = function () {
    aboutBlankFunction();
    contextMenu.style.display = "none";
  };

  const buffedBlank = document.createElement("div");
  buffedBlank.innerHTML =
    '<i class="fa-solid fa-eye-slash"></i> Buffed History Hider';
  buffedBlank.style.padding = "8px";
  buffedBlank.style.cursor = "pointer";
  buffedBlank.style.color = "var(--txtcolor)";
  buffedBlank.onclick = function () {
    buffedAB();
    contextMenu.style.display = "none";
  };

  const panic = document.createElement("div");
  panic.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Panic Button';
  panic.style.padding = "8px";
  panic.style.cursor = "pointer";
  panic.style.color = "var(--txtcolor)";
  panic.onclick = function () {
    panicFunction();
    contextMenu.style.display = "none";
  };

  const inspect = document.createElement("div");
  inspect.innerHTML = '<i class="fas fa-code"></i> Unblocked Inspect Element';
  inspect.style.padding = "8px";
  inspect.style.cursor = "pointer";
  inspect.style.color = "var(--txtcolor)";
  inspect.onclick = function () {
    inspectFunction();
    contextMenu.style.display = "none";
  };

  const chat = document.createElement("div");
  chat.innerHTML = '<i class="fa-solid fa-comments"></i> Enable Chat';
  chat.style.padding = "8px";
  chat.style.cursor = "pointer";
  chat.style.color = "var(--txtcolor)";
  chat.onclick = function () {
    chatFunction();
    contextMenu.style.display = "none";
  };

  const viewAllSettings = document.createElement("div");
  viewAllSettings.innerHTML =
    '<i class="fa-solid fa-users-gear"></i> View All Settings';
  viewAllSettings.style.padding = "8px";
  viewAllSettings.style.cursor = "pointer";
  viewAllSettings.style.color = "var(--txtcolor)";
  viewAllSettings.onclick = function () {
    viewAllSettingsFunction();
    contextMenu.style.display = "none";
  };

  contextMenu.appendChild(aboutBlank);
  contextMenu.appendChild(buffedBlank);
  contextMenu.appendChild(panic);
  contextMenu.appendChild(inspect);
  contextMenu.appendChild(chat);
  contextMenu.appendChild(viewAllSettings);
  document.body.appendChild(contextMenu);

  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    contextMenu.style.display = "block";
    contextMenu.style.left = `${event.pageX}px`;
    contextMenu.style.top = `${event.pageY}px`;
  });

  document.addEventListener("click", () => {
    contextMenu.style.display = "none";
  });

  function aboutBlankFunction() {
    let inFrame;
    try {
      inFrame = window !== top;
    } catch (e) {
      inFrame = true;
    }
    if (!inFrame && !navigator.userAgent.includes("Firefox")) {
      const popup = open("about:blank", "_blank");
      if (!popup || popup.closed) {
        alert("Please allow popups and redirects.");
      } else {
        const doc = popup.document;
        const iframe = doc.createElement("iframe");
        const style = iframe.style;
        const link = doc.createElement("link");
        const name = localStorage.getItem("name") || "Home";
        const icon =
          localStorage.getItem("icon") ||
          "https://ssl.gstatic.com/classroom/favicon.png";
        doc.title = name;
        link.rel = "icon";
        link.href = icon;
        iframe.src = location.href;
        style.position = "fixed";
        style.top = style.bottom = style.left = style.right = 0;
        style.border = style.outline = "none";
        style.width = style.height = "100%";
        doc.head.appendChild(link);
        doc.body.appendChild(iframe);
        location.replace("https://classroom.google.com");
      }
    }
  }

  function panicFunction() {
    location.replace("https://www.google.com");
  }

  function viewAllSettingsFunction() {
    location.href = "/geography/";
  }

  function buffedAB() {
    var myWindow1 = window.open(
      "",
      "myWindow1",
      "scrollbars=1,height=" +
        screen.availHeight +
        ",width=" +
        screen.availWidth
    );
    myWindow1.document.write(
      '<!DOCTYPE html>\n\
    <title>Classes</title>   <link rel="icon" href="https://ssl.gstatic.com/classroom/favicon.png"/><link rel="shortcut icon" href="https://ssl.gstatic.com/classroom/favicon.png"/>\n\
    <p><iframe src="' +
        "https://" +
        window.location.host +
        '"frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%">\n\
    <script>\n\
    alert("");\n\
    <\x2fscript>'
    );
    location.replace("https://classroom.google.com");
  }

  function inspectFunction() {
    (function () {
      var a = document.createElement("script");
      a.src = "https://cdn.jsdelivr.net/gh/GalacticNetwork/Avo/avo.js";
      document.body.appendChild(a);
    })();
  }
});

function chatFunction() {
  alert('Use the dash (-) key to toggle chat on and off!');

  const iframe = document.createElement('iframe');
  iframe.style.position = 'fixed';
  iframe.style.top = '10px';
  iframe.style.left = '10px';
  iframe.style.width = '35%';
  iframe.style.height = '91%';
  iframe.style.border = '1px solid var(--txtcolor)';
  iframe.style.zIndex = '1000';
  iframe.style.display = 'none';
  iframe.src = '/science/3/';
  document.body.appendChild(iframe);

  function toggleIframe() {
    iframe.style.display = iframe.style.display === 'none' ? 'block' : 'none';
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === '-') {
      toggleIframe();
    }
  });
}
