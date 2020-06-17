(function () {
    amp.plugin('pip', function (options) {
        var player = this;
        var button = document.createElement("button");
        button.setAttribute("class", "vjs-pip-control vjs-control vjs-button outline-enabled-control");
        button.setAttribute("type", "button");
        button.setAttribute("aria-live", "off");
        button.setAttribute("style", "cursor:pointer");
        button.setAttribute("title", "PiP");
        button.setAttribute("data-ol-has-click-handler", "");
        var span = document.createElement("span");
        span.setAttribute("class", "vjs-control-text");
        span.insertAdjacentText("beforeend", "PiP");
        button.appendChild(span);
        player.ready(function () {
            var rightControls = getElementsByClassName("vjs-control-bar", "amp-controlbaricons-right");
            rightControls.appendChild(button);
        });
        var video = getElementsByClassName("vjs-player", "vjs-tech");
        // Safari
        if (video.webkitSupportsPresentationMode && typeof video.webkitSetPresentationMode === "function") {
            // Toggle PiP when the user clicks the button.
            button.addEventListener("click", function (event) {
                video.webkitSetPresentationMode(video.webkitPresentationMode === "picture-in-picture" ? "inline" : "picture-in-picture");
            });
        } else {
            // Chorme
            button.addEventListener("click", async function () {
                button.disabled = true;
                try {
                    if (video !== document.pictureInPictureElement)
                        await video.requestPictureInPicture();
                    else
                        await document.exitPictureInPicture();
                } catch (error) {
                    consol.error(`error: ${error}`);
                } finally {
                    button.disabled = false;
                }
            });
        }
        function getElementsByClassName(className, childClass) {
            var elements = document.getElementById("azuremediaplayer").getElementsByClassName(className);
            var matches = [];

            function traverse(node) {
                if (node && node.childNodes) {
                    for (var i = 0; i < node.childNodes.length; i++) {
                        if (node.childNodes[i].childNodes.length > 0) {
                            traverse(node.childNodes[i]);
                        }

                        if (node.childNodes[i].getAttribute && node.childNodes[i].getAttribute('class')) {
                            if (node.childNodes[i].getAttribute('class').split(" ").indexOf(childClass) >= 0) {
                                matches.push(node.childNodes[i]);
                            }
                        }
                    }
                }
            }
            if (!childClass)
                return elements && elements.length > 0 ? elements[0] : null;

            if (elements && elements.length > 0) {
                for (var i = 0; i < elements.length; i++)
                    traverse(elements[i]);
            }
            return matches && matches.length > 0 ? matches[0] : null;
        }
    });
}).call(this);