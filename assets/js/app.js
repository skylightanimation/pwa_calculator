let base_url = "https://localhost:8056/pwa_caculator"

styles = {
    android: "./assets/css/android.css",
        windows : "./assets/css/windows.css"
}

function loaded() {
    if (navigator.userAgent.indexOf("Android") != -1) {
        this.activate = this.styles.android;
    } else if (navigator.userAgent.indexOf("Windows") != -1) {
        this.activate = this.styles.windows;
    }

    this.user_agent = navigator.userAgent;
}