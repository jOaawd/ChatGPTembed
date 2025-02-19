    function createChatGPTpopup() {
        const chatContainer = document.createElement("div");
        document.body.appendChild(chatContainer);

        const chatHeader = document.createElement("div");
        chatContainer.appendChild(chatHeader);

        const title = document.createElement("span");
        title.innerText = "ChatGPT";
        chatHeader.appendChild(title);

        const closeButton = document.createElement("button");
        closeButton.innerText = "×";
        chatHeader.appendChild(closeButton);

        const iframe = document.createElement("iframe");
        iframe.src = "https://chat.openai.com";
        chatContainer.appendChild(iframe);

        Object.assign(chatContainer.style, {
            position: "fixed",
            top: "50px",
            left: "50px",
            width: "400px",
            height: "500px",
            background: "white",
            border: "2px solid #ccc",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            zIndex: "99999",
            resize: "both",
            overflow: "hidden"
        });

        Object.assign(chatHeader.style, {
            background: "#333",
            color: "white",
            padding: "10px",
            margin: "0",
            cursor: "grab",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "Arial, sans-serif",
            userSelect: "none",
            height: "25px"
        });

        Object.assign(closeButton.style, {
            background: "transparent",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: "25px",
            margin: "0",
            height: "25px",
            width: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%"
        });

        closeButton.addEventListener("mouseenter", () => {
            closeButton.style.background = "rgba(255, 255, 255, 0.5)";
        });

        closeButton.addEventListener("mouseleave", () => {
            closeButton.style.background = "transparent"; 
        });

        Object.assign(iframe.style, {
            flexGrow: "1",
            border: "none"
        });

       Object.assign(title.style, {
            fontSize: "15px",
            fontFamily: "'Arial', sans-serif",
            color: "white"
       });
      
        closeButton.onclick = () => document.body.removeChild(chatContainer);

        let isDragging = false, offsetX, offsetY;

        chatHeader.addEventListener("mousedown", (e) => {
            isDragging = true;
            offsetX = e.clientX - chatContainer.offsetLeft;
            offsetY = e.clientY - chatContainer.offsetTop;
            chatHeader.style.cursor = "grabbing";
        });

        document.addEventListener("mousemove", (e) => {
            if (!isDragging) return;
            chatContainer.style.left = `${e.clientX - offsetX}px`;
            chatContainer.style.top = `${e.clientY - offsetY}px`;
        });

        document.addEventListener("mouseup", () => {
            isDragging = false;
            chatHeader.style.cursor = "grab";
        });

        document.addEventListener("keydown", (e) => {
            if (e.ctrlKey && e.key.toLowerCase() === "e") {
                chatContainer.style.display = chatContainer.style.display === "none" ? "flex" : "none";
                e.preventDefault();
            }
        });
    }

    createChatGPTpopup();
