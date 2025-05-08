let inFrame

try {
    inFrame = window !== top
} catch (e) {
    inFrame = true
}

// Cloaking Code
if (!inFrame && !navigator.userAgent.includes("Firefox")) {
    const popup = open("about:blank", "_blank")
    if (!popup || popup.closed) {
        alert("To enhance your experience, allow popups and reload the page. By pressing 'Ok', you agree to our TOS and privacy policy.")
    } else {
        const doc = popup.document
        const iframe = doc.createElement("iframe")
        const style = iframe.style
        const link = doc.createElement("link")

        const name = localStorage.getItem("name") || "Home";
        const icon = localStorage.getItem("icon") || "https://ssl.gstatic.com/classroom/favicon.png";

        doc.title = name;
        link.rel = "icon";
        link.href = icon;

        iframe.src = location.href 
        style.position = "fixed"
        style.top = style.bottom = style.left = style.right = 0
        style.border = style.outline = "none"
        style.width = style.height = "100%"

        doc.head.appendChild(link);
        doc.body.appendChild(iframe)
        location.replace("https://www.google.com/search?q=math+help&rlz=1CAXXPU_enUS1087&oq=math+help&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIPCAEQABgKGIMBGLEDGIAEMgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgkIBRAAGAoYgAQyBwgGEAAYgAQyBggHEEUYQdIBCDIyMjhqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8&safe=active&ssui=on")
    }
}
