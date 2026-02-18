// How to style components with CSS(not including external frameworks or preprocessors)
//1. EXTERNAL
// 2. Modules
// 3. INLINE

function Button_InlineCSS() {

    //inline CSS styling
    const styles = {
        backgroundColor: "hsl(199, 90%, 50%)",
        color: "hsl(0, 0%, 100%)",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        padding: "10px 20px",
        margin: "5px",
    }

    return (
        <button style={styles}>Click Me</button>
    );
}

export default Button_InlineCSS;


//Inline CSS -> convienent and easy to understand -> prevents Global style conflicts because we are not working with class class names-> great for isolated components with minimal styling such as like/subscribe button -> increasingly less maintainable in large applications-> reduces the readability of your components especially if you have a lot of CSS properties -> great for responsive CSS 