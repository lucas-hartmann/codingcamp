// Hier können Sie JavaScript-Code hinzufügen, um Interaktionen hinzuzufügen (falls erforderlich).
// Zum Beispiel Scroll-Events für den Parallax-Effekt.

// JavaScript-Code, um die Ladeanimation nach 2 Sekunden zu beenden
window.addEventListener('load', function() {
    // Warte 2 Sekunden, dann blende die Ladeanimation aus
    setTimeout(function() {
        var loadingContainer = document.querySelector('.loading-container');
        if (loadingContainer) {
            loadingContainer.style.display = 'none';
        }
    }, 2000); // 2000 Millisekunden = 2 Sekunden
});
