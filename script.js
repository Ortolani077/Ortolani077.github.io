document.addEventListener("DOMContentLoaded", function () {
  const buttonSkills = document.querySelector(".glow-on-hover");
  const buttonAboutMe = document.querySelector(".glow-on-hover2");
  const collapseWhoWeAre = document.getElementById("collapseWhoWeAre");
  const collapseOurServices = document.getElementById("collapseOurServices");

  buttonSkills.addEventListener("click", function () {
    collapseWhoWeAre.classList.toggle("show");
    collapseOurServices.classList.remove("show");
  });

  buttonAboutMe.addEventListener("click", function () {
    collapseOurServices.classList.toggle("show");
    collapseWhoWeAre.classList.remove("show");
  });

  document.addEventListener("click", function (event) {
    const targetCollapse = event.target.closest('.custom-collapse');
    const isOutsideCollapse = !targetCollapse && !event.target.classList.contains('glow-on-hover') && !event.target.classList.contains('glow-on-hover2');

    if (isOutsideCollapse) {
      collapseWhoWeAre.classList.remove("show");
      collapseOurServices.classList.remove("show");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const buttonSkills = document.querySelector(".glow-on-hover");
  const buttonAboutMe = document.querySelector(".glow-on-hover2");
  const collapseWhoWeAre = document.getElementById("collapseWhoWeAre");
  const collapseOurServices = document.getElementById("collapseOurServices");

  buttonSkills.addEventListener("click", function () {
      collapseWhoWeAre.classList.toggle("show");
      collapseOurServices.classList.remove("show");
  });

  buttonAboutMe.addEventListener("click", function () {
      collapseOurServices.classList.toggle("show");
      collapseWhoWeAre.classList.remove("show");
  });

  document.addEventListener("click", function (event) {
      const targetCollapse = event.target.closest('.custom-collapse');
      const isOutsideCollapse = !targetCollapse && !event.target.classList.contains('glow-on-hover') && !event.target.classList.contains('glow-on-hover2');

      if (isOutsideCollapse) {
          collapseWhoWeAre.classList.remove("show");
          collapseOurServices.classList.remove("show");
      }
  });
});
