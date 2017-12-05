function aoc(number) {
  let i = 1;
  let ring = 0;

  while (i * i < number) {
    i = i + 2;
    ring = ring + 1;
  }

  const bottomRight = i * i;
  const edge = i - 1;
  const halfEdge = Math.floor(i / 2);
  const ringMiddles = [
    bottomRight - halfEdge,
    bottomRight - edge - halfEdge,
    bottomRight - 2 * edge - halfEdge,
    bottomRight - 3 * edge - halfEdge,
  ];
  const distancesToEdgeMids = ringMiddles.map(c => number - c).map(Math.abs);
  const distance = Math.min(...distancesToEdgeMids);
  return distance + ring;
}

module.exports = aoc;
