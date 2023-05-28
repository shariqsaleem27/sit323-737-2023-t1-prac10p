const http = require('http');

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  // Read the shape and parameters from the URL query parameters
  const shape = url.searchParams.get('shape');
  const length = parseFloat(url.searchParams.get('length'));
  const width = parseFloat(url.searchParams.get('width'));
  const radius = parseFloat(url.searchParams.get('radius'));

  // Calculate and return the perimeter based on the shape
  let perimeter;
  if (shape === "rectangle") {
    perimeter = 2 * (length + width);
  } else if (shape === "square") {
    perimeter = 4 * length;
  } else if (shape === "circle") {
    perimeter = 2 * Math.PI * radius;
  } else {
    res.statusCode = 400;
    res.end("Invalid shape provided.");
    return;
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Perimeter of the ${shape}: ${perimeter}`);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
