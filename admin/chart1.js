const ctx = document.getElementById("barchart");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Income",
        data: [80, 85, 78, 60, 70, 98, 76, 97, 85, 85, 80, 95],
        backgroundColor: ["white", "blue", "purple"],
        borderColor: "#f5f5f5",

        borderWidth: 1,
      },
    ],
  },
});

// ===== Doughnut Chart =====
const ctx2 = document.getElementById("satisfactionChart");

new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: ["Satisfied", "Neutral", "Unsatisfied"],
    datasets: [
      {
        label: "Satisfaction %",
        data: [75, 15, 10],
        backgroundColor: ["#2a9d8f", "#f4a261", "#e76f51"],
        borderColor: "#0d0d0d",
        borderWidth: 2,
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Overall Satisfaction Rate",
        color: "white",
        font: { size: 16, weight: "bold" },
      },
      legend: {
        position: "bottom",
        labels: { color: "white" },
      },
    },
    cutout: "65%",
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  },
});
