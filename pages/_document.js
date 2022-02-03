import Document, { Html, Head, Main, NextScript } from 'next/document'

const themeInitializerScript = `
    (function () {
        ${setInitialColorMode.toString()}
        setInitialColorMode();
    })();
     `;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head />

        <body>
            {/* <script>
                dangerouslySetInnerHTML=
                {{
                    __html: themeInitializerScript,
                }}
            </script> */}
            <div id="modal-root"></div>

            <script dangerouslySetInnerHTML={{ __html: themeInitializerScript }} />

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// const themeInitializerScript = `(fuction(){
//     ${setInitialColorMode.toString()}
//     setInitialColorMode();
// })`;

// const themeInitializerScript = `
//     (function () {
//           document.body.dataset.theme = window.localStorage.getItem("theme") || "light";
//     })();
//      `;
function setInitialColorMode(){
    function getInitialColorMode() {
        const persistedPreferenceMode = window.localStorage.getItem('theme');
        const hasPersistedPreference = typeof persistedPreferenceMode === 'string';

        if(hasPersistedPreference) {
            return persistedPreferenceMode
        }

        const preference = window.matchMedia("(preference-color-scheme: dark)");
        const hasMediaQueryPreference = typeof preference.matches == "boolean";

        if (hasMediaQueryPreference) {
            return preference.matches ? "dark" : "light"
        }

        return "light"
    }

    const currentColorMode = getInitialColorMode();

    const element = document.documentElement;
    element.classList.add('light')
    element.style.setProperty('--initial-color-mode', currentColorMode);

    if (currentColorMode === 'dark'){
        document.documentElement.setAttribute('data-theme', 'dark')
    }
}

export default MyDocument