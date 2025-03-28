$(document).ready(function () {
  $("#profile__ripple").ripples({
    resolution: 512,
    dropRadius: 20, // Added value (typical range is 10-30)
    perturbance: 0.04, // Recommended to add this property
  });
});
