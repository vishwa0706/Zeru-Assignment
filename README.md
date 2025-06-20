# Zeru Restaking Info API

## Overview

This project is a backend REST API that aggregates and exposes EigenLayer restaking data. It is designed to provide endpoints for user restaking information, validator metadata, and reward insights.

> **Note:** Due to the unavailability of a public EigenLayer or Lido subgraph, this API currently returns mock/example data for demonstration purposes. The code is structured to easily integrate real data sources if/when they become available.

## Tech Stack

- Node.js (Express)
- MongoDB (setup ready, not required for mock data)
- Axios (for API/subgraph requests, ready for future use)

## Endpoints

### 1. GET `/restakers`

Returns a list of restakers with their restaked amount and target validator.

**Example Response:**
```json
[
  {
    "userAddress": "0x123...",
    "amountRestakedStETH": "100.5",
    "targetAVSOperatorAddress": "0xabc..."
  },
  {
    "userAddress": "0x456...",
    "amountRestakedStETH": "50.2",
    "targetAVSOperatorAddress": "0xdef..."
  }
]
```
