exports.getValidators = async (req, res, next) => {
  try {
    res.json([
      {
        operatorAddress: "0xabc...",
        totalDelegatedStakeStETH: "5000",
        slashHistory: [
          {
            timestamp: 1678886400,
            amountStETH: "50",
            reason: "Misconduct X"
          }
        ],
        status: "active"
      },
      {
        operatorAddress: "0xdef...",
        totalDelegatedStakeStETH: "3000",
        slashHistory: [],
        status: "active"
      }
    ]);
  } catch (err) {
    res.status(500).json({ error: err.message || "Internal server error" });
  }
};