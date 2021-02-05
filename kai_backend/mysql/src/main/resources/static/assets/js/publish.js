// Title editor
const title = document.getElementById("title");
let titleTextarea = null;

const editStart = () => {
  // Edit mode
  titleTextarea = document.createElement("textarea");
  titleTextarea.className = "edit";
  titleTextarea.style.fontSize = "30px";
  titleTextarea.value = title.innerHTML;
  title.replaceWith(titleTextarea);
  titleTextarea.focus();

  // Preview mode
  titleTextarea.addEventListener("keydown", previewText);
  titleTextarea.addEventListener("blur", editEnd);
};

title.addEventListener("click", editStart);

const previewText = (event) => {
  if (event.key == "Enter") {
    titleTextarea.blur();
  }
};

const editEnd = () => {
  title.innerHTML = titleTextarea.value;
  titleTextarea.replaceWith(title);
};

// Body editor
const elements = document.querySelectorAll(".editable");
const editor = new MediumEditor(elements, {
  buttonLabels: "fontawesome",
  autoLink: true,

  placeholder: {
    text: "Share your story...",
  },

  toolbar: {
    buttons: [
      "bold",
      "italic",
      "anchor",
      {
        name: "h1",
        action: "append-h2",
        aria: "header type 1",
        tagNames: ["h2"],
        contentDefault: "<b>H1</b>",
        classList: ["custom-class-h1"],
        attrs: {
          "data-custom-attr": "attr-value-h1",
        },
      },
      {
        name: "h2",
        action: "append-h3",
        aria: "header type 2",
        tagNames: ["h3"],
        contentDefault: "<b>H2</b>",
        classList: ["custom-class-h2"],
        attrs: {
          "data-custom-attr": "attr-value-h2",
        },
      },
      "quote",
    ],
  },
});
