

    function copyText(button) {
      const container = button.closest(".translator-box");
      const textArea = container.querySelector(".myText");
      const copiedMsg = container.querySelector(".copiedMsg");

      navigator.clipboard.writeText(textArea.value)
        .then(() => {
          alert("تم نسخ النص.");
          copiedMsg.style.display = "inline";
          setTimeout(() => {
            copiedMsg.style.display = "none";
          }, 1000);
        })
        .catch(() => {
          alert("حدث خطأ أثناء النسخ.");
        });
    }



