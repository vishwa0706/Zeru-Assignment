exports.getRewards = async (req, res, next) => {
  try {
    const { address } = req.params;
    res.json({
      walletAddress: address,
      totalRewardsReceivedStETH: "75.2",
      rewardsBreakdown: [
        {
          operatorAddress: "0xabc...",
          amountStETH: "60.0",
          timestamps: [1678972800, 1679059200]
        },
        {
          operatorAddress: "0xdef...",
          amountStETH: "15.2",
          timestamps: [1679145600]
        }
      ]
    });
  } catch (err) {
    res.status(500).json({ error: err.message || "Internal server error" });
  }
};