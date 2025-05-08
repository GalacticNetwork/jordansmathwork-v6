$(document).ready(function() {
  $('.select-box').on('click', function(event) {
      event.stopPropagation();
      $(this).find('.options').toggle();
  });

  $('#presetOptions').on('click', 'li', function(event) {
      event.stopPropagation();
      var selectedOption = $(this).text();
      $('#presets').text(selectedOption);
      $('.options').hide();
  });

  $(document).on('click', function(event) {
      if (!$(event.target).closest('.select-box').length) {
          $('.options').hide();
      }
  });

  const customApply = document.getElementById("customApply");
  const reset = document.getElementById("reset");
  const titleInput = document.getElementById("title");
  const faviconInput = document.getElementById("favicon");

  function applySettings(title, favicon) {
      localStorage.setItem("Title", title || "");
      localStorage.setItem("Favicon", favicon || "/assets/images/jmw.png");
      location.reload();
  }

  if (customApply) {
      customApply.addEventListener("click", () => {
          if (titleInput && faviconInput) {
              const title = titleInput.value ? titleInput.value.trim() : "";
              const favicon = faviconInput.value ? faviconInput.value.trim() : "";
              applySettings(title, favicon);
          } else {
              console.error("Title or Favicon input element not found.");
          }
      });
  }

  if (reset) {
      reset.addEventListener("click", () => {
          applySettings();
      });
  }

  const presetButtons = {
      "google": { title: "Google", favicon: "https://raw.githubusercontent.com/GalacticNetwork/jordansmathwork-v5/main/assets/images/cloaks/gsearch.ico" },
      "googleClassroom": { title: "Home", favicon: "https://ssl.gstatic.com/classroom/favicon.png" },
      "bing": { title: "Bing", favicon: "https://bing.com/favicon.ico" },
      "nearpod": { title: "Nearpod", favicon: "https://nearpod.com/favicon.ico" },
      "powerschool": { title: "PowerSchool Sign In", favicon: "https://powerschool.com/favicon.ico" }
  };

  for (const buttonId in presetButtons) {
      if (presetButtons.hasOwnProperty(buttonId)) {
          const button = document.getElementById(buttonId);
          if (button) {
              button.addEventListener("click", () => {
                  const { title, favicon } = presetButtons[buttonId];
                  applySettings(title, favicon);
              });
          }
      }
  }
});