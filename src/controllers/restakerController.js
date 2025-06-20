exports.getRestakers = async (req, res, next) => {
  try {
    res.json([
      {
        userAddress: "0x123...",
        amountRestakedStETH: "100.5",
        targetAVSOperatorAddress: "0xabc..."
      },
      {
        userAddress: "0x456...",
        amountRestakedStETH: "50.2",
        targetAVSOperatorAddress: "0xdef..."
      }
    ]);
  } catch (err) {
    res.status(500).json({ error: err.message || "Internal server error" });
  }
};