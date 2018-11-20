<template>
  <router-view/>
</template>

<script>
export default {
  name: "App",
  mounted() {
    document.addEventListener(
      "DOMContentLoaded",
      function(e) {
        document.getElementsByTagName("html")[0].style.fontSize =
          window.innerWidth / 10 + "px";
      },
      false
    );
  }
};
</script>

<style lang="scss">
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
html,
body {
  height: 100%;
}

button.default {
  font-size: 0.4rem;
  border: none;
  outline: none;
  height: 1rem;
  line-height: 1rem;
  display: block;
  margin: auto;
  background-color: RGBA(26, 188, 156, 1);
  border-radius: 0.5rem;
  color: #fff;
  a {
    color: #fff;
    text-decoration: none;
    display: block;
  }
}

.group {
  font-size: 0;
  margin-top: 0.5rem;
  label {
    font-size: 0.37rem;
    display: block;
  }
  .gruop-input {
    height: 1.16rem;
    line-height: 1.16rem;
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid RGBA(234, 234, 234, 1);
    font-size: 0.32rem;
  }
  &.submit {
    padding: 0 0.65rem;
    margin-top: 1.33rem;
    button.default {
      width: 100%;
    }
  }
}

.el-select.gruop-input input {
  border: none;
  padding: 0px;
  font-size: 0.32rem;
  &::placeholder {
    color: RGBA(153, 153, 153, 1);
  }
}
</style>
