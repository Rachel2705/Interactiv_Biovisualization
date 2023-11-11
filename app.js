// app.js

// Sample genetic sequence data
const geneticSequence = "ATGCGAATACGTAGCTACGTAGCGTAGCTAGCTACGTA";

// Set up D3.js visualization
const svg = d3.select("#sequence-visualization")
  .append("svg")
  .attr("width", "100%")
  .attr("height", 100);

// Create rectangles to represent each base in the sequence
const bases = svg.selectAll("rect")
  .data(geneticSequence)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 20)
  .attr("y", 20)
  .attr("width", 20)
  .attr("height", 60)
  .attr("fill", d => {
    // You can customize colors based on the base (A, T, G, C)
    switch (d) {
      case "A":
        return "green";
      case "T":
        return "red";
      case "G":
        return "blue";
      case "C":
        return "yellow";
      default:
        return "gray";
    }
  });

// Add labels for each base
const labels = svg.selectAll("text")
  .data(geneticSequence)
  .enter()
  .append("text")
  .text(d => d)
  .attr("x", (d, i) => i * 20 + 10)
  .attr("y", 90)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "middle");  // Change this line
