const PieRing = ({ radius, stroke, data, gapWidth = 2 }) => {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const totalValue = data.reduce((sum, { value }) => sum + value, 0);

  let accumulatedValue = 0;

  return (
    <svg height={radius * 2} width={radius * 2}>
      {data.map((segment, index) => {
        const segmentCircumference =
          (segment.value / totalValue) * circumference;
        const adjustedSegmentCircumference = segmentCircumference - gapWidth;
        const strokeDasharray = `${adjustedSegmentCircumference} ${
          circumference - adjustedSegmentCircumference
        }`;
        const strokeDashoffset =
          circumference - (accumulatedValue / totalValue) * circumference;

        accumulatedValue += segment.value;

        return (
          <circle
            key={index}
            stroke={segment.color}
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={strokeDasharray}
            style={{ strokeDashoffset }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        );
      })}
    </svg>
  );
};

export default PieRing;
